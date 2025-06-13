import { useEffect, useState } from "react";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import DataTable from "./DataTable";
import supabase from "../../supabase";

interface NCD {
  id: string;
  stock_name: string;
  price_range: string;
  min_quantity: number;
  created_at: string;
}

const NCDsTable = () => {
  const [ncds, setNCDs] = useState<NCD[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const columns = [
    { header: "Stock Name", accessor: "stock_name" },
    { header: "Price Range", accessor: "price_range" },
    { header: "Minimum Quantity", accessor: "min_quantity", isNumeric: true },
  ];

  useEffect(() => {
    const fetchNCDs = async () => {
      try {
        const { data, error } = await supabase
          .from("ncds")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setNCDs(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchNCDs();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading NCDs...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500">Error: {error}</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Heading size="lg" mb={6}>
        Non-Convertible Debentures (NCDs)
      </Heading>
      <DataTable
        columns={columns}
        data={ncds}
        itemsPerPage={10}
        searchable={true}
        filterable={true}
      />
    </Box>
  );
};

export default NCDsTable;
