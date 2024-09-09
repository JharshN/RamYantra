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

export default function InsuranceSolutionBlog() {
  return (
    <Container maxW={"6xl"} py={12}>
      {/* Blog Header */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
          Comprehensive Insurance Solutions: Safeguard Your Future
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "lg", md: "xl" }}>
          Learn how our insurance solutions can provide you with financial
          security and peace of mind for the future.
        </Text>
      </VStack>

      {/* Image Placeholder */}
      <Box mt={8}>
        <Image
          src="https://images.unsplash.com/photo-1468254095679-bbcba94a7066?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
          alt="Insurance Solutions"
          borderRadius="lg"
          objectFit="cover"
        />
      </Box>

      {/* Insurance Solution Introduction */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          What Are Insurance Solutions?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Insurance solutions are financial products designed to protect you and
          your assets from unexpected events. They provide coverage against
          various risks, offering financial support when you need it the most.
          These solutions help ensure that you and your loved ones are
          safeguarded against potential financial losses.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Why Choose Insurance Solutions */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Why Choose Insurance Solutions?
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Insurance solutions offer peace of mind and financial security. By
          investing in insurance, you protect yourself against unforeseen
          circumstances and potential financial burdens. Here are some reasons
          why insurance is a wise choice:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. Financial Protection:</strong> Insurance helps cover costs
          associated with medical emergencies, property damage, and other
          unforeseen events, reducing the financial impact on you and your
          family.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Risk Management:</strong> It helps manage risks by
          providing a safety net against potential financial losses, ensuring
          you are prepared for unexpected situations.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>3. Peace of Mind:</strong> Knowing that you are protected
          against various risks provides peace of mind, allowing you to focus on
          what matters most in life without constant worry.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Types of Insurance Solutions */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Types of Insurance Solutions
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Insurance solutions can be categorized into several types, each
          offering different kinds of coverage:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. Health Insurance:</strong> Covers medical expenses,
          including hospital stays, surgeries, and routine check-ups, ensuring
          you receive the care you need without financial strain.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Life Insurance:</strong> Provides financial support to your
          beneficiaries in the event of your passing, helping to cover expenses
          and maintain their financial stability.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>3. Property Insurance:</strong> Protects your home and
          belongings against damage or loss due to events like fire, theft, or
          natural disasters.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>4. Auto Insurance:</strong> Covers damages and liability
          related to vehicle accidents, helping you manage repair costs and
          legal expenses.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Risks of Not Having Insurance */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Risks of Not Having Insurance
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Not having insurance can leave you vulnerable to significant financial
          losses. The absence of coverage may result in substantial
          out-of-pocket expenses and financial strain in the face of unexpected
          events.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Key risks include:
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>1. High Medical Costs:</strong> Without health insurance,
          medical bills from emergencies or chronic conditions can be
          overwhelming.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>2. Financial Burden on Family:</strong> In the absence of life
          insurance, your family may face financial difficulties without your
          income and support.
        </Text>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          <strong>3. Property Loss:</strong> Without property insurance, you may
          bear the full cost of repairs or replacement for damaged or lost
          property.
        </Text>
      </Stack>

      <Divider mt={8} />

      {/* Conclusion */}
      <Stack spacing={6} mt={10}>
        <Heading as="h2" fontSize={"3xl"}>
          Conclusion
        </Heading>
        <Text fontSize="lg" lineHeight={1.8} color={"gray.600"}>
          Investing in insurance solutions is a crucial step in protecting your
          financial future. By choosing the right coverage, you can safeguard
          yourself and your loved ones from potential financial hardships.
          Evaluate your needs and select insurance products that offer the
          protection you require to ensure peace of mind and financial security.
        </Text>
      </Stack>
    </Container>
  );
}
