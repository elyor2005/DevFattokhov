"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  ExternalLink,
  Globe,
  Award,
  FileText,
} from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function ResumePage() {
  const t = useTranslations("resume");

  const handleDownload = () => {
    const pdfName = "Abdufattokhov_Elyor_Resume";
    const titleEl = document.querySelector("title");
    const originalTitle = document.title;
    const originalTitleContent = titleEl?.textContent || "";

    // Set both document.title and the <title> element
    document.title = pdfName;
    if (titleEl) titleEl.textContent = pdfName;

    const restoreTitle = () => {
      document.title = originalTitle;
      if (titleEl) titleEl.textContent = originalTitleContent;
      window.removeEventListener("afterprint", restoreTitle);
    };
    window.addEventListener("afterprint", restoreTitle);

    // Delay to let browser register new title
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.print();
      });
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8 no-print">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] to-[#0051D5]">
            {t("pageTitle")}
          </h1>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#007AFF] to-[#0051D5] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
          >
            <Download className="w-4 h-4" />
            <span>{t("download")}</span>
          </button>
        </div>

        {/* Resume Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="resume-container bg-white text-slate-900 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200"
        >
          {/* Resume Header */}
          <header className="border-b-2 border-slate-100 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-1">
              Abdufattokhov Elyor
            </h1>
            <h2 className="text-lg text-blue-600 font-medium mb-4">
              {t("roleTitle")}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("contact.email")}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{t("contact.location")}</span>
              </div>
            </div>
          </header>

          <div className="grid gap-7">
            {/* Professional Summary */}
            <section>
              <SectionHeading>{t("summary.title")}</SectionHeading>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t("summary.content")}
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <SectionHeading>{t("skills.title")}</SectionHeading>
              <div className="space-y-2">
                {t
                  .raw("skills.categories")
                  .map((category: any, index: number) => (
                    <div key={index} className="flex gap-2 text-sm">
                      <span className="font-semibold text-slate-900 min-w-[100px] shrink-0">
                        {category.name}:
                      </span>
                      <span className="text-slate-600">
                        {category.items.join(", ")}
                      </span>
                    </div>
                  ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <SectionHeading>{t("experience.title")}</SectionHeading>
              <div className="space-y-6">
                {t.raw("experience.items").map((job: any, index: number) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          {job.role}
                        </h4>
                        <span className="text-sm text-blue-600 font-medium">
                          {job.company}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500 font-medium">
                        {job.period}
                      </span>
                    </div>
                    {job.achievements && (
                      <ul className="space-y-1.5 ml-4">
                        {job.achievements.map(
                          (achievement: string, i: number) => (
                            <li
                              key={i}
                              className="text-sm text-slate-600 leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full"
                            >
                              {achievement}
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                    {job.description && !job.achievements && (
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {job.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionHeading>{t("education.title")}</SectionHeading>
              <div className="space-y-4">
                {t.raw("education.items").map((edu: any, index: number) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                      <h4 className="text-sm font-bold text-slate-900">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-slate-500 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-1">
                      <span>{edu.institution}</span>
                      {edu.link && (
                        <>
                          <span className="text-slate-300">|</span>
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certificates */}
            <section>
              <SectionHeading
                icon={<Award className="w-4 h-4 text-blue-600" />}
              >
                {t("certificates.title")}
              </SectionHeading>
              <div className="space-y-2">
                {t.raw("certificates.items").map((cert: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <div>
                        <span className="text-sm font-semibold text-slate-900">
                          {cert.name}
                        </span>
                        <span className="text-sm text-slate-500">
                          {" "}
                          — {cert.issuer}, {cert.date}
                        </span>
                      </div>
                    </div>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline flex items-center gap-1 no-print"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {t("certificates.viewCertificate")}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <SectionHeading
                icon={<Globe className="w-4 h-4 text-blue-600" />}
              >
                {t("languages.title")}
              </SectionHeading>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
                {t.raw("languages.items").map((lang: any, index: number) => (
                  <span key={index}>
                    <span className="font-medium text-slate-800">
                      {lang.name}
                    </span>{" "}
                    ({lang.level})
                  </span>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Reusable section heading — clean ATS style */
function SectionHeading({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <h3 className="flex items-center gap-1.5 text-sm font-bold text-slate-900 uppercase tracking-widest mb-3 pb-1.5 border-b border-slate-200">
      {icon}
      {children}
    </h3>
  );
}
