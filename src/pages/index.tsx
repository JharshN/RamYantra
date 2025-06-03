import Head from "next/head";
import Navnew from "../components/navnew";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Footer from "../components/footer";
import Product from "../components/Product";
import Image from "next/image";
import Info from "../components/info";
import Consultancy from "../components/consultancy";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconProps,
  Stack,
  Text,
  AspectRatio,
  useColorMode,
} from "@chakra-ui/react";

export default function Home() {

  return (
    <>
      <NextSeo
        title="ramyantara.com"
        description="ramyantara Financial Services provides top-notch financial solutions, specializing in equity, insurance,  bonds & NCDs, PMS/AIF, currency, commodities, mutual funds, and loans & fixed deposits."
        openGraph={{
          url: "https://blobimageshikshafinder.blob.core.windows.net/shikshafinder/yantramaya.png",
          title: "ramyantara",
          description: "Home page of ramyantara",
          images: [
            {
              url: "https://blobimageshikshafinder.blob.core.windows.net/shikshafinder/yantramaya.png",
              alt: "Yantra Maya",
            },
          ],
          site_name: "http://WWW.RAMYANTARA.COM",
          type: "website",
        }}
      />
      <Head>
        <meta
          name="ramyantara"
          content="ramyantara Financial Services provides top-notch financial solutions, specializing in equity, insurance, bonds, PMS/AIF, currency, commodities, mutual funds, and loans & fixed deposits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "20%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                ramyantara
              </Text>
              <br />
              <Text as={"span"} color={"blue.400"}>
                Finance made easier !
              </Text>
            </Heading>
            <Text>
              <b>ramyantara Financial Services</b> provides top-notch financial
              solutions, specializing in equity, insurance, bonds, PMS/AIF,
              currency, commodities, mutual funds, and loans & fixed deposits.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Navnew />
              <a
                href="https://diy.sharekhan.com/app/Account/Register?grpcd=10651&type=fr&grpid=11040&fbclid=PAAabdnX-9xgCg5sB2Ieo2tDUdhuJi-_6mmQUOyg1jTwNVz-GigtR9D87wlcg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                >
                  Open Demat Account
                </Button>
              </a>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={"100%"}
              h={"100%"}
              position={"absolute"}
              top={"-30%"}
              left={0}
              zIndex={-1}
              color={"blue.400"}
            />

            <Box
              position={"relative"}
              height={"auto"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                src="/x0jWYq6aSku1T9dV2CFF7w.webp"
                alt="ramyantara image"
                width={600}
                height={300}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>{" "}
      <br />
      <Info />
      <br />
      <Product/>
      <br />
      <Consultancy />
      <br />
      {/* <Footer /> */}
    </>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
