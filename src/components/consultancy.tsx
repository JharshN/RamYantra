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
  const bgColor = useColorModeValue("blue.50", "blue.800");

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
              color={"blue.600"}
            >
              Welcome to Ramyantra Consultancy Services
            </Heading>

            <Text color={"gray.600"} fontSize={{ sm: "lg", md: "xl" }}>
              <b>JOB SEEKERS</b>
              <br /> We're glad you're here. We are all about you, first and
              foremost! We are about making your job search experience easier,
              faster and more effective. Our easy-to follow search steps and
              tips will help you make you job search the best it can be. Start
              searching now and enjoy!
              <br />
              <b> FIND NEW ROLES EMPLOYERS</b>
              <br /> We are a leader in the region with strong talents and a
              focus on the needs of others. Our solution portfolio includes
              comprehensive and integrated end-to-end HR solutions, including
              talent mapping, salary/compensation benchmarking, consultation,
              temporary staffing, leadership hiring, payroll outsourcing, and
              permanent recruitment-search and selection. <br />
              <Link href="https://wa.me/7874266271">
                <Button colorScheme="whatsapp"> Connect Us On whatsapp</Button>
              </Link>&nbsp;&nbsp; &nbsp;&nbsp;<br />
              <Link href="/otherservice">
                <Button colorScheme="blue"> Know More</Button>
              </Link>
            </Text>
          </Stack>

          {/* Right Side - Image Section */}
          <Box flex={1} justifyContent={"center"} alignItems={"center"}>
            <Image
              rounded={"lg"}
              alt={"Ramyantra Consultancy Services"}
              src={"/consultancy.webp"}
              objectFit={"cover"}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
