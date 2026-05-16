"use client";

import { paths } from "@/data";
import PathCard from "@/components/PathCard";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PathsPage() {
  return (
    <main className="min-h-screen pt-17">
      <section className="container mx-auto px-6 py-32 relative bg-white">
        <div className="relative z-10">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-6 relative inline-block">
              All Learning Paths
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-2 bg-[#8B5CF6] rounded-full"
              ></motion.span>
            </h1>

            <p className="text-[#64748B] text-xl leading-relaxed font-medium max-w-2xl mx-auto mt-8">
              Pick a path and start building your skills. Each path is a structured
              journey from beginner to advanced topics.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
          >
            {paths.map((path, index) => (
              <motion.div
                key={path.slug}
                variants={cardVariants}
                className="group relative"
              >
                <span className="absolute -top-12 -left-4 text-9xl font-black text-slate-50 group-hover:text-purple-50/50 transition-colors duration-500 pointer-events-none z-0">
                  0{index + 1}
                </span>

                <div className="relative z-10 transition-all duration-500 ease-out p-1 rounded-[2.5rem] bg-transparent group-hover:bg-slate-50">
                  <PathCard path={path} />

                  <div className="mt-6 h-1.5 w-0 bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE] transition-all duration-700 group-hover:w-full rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}