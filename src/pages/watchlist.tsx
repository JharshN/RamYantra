import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  Spinner,
  Text,
} from "@chakra-ui/react";
import supabase from "../../supabase";

export default function StockData() {
  const [stocks, setStocks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchStocks = async () => {
      const { data, error } = await supabase.from("WATCHLIST").select("*"); // Replace 'stocks' with your actual table name
      if (error) {
        console.error("Error fetching stock data:", error);
      } else {
        setStocks(data);
      }
      setLoading(false);
    };

    fetchStocks();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading data...</Text>
      </Box>
    );
  }

  return (
    <Container maxW="container.lg" py={6}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Preffered Stocks
      </Heading>

      <Table variant="striped">
        <Thead >
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Levels</Th>
            <Th>Support</Th>
            <Th>Duration</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stocks.map((stock) => (
            <Tr key={stock.id}>
              <Td>{stock.id}</Td>
              <Td>{stock.NAME}</Td>
              <Td>{stock.LEVELS}</Td>
              <Td>{stock.SUPPORT}</Td>
              <Td>{stock.DURATION}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
