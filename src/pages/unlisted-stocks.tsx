import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { NextSeo } from "next-seo";

const stocks = [
  {
    name: "Polymatech Unlisted Shares",
    logo: "/polymatech-logo.png", // Place this image in public/
    price: 118,
    change: 62,
    changePercent: 110.71,
    days: 15,
  },
  {
    name: "Example Unlisted Shares",
    logo: "/example-logo.png", // Place this image in public/
    price: 210,
    change: 10,
    changePercent: 5.0,
    days: 7,
  },
];

function StockCard({ stock }: { stock: (typeof stocks)[0] }) {
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
    {/* // */}
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
