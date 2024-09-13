import React from "react";
import { Box, Heading, Text, Flex, Button, Link, Container } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  return (
        <Container maxW={{
    base: "container.",
    md: "container.md",
    lg: "container.lg",
        }} py={{
    base: "2",
    md: "12",
    lg: "16",
        }}>

    <Box p={10}>
      {/* Header Section */}
      <Flex direction="column" alignItems="center" textAlign="center" mb={8}>
        <Heading as="h1" size="2xl" color="blue.600">
          About Us
        </Heading>
        <Text fontSize="lg" mt={4} >
          Welcome to Ramyantara Financial Services, where we provide one of the
          best financial services in Surat.
        </Text>
      </Flex>

      {/* Company Details Section */}
      <Box  boxShadow="lg" p={8} rounded="lg">
        <Text fontSize="xl" color="blue.500" mb={4}>
          <b>Ramyantara</b> is a Sanskrit word Which means{" "}
          <b>pleasantly diversified</b>
        </Text>
        <Text fontSize="lg"  mb={2}>
          - Equity, Insurance, Bonds, PMS/AIF, Currency, Commodities, Mutual
          Funds, Loans, and Fixed Deposits.
        </Text>
        <Text fontSize="lg"  mb={2}>
          - Located at 316, Times Galaxy, Near Cinezza Multiplex, Nr. D Mart,
          Ugat Canal Road, Jahangirpura 395005.
        </Text>
        <Text fontSize="lg"  mb={2}>
          - With us, your financial future is in safe hands. Our team of
          professionals, led by Tushar Makwana, ensures that you receive
          top-quality service.
        </Text>
      </Box>

      {/* WhatsApp Contact Button */}
      <Flex justify="center" mt={10}>
        <Button
          leftIcon={<FaWhatsapp />}
          colorScheme="whatsapp"
          size="lg"
          as={Link}
          href="https://wa.me/9638387371"
          isExternal
        >
          Contact us on WhatsApp
        </Button>
      </Flex>
    </Box>
  </Container>
  );
};

export default AboutUs;
