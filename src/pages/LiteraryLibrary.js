import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  Image, HStack, Button, Link, Badge, Icon, Divider 
} from "@chakra-ui/react";
import { FaAmazon, FaGooglePlay, FaBookOpen } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const LiteraryLibrary = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const bookGroups = [
    {
      id: 1,
      image: "https://drive.google.com/thumbnail?id=1WcDemkg50UHetNAY7pHsdc6vjX92on_9",
      titleAr: "طائر الفينيق: عندما نشرق من جديد",
      titleEn: "The Phoenix: Mastering the Sovereignty of the Healer",
      statusAr: "نسخة كاملة مجانية",
      statusEn: "Full Free Edition",
      isFree: true
    },
    {
      id: 2,
      image: "https://drive.google.com/thumbnail?id=1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah",
      titleAr: "هل جربت أن تحلم؟",
      titleEn: "Have You Ever Tried to Dream",
      statusAr: "متاح (الجزء الأول مجاناً)",
      statusEn: "Available (Part 1 Free)",
      isFree: false
    },
    {
      id: 3,
      image: "https://drive.google.com/thumbnail?id=1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ",
      titleAr: "هندسة الأصداء: الأدب القاسي",
      titleEn: "The Architecture of Echoes",
      statusAr: "إصدار بـ ٣ لغات",
      statusEn: "3-Language Edition",
      isFree: false
    },
    {
      id: 4,
      image: "https://drive.google.com/thumbnail?id=1k83W3foPlgOX-GiHG3tEkO73obDmjdk0",
      titleAr: "دوائر الذاكرة المحرمة",
      titleEn: "Circles of Forbidden Memory",
      statusAr: "القصة الكاملة",
      statusEn: "The Complete Story",
      isFree: false
    },
    {
      id: 5,
      image: "https://drive.google.com/thumbnail?id=1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF",
      titleAr: "الرقصة الأخيرة: هروب نحو الحياة",
      titleEn: "The Last Dance of the Escape",
      statusAr: "إصدار خاص",
      statusEn: "Special Edition",
      isFree: false
    },
    {
      id: 6,
      image: "https://drive.google.com/thumbnail?id=1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw",
      titleAr: "عبير وشادي: ترانيم الحب",
      titleEn: "Shadi & Abeer: Love Hymns",
      statusAr: "النسخة العامية مجانية",
      statusEn: "Slang Version Free",
      isFree: true
    },
    {
      id: 7,
      image: "https://drive.google.com/thumbnail?id=1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V",
      titleAr: "تركت: مذكرات سارة",
      titleEn: "Left: Sarah's Diaries",
      statusAr: "عينة مجانية (٣٥٪)",
      statusEn: "Free Sample (35%)",
      isFree: true
    }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">{t("library_title")}</Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
            <Text fontSize="lg" color="brand.700" fontWeight="bold">
              {isAr ? "رحلة الكلمة من الورق إلى الوعي الرقمي" : "A journey of words from paper to digital consciousness"}
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {bookGroups.map((book, idx) => (
              <MotionBox 
                key={book.id} 
                className="glass-card" 
                p={6}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                _hover={{ transform: "translateY(-10px)", shadow: "2xl" }}
              >
                <Image 
                  src={book.image} 
                  alt={book.titleAr} 
                  borderRadius="xl" 
                  mb={6} 
                  h="300px" 
                  w="full" 
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/300x400?text=Book+Cover"
                />
                
                <VStack align="start" spacing={3} mb={6}>
                  <Badge colorScheme={book.isFree ? "green" : "blue"} variant="solid" borderRadius="full" px={3}>
                    {isAr ? book.statusAr : book.statusEn}
                  </Badge>
                  <Heading size="md" color="brand.900">{isAr ? book.titleAr : book.titleEn}</Heading>
                  <Text fontSize="sm" color="brand.700" fontWeight="bold" opacity={0.8}>
                    {isAr ? book.titleEn : book.titleAr}
                  </Text>
                </VStack>

                <Button 
                  as={Link} 
                  href="#" 
                  isExternal 
                  w="full" 
                  leftIcon={<FaBookOpen />} 
                  colorScheme="teal" 
                  size="sm"
                >
                  {isAr ? "تصفح المؤلف" : "Browse Work"}
                </Button>
              </MotionBox>
            ))}
          </SimpleGrid>

          <Divider borderColor="brand.200" />

          <Box className="glass-card" p={10} textAlign="center">
            <Heading size="lg" color="brand.900" mb={8}>
              {isAr ? "المتاجر والمنصات الرسمية" : "Official Stores & Platforms"}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Button 
                as={Link} 
                href="https://www.amazon.com/author/shaleekhalil" 
                isExternal 
                size="lg" 
                bg="#FF9900" 
                color="white" 
                _hover={{ bg: "#e68a00" }} 
                leftIcon={<FaAmazon />}
              >
                {t("btn_amazon")}
              </Button>
              <Button 
                as={Link} 
                href="https://play.google.com/store/books/author?id=Shalee+Khalil" 
                isExternal 
                size="lg" 
                variant="outline" 
                colorScheme="blue" 
                leftIcon={<FaGooglePlay />}
              >
                {t("btn_google_books")}
              </Button>
            </SimpleGrid>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};

export default LiteraryLibrary;