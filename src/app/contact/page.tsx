"use client";

import React, { useState } from "react";
import { useFormik, FormikErrors, FormikProps } from "formik";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Sparkles,
  Mail,
  Send,
  ArrowRight,
  User,
  MessageSquare,
  CheckCircle,
  LoaderCircle,
  Building,
  Icon as LucideIcon,
} from "lucide-react";
import { toast } from "react-toastify";
import { cn } from "@/src/utils/cn";
import { SendMessage } from "@/src/utils/message/send-message";
import {
  socialLinks,
  LinkBox,
} from "@/src/components/Sections/Cantact/CantactUI";

// ----------------------
// Types
// ----------------------

interface FormValues {
  fullname: string;
  email: string;
  company?: string;
  message: string;
}

interface FormFieldProps {
  Icon: LucideIcon;
  name: keyof FormValues;
  type?: string;
  as?: "input" | "textarea";
  placeholder: string;
  rows?: number;
  form: FormikProps<FormValues>;
}

// ----------------------
// Reusable Form Field
// ----------------------

const FormField: React.FC<FormFieldProps> = ({
  Icon,
  name,
  type = "text",
  as = "input",
  placeholder,
  rows,
  form,
}) => {
  const Tag = as;
  const error = form.touched[name] && form.errors[name];
  const value = form.values[name];

  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Tag
        type={type}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        className={cn(
          "w-full pl-10 pr-4 py-4 bg-background/50 border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all",
          error ? "border-destructive" : "border-border",
          as === "textarea" ? "resize-none pt-4" : ""
        )}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

// ----------------------
// ContactPage Component
// ----------------------

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailAddress = "elyorabdufattokhov@gmail.com";

  const form = useFormik<FormValues>({
    initialValues: {
      fullname: "",
      email: "",
      company: "",
      message: "",
    },
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.fullname.trim()) {
        errors.fullname = "Full name is required";
      }
      if (!values.email.trim()) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.message.trim()) {
        errors.message = "Message is required";
      }
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
        toast.success("Message sent successfully!");
        resetForm();
        setIsSubmitted(true);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  // ----------------------
  // Animation Variants
  // ----------------------

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // ----------------------
  // JSX Output
  // ----------------------

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted/20 text-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "400% 400%" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-0 w-full max-w-[900px] mx-auto px-0"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-muted-foreground">
              ✨ Get in Touch
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="text-6xl font-bold mb-6 leading-tight">
            Contact{" "}
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Me
            </motion.span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to start a conversation? Send me a message and I’ll get back
            to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="max-w-4xl mx-auto px-4" variants={fadeInUp}>
          <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-indigo-400/30">
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
                      placeholder="Your Name"
                      form={form}
                    />
                    <FormField
                      Icon={Mail}
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      form={form}
                    />
                  </div>

                  <FormField
                    Icon={Building}
                    name="company"
                    placeholder="Company (Optional)"
                    form={form}
                  />

                  <FormField
                    Icon={MessageSquare}
                    name="message"
                    as="textarea"
                    rows={6}
                    placeholder="Tell me about your project..."
                    form={form}
                  />

                  <motion.button
                    type="submit"
                    disabled={form.isSubmitting}
                    className="w-full relative group bg-primary text-white font-medium py-4 px-6 rounded-xl disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative flex items-center justify-center gap-2">
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
                          <Send className="h-5 w-5" />
                          Send Message
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    We`ve received your message. You can also reach out directly
                    at{" "}
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-primary hover:underline"
                    >
                      {emailAddress}
                    </a>
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-muted border border-border rounded-xl text-foreground hover:bg-muted/80 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="space-y-8 max-w-4xl mx-auto px-6 my-10"
          variants={fadeInUp}
        >
          <div className="p-6 bg-black backdrop-blur-xl rounded-2xl border border-indigo-400/30 text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect with me
            </h4>
            <div className="divide-y border divide-white/10 border-white/10 rounded-lg overflow-hidden">
              <div className="grid divide-x divide-white/10">
                <LinkBox
                  Icon={socialLinks[1].icon}
                  href={socialLinks[1].href}
                />
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <LinkBox
                  Icon={socialLinks[4].icon}
                  href={socialLinks[4].href}
                />
                <LinkBox
                  Icon={socialLinks[5].icon}
                  href={socialLinks[5].href}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
