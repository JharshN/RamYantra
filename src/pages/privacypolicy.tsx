import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box p={10} bg="gray.50">
      <VStack
        spacing={6}
        align="stretch"
        maxW="900px"
        mx="auto"
        bg="white"
        p={8}
        boxShadow="lg"
        rounded="md"
      >
        <Heading as="h1" size="xl" color="blue.600" textAlign="center" mb={4}>
          Privacy Policy
        </Heading>

        <Text fontSize="lg" color="gray.700">
          At ramyantara Financial Services, your privacy is of utmost importance
          to us. This privacy policy outlines the types of personal information
          we collect, how we use it, and the steps we take to safeguard your
          data.
        </Text>

        <Heading as="h2" size="lg" color="blue.600">
          Information We Collect
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We collect personal information that you provide to us directly, such
          as your name, contact details, and any other information you choose to
          provide when inquiring about our services. Additionally, we may
          collect certain data automatically when you interact with our website,
          including IP addresses, browser types, and other analytics data.
        </Text>

        <Heading as="h2" size="lg" color="blue.600">
          How We Use Your Information
        </Heading>
        <Text fontSize="lg" color="gray.600">
          The information we collect is used to:
        </Text>
        <Text fontSize="lg" color="gray.600" pl={4}>
          - Provide and improve our financial services <br />
          - Respond to your inquiries and communicate with you <br />
          - Personalize your experience on our website <br />- Ensure compliance
          with legal obligations
        </Text>

        <Heading as="h2" size="lg" color="blue.600">
          Data Security
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We take appropriate measures to protect your personal data from
          unauthorized access, alteration, or disclosure. However, no method of
          transmission over the Internet is completely secure, and we cannot
          guarantee the absolute security of your data.
        </Text>

        <Heading as="h2" size="lg" color="blue.600">
          Third-Party Disclosure
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We do not sell, trade, or transfer your personal information to third
          parties without your consent, except where required by law or in the
          case of business transfers, mergers, or acquisitions.
        </Text>

        <Heading as="h2" size="lg" color="blue.600">
          Cookies
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Our website uses cookies to enhance user experience and gather
          information about traffic and interaction. You can choose to disable
          cookies through your browser settings, but this may limit certain
          functionalities of our site.
        </Text>

        <Heading as="h2" size="lg" color="blue.600">
          Your Consent
        </Heading>
        <Text fontSize="lg" color="gray.600">
          By using our site, you consent to our privacy policy. We may update
          this policy from time to time, and any changes will be reflected on
          this page.
        </Text>

        <Heading as="h2" size="lg" color="blue.600">
          Contact Us
        </Heading>
        <Text fontSize="lg" color="gray.600">
          If you have any questions regarding this privacy policy, you can
          contact us at: <br />
          <strong>Email:</strong> ramyantara.finserv@gmail.com <br />
          <strong>Phone:</strong> +91 9638387371
        </Text>
      </VStack>
    </Box>
  );
};

export default PrivacyPolicy;
