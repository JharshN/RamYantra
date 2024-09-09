import { useEffect, useState } from "react";
import supabase from "../../supabase";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ManageImages() {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const fetchImages = async () => {
    try {
      setLoading(true);

      // Fetch all files in the "ramyantra" bucket
      const { data, error } = await supabase.storage.from("ramyantra").list();

      if (error) {
        throw error;
      }

      // Map files to get their public URLs
      const imagePromises = data?.map(async (file) => {
        const {
          data: { publicUrl },
        } = await supabase.storage.from("ramyantra").getPublicUrl(file.name);

        return { name: file.name, url: publicUrl };
      });

      const imageList = await Promise.all(imagePromises || []);
      setImages(imageList);
    } catch (error) {
      console.error("Error fetching images:", error);
      setErrorMessage("Failed to load images.");
    } finally {
      setLoading(false);
    }
  };

  // Delete an image from the bucket
  const deleteImage = async (fileName: string) => {
    try {
      setDeleting(fileName);

      const { error } = await supabase.storage
        .from("ramyantra")
        .remove([fileName]);

      if (error) {
        throw error;
      }

      // Remove deleted image from state
      setImages((prevImages) =>
        prevImages.filter((image) => image.name !== fileName)
      );
      console.log("Image deleted:", fileName);
    } catch (error) {
      console.error("Error deleting image:", error);
      setErrorMessage("Failed to delete image.");
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Box
        p={5}
        boxShadow="lg"
        borderWidth="1px"
        borderRadius="md"
        maxW="600px"
        mx="auto"
      >
        <Heading size="lg" mb={4} textAlign="center">
          Manage Uploaded Images
        </Heading>

        {loading ? (
          <Box textAlign="center">
            <Spinner size="lg" />
            <Text mt={2}>Loading images...</Text>
          </Box>
        ) : (
          <>
            {errorMessage && (
              <Alert status="error" mb={4}>
                <AlertIcon />
                {errorMessage}
              </Alert>
            )}

            {images.length === 0 ? (
              <Text textAlign="center" mt={4}>
                No images found.
              </Text>
            ) : (
              <Stack spacing={4}>
                {images.map((image) => (
                  <Box
                    key={image.name}
                    borderWidth="1px"
                    borderRadius="md"
                    p={3}
                  >
                    <Image
                      src={image.url}
                      alt={image.name}
                      boxSize="300px"
                      borderRadius="md"
                      objectFit="cover"
                    />
                    <Text mt={2}>{image.name}</Text>

                    <Button
                      mt={3}
                      colorScheme="red"
                      onClick={() => deleteImage(image.name)}
                      isLoading={deleting === image.name}
                    >
                      Delete
                    </Button>
                  </Box>
                ))}
              </Stack>
            )}
          </>
        )}
      </Box>
      <Box
        p={5}
        borderWidth="1px"
        borderRadius="md"
        maxW="600px"
        mx="auto"
      >
        {" "}
        <Link href="/addimage">
          {" "}
          <Button mt={3} colorScheme="blue">
            Add Images
          </Button>
        </Link>
      </Box>
    </>
  );
}
