import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import NCDsTable from "./NCDsTable";
import UnlistedSharesTable from "./UnlistedSharesTable";
import InsuranceProductsTable from "./InsuranceProductsTable";

// Sample data - replace with actual data from your backend
const ncdData = [
  {
    stockName: "Tata Capital",
    priceRange: "₹1,000 - ₹1,100",
    minQuantity: 100,
  },
  { stockName: "HDFC Bank", priceRange: "₹950 - ₹1,050", minQuantity: 50 },
  { stockName: "ICICI Bank", priceRange: "₹900 - ₹1,000", minQuantity: 75 },
];

const unlistedSharesData = [
  {
    stockName: "TechStart",
    price: "₹2,500",
    minQuantity: 10,
    sector: "Technology",
  },
  {
    stockName: "GreenEnergy",
    price: "₹1,800",
    minQuantity: 20,
    sector: "Energy",
  },
  {
    stockName: "HealthPlus",
    price: "₹3,200",
    minQuantity: 15,
    sector: "Healthcare",
  },
];

const insuranceData = [
  {
    planName: "Life Shield",
    coverageAmount: "₹50,00,000",
    premiumAmount: "₹5,000",
    term: 20,
    insurer: "LIC",
  },
  {
    planName: "Health Guard",
    coverageAmount: "₹10,00,000",
    premiumAmount: "₹2,500",
    term: 5,
    insurer: "HDFC Life",
  },
  {
    planName: "Wealth Plus",
    coverageAmount: "₹1,00,00,000",
    premiumAmount: "₹10,000",
    term: 30,
    insurer: "ICICI Prudential",
  },
];

const InvestmentDashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const renderContent = () => {
    switch (activeFilter) {
      case "ncd":
        return <NCDsTable />;
      case "unlisted":
        return <UnlistedSharesTable />;
      case "insurance":
        return <InsuranceProductsTable />;
      default:
        return (
          <Stack spacing={8}>
            <NCDsTable />
            <UnlistedSharesTable />
            <InsuranceProductsTable />
          </Stack>
        );
    }
  };

  return (
    <Container maxW="7xl" py={8}>
      <Stack spacing={8}>
        {/* Header */}
        <Flex justify="space-between" align="center">
          <Heading size="lg">Investment Dashboard</Heading>
          <Stack direction="row" spacing={4}>
            <Button
              colorScheme={activeFilter === "all" ? "blue" : "gray"}
              onClick={() => setActiveFilter("all")}
            >
              All
            </Button>
            <Button
              colorScheme={activeFilter === "ncd" ? "blue" : "gray"}
              onClick={() => setActiveFilter("ncd")}
            >
              NCD
            </Button>
            <Button
              colorScheme={activeFilter === "unlisted" ? "blue" : "gray"}
              onClick={() => setActiveFilter("unlisted")}
            >
              Unlisted
            </Button>
            <Button
              colorScheme={activeFilter === "insurance" ? "blue" : "gray"}
              onClick={() => setActiveFilter("insurance")}
            >
              Insurance
            </Button>
          </Stack>
        </Flex>

        {/* Content */}
        {renderContent()}
      </Stack>
    </Container>
  );
};

export default InvestmentDashboard;
