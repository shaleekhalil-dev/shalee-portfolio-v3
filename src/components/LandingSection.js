import React from "react";
import { 
  Box, Container, VStack, Heading, Text, Button, 
  Stack, Flex, Image, Badge 
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowLeft, FaDownload } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const LandingSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  
  // تحديث الصورة لرابط مباشر عالي الجودة مع خاصية التصغير الذكي
  const profileImg = "https://drive.google.com/thumbnail?id=18B6gq5r6kbxn2-6j_XJaJi2LT5BZvvMO&sz=w1000";

  return (
    <Box as="section" id="home" minH="90vh" display="flex" alignItems="center" py={{ base: "80px", md: "0" }}>
      <Container maxW="container.xl">
        <Stack direction={{ base: "column-reverse", md: "row" }} spacing={{ base: 10, md: 20 }} align="center">
          <VStack flex="1" align="start" spacing={6}>
            <MotionBox
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge px={3} py={1} borderRadius="full" bg="brand.100" color="brand.900" fontWeight="bold" mb={4}>
                {t("card_bio_title")}
              </Badge>
              <Heading as="h1" size="2xl" color="brand.900" lineHeight="shorter" fontWeight="900">
                {t("hero_title")}
              </Heading>
            </MotionBox>

            <Text fontSize="xl" color="brand.700" lineHeight="tall" fontWeight="600" borderLeft={!isAr ? "4px solid" : "none"} borderRight={isAr ? "4px solid" : "none"} borderColor="brand.500" pl={!isAr ? 4 : 0} pr={isAr ? 4 : 0}>
              {t("hero_description")}
            </Text>

            <Text fontSize="md" color="gray.700" maxW="600px">
              {t("vision_goal")}
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} spacing={4} w="full" pt={4}>
              <Button as={RouterLink} to="/projects" size="lg" bg="brand.900" color="white" px={8} _hover={{ bg: "brand.700", transform: "translateY(-2px)" }} rightIcon={isAr ? <FaArrowLeft /> : <FaArrowRight />}>
                {t("nav_projects")}
              </Button>
              <Button size="lg" variant="outline" borderColor="brand.900" color="brand.900" px={8} leftIcon={<FaDownload />}>
                {isAr ? "تحميل السيرة الذاتية" : "Download CV"}
              </Button>
            </Stack>
          </VStack>

          <Flex flex="1" justify="center" position="relative">
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              position="relative"
              padding="10px"
              whileHover={{ scale: 1.03 }} // تأثير الانبثاق الناعم عند التمرير على الحاوية
            >
              <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="brand.200" borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%" opacity="0.4" />
              
              <MotionImage 
                src={profileImg} 
                alt="Shalee Khalil" 
                borderRadius="full" 
                boxSize={{ base: "280px", md: "380px" }} 
                objectFit="cover" 
                border="6px solid white" 
                shadow="2xl"
                whileHover={{ scale: 1.05 }} // تأثير الانبثاق الخاص بالصورة نفسها
                transition={{ type: "spring", stiffness: 300 }}
              />
            </MotionBox>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingSection;