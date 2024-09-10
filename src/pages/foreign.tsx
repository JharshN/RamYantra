import { useEffect, useState } from "react";
import supabase from "../../supabase";
import {
  Box,
  Heading,
  Image,
  Spinner,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export default function IndicesPage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch image from the 'images' table, specifically from the 'indices' column
  const fetchImageFromIndices = async () => {
    try {
      setLoading(true);

       const { data, error } = await supabase
         .from("images")
         .select("foreign")
         .order("id", { ascending: false }) // Adjust "id" to whatever column you're ordering by
         .limit(1)
         .single();

      if (error) {
        throw error;
      }

      const { foreign: imageUrl } = data;

      // Optimize the image using wsrv.nl
      const optimizedUrl = `https://wsrv.nl/?url=${encodeURIComponent(
        imageUrl
      )}&w=1000&q=85`;

      setImageUrl(optimizedUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
      setErrorMessage("Failed to load image.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImageFromIndices();
  }, []);

  return (
    <Box
      p={5}
      boxShadow="lg"
      borderWidth="1px"
      borderRadius="md"
      maxW="1200px"
      mx="auto"
      textAlign="center"
    >
      <Heading size="lg" mb={6}>
        Foreign Investments
      </Heading>

      {loading ? (
        <Box textAlign="center">
          <Spinner size="lg" />
          <Text mt={2}>Loading image...</Text>
        </Box>
      ) : errorMessage ? (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {errorMessage}
        </Alert>
      ) : (
        imageUrl && (
          <Image
            src={imageUrl}
            alt="Foreign Investments Image"
            width="100%"
            height="auto"
            borderRadius="md"
            boxShadow="lg"
            objectFit="cover"
          />
        )
      )}
    </Box>
  );
}
