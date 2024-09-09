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
              Ramyantra Consultancy Services is dedicated to connecting
              companies with the right talent while supporting job seekers in
              finding meaningful career opportunities. We streamline the hiring
              process by offering tailored recruitment solutions for businesses
              and provide personalized guidance to candidates. With a focus on
              efficiency and mutual success, Ramyantra bridges the gap between
              organizations and top-tier professionals.
            </Text>
            <Stack direction={"row"} spacing={4}>
              <Link href="/">
                {" "}
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme={"blue"}
                  bg={"blue.600"}
                  _hover={{ bg: "blue.700" }}
                >
                  Learn More
                </Button>
              </Link>
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
                Contact Us
              </Button>
            </Stack>
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
