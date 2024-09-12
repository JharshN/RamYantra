
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function AIFsAndPMSBlog() {
  return (
    <Container maxW={"5xl"} py={12}>
      {/* Blog Header */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
          AIFs and PMS: Investment Options for HNIs
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }}>
          A detailed guide on AIFs and PMS for High-Net-Worth Individuals (HNIs)
        </Text>
      </VStack>

      {/* Image Placeholder */}
      <Box mt={8}>
        <Image
          src="https://images.unsplash.com/photo-1642388755321-d6665f3ac3b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXklMjBmcmVlfGVufDB8fDB8fHww" // Replace with actual image URL
          alt="AIFs and PMS"
          borderRadius="lg"
          objectFit="cover"
        />
      </Box>

      {/* Blog Content */}
      <Stack spacing={6} mt={10}>
        <Text fontSize="lg" lineHeight={1.8}>
          Both Alternative Investment Funds (AIFs) and Portfolio Management
          Services (PMS) are great investment options for High-Net-Worth
          Individuals (HNIs) to diversify their portfolios and earn higher
          long-term returns on their capital, albeit at higher risk.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          As a part of our offering, we provide access to various AIFs and PMS
          avenues. We believe that a careful allocation in them by investors can
          expand their investment horizon and provide the right diversification,
          thereby reducing overall portfolio volatility.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          At ramyantara Consultancy Services, we have tie-ups with various
          product developers, offering solutions suited to meet our clients'
          needs. The ticket size for PMS starts at ₹50 Lakhs, while AIFs have a
          minimum investment threshold of ₹1 Crore.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          By investing in PMS and AIFs, investors can benefit from a
          well-diversified portfolio that targets long-term growth and reduces
          the impact of short-term market volatility.
        </Text>
      </Stack>
    </Container>
  );
}
