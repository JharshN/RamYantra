import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";

export default function InvestmentOptionsBlog() {
  return (
    <Container maxW={"6xl"} py={12}>
      {/* Blog Header */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
          Investment Options: Mutual Funds, Equity, Commodity, and Currency
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "lg", md: "xl" }}>
          Explore the various financial investment opportunities to diversify
          your portfolio and achieve long-term returns.
        </Text>
      </VStack>

      {/* Image Placeholder */}
      <Box mt={8}>
        <Image
          src="https://images.unsplash.com/photo-1504607798333-52a30db54a5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
          alt="Investment Options"
          borderRadius="lg"
          objectFit="cover"
        />
      </Box>

      {/* Mutual Funds Section */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Mutual Funds
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Mutual funds are investments that can be in debt, equity, or a mix of
          both. They offer professional management services at a lower cost.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          In a mutual fund, money from various investors is pooled together and
          invested in a portfolio of instruments. Mutual funds offer several
          advantages, including:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Diversification:</strong> Mutual funds invest in a variety of
          instruments, providing investors with an effective means of
          diversification.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Professional Management:</strong> Managed by qualified fund
          managers, mutual funds are ideal for those who lack time or market
          expertise.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Low Cost:</strong> Buying mutual fund units is more affordable
          than buying individual stocks, allowing for a larger portfolio with
          the same capital.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Tax Benefits:</strong> Investments in mutual funds may offer
          tax advantages, including exemptions on dividends and tax deductions
          for specific types of funds.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Equity Section */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Equity
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Equity represents ownership in a company and can be acquired through
          the contribution of capital. You can invest in equity for the
          long-term or trade with the intention to profit from market
          fluctuations.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Despite the inherent risks, equity offers investors high returns over
          the long term, contributing to personal wealth creation and national
          economic growth.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Benefits of Equity:</strong>
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Dividends:</strong> As a shareholder, you are entitled to a
          share of the company’s profits through dividends.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Value Appreciation:</strong> You can profit from selling your
          shares at a higher price than the purchase price on stock exchanges.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>High Returns:</strong> While risky, equity investments are
          known to provide returns that beat inflation and help in wealth
          creation.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Commodity Section */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Commodity
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Commodities offer investors an excellent opportunity for portfolio
          diversification. Commodities are less affected by stock market
          fluctuations and offer a more predictable investment route.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Benefits of Commodity Trading:</strong>
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Diversification:</strong> Commodities add diversity to your
          portfolio by exposing you to an asset class different from equities,
          bonds, or mutual funds.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Predictability:</strong> Commodity prices are influenced by
          supply and demand fundamentals, making them relatively easier to
          predict than stocks.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Leverage and Liquidity:</strong> Commodity futures allow large
          transactions with lower cash, offering both liquidity and leverage.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Currency Section */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Currency
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          The currency market is highly liquid and open 24 hours a day, offering
          traders the flexibility to transact at any time. While currency
          trading is risky, it can serve as an effective tool to diversify and
          expand your portfolio.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Advantages of Currency Trading:</strong>
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>High Liquidity:</strong> The large number of trades ensures
          high liquidity, allowing easy entry and exit from the market.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Low Transaction Costs:</strong> Currency trading involves low
          spreads, reducing the overall cost of transactions for traders.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>Leverage:</strong> With the use of margin, large transactions
          can be carried out with relatively small cash amounts.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>24-Hour Trading:</strong> Currency markets remain open round
          the clock, offering unparalleled flexibility for traders.
        </Text>
      </Stack>
    </Container>
  );
}
