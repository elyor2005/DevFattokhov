"use client";
import ContactSection from "@/src/app/(home)/_components/ContactUI";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { WORKS } from "@/src/const/works";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SortSelector from "@/src/components/ui/SortSelector";

const Page = () => {
  const t = useTranslations("works");
  const [sortOrder, setSortOrder] = React.useState<"latest" | "oldest">(
    "latest",
  );

  const sortedWorks = React.useMemo(() => {
    return [...WORKS].sort((a, b) => {
      const yearA = parseInt(a.year as string);
      const yearB = parseInt(b.year as string);

      if (yearA !== yearB) {
        return sortOrder === "latest" ? yearB - yearA : yearA - yearB;
      }

      const idA = parseInt(a.id.split("-")[1]);
      const idB = parseInt(b.id.split("-")[1]);
      return sortOrder === "latest" ? idB - idA : idA - idB;
    });
  }, [sortOrder]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="py-24 sm:py-32">
        <Container>
          <SectionHeader
            title={t("title")}
            hideToggle={true}
            description={t("pageDescription")}
            action={
              <SortSelector
                currentOrder={sortOrder}
                onOrderChange={setSortOrder}
              />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              {sortedWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col gap-4"
                >
                  {/* Card Container */}
                  <Link
                    href={`/works/${work.id}`}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-gray-100 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    {/* Image with Zoom Effect */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={work.preview}
                        alt={work.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Overlay Gradient - Hover Only, Bottom Weighted */}
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                          {work.type}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform scale-90 transition-transform duration-300 group-hover:scale-100">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {work.name}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {work.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </SectionHeader>
          <ContactSection />
        </Container>
      </div>
    </main>
  );
};

export default Page;
