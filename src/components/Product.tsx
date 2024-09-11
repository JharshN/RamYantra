"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  {
    id: 1,
    title: "Equity",
    text: "Expert assistance in equity investments, tailored to your financial goals.",
  },
  {
    id: 2,
    title: "Insurance",
    text: "Comprehensive insurance solutions to protect your assets and future.",
  },
  {
    id: 3,
    title: "Bonds & NCDs",
    text: "Secure your future with bonds, offering stable returns and lower risk.",
  },
  {
    id: 4,
    title: "PMS/AIF",
    text: "Portfolio Management Services and Alternative Investment Funds for high-net-worth individuals.",
  },
  {
    id: 5,
    title: "Currency",
    text: "Trade in currencies with expert guidance to navigate the foreign exchange market.",
  },
  {
    id: 6,
    title: "Commodities",
    text: "Trade in commodities with the best strategies for maximum returns.",
  },
  {
    id: 7,
    title: "Mutual Funds",
    text: "Diversify your investment portfolio with professionally managed mutual funds.",
  },
  {
    id: 8,
    title: "Loans & FD",
    text: "Get the best options for loans and fixed deposits, ensuring stable financial growth.",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Our Products & Services</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          At Ramyantra Financial Services, we provide a wide range of financial
          products and services designed to meet your needs. Whether you're
          looking to invest, insure, or grow your wealth, we've got you covered.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
