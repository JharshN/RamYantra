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
  const [date, setDate] = useState<{ date: string }[]>([]);
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

  useEffect(() => {
    const fetchDate = async () => {
      const { data, error } = await supabase.from("date").select(" date"); // Replace 'Indices' with your actual table name
      if (error) {
        console.error("Error fetching Indices data:", error);
      } else {
        setDate(data);
      }
      // setLoading(false);
    };

    fetchDate();
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
<Heading as="h3" size="md" textAlign="center" mb={6}>As on {date.length > 0 ? date[0].date : ""}</Heading>
        <Table variant="striped">
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
