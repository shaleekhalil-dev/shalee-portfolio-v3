import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  Icon, Link, Badge, Divider, HStack, Tag 
} from "@chakra-ui/react";
import { FaGoogle, FaBrain, FaCode, FaGraduationCap } from "react-icons/fa";
import { SiIbm, SiMeta } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Certifications = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const academicPath = [
    { 
      degree: isAr ? "ماجستير إدارة الموارد البشرية التطبيقية" : "Master of Applied Human Resource Management", 
      status: isAr ? "قيد الدراسة حالياً" : "Currently Pursuing",
      goal: isAr ? "الهدف القادم: دكتوراه في إدارة الأعمال (DBA)" : "Next: PhD in Business Administration (DBA)",
      url: "https://sites.google.com/view/shaleekhalilresearches"
    },
    { degree: isAr ? "الدبلوم البريطاني (2025): ممارس كوتشينج فعال و NLP" : "British Diploma (2025): Effective Coaching & NLP Practitioner", org: "Auspicium (UK)" },
    { degree: isAr ? "بكالوريوس التعليم الأساسي" : "Bachelor of Basic Education", org: isAr ? "جامعة القدس المفتوحة" : "Al-Quds Open University" }
  ];

  const googleCerts = [
    "Data Analytics", "Google AI Professional", "Project Management", "UX Design", 
    "Cybersecurity", "IT Support", "Digital Marketing & E-commerce", 
    "Prompting Essentials", "People Management Essentials"
  ];

  const engineeringCerts = [
    { title: "Meta Full-Stack Engineer", icon: SiMeta, url: "https://www.coursera.org/account/accomplishments/specialization/UGELP6MYNCJY" },
    { title: "IBM Full Stack Developer", icon: SiIbm, url: "https://www.coursera.org/account/accomplishments/specialization/W9D3R7395EI3" },
    { title: "Meta iOS Developer", icon: SiMeta },
    { title: "Meta Android Developer", icon: SiMeta },
    { title: "IBM Data Engineering", icon: SiIbm },
    { title: "IBM DevOps & Software Engineering", icon: SiIbm }
  ];

  const psychCerts = [
    { name: isAr ? "علم النفس غير الطبيعي" : "Abnormal Psychology", org: "Wesleyan" },
    { name: isAr ? "سيكولوجية الصدمة والقلق" : "Trauma & Anxiety Psychology", org: "APA" },
    { name: isAr ? "الإسعافات الأولية النفسية" : "Psychological First Aid", org: "Johns Hopkins" },
    { name: isAr ? "الطب النفسي الإيجابي" : "Positive Psychiatry", org: "Sydney" }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">{t("learning_journey_title")}</Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>

          <Box>
            <HStack mb={8}><Icon as={FaGraduationCap} w={8} h={8} color="brand.600"/><Heading size="xl" color="brand.900">{isAr ? "المسار الأكاديمي" : "Academic Path"}</Heading></HStack>
            <VStack spacing={6}>
              {academicPath.map((item, i) => (
                <Box key={i} className="glass-card" p={8} w="full" borderLeft={isAr ? "none" : "6px solid #0c4a6e"} borderRight={isAr ? "6px solid #0c4a6e" : "none"}>
                  <VStack align="start" spacing={2}>
                    <Tag colorScheme="blue" variant="solid" borderRadius="full">{item.org || item.status}</Tag>
                    <Text fontSize="xl" fontWeight="800" color="brand.900">{item.degree}</Text>
                    {item.goal && <Text color="brand.600" fontWeight="bold">✦ {item.goal}</Text>}
                    {item.url && <Link href={item.url} isExternal color="blue.500" fontWeight="bold" fontSize="sm">{isAr ? "استعراض الأبحاث ↗" : "View Research ↗"}</Link>}
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>

          <Box>
            <HStack mb={8}><Icon as={FaGoogle} w={8} h={8} color="red.500"/><Heading size="xl" color="brand.900">Google Professional Suite</Heading></HStack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {googleCerts.map((cert, i) => (
                <MotionBox key={i} className="glass-card" p={6} whileHover={{ y: -5 }}>
                  <Text fontWeight="800" color="brand.900" mb={2}>{cert}</Text>
                  <Badge colorScheme="red" variant="subtle">Professional</Badge>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <HStack mb={8}><Icon as={FaCode} w={8} h={8} color="brand.600"/><Heading size="xl" color="brand.900">{isAr ? "الهندسة وتطوير البرمجيات" : "Software Engineering"}</Heading></HStack>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {engineeringCerts.map((cert, i) => (
                <HStack key={i} p={6} bg="whiteAlpha.900" borderRadius="2xl" border="2px solid" borderColor="brand.900" shadow="md" transition="0.3s" _hover={{ shadow: "xl", transform: "translateY(-5px)" }}>
                  <Icon as={cert.icon} w={10} h={10} color="brand.900" />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="900" color="brand.900" fontSize="lg">{cert.title}</Text>
                    {cert.url ? (
                      <Link href={cert.url} isExternal fontSize="xs" color="blue.600" fontWeight="bold">Verify Credential</Link>
                    ) : (
                      <Text fontSize="xs" color="gray.500">Professional Certification</Text>
                    )}
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <HStack mb={8}><Icon as={FaBrain} w={8} h={8} color="purple.500"/><Heading size="xl" color="brand.900">{isAr ? "اعتمادات القيادة وعلم النفس" : "Psychology & Leadership"}</Heading></HStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {psychCerts.map((cert, i) => (
                <Box key={i} className="glass-card" p={6} textAlign="center">
                  <VStack spacing={3}>
                    <Tag colorScheme="purple" variant="solid">{cert.org}</Tag>
                    <Text fontWeight="800" color="brand.900">{cert.name}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Certifications;