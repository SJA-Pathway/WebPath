"use client";

import Link from "next/link";
import { motion, Variants, MotionProps } from "framer-motion";
import { paths } from "@/data";
import PathCard from "@/components/PathCard";
import { Code2, Terminal, Cpu, Rocket, Sparkles } from "lucide-react"; // الأيقونات الجديدة

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const floatingAnimation = (delay: number): MotionProps => ({
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -20, 0],
      opacity: 0.2,
      transition: {
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      },
    },
  });

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-[#0F172A]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#6366F1] rounded-full blur-[150px] opacity-10"></div>

        <motion.div
          {...floatingAnimation(0)}
          className="absolute top-20 left-[15%] hidden md:block"
        >
          <Code2 size={48} className="text-[#8B5CF6]" />
        </motion.div>
        <motion.div
          {...floatingAnimation(1)}
          className="absolute bottom-40 left-[10%] hidden md:block"
        >
          <Terminal size={40} className="text-[#6366F1]" />
        </motion.div>
        <motion.div
          {...floatingAnimation(0.5)}
          className="absolute top-40 right-[15%] hidden md:block"
        >
          <Cpu size={44} className="text-[#A855F7]" />
        </motion.div>
        <motion.div
          {...floatingAnimation(1.5)}
          className="absolute bottom-20 right-[10%] hidden md:block"
        >
          <Sparkles size={32} className="text-white" />
        </motion.div>

        <div className="relative z-10 w-full max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#A855F7] text-sm font-bold mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                Live Updates
              </span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1] text-white">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE]">
              Web Development
            </span>
            <br />
            Journey Starts Here
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            An open-source, community-driven roadmap to becoming a web
            developer. Pick a path, learn at your own pace, and contribute along
            the way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/paths"
              className="w-full sm:w-auto px-16 py-5 bg-[#7C3AED] text-white rounded-2xl font-bold hover:bg-[#6D28D9] transition-all shadow-xl shadow-purple-900/20 active:scale-95 text-center"
            >
              Explore Paths
            </Link>

            <Link
              href="/contribute"
              className="w-full sm:w-auto px-16 py-5 border-2 border-slate-700 text-slate-300 rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 text-center"
            >
              Contribute
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-32 relative bg-white">
        <div className="relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-6 relative inline-block">
              Learning Paths
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-2 bg-[#8B5CF6] rounded-full"
              ></motion.span>
            </h2>

            <p className="text-[#64748B] text-xl leading-relaxed font-medium max-w-2xl mx-auto mt-8">
              Choose a path that matches your goals. Each path guides you from
              fundamentals to advanced topics.
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
