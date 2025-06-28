"use client";
import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const bgColor = useColorModeValue("green.500", "green.400");
  const hoverBgColor = useColorModeValue("green.600", "green.500");

  const handleWhatsAppClick = () => {
    const phoneNumber = "7878887208";
    const message = encodeURIComponent(
      "🚀 Hi! I'm interested in investing with Ramyantara! 💰\n\n" +
        "I've been exploring your investment opportunities and I'm excited to learn more about:\n" +
        "• NCDs with attractive returns\n" +
        "• Unlisted shares with high growth potential\n" +
        "• Insurance products for financial security\n\n" +
        "Could you please guide me through the best investment options available? I'm ready to start my investment journey! 📈\n\n" +
        "Looking forward to your expert advice! 🙏"
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
      <Button
        onClick={handleWhatsAppClick}
        bg={bgColor}
        // _hover={{ bg: hoverBgColor }}
        color="white"
        size="lg"
        borderRadius="full"
        boxShadow="lg"
        _active={{ transform: "scale(0.95)" }}
        leftIcon={<FaWhatsapp size={24} />}
        px={6}
        py={4}
        fontSize="lg"
        fontWeight="bold"
        transition="all 0.2s"
        _before={{
          content: '""',
          position: "absolute",
          top: "-2px",
          left: "-2px",
          right: "-2px",
          bottom: "-2px",
          borderRadius: "full",
          background: "linear-gradient(45deg, #25D366, #128C7E)",
          zIndex: -1,
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
        _hover={{
          _before: {
            opacity: 1,
          },
          transform: "translateY(-2px)",
          boxShadow: "xl",
        }}
      >
        Invest Now! 💰
      </Button>
    </Box>
  );
};

export default WhatsAppButton;
