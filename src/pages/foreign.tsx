import React, { ReactNode, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Spinner,
} from "@chakra-ui/react";
import supabase from "../../supabase";
import { Heading } from "@chakra-ui/react";

const FiiDiiDataPage = () => {


  const [data, setData] = useState<
    {
      PROVISONAL: ReactNode;
      sell: string;
      buy: string;
    }[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState<{ date: string }[]>([]);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("FiiDiiData") // Replace this with your table name
        .select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data as never[]);
      }
      setLoading(false);
    };
    fetchData();
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={6}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        FII DII Data
      </Heading>
      <Heading as="h3" size="md" textAlign="center" mb={6}>
        As on {date.length > 0 ? date[0].date : ""}
      </Heading>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>PROVISIONAL</Th>
            <Th>Buy (Crores)</Th>
            <Th>Sell (Crores)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.PROVISONAL}</Td>
              <Td>{row.buy}</Td>
              <Td>{row.sell || "N/A"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default FiiDiiDataPage;
