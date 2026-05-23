"use client";



import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Paths", href: "/paths" },
    { name: "Contribute", href: "/contribute" },
  ];

  return (

    <nav className="navbar">
      <div className="navbar-inner">

        <Link href="/" className="navbar-brand">
          <Image
            src="/sjapathwaylogo.png"
            alt="SJA Pathway"
            width={40}
            height={40}
            quality={100}
            unoptimized
            style={{
              borderRadius: 6,
              backgroundColor: "white",
              padding: "2px",
            }}
          />

          <span className="brand-text">WebPath</span>
        </Link>

        <div className="navbar-links">

          <Link href="/paths">Paths</Link>

          <Link href="/contribute">Contribute</Link>

          <a

    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "py-4 bg-[#0F172A] shadow-lg border-b border-white/5"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group relative z-[110]"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-2xl border border-white/20 shadow-inner transition-transform group-hover:scale-110 group-active:scale-95">
            <Image
              src="/sjapathwaylogo.png"
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span
            className="text-2xl font-black tracking-tighter transition-colors text-white"
          >
            Web<span className="text-[#8B5CF6]">Path</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.2em] transition-all hover:text-[#8B5CF6] relative group/link text-slate-200"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6] transition-all group-hover/link:w-full"></span>
            </Link>
          ))}

                    <motion.a

            href="https://github.com/sja-thedude/WebPath"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ 
              y: [0, -4, 0],
              boxShadow: [
                "0 0 15px rgba(139, 92, 246, 0.3)",
                "0 0 30px rgba(139, 92, 246, 0.6)",
                "0 0 15px rgba(139, 92, 246, 0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-3xl font-bold bg-white text-[#0F172A] transition-colors hover:bg-slate-50"
          >

            GitHub
          </a>

          <button
            className="flex items-center gap-2 px-4 py-2 rounded-3xl font-bold bg-white text-[#0F172A]"
            onClick={() => {
              document.documentElement.classList.toggle("dark");

              localStorage.theme =
                document.documentElement.classList.contains("dark")
                  ? "dark"
                  : "light";
            }}
            aria-label="Toggle Dark Mode"
          >
            🌙
          </button>


            <FaGithub size={20} />
            <span>GitHub</span>
          </motion.a>

        </div>

        <button
          className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center rounded-2xl transition-all active:scale-90 shadow-sm border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-sm z-[100] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] h-full bg-[#0F172A] z-[105] shadow-[-20px_0_80px_rgba(0,0,0,0.3)] flex flex-col md:hidden"
            >
              <div className="flex flex-col gap-6 p-8 pt-32 h-full">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">
                  Navigation
                </p>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-5 rounded-[2rem] bg-white/5 text-xl font-black text-white border border-white/5 transition-all"
                    >
                      {link.name}
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shadow-sm">
                        <ChevronRight className="text-[#8B5CF6]" size={20} />
                      </div>
                    </Link>
                  </motion.div>
                ))}

                <div className="h-px bg-slate-200 dark:bg-white/10 my-4" />

                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    boxShadow: [
                      "0 10px 15px -3px rgba(139, 92, 246, 0.3)",
                      "0 20px 25px -5px rgba(139, 92, 246, 0.5)",
                      "0 10px 15px -3px rgba(139, 92, 246, 0.3)"
                    ]
                  }}
                  transition={{ 
                    opacity: { delay: 0.3 },
                    y: { delay: 0.3 },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  href="https://github.com/sja-thedude/WebPath"
                  target="_blank"
                  className="flex items-center gap-4 p-5 rounded-[2rem] bg-[#8B5CF6] text-white shadow-xl mt-auto"
                >
                  <FaGithub size={24} />
                  <span className="text-lg font-bold">Star on GitHub</span>
                </motion.a>
              </div>

              <div className="p-8 opacity-10 select-none pointer-events-none">
                <h2 className="text-6xl font-black text-white">
                  WEB
                  <br />
                  PATH
                </h2>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}