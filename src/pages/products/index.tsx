import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Equity Investment Services",
    description:
      "Invest in equities and stocks to build your portfolio with expert guidance.",
    imageUrl:
      "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    productsUrl: "/products/equity-investment", // Replace with actual products URL
  },
  {
    id: 2,
    name: "Insurance Solutions",
    description: "Comprehensive insurance plans to secure your future.",
    imageUrl:
      "https://images.unsplash.com/photo-1468254095679-bbcba94a7066?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    productsUrl: "/products/insurance-solutions", // Replace with actual products URL
  },
  {
    id: 3,
    name: "Bond Investments",
    description: "Safe and secure bond investments for steady returns.",
    imageUrl:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    productsUrl: "/products/bond-investments", // Replace with actual products URL
  },
  {
    id: 4,
    name: "PMS/AIF Services",
    description:
      "Portfolio management services (PMS) and Alternative Investment Funds (AIF) for diversified investments.",
    imageUrl:
      "https://images.unsplash.com/photo-1642388755321-d6665f3ac3b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXklMjBmcmVlfGVufDB8fDB8fHww", // Replace with actual image
    productsUrl: "/products/pms-aif-services", // Replace with actual products URL
  },
  {
    id: 5,
    name: "Currency Trading",
    description:
      "Currency trading solutions to help you capitalize on foreign exchange markets.",
    imageUrl:
      "https://images.unsplash.com/photo-1468254095679-bbcba94a7066?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    productsUrl: "/products/currency-trading", // Replace with actual products URL
  },
  {
    id: 6,
    name: "Commodities Trading",
    description:
      "Invest in commodities like gold, oil, and more to diversify your portfolio.",
    imageUrl:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    productsUrl: "/products/commodities-trading", // Replace with actual products URL
  },
  {
    id: 7,
    name: "Mutual Fund Services",
    description:
      "Explore a wide range of mutual funds tailored to meet your investment goals.",
    imageUrl:
      "https://images.unsplash.com/photo-1504607798333-52a30db54a5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    productsUrl: "/products/mutual-funds", // Replace with actual products URL
  },
  {
    id: 8,
    name: "Loans & Fixed Deposits",
    description:
      "Get the best loan offers and secure fixed deposit options for stable returns.",
    imageUrl:
      "https://images.unsplash.com/photo-1564052269004-c0878d752c92?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    productsUrl: "/products/loans-fd", // Replace with actual products URL
  },
];

export default function ProductPage() {
  return (
    <Box p={4}>
      <Container maxW={"6xl"}>
        <Heading
          as="h1"
          mb={8}
          textAlign="center"
          fontSize="3xl"
          color="blue.600"
        >
          Our Products
        </Heading>

        {/* Grid Layout for Products */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {products.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                borderRadius="lg"
                mb={4}
                objectFit="cover"
              />
              <Stack spacing={2}>
                <Heading fontSize="xl">{product.name}</Heading>
                <Text >{product.description}</Text>
                <Link href={product.productsUrl} isExternal>
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    _hover={{ bg: "blue.600", color: "white" }}
                  >
                    Read products
                  </Button>
                </Link>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
