"use client";

import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Spinner,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import supabase from "../../supabase";
import Link from "next/link";

export default function AdminPanel() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch contact form data from Supabase
  useEffect(() => {
    const fetchContactUsData = async () => {
      try {
        const { data, error } = await supabase
          .from("contactus") // Replace with your actual table name
          .select("*");

        if (error) {
          console.error("Error fetching data:", error);
        } else {
          setContacts(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactUsData();
  }, []);

  if (loading) {
    return (
      <Box p={4} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </Box>
    );
  }

  return (
    <>
      <Box p={4}>
        <Container maxW="6xl">
          <Heading
            as="h1"
            mb={6}
            textAlign="center"
            fontSize="3xl"
            color="blue.600"
          >
            Admin Panel - User Submissions
          </Heading>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Mobile</Th>
                <Th>Information</Th>
                <Th>Contact on WhatsApp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contacts.map((contact) => (
                <Tr key={contact.id}>
                  <Td>{contact.name}</Td>
                  <Td>{contact.mobile}</Td>
                  <Td>{contact.information}</Td>
                  <Td>
                    <HStack spacing={4}>
                      <Text>{contact.mobile}</Text>
                      <IconButton
                        as="a"
                        href={`https://wa.me/${contact.mobile}`}
                        colorScheme="green"
                        icon={<FaWhatsapp />}
                        aria-label="Contact on WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Container>
      </Box>
      <br />
      <Link href="/">
        <Button>Home Page</Button>
      </Link>
      <br />
      <Link href="/signout">
        <Button>Signout</Button>
      </Link>
    </>
  );
}
