"use client";
import React from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { WORKS } from "@/src/const/works";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import SortSelector from "@/src/components/ui/SortSelector";

const Works = () => {
  const t = useTranslations("works");
  const [sortOrder, setSortOrder] = React.useState<"latest" | "oldest">(
    "latest",
  );

  const sortedWorks = React.useMemo(() => {
    return [...WORKS].sort((a, b) => {
      // Primary sort by year
      const yearA = parseInt(a.year as string);
      const yearB = parseInt(b.year as string);

      if (yearA !== yearB) {
        return sortOrder === "latest" ? yearB - yearA : yearA - yearB;
      }

      // Secondary sort by ID (assuming work-1, work-2 format)
      const idA = parseInt(a.id.split("-")[1]);
      const idB = parseInt(b.id.split("-")[1]);
      return sortOrder === "latest" ? idB - idA : idA - idB;
    });
  }, [sortOrder]);

  return (
    <section id="works" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          title={t("title")}
          action={
            <SortSelector
              currentOrder={sortOrder}
              onOrderChange={setSortOrder}
            />
          }
        >
          {/* Apple-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 py-12">
            {sortedWorks.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.2, 0.65, 0.3, 0.9], // Apple-esque ease
                }}
                className={`group ${
                  // Make every 3rd item span full width for variety
                  index % 3 === 2
                    ? "md:col-span-2 aspect-[16/9]"
                    : "aspect-[4/5] md:aspect-square"
                } relative w-full rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl shadow-slate-200/50 cursor-pointer transform-gpu`}
              >
                <Link
                  href={`/works/${item.id}`}
                  className="block w-full h-full relative"
                >
                  {/* Full Bleed Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      alt={t(`items.${item.id}.name`)}
                      src={item.preview}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 2}
                    />
                  </div>

                  {/* Full Cover Glass Overlay - Revealed on Hover */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                    {/* Top Tag - slides down */}
                    <div className="transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-white/90 uppercase bg-white/10 rounded-full border border-white/20 mb-4">
                        {t(`items.${item.id}.type`)}
                      </span>
                    </div>

                    {/* Title - scales up */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg mb-4 transform scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">
                      {t(`items.${item.id}.name`)}
                    </h3>

                    {/* Description - slides up */}
                    <p className="text-white/80 text-sm md:text-base font-medium line-clamp-3 max-w-lg transform translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      {t(`items.${item.id}.description`)}
                    </p>

                    {/* Arrow Button - fades in */}
                    <div className="mt-8 transform translate-y-[20px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionHeader>
      </Container>
    </section>
  );
};

export default Works;
