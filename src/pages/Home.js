import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import LandingSection from "../components/LandingSection";
import DomainsSection from "../components/DomainsSection";
import ContactMeSection from "../components/ContactMeSection";

const Home = () => {
  return (
    <Box>
      <VStack spacing={0} align="stretch">
        <LandingSection />
        <Box bg="whiteAlpha.400">
          <DomainsSection />
        </Box>
        <ContactMeSection />
      </VStack>
    </Box>
  );
};

export default Home;