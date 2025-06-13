import {
  Box,
  Button,
  Input,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Column {
  header: string;
  accessor: string;
  isNumeric?: boolean;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  itemsPerPage?: number;
  searchable?: boolean;
  filterable?: boolean;
  onRowClick?: (row: any) => void;
}

const DataTable = ({
  columns,
  data,
  itemsPerPage = 10,
  searchable = true,
  filterable = true,
  onRowClick,
}: DataTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  useEffect(() => {
    let result = [...data];

    // Apply search
    if (searchTerm) {
      result = result.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredData(result);
  }, [data, searchTerm, sortConfig]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleSort = (key: string) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <Box
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
    >
      {/* Search and Filter Bar */}
      {(searchable || filterable) && (
        <Flex p={4} gap={4} borderBottom="1px" borderColor={borderColor}>
          {searchable && (
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              maxW="300px"
            />
          )}
        </Flex>
      )}

      {/* Table */}
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th
                  key={column.accessor}
                  onClick={() => handleSort(column.accessor)}
                  cursor="pointer"
                  isNumeric={column.isNumeric}
                >
                  {column.header}
                  {sortConfig?.key === column.accessor && (
                    <Text as="span" ml={2}>
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </Text>
                  )}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {currentData.map((row, index) => (
              <Tr
                key={index}
                onClick={() => onRowClick?.(row)}
                cursor={onRowClick ? "pointer" : "default"}
                _hover={{ bg: hoverBg }}
              >
                {columns.map((column) => (
                  <Td key={column.accessor} isNumeric={column.isNumeric}>
                    {row[column.accessor]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Pagination */}
      <Flex
        justify="space-between"
        align="center"
        p={4}
        borderTop="1px"
        borderColor={borderColor}
      >
        <Text>
          Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)}{" "}
          of {filteredData.length} entries
        </Text>
        <Flex gap={2}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            isDisabled={currentPage === 1}
            size="sm"
          >
            Previous
          </Button>
          <Button
            rightIcon={<ChevronRightIcon />}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            isDisabled={currentPage === totalPages}
            size="sm"
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DataTable;
