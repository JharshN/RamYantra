import { useEffect, useState } from "react";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import DataTable from "./DataTable";
import supabase from "../../supabase";

interface UnlistedShare {
  id: string;
  stock_name: string;
  price: number;
  min_quantity: number;
  sector: string;
  description: string;
  created_at: string;
}

const UnlistedSharesTable = () => {
  const [shares, setShares] = useState<UnlistedShare[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const columns = [
    { header: "Stock Name", accessor: "stock_name" },
    { header: "Price (₹)", accessor: "price", isNumeric: true },
    { header: "Minimum Quantity", accessor: "min_quantity", isNumeric: true },
    { header: "Sector", accessor: "sector" },
    { header: "Description", accessor: "description" },
  ];

  useEffect(() => {
    const fetchShares = async () => {
      try {
        const { data, error } = await supabase
          .from("unlisted_shares")
          .select("*")
          .order("created_at", { ascending: false });

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
    <Box>
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
