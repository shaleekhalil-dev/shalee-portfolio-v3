import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ title, description, imageSrc, url }) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Link href={url} isExternal style={{ textDecoration: 'none' }} w="full">
      <Box 
        className="glass-card"
        color="brand.900" 
        cursor="pointer"
        overflow="hidden"
        h="full"
        _hover={{ transform: "translateY(-5px)", shadow: "2xl" }}
      >
        <VStack spacing={0} align="flex-start">
          <Image 
            src={imageSrc} 
            alt={title} 
            w="full" 
            h="200px" 
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/400x200?text=Project"
          />
          <VStack p={6} align="flex-start" spacing={3} w="full">
            <Heading as="h3" size="md">{title}</Heading>
            <Text fontSize="sm" noOfLines={3}>{description}</Text>
            <HStack fontWeight="bold" spacing={2} color="brand.600">
              <Text fontSize="xs">{isAr ? "عرض التفاصيل" : "View Details"}</Text>
              <Box as={isAr ? FaArrowLeft : FaArrowRight} />
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Link>
  );
};

export default Card;