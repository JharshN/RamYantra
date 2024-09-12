"use client";

import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Container,
  SimpleGrid,
  VStack,
  Image,
  Select,
} from "@chakra-ui/react";
import supabase from "../../supabase";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const { error } = await supabase
      .from("ramyantraconsultancy")
      .insert([{ ...data }]);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Form submitted!",
        description: "Thank you for your submission.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      reset();
      router.push("/");
    }
  };

  return (
    <Box p={4} bg="gray.50" minH="100vh">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Left Section - Text and Image */}
          <VStack align={"start"} spacing={6} textAlign={"left"}>
            <Heading fontSize={"3xl"} color="blue.700">
              Welcome to ramyantara Consultancy
            </Heading>
            <Text color={"gray.600"} fontSize={{ sm: "lg", md: "xl" }}>
              Whether you're a job seeker or an employer, we're here to support
              you. Find your next opportunity or hire the best talent with us.
            </Text>
            <Image
              src="/consultancy.webp"
              alt="Consultancy Services"
              borderRadius="md"
              boxShadow="md"
              maxH="300px"
              objectFit="cover"
            />
          </VStack>

          {/* Right Section - Contact Form */}
          <VStack
            bg="white"
            p={8}
            borderRadius="md"
            boxShadow="lg"
            spacing={6}
            align="stretch"
          >
            <Heading fontSize={"2xl"} color="blue.700">
              Get in Touch
            </Heading>
            <Text color={"gray.500"} fontSize="md">
              We're here to assist you. Please fill out the form below, and
              we'll get back to you as soon as possible.
            </Text>
            <Input
              {...register("name", { required: true })}
              placeholder="Your Name"
              size="lg"
              focusBorderColor="blue.500"
            />
            <Input
              {...register("mobile", { required: true })}
              placeholder="Your Mobile Number / Email"
              size="lg"
              focusBorderColor="blue.500"
            />
            <Textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              size="lg"
              focusBorderColor="blue.500"
            />
            <Select
              {...register("type", { required: true })}
              placeholder="Select Option"
              size="lg"
              focusBorderColor="blue.500"
            >
              <option value="hire">I want to hire</option>
              <option value="be_hired">I want to be hired</option>
            </Select>
            <Button
              colorScheme="blue"
              size="lg"
              onClick={handleSubmit(onSubmit)}
            >
              Send Message
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
