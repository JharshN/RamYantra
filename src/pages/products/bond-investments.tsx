import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Stack,
  Divider,
  Button,
} from "@chakra-ui/react";

export default function BondAndNCDInvestmentBlog() {
  return (
    <Container maxW={"6xl"} py={12}>
      {/* Blog Header */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
          Bonds & NCD Investments: A Guide to Steady Income and Security
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "lg", md: "xl" }}>
          Discover how investing in bonds and NCDs can provide stable returns,
          safety, and diversification in your investment portfolio.
        </Text>
      </VStack>

      {/* Image Placeholder */}
      <Box mt={8}>
        <Image
          src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
          alt="Bond Investments"
          borderRadius="lg"
          objectFit="cover"
        />
      </Box>

      {/* Bond & NCD Investment Introduction */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          What Are Bond & NCD Investments?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Bond and NCD investments involve lending money to a government,
          corporation, or other entity in exchange for periodic interest
          payments and the return of the principal amount at maturity. Bonds are
          considered a conservative investment, while NCDs offer higher interest
          rates but may carry more risk.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Why Invest in Bonds & NCDs */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Why Invest in Bonds & NCDs?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Investing in bonds and NCDs offers several advantages, particularly
          for those seeking stable income and diversified risk. Here are some
          reasons to consider these investments:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. Steady Income:</strong> Bonds and NCDs provide regular
          interest payments, known as coupon payments, which can offer a
          reliable source of income.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Higher Returns with NCDs:</strong> NCDs generally offer
          higher interest rates than bonds, but come with slightly higher risk.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>3. Capital Preservation with Bonds:</strong> Bonds are
          generally less volatile than stocks, helping in preserving your
          principal investment.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>4. Diversification:</strong> Including bonds and NCDs in your
          investment portfolio can help reduce overall risk.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Differences Between Bonds and NCDs */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Differences Between Bonds and Non-Convertible Debentures (NCDs)
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Bonds and non-convertible debentures (NCDs) are both fixed-income
          securities, but they differ in several key ways:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. Conversion:</strong> Bonds can be either convertible or
          non-convertible, meaning they can potentially be converted into
          company shares. NCDs, on the other hand, are non-convertible and
          cannot be converted into equities or shares.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Security:</strong> Bonds may or may not be secured, whereas
          NCDs are typically backed by the company's assets, making them
          somewhat safer.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>3. Purpose:</strong> Bonds are often issued by governments or
          corporations to fund various projects. NCDs are primarily issued to
          raise long-term capital.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>4. Interest Rates:</strong> Bonds offer variable interest
          rates, while NCDs generally provide higher fixed interest rates to
          attract investors.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>5. Risk Level:</strong> Bonds can be riskier depending on the
          issuer, while NCDs are often considered safer due to the security
          backing them, although they cannot be converted into shares.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Conclusion */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Conclusion
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Bonds and non-convertible debentures are both viable investment
          options for those looking for stable returns. While bonds may offer
          the flexibility of conversion into shares, NCDs provide higher
          interest rates and a safer investment profile. Investors should assess
          their financial goals and risk tolerance before choosing between these
          two.
        </Text>
      </Stack>

      {/* Call to Action - Learn More about NCDs */}
      {/* <Box mt={10} textAlign="center">
        <Text fontSize="lg" color={"gray.600"} mb={4}>
          Interested in learning more about Non-Convertible Debentures (NCDs)?
        </Text>
        <Button
          as="a"
          href="/ncd-details" // Replace with actual link
          size="lg"
          colorScheme="teal"
        >
          Learn More About NCDs
        </Button>
      </Box> */}
    </Container>
  );
}
