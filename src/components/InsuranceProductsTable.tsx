import { useEffect, useState } from "react";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import DataTable from "./DataTable";
import supabase from "../../supabase";

interface InsuranceProduct {
  id: string;
  plan_name: string;
  coverage_amount: number;
  premium_amount: number;
  term_years: number;
  insurer: string;
  created_at: string;
}

const InsuranceProductsTable = () => {
  const [products, setProducts] = useState<InsuranceProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const columns = [
    { header: "Plan Name", accessor: "plan_name" },
    {
      header: "Coverage Amount",
      accessor: "coverage_amount",
      isNumeric: true,
      cell: (value: number) => formatCurrency(value),
    },
    {
      header: "Premium Amount",
      accessor: "premium_amount",
      isNumeric: true,
      cell: (value: number) => formatCurrency(value),
    },
    { header: "Term (Years)", accessor: "term_years", isNumeric: true },
    { header: "Insurer", accessor: "insurer" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("insurance_products")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading Insurance Products...</Text>
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
        Insurance Products
      </Heading>
      <DataTable
        columns={columns}
        data={products}
        itemsPerPage={10}
        searchable={true}
        filterable={true}
      />
    </Box>
  );
};

export default InsuranceProductsTable;
