import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import supabase from "../../supabase";

type Stock = {
  name: string;
  logo: string;
  price: number;
  change: number;
  changePercent: number;
  days: number;
};

function StockCard({ stock }: { stock: Stock }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      p={5}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      mb={4}
      maxW="400px"
    >
      <Box mr={4} minW="60px">
        <Image src={stock.logo} alt={stock.name} width={60} height={30} />
      </Box>
      <Box>
        <Heading size="md">{stock.name}</Heading>
        <Box fontSize="xl" fontWeight="bold">
          ₹{stock.price}
        </Box>
        <Box color="green.500" fontSize="sm">
          (+{stock.change} ) ({stock.changePercent}%) {stock.days}D
        </Box>
      </Box>
    </Box>
  );
}

export default function UnlistedStocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const { data, error } = await supabase
          .from("unlisted_shares")
          .select("*");

        if (error) {
          console.error("Error fetching stocks:", error);
        } else {
          setStocks(data || []);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) {
    return (
      <Container maxW="4xl" py={10} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>Loading stocks...</Text>
      </Container>
    );
  }

  return (
    <>
      <NextSeo
        title="Unlisted Stocks"
        description="View unlisted stocks data"
      />
      <Container maxW="4xl" py={10}>
        <Heading mb={8}>Unlisted Stocks</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {stocks.map((stock, idx) => (
            <StockCard stock={stock} key={idx} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
