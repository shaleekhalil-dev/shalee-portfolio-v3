import React from "react";
import { Box, HStack, Button, Container, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const toggleLanguage = () => {
    const newLang = isAr ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <Box 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1000} 
      bg="rgba(255, 255, 255, 0.8)" 
      backdropFilter="blur(10px)"
      borderBottom="1px solid" 
      borderColor="whiteAlpha.800" 
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <HStack px={{ base: 2, md: 4 }} py={4} justifyContent="space-between">
          <HStack spacing={{ base: 4, md: 8 }} fontWeight="800" fontSize={{ base: "xs", md: "sm" }} color="brand.900">
            <Link as={RouterLink} to="/" _hover={{ color: "brand.600", textDecoration: "none" }}>
              {t("nav_home")}
            </Link>
            <Link as={RouterLink} to="/certs" _hover={{ color: "brand.600", textDecoration: "none" }}>
              {t("nav_certs")}
            </Link>
            <Link as={RouterLink} to="/projects" _hover={{ color: "brand.600", textDecoration: "none" }}>
              {t("nav_projects")}
            </Link>
            <Link as={RouterLink} to="/library" _hover={{ color: "brand.600", textDecoration: "none" }}>
              {t("nav_library")}
            </Link>
          </HStack>

          <Button 
            size="sm" 
            onClick={toggleLanguage} 
            bg="brand.900" 
            color="white"
            _hover={{ bg: "brand.700" }}
            fontWeight="900"
            px={4}
          >
            {isAr ? 'English' : 'العربية'}
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;