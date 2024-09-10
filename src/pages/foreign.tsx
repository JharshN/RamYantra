import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import supabase from "../../supabase";

export default function SimpleTable() {
  const [data, setData] = useState<{ id: number; FiiBuy?: number; FiiSell?: number; DiiBuy?: number; DiiSell?: number; NetBuy?: number; NetSell?: number; }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: tableData, error } = await supabase
        .from("FiiDiiData") // Replace with your actual table name
        .select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(tableData);
      }
    }

    fetchData();
  }, []);

  return (
    <Box width="100%" maxW="800px" mx="auto" py={10}>
      <Flex justifyContent="center" mb={5}>
        <Heading as="h3" size="lg">
          FIIs & DIIs Table
        </Heading>
      </Flex>

      <Table variant="striped" colorScheme="orange">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>FiiBuy (₹ Cr)</Th>
            <Th>FiiSell (₹ Cr)</Th>
            <Th>DiiBuy (₹ Cr)</Th>
            <Th>DiiSell (₹ Cr)</Th>
            <Th>NetBuy (₹ Cr)</Th>
            <Th>NetSell (₹ Cr)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              <Td>{row.id}</Td>
              <Td>{row.FiiBuy ? row.FiiBuy : "-"}</Td>
              <Td>{row.FiiSell ? row.FiiSell : "-"}</Td>
              <Td>{row.DiiBuy ? row.DiiBuy : "-"}</Td>
              <Td>{row.DiiSell ? row.DiiSell : "-"}</Td>
              <Td>{row.NetBuy ? row.NetBuy : "-"}</Td>
              <Td>{row.NetSell ? row.NetSell : "-"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
