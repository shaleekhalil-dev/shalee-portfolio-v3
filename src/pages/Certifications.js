import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  HStack, Button, Link, Badge, Icon, Divider, Flex, Tooltip 
} from "@chakra-ui/react";
import { 
  FaGraduationCap, FaCheckCircle, FaExternalLinkAlt, FaAward, 
  FaBrain, FaRobot, FaChalkboardTeacher, FaUserTie, FaArrowRight, FaArrowLeft 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Certifications = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  // 1. المهارات والشهادات الموثقة مقسمة حسب المجال
  const techSection = {
    title: isAr ? "التقنية والذكاء الاصطناعي" : "Tech & AI",
    icon: FaRobot,
    color: "purple.500",
    linkedCerts: [
      { name: "Google Project Management", link: "https://www.coursera.org/account/accomplishments/specialization/A1CTHFP66S19" },
      { name: "Google Data Analytics", link: "https://www.coursera.org/account/accomplishments/specialization/CXSSXUYQUK2Z" },
      { name: "IT Support Professional", link: "https://www.coursera.org/account/accomplishments/specialization/I277KR9Z7E37" }
    ],
    skills: [
      { name: "Python", color: "blue" },
      { name: "AI & GenAI", color: "purple" },
      { name: "Prompt Engineering", color: "pink" },
      { name: "Machine Learning", color: "purple" },
      { name: "Full-Stack Dev", color: "orange" },
      { name: "Cybersecurity", color: "red" }
    ]
  };

  const psychSection = {
    title: isAr ? "العلوم النفسية والكوتشينج" : "Psychology & Coaching",
    icon: FaBrain,
    color: "green.500",
    linkedCerts: [
      { name: "Abnormal Psychology", link: "https://www.coursera.org/account/accomplishments/specialization/TZ0E4I1PHRE6" },
      { name: "Psychological First Aid", link: "https://www.coursera.org/account/accomplishments/verify/9NAPCRKIBFB8" },
      { name: "Health Coaching", link: "https://www.coursera.org/account/accomplishments/verify/UEL4DAW0DNN4" }
    ],
    skills: [
      { name: "Trauma Support", color: "green" },
      { name: "NLP Practitioner", color: "purple" },
      { name: "Emotional Intelligence", color: "pink" },
      { name: "Positive Psychiatry", color: "green" },
      { name: "Crisis Intervention", color: "red" }
    ]
  };

  const leadSkills = [
    { name: "Agile Management", color: "orange" },
    { name: "Strategic HRM", color: "orange" },
    { name: "Leading with Impact", color: "red" },
    { name: "Change Management", color: "orange" }
  ];

  const eduSkills = [
    { name: "Instructional Design", color: "teal" },
    { name: "E-Learning", color: "teal" },
    { name: "TOT Certified", color: "green" },
    { name: "Teaching Strategies", color: "green" }
  ];

  const education = [
    { year: "Future", titleAr: "دكتوراه DBA", titleEn: "Doctorate DBA", descAr: "أنسنة بيئات العمل الرقمية", isFuture: true },
    { year: "2026", titleAr: "ماجستير إدارة الموارد البشرية", titleEn: "Master's HRM", badge: "In Progress" },
    { year: "2023", titleAr: "دبلوم عالي: تأهيل معلمين", titleEn: "Higher Diploma: Teacher Qual." },
    { year: "2021", titleAr: "دبلوم مهني: تصميم التعليم", titleEn: "Professional Diploma: EdTech" },
    { year: "2015", titleAr: "بكالوريوس التعليم الأساسي", titleEn: "Bachelor's Basic Education" }
  ];

  // مكون الصندوق الزجاجي للمهارات
  const SkillMatrixBox = ({ sectionData }) => (
    <MotionBox 
      className="glass-card" 
      p={6} 
      h="full" 
      bg="whiteAlpha.200" 
      backdropFilter="blur(10px)"
      whileHover={{ y: -10, boxShadow: "2xl", bg: "whiteAlpha.300" }}
      transition={{ duration: 0.3 }}
    >
      <VStack align="stretch" spacing={5}>
        <HStack justify="space-between">
          <HStack spacing={3}>
            <Icon as={sectionData.icon} color={sectionData.color} boxSize={6} />
            <Heading size="md" color="brand.800">{sectionData.title}</Heading>
          </HStack>
          <Icon as={ArrowIcon} color="brand.400" />
        </HStack>

        {/* التوثيقات المباشرة لكل مجال */}
        {sectionData.linkedCerts && (
          <VStack align="stretch" spacing={2} pb={2}>
            {sectionData.linkedCerts.map((cert, idx) => (
              <HStack key={idx} justify="space-between" p={2} borderRadius="md" bg="whiteAlpha.400" fontSize="xs">
                <Text fontWeight="bold">{cert.name}</Text>
                <Button as={Link} href={cert.link} isExternal size="2xs" colorScheme="blue" variant="ghost" rightIcon={<FaExternalLinkAlt />}>Verify</Button>
              </HStack>
            ))}
          </VStack>
        )}

        <Divider borderColor="whiteAlpha.400" />

        {/* المهارات على شكل دوائر صغيرة منبثقة */}
        <Flex flexWrap="wrap" gap={3}>
          {sectionData.skills.map((skill, idx) => (
            <MotionBox key={idx} whileHover={{ scale: 1.2 }}>
              <Badge 
                colorScheme={skill.color} 
                variant="solid" 
                px={3} py={1} 
                borderRadius="full" 
                fontSize="2xs" 
                textTransform="none"
                cursor="default"
              >
                {skill.name}
              </Badge>
            </MotionBox>
          ))}
        </Flex>
      </VStack>
    </MotionBox>
  );

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">
              {isAr ? "الاعتمادات والمحراب العلمي" : "Accreditations & Sanctuary"}
            </Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>

          {/* المسار الأكاديمي الزجاجي */}
          <Box>
            <HStack mb={8} spacing={4}>
              <Icon as={FaGraduationCap} boxSize={8} color="brand.500" />
              <Heading size="lg">المسار الأكاديمي</Heading>
              <Icon as={ArrowIcon} color="brand.500" boxSize={5} />
            </HStack>
            <VStack align="stretch" spacing={4}>
              {education.map((edu, i) => (
                <MotionBox 
                  key={i} 
                  className="glass-card" 
                  p={5} 
                  bg="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  borderLeft={edu.isFuture ? "6px solid #805AD5" : "none"}
                  whileHover={{ scale: 1.02, bg: "whiteAlpha.300", x: isAr ? -10 : 10 }}
                >
                  <HStack justify="space-between">
                    <VStack align="start" spacing={0}>
                      <Badge colorScheme={edu.isFuture ? "purple" : "teal"}>{edu.year}</Badge>
                      <Text fontWeight="bold" fontSize="lg" color="brand.900">{isAr ? edu.titleAr : edu.titleEn}</Text>
                      {edu.descAr && <Text fontSize="xs" opacity={0.7}>{isAr ? edu.descAr : edu.descEn}</Text>}
                    </VStack>
                    {edu.badge && <Badge colorScheme="orange" variant="solid">{edu.badge}</Badge>}
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* مصفوفة الكفايات التخصصية - إعادة توزيع الشهادات والمهارات */}
          <Box>
            <HStack mb={8} spacing={4}>
              <Icon as={FaAward} boxSize={8} color="brand.500" />
              <Heading size="lg">مصفوفة الكفايات التخصصية</Heading>
              <Icon as={ArrowIcon} color="brand.500" boxSize={5} />
            </HStack>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              {/* قسم التقنية */}
              <SkillMatrixBox sectionData={techSection} />
              
              {/* قسم النفسية */}
              <SkillMatrixBox sectionData={psychSection} />

              {/* قسم الإدارة */}
              <SkillMatrixBox sectionData={{
                title: isAr ? "القيادة والإدارة" : "Leadership & Mgmt",
                icon: FaUserTie,
                color: "orange.500",
                skills: leadSkills
              }} />

              {/* قسم التعليم */}
              <SkillMatrixBox sectionData={{
                title: isAr ? "التعليم وتصميم المحتوى" : "Education & Design",
                icon: FaChalkboardTeacher,
                color: "teal.500",
                skills: eduSkills
              }} />
            </SimpleGrid>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};

export default Certifications;