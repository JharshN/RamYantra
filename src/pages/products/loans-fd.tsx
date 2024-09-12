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

export default function LoansFDBlog() {
  return (
    <Container maxW={"6xl"} py={12}>
      {/* Blog Header */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
          Loans and Fixed Deposits: Understanding Key Financial Products
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }}>
          Explore the fundamentals of loans and fixed deposits, their benefits,
          risks, and how they can fit into your financial strategy.
        </Text>
      </VStack>

      {/* Image Placeholder */}
      <Box mt={8}>
        <Image
          src="https://images.unsplash.com/photo-1564052269004-c0878d752c92?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
          alt="Loans and Fixed Deposits"
          borderRadius="lg"
          objectFit="cover"
        />
      </Box>

      {/* Loans Introduction */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          What Are Loans?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8}>
          Loans are financial instruments where a lender provides a borrower
          with a sum of money that must be repaid over time with interest. Loans
          can be used for various purposes, such as purchasing a home, funding
          education, or starting a business. They come with specific terms and
          conditions, including interest rates, repayment schedules, and
          collateral requirements.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Benefits of Loans */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Benefits of Loans
        </Heading>
        <Text fontSize="lg" lineHeight={1.8}>
          Taking out a loan offers several advantages, including:
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>1. Immediate Access to Funds:</strong> Loans provide immediate
          access to funds that can be used for various needs, whether it's
          buying a home or funding education.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>2. Build Credit History:</strong> Responsible management of a
          loan can help build and improve your credit history, which can be
          beneficial for future borrowing.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>3. Flexible Repayment Terms:</strong> Loans often come with
          flexible repayment terms that can be adjusted to fit your financial
          situation.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Risks of Loans */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Risks of Loans
        </Heading>
        <Text fontSize="lg" lineHeight={1.8}>
          Loans also come with risks that should be considered:
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>1. Interest Costs:</strong> Loans accrue interest, which
          increases the total amount you will repay over the life of the loan.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>2. Repayment Pressure:</strong> Failing to make timely
          payments can lead to penalties, higher interest rates, and potential
          damage to your credit score.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>3. Risk of Over-Borrowing:</strong> Taking on too much debt
          can strain your finances and lead to financial instability.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Fixed Deposits Introduction */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          What Are Fixed Deposits?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8}>
          Fixed deposits (FDs) are financial products offered by banks and
          financial institutions where you deposit a lump sum of money for a
          fixed tenure at a predetermined interest rate. FDs provide a
          guaranteed return on investment and are considered low-risk compared
          to other investment options.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Benefits of Fixed Deposits */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Benefits of Fixed Deposits
        </Heading>
        <Text fontSize="lg" lineHeight={1.8}>
          Fixed deposits offer several advantages:
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>1. Guaranteed Returns:</strong> Fixed deposits offer a
          guaranteed return on your investment, providing certainty in your
          financial planning.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>2. Low Risk:</strong> FDs are low-risk investments, as they
          are usually insured up to a certain amount by government agencies.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>3. Flexible Tenure:</strong> You can choose the tenure of your
          fixed deposit based on your financial goals and needs.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Risks of Fixed Deposits */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Risks of Fixed Deposits
        </Heading>
        <Text fontSize="lg" lineHeight={1.8}>
          While FDs are considered safe, there are some risks to be aware of:
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>1. Lower Returns:</strong> The returns on FDs are typically
          lower compared to more aggressive investment options like stocks or
          mutual funds.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>2. Penalty for Early Withdrawal:</strong> Withdrawing funds
          before the maturity date may incur a penalty and could affect the
          interest earned.
        </Text>
        <Text fontSize="lg" lineHeight={1.8}>
          <strong>3. Inflation Risk:</strong> The fixed returns may not keep
          pace with inflation, potentially reducing the real value of your
          investment.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Conclusion */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Conclusion
        </Heading>
        <Text fontSize="lg" lineHeight={1.8}>
          Loans and fixed deposits are fundamental financial products that serve
          different purposes. Loans offer access to immediate funds and the
          ability to manage cash flow, while fixed deposits provide a secure and
          predictable way to grow savings. Understanding the benefits and risks
          of each can help you make informed financial decisions and better
          manage your personal finances.
        </Text>
      </Stack>
    </Container>
  );
}
