import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
  Container,
  SimpleGrid,
  HStack,
  Icon,
  VStack,
  Link,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";
import supabase from "../../supabase";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Divider } from "@chakra-ui/react";

export default function ContactUs() {
  const form = useForm();
  const toast = useToast();
  const router = useRouter();
  const { register, handleSubmit, control, watch } = form;

  function handleSubmitt() {
    toast({
      title: "Form submitted!",
      description: "Thank you for your Form",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    router.push("/");
  }
  const onSubmit = async (data: any) => {
    const { error } = await supabase.from("contactus").insert([{ ...data }]);

    if (error) {
      console.error("Error submitting Form:", error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      handleSubmitt();
    }
  };

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Contact Us</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          We're here to help. Reach out to us for any inquiries, support, or
          information about our financial services.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Contact Information */}
          <VStack align={"start"} spacing={4}>
            <Heading fontSize={"2xl"}>Get in Touch</Heading>
            <HStack>
              <Icon as={PhoneIcon} color={"green.500"} />
              <Text fontSize={"lg"} fontWeight={600}>
                Tushar Makwana (MBA, Finance)
              </Text>
              <Text fontSize={"lg"}>+91 9638387371</Text>
            </HStack>

            <HStack>
              <Icon as={EmailIcon} color={"green.500"} />
              <Text fontSize={"lg"}>Founder@ramyantara.com</Text>
            </HStack>

            <HStack>
              <Icon as={FaWhatsapp} color={"green.400"} />
              <Link
                href="https://wa.me/919638387371"
                color="green.500"
                fontSize={"lg"}
                fontWeight={600}
                isExternal
              >
                Chat on WhatsApp
              </Link>
            </HStack>

            <Text fontSize={"lg"} color={"gray.600"}>
              Address: 316, Times Galaxy, Near Cinezza Multiplex, Nr. D Mart,
              Ugat Canal Road, Jahangirpura 395005
            </Text>
          </VStack>

          {/* Contact Form */}
          <VStack spacing={4} align="start">
            <Heading fontSize={"2xl"}>Send Us a Message</Heading>
            <Input
              {...register("name", { required: true })}
              placeholder="Your Name"
              size="lg"
            />
            <Input
              {...register("mobile", { required: true })}
              placeholder="Your Mobile Number / Email"
              size="lg"
            />
            <Textarea
              {...register("information", { required: true })}
              placeholder="Your Message"
              size="lg"
            />
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
