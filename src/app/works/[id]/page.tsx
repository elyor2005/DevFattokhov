"use client";

import ContactSection from "@/src/app/(home)/_components/ContactUI";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { WORKS } from "@/src/const/works";
import {
  ArrowUpRight,
  ChevronLeft,
  Calendar,
  Briefcase,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const SingleWork = () => {
  const params = useParams();
  const id = params?.id as string;
  const work = WORKS.find((item) => item.id === id);
  const t = useTranslations("works");

  if (!work) return notFound();

  // Use first image as hero, rest as gallery
  const heroImage = work.images[0];
  const galleryImages = work.images.slice(1);

  return (
    <main className="relative min-h-screen bg-[#F5F5F7] overflow-x-hidden pt-24 sm:pt-32">
      <div className="relative z-10 space-y-16 sm:space-y-24 pb-24 sm:pb-32">
        <Container>
          <div className="mb-8">
            <Link
              href="/works"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t("backToWorks")}
            </Link>
          </div>

          <SectionHeader
            title={t(`items.${work.id}.name`)}
            hideToggle={true}
            description={`${t(`items.${work.id}.type`)} • ${work.year}`}
          >
            <div className="mt-12 space-y-16">
              {/* Hero Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/60 bg-white">
                <Image
                  src={heroImage}
                  alt={t(`items.${work.id}.name`)}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                {/* Description - Left Comlumn */}
                <div className="lg:col-span-2 space-y-8">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {/* Assuming a generic "About Project" title or just using description directly */}
                    About the project
                  </h3>
                  <div className="prose prose-lg prose-gray max-w-none text-gray-500 leading-relaxed">
                    <p>{t(`items.${work.id}.description`)}</p>
                  </div>
                </div>

                {/* Info Card - Right Column */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/60 sticky top-32">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">
                            {t("client")}
                          </p>
                          <p className="text-gray-900 font-medium">
                            {t(`items.${work.id}.client`)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <Briefcase className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">
                            {t("type")}
                          </p>
                          <p className="text-gray-900 font-medium">
                            {t(`items.${work.id}.type`)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <Calendar className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">
                            {t("year")}
                          </p>
                          <p className="text-gray-900 font-medium">
                            {work.year}
                          </p>
                        </div>
                      </div>

                      {work.liveUrl && (
                        <div className="pt-6 border-t border-gray-100">
                          <a
                            href={work.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-[#007AFF] hover:bg-[#0066CC] text-white font-medium py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20 group"
                          >
                            {t("livePreview")}
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              {galleryImages.length > 0 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {galleryImages.map((image, i) => (
                      <div
                        key={i}
                        className={`relative rounded-2xl overflow-hidden shadow-sm border border-gray-200/60 bg-white group hover:shadow-md transition-shadow ${
                          // Make every 3rd item span full width on md screens for masonry feel
                          (i + 1) % 3 === 0
                            ? "md:col-span-2 aspect-[2/1]"
                            : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${work.name} screenshot ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </SectionHeader>

          <ContactSection />
        </Container>
      </div>
    </main>
  );
};

export default SingleWork;
