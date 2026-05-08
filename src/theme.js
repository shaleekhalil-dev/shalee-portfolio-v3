import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
  },
  fonts: {
    heading: "'Cairo', sans-serif",
    body: "'Cairo', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        color: "brand.900",
        minH: "100vh",
        backgroundAttachment: "fixed",
      },
      ".glass-card": {
        bg: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        borderRadius: "2xl",
        border: "1px solid",
        borderColor: "whiteAlpha.800",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
      },
    },
  },
});

export default theme;