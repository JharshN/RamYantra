import React from "react";
import {
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Text,
  Icon,
  Tag,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { Divider } from "@chakra-ui/react";

const articles = [
  {
    id: 1,
    title: "Indices & Daily Level",
    href: "/indices",
  },
  {
    id: 2,
    title: "Foreign & Domestic Institutional Investors",
    href: "/foreign",
  },
  {
    id: 3,
    title: "IPO",
    href: "/greymarket",
  },
  {
    id: 4,
    title: "Watch List",
    href: "/watchlist",
  },
];

const BlogCards = () => {
  return (
    <>
    <Box textAlign="center" p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Know About Market Indices, FII, DII, and Grey Market Premium
      </Text>
      <Divider />
    </Box>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Container p={{ base: 5, md: 1 }}>
          {" "}
          <Box
            position={"relative"}
            height={"auto"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              width={1000}      
              height={1000}
            />
          </Box>
        </Container>
        <Container p={{ base: 5, md: 1 }}>
          <VStack spacing={8} w={{ base: "auto", md: "2xl" }}>
            {articles.map((article, index) => (
              <Stack
                key={index}
                direction="column"
                spacing={1}
                p={3}
                bg={useColorModeValue("gray.100", "gray.800")}
                border="1px solid"
                borderColor="blue.100"
                _hover={{
                  borderColor: "blue.300",
                  boxShadow: useColorModeValue(
                    "0 4px 6px rgba(160, 174, 192, 0.6)",
                    "0 4px 6px rgba(9, 17, 28, 0.9)"
                  ),
                }}
                width={"full"}
                rounded="lg"
              >
                {/* <HStack spacing={2} mb={1}>
            
            </HStack> */}
                <Box textAlign="left">
                  <Link
                    href={article.href}
                    fontSize="xl"
                    lineHeight={1.2}
                    fontWeight="bold"
                    w="100%"
                    _hover={{ color: "blue.400", textDecoration: "underline" }}
                  >
                    {article.title}
                  </Link>
                </Box>
                <Box>
                  <Stack
                    justifyContent="space-between"
                    direction={{ base: "column", sm: "row" }}
                  >
                    <HStack
                      as={Link}
                      spacing={1}
                      p={1}
                      alignItems="center"
                      height="2rem"
                      w="max-content"
                      margin="auto 0"
                      rounded="md"
                      color="blue.400"
                      _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
                    >
                      <Link href={article.href}>
                        <Text fontSize="sm"> Know More </Text>
                      </Link>
                      <Icon as={GoChevronRight} w={4} h={4} />
                    </HStack>
                  </Stack>
                </Box>
              </Stack>
            ))}
          </VStack>
        </Container>
      </Stack>
    </>
  );
};

export default BlogCards;
