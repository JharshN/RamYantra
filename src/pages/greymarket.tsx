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

export default function IPOData() {
  const [ipoData, setIpoData] = useState<{ id: number; Name: string; date: string; Price: number; Lot: number; GMP: number; }[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchIPO = async () => {
      const { data, error } = await supabase.from("IPOs").select("*"); // Replace 'IPO' with your actual table name
      if (error) {
        console.error("Error fetching IPO data:", error);
      } else {
        setIpoData(data);
      }
      setLoading(false);
    };

    fetchIPO();
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
    <Container maxW="container.lg" py={6} overflowY="auto">
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        IPO Data
      </Heading>

      <Table variant="striped">
        <Thead>
          <Tr>
            {/* <Th>ID</Th> */}
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Price</Th>
            <Th>Lot</Th>
            <Th>GMP</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ipoData.map((ipo) => (
            <Tr key={ipo.id}>
              {/* <Td>{ipo.id}</Td> */}
              <Td>{ipo.Name}</Td>
              <Td>{ipo.date}</Td>
              <Td>{ipo.Price}</Td>
              <Td>{ipo.Lot}</Td>
              <Td>{ipo.GMP}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
