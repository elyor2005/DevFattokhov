/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useFormik, FormikErrors, FormikProps } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowRight,
  User,
  MessageSquare,
  CheckCircle,
  LoaderCircle,
  Building,
} from "lucide-react";
import { toast } from "react-toastify";
import { cn } from "@/src/utils/cn";
import { SendMessage } from "@/src/utils/message/send-message";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { socialLinks } from "@/src/const/socials";
import SocialCard from "@/src/components/ui/SocialCard";

// ----------------------
// Types & Constants
// ----------------------

interface FormValues {
  fullname: string;
  email: string;
  company?: string;
  message: string;
}

// ----------------------
// Components
// ----------------------

const FormField = ({
  Icon,
  name,
  type = "text",
  as = "input",
  placeholder,
  rows,
  form,
  label,
}: {
  Icon: any;
  name: keyof FormValues;
  type?: string;
  as?: "input" | "textarea";
  placeholder: string;
  rows?: number;
  form: FormikProps<FormValues>;
  label: string;
}) => {
  const Tag = as;
  const error = form.touched[name] && form.errors[name];
  const value = form.values[name];

  return (
    <div className="group space-y-2">
      <label className="text-sm font-medium text-gray-300 ml-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-[#007AFF] transition-colors duration-300" />
        <Tag
          type={type}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={cn(
            "w-full pl-12 pr-4 py-4 bg-white/5 border rounded-2xl text-white placeholder-gray-500 outline-none transition-all duration-300",
            "hover:bg-white/10 hover:shadow-sm",
            "focus:bg-white/10 focus:border-[#007AFF]/50 focus:ring-4 focus:ring-[#007AFF]/10 focus:shadow-lg",
            error
              ? "border-red-500/50 focus:border-red-500/60 focus:ring-red-500/10"
              : "border-white/10",
            as === "textarea" ? "resize-none min-h-[160px]" : "",
          )}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-400 text-sm ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// ----------------------
// Main Page Component
// ----------------------

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailAddress = "elyorabdufattokhov@gmail.com";
  const t = useTranslations("contact");
  const tForm = useTranslations("contact.form");

  const form = useFormik<FormValues>({
    initialValues: {
      fullname: "",
      email: "",
      company: "",
      message: "",
    },
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.fullname.trim())
        errors.fullname = tForm("errors.fullnameRequired");
      if (!values.email.trim()) {
        errors.email = tForm("errors.emailRequired");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = tForm("errors.emailInvalid");
      }
      if (!values.message.trim())
        errors.message = tForm("errors.messageRequired");
      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const formattedMessage = `
🙋‍♂️ Name: ${values.fullname}
📧 Email: ${values.email}
🏢 Company: ${values.company || "N/A"}
✍️ Message: ${values.message}
`;
        await SendMessage(formattedMessage);
        toast.success(tForm("success"));
        resetForm();
        setIsSubmitted(true);
      } catch (error) {
        console.error(error);
        toast.error(tForm("error"));
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <div className="py-24 sm:py-32">
        <Container>
          <SectionHeader
            title={t("title")}
            hideToggle={true}
            description={t("description")}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 pb-20">
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#0A0A0B] rounded-[2.5rem] p-8 sm:p-10 shadow-premium border border-white/10 backdrop-blur-xl relative overflow-hidden"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                  <div className="relative z-10">
                    <AnimatePresence mode="wait">
                      {!isSubmitted ? (
                        <motion.form
                          key="form"
                          onSubmit={form.handleSubmit}
                          className="space-y-6"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              Icon={User}
                              name="fullname"
                              placeholder="John Smith"
                              label={tForm("yourName")}
                              form={form}
                            />
                            <FormField
                              Icon={Mail}
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              label={tForm("email")}
                              form={form}
                            />
                          </div>

                          <FormField
                            Icon={Building}
                            name="company"
                            placeholder="Company Inc. (Optional)"
                            label={tForm("company")}
                            form={form}
                          />

                          <FormField
                            Icon={MessageSquare}
                            name="message"
                            as="textarea"
                            placeholder="Tell me about your project..."
                            label={tForm("message")}
                            form={form}
                          />

                          <div className="pt-4">
                            <motion.button
                              type="submit"
                              disabled={form.isSubmitting}
                              className="w-full sm:w-auto relative group bg-[#007AFF] text-white font-semibold py-4 px-8 rounded-2xl disabled:opacity-50 transition-all hover:bg-[#0066CC] hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 overflow-hidden"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {form.isSubmitting ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                >
                                  <LoaderCircle className="h-5 w-5" />
                                </motion.div>
                              ) : (
                                <>
                                  <span>{tForm("sendMessage")}</span>
                                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                              )}

                              {/* Shine Effect */}
                              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                            </motion.button>
                          </div>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center py-20 text-center"
                        >
                          <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-6 shadow-sm border border-green-500/20">
                            <CheckCircle className="w-12 h-12 text-green-400" />
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                            {tForm("messageSent")}
                          </h3>
                          <p className="text-gray-400 text-lg mb-8 max-w-md">
                            {tForm("messageSentDescription")}{" "}
                            <a
                              href={`mailto:${emailAddress}`}
                              className="text-[#007AFF] font-medium hover:underline"
                            >
                              {emailAddress}
                            </a>
                          </p>
                          <button
                            onClick={() => setIsSubmitted(false)}
                            className="px-8 py-4 bg-white/10 border border-white/5 rounded-2xl text-white font-medium hover:bg-white/20 transition-all hover:shadow-md active:scale-95"
                          >
                            {tForm("sendAnother")}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Social Links & Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white/80 p-10 rounded-[2.5rem] border border-white/40 shadow-sm backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 px-2">
                    {t("connectWithMe", { defaultMessage: "Connect with me" })}
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <SocialCard key={link.name} link={link} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionHeader>
        </Container>
      </div>
    </main>
  );
};

export default ContactPage;
