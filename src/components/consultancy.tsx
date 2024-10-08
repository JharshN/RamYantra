"use client";

import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function RamyantraSection() {
  const bgColor = useColorModeValue("blue.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.200");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box bg={bgColor} py={10}>
      <Container maxW={"6xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
          direction={{ base: "column", md: "row" }}
        >
          {/* Left Side - Text Section */}
          <Stack flex={1} spacing={{ base: 5, md: 6 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color={headingColor}
            >
              Welcome to ramyantara Consultancy Services
            </Heading>

            <Text color={textColor} fontSize={{ sm: "lg", md: "xl" }}>
              <b>JOB SEEKERS</b>
              <br />{" "}
              <Text color={textColor} fontSize={{ sm: "lg", md: "xl" }}>
                We're glad you're here. We are all about you, first and
                foremost! We are about making your job search experience easier,
                faster, and more effective. Our easy-to-follow search steps and
                tips will help you make your job search the best it can be.
                Start searching now and enjoy!
                <br />
              </Text>
              <br />
              <b>FIND NEW ROLES EMPLOYERS</b>
              <br />
              <Text color={textColor} fontSize={{ sm: "lg", md: "xl" }}>
                {" "}
                We are a leader in the region with strong talents and a focus on
                the needs of others. Our solution portfolio includes
                comprehensive and integrated end-to-end HR solutions, including
                talent mapping, salary/compensation benchmarking, consultation,
                temporary staffing, leadership hiring, payroll outsourcing, and
                permanent recruitment-search and selection. <br />
              </Text>
              <br />
              <div>
                <Link href="https://wa.me/7874266271">
                  <Button colorScheme="whatsapp">Connect Us On WhatsApp</Button>
                </Link>
              </div>
              <br />
              <Link href="/otherservice">
                <Button colorScheme="blue">Know More</Button>
              </Link>
            </Text>
          </Stack>

          {/* Right Side - Image Section */}
          <Box flex={1} justifyContent={"center"} alignItems={"center"}>
            <Image
              rounded={"lg"}
              alt={"ramyantara Consultancy Services"}
              src={"/consultancy.webp"}
              objectFit={"cover"}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
