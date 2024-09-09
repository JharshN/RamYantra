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

export default function EquityInvestmentBlog() {
  return (
    <Container maxW={"6xl"} py={12}>
      {/* Blog Header */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
          Equity Investment: A Guide to Building Long-Term Wealth
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "lg", md: "xl" }}>
          Explore how investing in equity can yield high returns, wealth
          creation, and ownership in growing companies.
        </Text>
      </VStack>

      {/* Image Placeholder */}
      <Box mt={8}>
        <Image
          src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
          alt="Equity Investment"
          borderRadius="lg"
          objectFit="cover"
        />
      </Box>

      {/* Equity Investment Introduction */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          What is Equity Investment?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Equity investment refers to buying shares of a company, which
          represents ownership in the business. These shares can be acquired
          directly from the company or traded on stock exchanges. As an equity
          holder, you become part-owner of the business, sharing both its risks
          and rewards.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Why Invest in Equity */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Why Invest in Equity?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Investing in equity is one of the most powerful ways to build
          long-term wealth. While equity investment carries higher risk compared
          to other asset classes, it also has the potential to generate high
          returns. This is why it remains a popular choice for investors looking
          to grow their capital.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Equity investments offer the following advantages:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. Ownership and Profit Sharing:</strong> As an equity
          investor, you are entitled to a share of the company’s profits,
          typically in the form of dividends. The more shares you own, the
          greater your share in the company’s profits.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Capital Gains:</strong> Over time, if the value of the
          company increases, so does the value of your shares. You can sell your
          shares at a higher price than what you paid, realizing a capital gain.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>3. High Returns:</strong> Equities have historically
          outperformed other investment classes like bonds or commodities in the
          long term, offering higher returns to investors willing to take on the
          additional risk.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Types of Equity Investments */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Types of Equity Investments
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Equity investments can be broadly categorized into two main types:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. Direct Equity:</strong> This involves purchasing individual
          shares of a company listed on the stock exchange. You can buy and sell
          these shares based on your investment goals, market analysis, or
          company performance.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Equity Mutual Funds:</strong> These funds pool money from
          multiple investors and invest in a diversified portfolio of equities.
          They are managed by professional fund managers, making them a suitable
          option for investors looking for diversified equity exposure with
          professional management.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Risks of Equity Investments */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Risks of Equity Investments
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          While equity investment offers high returns, it is important to be
          aware of the risks involved. The stock market can be volatile, and the
          value of your equity investments can fluctuate significantly.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Some of the key risks associated with equity investments include:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. Market Risk:</strong> The prices of shares can fall due to
          various external factors like economic downturns, political
          instability, or market speculation.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Company-Specific Risk:</strong> If the company you have
          invested in underperforms or faces financial difficulties, the value
          of your shares could drop.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>3. Liquidity Risk:</strong> In some cases, it may be difficult
          to sell your shares quickly, especially during a market downturn,
          without incurring a significant loss.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Conclusion */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Conclusion
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Equity investment can be a powerful tool for building wealth over the
          long term. By taking on higher risk, investors can potentially reap
          high rewards in the form of dividends and capital gains. However, it’s
          important to carefully research and manage these investments to
          mitigate the inherent risks. Diversification, long-term perspective,
          and a strong understanding of the market can help you maximize your
          returns from equity investments.
        </Text>
      </Stack>
    </Container>
  );
}
