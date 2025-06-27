"use client";
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
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NCDsTable from "./NCDsTable";
import UnlistedSharesTable from "./UnlistedSharesTable";
import InsuranceProductsTable from "./InsuranceProductsTable";

// Sample data - replace with actual data from your backend

const InvestmentDashboard = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  // Set initial filter based on URL parameter
  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setActiveFilter(type);
    }
  }, [searchParams]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    // Update URL without page reload
    if (filter === "all") {
      router.push("/investments");
    } else {
      router.push(`/investments?type=${filter}`);
    }
  };

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
        {/* Header */} <Heading size="lg">Investment Dashboard</Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          w="100%"
          gap={{
            md: 4,
          }}
        >
          <Flex wrap="wrap" gap={2}>
            <Button
              colorScheme={activeFilter === "all" ? "blue" : "gray"}
              onClick={() => handleFilterChange("all")}
            >
              All
            </Button>
            <Button
              colorScheme={activeFilter === "ncd" ? "blue" : "gray"}
              onClick={() => handleFilterChange("ncd")}
            >
              NCD
            </Button>
            <Button
              colorScheme={activeFilter === "unlisted" ? "blue" : "gray"}
              onClick={() => handleFilterChange("unlisted")}
            >
              Unlisted
            </Button>
            <Button
              colorScheme={activeFilter === "insurance" ? "blue" : "gray"}
              onClick={() => handleFilterChange("insurance")}
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
