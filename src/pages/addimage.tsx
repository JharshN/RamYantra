import { useState } from "react";
import supabase from "../../supabase";
import {
  Box,
  Heading,
  Input,
  Spinner,
  Text,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function IndependentImageUploader() {
  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
    const Router = useRouter();
  const uploadImage = async (file: File, index: number) => {
    try {
      setUploadingIndex(index);

      const fileName = `ramyantra_${Date.now()}_${file.name}`;

      // Upload the image to the "ramyantra" bucket
      const { data, error } = await supabase.storage
        .from("ramyantra")
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      // Get the public URL of the uploaded image
      const {
        data: { publicUrl },
      } = await supabase.storage.from("ramyantra").getPublicUrl(fileName);

      if (publicUrl) {
        // Update the specific image URL in the array
        const newImageUrls = [...imageUrls];
        newImageUrls[index] = publicUrl;
        setImageUrls(newImageUrls);

        console.log(`Image ${index + 1} uploaded:`, publicUrl);
      }
    } catch (error) {
      console.error(`Error uploading image ${index + 1}:`, error);
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file, index);
    }
  };

  const insertIntoDatabase = async () => {
    try {
      const { data, error } = await supabase
        .from("images")
        .insert([
          { indices: imageUrls[0], foreign: imageUrls[1], greymarket: imageUrls[2] },
        ]);

      if (error) {
        throw error;
      }else{
        Router.push("/contactAdmin");
      }

      console.log("Image URLs inserted into database:", imageUrls);
    } catch (error) {
      console.error("Error inserting URLs into the database:", error);
    }
  };

  return (
    <Box
      p={5}
      boxShadow="lg"
      borderWidth="1px"
      borderRadius="md"
      maxW="400px"
      mx="auto"
    >
      <Heading size="lg" mb={4} textAlign="center">
        Upload Three Images Independently
      </Heading>

      <Stack spacing={4}>
        {["First", "Second", "Third"].map((label, index) => (
          <Box key={index} textAlign="center">
            <Text mb={2}>{label} Image:</Text>
            <Input
              type="file"
              onChange={(e) => handleFileChange(e, index)}
              isDisabled={uploadingIndex === index}
              variant="filled"
              size="lg"
              borderColor="blue.500"
              _hover={{ borderColor: "blue.300" }}
            />
            {uploadingIndex === index && (
              <Box textAlign="center" mt={2}>
                <Spinner size="lg" />
                <Text>Uploading...</Text>
              </Box>
            )}
            {imageUrls[index] && (
              <Image
                src={imageUrls[index]}
                alt={`Uploaded ${label.toLowerCase()} image`}
                boxSize="300px"
                borderRadius="md"
                objectFit="cover"
                mt={3}
              />
            )}
          </Box>
        ))}
      </Stack>

      <Button
        mt={5}
        isDisabled={imageUrls.some((url) => url === "")} // Disable if any image is missing
        onClick={insertIntoDatabase}
        colorScheme="blue"
        width="full"
      >
        Submit All Images
      </Button>
      <Alert status="warning">
        <AlertIcon />
        If Image is not uploaded, then please signin again and try because the session might have expired.
      </Alert>
    </Box>
  );
}
