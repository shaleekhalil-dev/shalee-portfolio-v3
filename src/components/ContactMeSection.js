import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { 
  Box, Button, FormControl, FormLabel, Heading, Input, 
  VStack, Container, Textarea, useToast, Select, Text
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContactMeSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw2e3bZuaj55pKQTVg872NpZ_N-QANX77NrMKlPB1XIbT6kdAi9hj3KtEzCv9iSWgkH/exec";

  const formik = useFormik({
    initialValues: { firstName: "", email: "", category: "Programming", comment: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required(isAr ? "الحقل مطلوب" : "Required"),
      email: Yup.string().email(isAr ? "بريد غير صحيح" : "Invalid email").required(isAr ? "الحقل مطلوب" : "Required"),
      comment: Yup.string().min(10, isAr ? "١٠ رموز على الأقل" : "Min 10 characters").required(isAr ? "الحقل مطلوب" : "Required"),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("firstName", values.firstName);
        params.append("email", values.email);
        params.append("category", values.category);
        params.append("comment", values.comment);

        await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body: params });

        toast({
          title: isAr ? "تم الإرسال" : "Message Sent",
          description: isAr ? "شكراً لتواصلك، سأرد عليك قريباً." : "Thank you, I will reply soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        actions.resetForm();
      } catch (error) {
        toast({
          title: isAr ? "خطأ" : "Error",
          status: "error",
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Box as="section" id="contactme-section" py={20}>
      <Container maxW="container.md">
        <MotionBox
          className="glass-card"
          p={{ base: 6, md: 12 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <VStack spacing={8} align="stretch">
            <VStack spacing={2} align="center">
              <Heading color="brand.900" size="xl" fontWeight="900">{t("nav_contact")}</Heading>
              <Box w="50px" h="3px" bg="brand.500" borderRadius="full" />
            </VStack>

            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5}>
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_name")}</FormLabel>
                  <Input name="firstName" {...formik.getFieldProps("firstName")} bg="whiteAlpha.600" borderColor="brand.200" h="50px" _focus={{ borderColor: "brand.500" }} />
                </FormControl>

                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_email")}</FormLabel>
                  <Input name="email" type="email" {...formik.getFieldProps("email")} bg="whiteAlpha.600" borderColor="brand.200" h="50px" />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_type")}</FormLabel>
                  <Select name="category" {...formik.getFieldProps("category")} bg="whiteAlpha.600" borderColor="brand.200" h="50px">
                    <option value="Programming">{isAr ? "برمجة وحلول رقمية" : "Programming & Dev"}</option>
                    <option value="Consultation">{isAr ? "استشارة إدارية / نفسية" : "HR / Psych Consultation"}</option>
                    <option value="Literary">{isAr ? "استفسار أدبي" : "Literary Inquiry"}</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_message")}</FormLabel>
                  <Textarea name="comment" {...formik.getFieldProps("comment")} bg="whiteAlpha.600" borderColor="brand.200" rows={5} />
                </FormControl>

                <Button type="submit" isLoading={isLoading} bg="brand.900" color="white" w="full" h="60px" fontSize="lg" fontWeight="900" _hover={{ bg: "brand.700", transform: "translateY(-2px)" }}>
                  {t("form_submit")}
                </Button>
              </VStack>
            </form>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactMeSection;