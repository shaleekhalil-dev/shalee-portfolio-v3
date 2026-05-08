import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  HStack, Tag, Button, Link, Icon, Divider, Flex
} from "@chakra-ui/react";
import { 
  FaGithub, FaRocket, FaChartLine, FaCarSide, FaCode, 
  FaExternalLinkAlt, FaEye, FaArrowRight, FaArrowLeft, FaBrain, FaRobot 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TechProjects = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  const projects = [
    {
      title: isAr ? "كاشف الانفعالات بالذكاء الاصطناعي" : "AI Emotion Detector",
      description: isAr 
        ? "تطبيق تفاعلي متقدم يعتمد على الذكاء الاصطناعي لتحليل تعبيرات الوجه والانفعالات البشرية في الوقت الفعلي." 
        : "Advanced interactive AI application for real-time human emotion and facial expression analysis.",
      tags: ["AI", "React", "Vision"],
      live: "https://emotion-detector-app-six.vercel.app/",
      icon: FaRobot,
      color: "purple.500"
    },
    {
      title: isAr ? "منصة أنسنة بيئات العمل (PsyCap)" : "Workforce Humanization (PsyCap)",
      description: isAr 
        ? "تطبيق رائد لمسح انطباعات الموظفين وتطوير رأس المال النفسي لتعزيز المرونة والابتكار في المؤسسات الرقمية." 
        : "Pioneering app for employee sentiment mapping and PsyCap development to enhance organizational resilience.",
      tags: ["PsyCap", "AI", "Frontend"],
      live: "https://psycap-frontend.vercel.app/",
      icon: FaBrain,
      color: "pink.500"
    },
    {
      title: isAr ? "التحليل الاستراتيجي لشركة Tech-Line" : "Tech-Line Strategic Analysis",
      description: isAr 
        ? "تقرير تقني مفصل تم إعداده باستخدام أدوات بايثون لتحليل أثر التدريب على أداء الموظفين وتحقيق التميز." 
        : "Detailed technical report using Python tools to analyze training impact on employee performance and excellence.",
      tags: ["Python", "Data Analysis", "HRM"],
      presentation: "https://drive.google.com/file/d/1xxkr13xeV13uqdBSHONeQ0p5hSAcoAYw/view?usp=sharing",
      icon: FaChartLine,
      color: "teal.500"
    },
    {
      title: isAr ? "التنبؤ بنجاح هبوط SpaceX Falcon 9" : "SpaceX Falcon 9 Landing Prediction",
      description: isAr 
        ? "مشروع متكامل يستخدم API و SQL لبناء نماذج تعلم آلي تتنبأ بنجاح هبوط معززات الصواريخ بدقة 83.3%." 
        : "End-to-end DS project using API & ML to predict rocket landing success with 83.3% accuracy.",
      tags: ["Python", "ML", "SpaceX"],
      github: "https://github.com/shaleekhalil-dev/-Data-Collection-API-with-Webscraping",
      icon: FaRocket,
      color: "blue.500"
    },
    {
      title: isAr ? "لوحة التحكم الاستراتيجية للسيارات" : "Automotive Strategic Dashboard",
      description: isAr 
        ? "منصة تحليلية تفاعلية لدراسة أثر الأزمات الاقتصادية على مبيعات السيارات باستخدام Python و Dash." 
        : "Interactive analytics platform studying economic crisis impact on car sales using Python & Dash.",
      tags: ["Python", "Dash", "Strategy"],
      github: "https://github.com/shaleekhalil-dev/Automotive-Strategic-Dashboard",
      icon: FaCarSide,
      color: "red.500"
    },
    {
      title: isAr ? "متصور بيانات سوق الأسهم" : "Stock Data Visualizer",
      description: isAr 
        ? "أداة تفاعلية لاستخراج بيانات الأسهم التاريخية وتحويلها إلى مخططات بصرية تدعم اتخاذ القرار المالي." 
        : "Interactive tool to visualize historical stock data, turning numbers into actionable financial charts.",
      tags: ["Python", "FinTech", "Viz"],
      github: "https://github.com/shaleekhalil-dev/Stock-Data-Visualizer",
      icon: FaChartLine,
      color: "cyan.500"
    },
    {
      title: isAr ? "بيئة علوم البيانات المتكاملة" : "Data Science Ecosystem",
      description: isAr 
        ? "مستودع يجسد مهارات تحليل البيانات الكبيرة باستخدام أدوات IBM و Google لبناء نماذج سلوك المستهلك." 
        : "Comprehensive repository showcasing Big Data skills using IBM & Google tools for consumer modeling.",
      tags: ["IBM", "Big Data", "DS"],
      github: "https://github.com/shaleekhalil-dev/Data-Science-Ecosystem-Project",
      icon: FaCode,
      color: "green.500"
    },
    {
      title: "Little Lemon Ordering System",
      description: isAr 
        ? "نظام كامل لطلب الطعام يشمل تطوير API وتطبيقات موبايل تم بناؤه كمشروع متكامل وفعال." 
        : "Full food ordering system encompassing API development and mobile apps built as a production project.",
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
            <HStack justify="center" spacing={4}>
              <Heading size="2xl" color="brand.900" fontWeight="900">
                {isAr ? "المشاريع التقنية" : "Technical Projects"}
              </Heading>
              <Icon as={ArrowIcon} color="brand.500" boxSize={8} />
            </HStack>
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
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10, bg: "whiteAlpha.300", boxShadow: "2xl", borderColor: "brand.500" }}
              >
                <HStack justify="space-between" mb={6}>
                  <Box p={3} bg={`${project.color.split('.')[0]}.100`} borderRadius="xl">
                    <Icon as={project.icon} w={8} h={8} color={project.color} />
                  </Box>
                  <Flex wrap="wrap" gap={2} justify="flex-end">
                    {project.tags.map(tag => (
                      <Tag key={tag} size="sm" variant="solid" colorScheme="blue">
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                </HStack>

                <Heading size="md" color="brand.900" mb={4}>{project.title}</Heading>
                <Text color="brand.800" fontSize="sm" lineHeight="tall" mb={6} minH="60px">
                  {project.description}
                </Text>

                <Divider mb={6} borderColor="whiteAlpha.400" />

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                  {project.github && (
                    <Button as={Link} href={project.github} isExternal leftIcon={<FaGithub />} size="sm" variant="solid" bg="brand.900" color="white" _hover={{ bg: "brand.700" }}>
                      GitHub
                    </Button>
                  )}
                  
                  {project.presentation && (
                    <Button as={Link} href={project.presentation} isExternal leftIcon={<FaEye />} size="sm" variant="outline" colorScheme="blue">
                      {isAr ? "تقرير المشروع" : "Strategic Report"}
                    </Button>
                  )}

                  {project.live && (
                    <Button as={Link} href={project.live} isExternal leftIcon={<FaExternalLinkAlt />} size="sm" variant="outline" colorScheme="orange">
                      {isAr ? "معاينة حية" : "Live Demo"}
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