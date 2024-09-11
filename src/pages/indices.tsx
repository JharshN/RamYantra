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

export default function IndicesData() {
  const [indicesData, setIndicesData] = useState<
    { id: number; Indices: string; Closing: number; plusMinus: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchIndices = async () => {
      const { data, error } = await supabase.from("marketUpdate").select("*"); // Replace 'Indices' with your actual table name
      if (error) {
        console.error("Error fetching Indices data:", error);
      } else {
        setIndicesData(data);
      }
      setLoading(false);
    };

    fetchIndices();
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
    <>
      <Container maxW="container.lg" py={6} overflowY="auto">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Indices Data
        </Heading>

        <Table variant="simple">
          <Thead>
            <Tr>
              {/* <Th>ID</Th> */}
              <Th>Indices</Th>
              <Th>Closing</Th>
              <Th>Plus/Minus</Th>
            </Tr>
          </Thead>
          <Tbody>
            {indicesData.map((indices) => (
              <Tr key={indices.id}>
                {/* <Td>{indices.id}</Td> */}
                <Td>{indices.Indices}</Td>
                <Td>{indices.Closing}</Td>
                <Td>{indices.plusMinus}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}
