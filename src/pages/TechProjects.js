import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  HStack, Tag, Button, Link, Icon, Divider 
} from "@chakra-ui/react";
import { FaGithub, FaRocket, FaChartLine, FaCarSide, FaCode, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TechProjects = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const projects = [
    {
      title: isAr ? "التنبؤ بنجاح هبوط SpaceX Falcon 9" : "SpaceX Falcon 9 Landing Prediction",
      description: isAr 
        ? "مشروع متكامل يستخدم API و Webscraping و SQL لبناء نماذج تعلم آلي تتنبأ بنجاح هبوط معززات الصواريخ بدقة 83.3%." 
        : "End-to-end data science project using API, Webscraping, and ML to predict rocket landing success with 83.3% accuracy.",
      tags: ["Python", "Machine Learning", "SQL"],
      github: "https://github.com/shaleekhalil-dev/-Data-Collection-API-with-Webscraping.git",
      presentation: "https://drive.google.com/file/d/13T0aQnko6bL9S4-V_ni0wZTlM1jz_6kN/view?usp=sharing",
      icon: FaRocket,
      color: "blue.500"
    },
    {
      title: isAr ? "لوحة التحكم الاستراتيجية لقطاع السيارات" : "Automotive Strategic Dashboard",
      description: isAr 
        ? "منصة تحليلية تفاعلية لدراسة أثر الأزمات الاقتصادية على مبيعات السيارات باستخدام Python و Dash لتحقيق التميز التشغيلي." 
        : "Interactive analytics platform studying economic crisis impact on car sales using Python and Dash for operational excellence.",
      tags: ["Python", "Dash", "Strategy"],
      github: "https://github.com/shaleekhalil-dev/Automotive-Strategic-Dashboard",
      example: "#",
      icon: FaCarSide,
      color: "red.500"
    },
    {
      title: isAr ? "بيئة علوم البيانات المتكاملة" : "Data Science Ecosystem",
      description: isAr 
        ? "مستودع يجسد مهارات تحليل البيانات الكبيرة باستخدام أدوات IBM و Google لبناء نماذج تنبؤية لسلوك المستهلك." 
        : "Comprehensive repository showcasing Big Data skills using IBM & Google tools to build predictive consumer models.",
      tags: ["IBM Tools", "Big Data", "Analytics"],
      github: "https://github.com/shaleekhalil-dev/Data-Science-Ecosystem-Project",
      example: "#",
      icon: FaChartLine,
      color: "green.500"
    },
    {
      title: isAr ? "متصور بيانات سوق الأسهم" : "Stock Data Visualizer",
      description: isAr 
        ? "أداة تفاعلية لاستخراج وعرض بيانات الأسهم التاريخية وتحويل الأرقام المالية الجافة إلى مخططات بصرية تدعم اتخاذ القرار." 
        : "Interactive tool to extract and visualize historical stock data, turning dry financial numbers into actionable charts.",
      tags: ["Python", "FinTech", "Data Viz"],
      github: "https://github.com/shaleekhalil-dev/Stock-Data-Visualizer",
      example: "#",
      icon: FaChartLine,
      color: "purple.500"
    },
    {
      title: "Little Lemon API & Ordering System",
      description: isAr 
        ? "نظام كامل لطلب الطعام يشمل تطوير API وتطبيقات موبايل (iOS/Android) تم بناؤه كمشروع متكامل وفعال." 
        : "Full food ordering system encompassing API development and mobile apps, built as a fully functional production project.",
      tags: ["React", "Django", "Mobile"],
      github: "https://github.com/shaleekhalil-dev",
      live: "https://shaleekhalil-dev.github.io/LittleLemonstore/",
      icon: FaCode,
      color: "orange.500"
    }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">{t("tech_projects_title")}</Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
            <Text fontSize="lg" color="brand.700" fontWeight="bold">
              {isAr ? "حلول رقمية بلمسة إنسانية تعتمد على البيانات" : "Data-driven digital solutions with a human touch"}
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {projects.map((project, index) => (
              <MotionBox 
                key={index} 
                className="glass-card" 
                p={8}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                _hover={{ transform: "translateY(-10px)", shadow: "2xl", borderColor: "brand.500" }}
              >
                <HStack justify="space-between" mb={6}>
                  <Box p={3} bg={`${project.color.split('.')[0]}.100`} borderRadius="xl">
                    <Icon as={project.icon} w={8} h={8} color={project.color} />
                  </Box>
                  <HStack spacing={2}>
                    {project.tags.map(tag => (
                      <Tag key={tag} size="sm" variant="solid" colorScheme="blue">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                </HStack>

                <Heading size="md" color="brand.900" mb={4}>{project.title}</Heading>
                <Text color="brand.800" fontSize="sm" lineHeight="tall" mb={6} minH="60px">
                  {project.description}
                </Text>

                <Divider mb={6} borderColor="brand.100" />

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                  <Button as={Link} href={project.github} isExternal leftIcon={<FaGithub />} size="sm" variant="solid" bg="brand.900" color="white" _hover={{ bg: "brand.700" }}>
                    GitHub
                  </Button>
                  
                  {project.presentation && (
                    <Button as={Link} href={project.presentation} isExternal leftIcon={<FaExternalLinkAlt />} size="sm" variant="outline" colorScheme="blue">
                      {isAr ? "العرض التقديمي" : "Presentation"}
                    </Button>
                  )}

                  {project.live && (
                    <Button as={Link} href={project.live} isExternal leftIcon={<FaExternalLinkAlt />} size="sm" variant="outline" colorScheme="orange">
                      {isAr ? "زيارة الموقع" : "Visit Site"}
                    </Button>
                  )}

                  {project.example && (
                    <Button as={Link} href={project.example} isExternal leftIcon={<FaEye />} size="sm" variant="outline" colorScheme="teal">
                      {isAr ? "عرض مثال" : "View Example"}
                    </Button>
                  )}
                </SimpleGrid>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TechProjects;