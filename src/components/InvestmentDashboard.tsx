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
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          w="100%"
          gap={4}
        >
          <Heading size="lg">Investment Dashboard</Heading>
          <Flex wrap="wrap" gap={2}>
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
          </Flex>
        </Flex>

        {/* Content */}
        {renderContent()}
      </Stack>
    </Container>
  );
};

export default InvestmentDashboard;
