import { useEffect, useState } from "react";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import DataTable from "./DataTable";
import supabase from "../../supabase";

interface UnlistedShare {
  id: number;
  name: string;
  price: number;
  range: number;
}

const UnlistedSharesTable = () => {
  const [shares, setShares] = useState<UnlistedShare[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Price (₹)", accessor: "price", isNumeric: true },
    { header: "Range", accessor: "range", isNumeric: true },
  ];

  useEffect(() => {
    const fetchShares = async () => {
      try {
        const { data, error } = await supabase
          .from("unlisted_shares")
          .select("id, name, price, range");

        if (error) throw error;
        setShares(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchShares();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading Unlisted Shares...</Text>
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
    <Box w="100%" overflowX="auto">
      <Heading size="lg" mb={6}>
        Unlisted Shares
      </Heading>
      <DataTable
        columns={columns}
        data={shares}
        itemsPerPage={10}
        searchable={true}
        filterable={true}
      />
    </Box>
  );
};

export default UnlistedSharesTable;
