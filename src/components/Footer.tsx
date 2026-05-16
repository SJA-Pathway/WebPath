import Link from "next/link";
import Image from "next/image";
import { Globe, Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] border-t border-white/5 pt-20 pb-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/20 shadow-2xl transition-transform group-hover:scale-110">
                <Image
                  src="/sjapathwaylogo.png"
                  alt="SJA Pathway"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                Web<span className="text-[#8B5CF6]">Path</span>
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              An open-source interactive roadmap for web developers.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sja-thedude/WebPath"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#8B5CF6] hover:text-white transition-all"
              >
                <FaGithub size={20} />
              </a>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#8B5CF6] hover:text-white transition-all cursor-pointer">
                <Globe size={20} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm">
              Explore
            </h4>
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <Link
                href="/paths"
                className="text-slate-400 hover:text-[#8B5CF6] transition-colors"
              >
                All Paths
              </Link>
              <Link
                href="/paths/frontend"
                className="text-slate-400 hover:text-[#8B5CF6] transition-colors"
              >
                Frontend
              </Link>
              <Link
                href="/paths/backend"
                className="text-slate-400 hover:text-[#8B5CF6] transition-colors"
              >
                Backend
              </Link>
              <Link
                href="/paths/fullstack"
                className="text-slate-400 hover:text-[#8B5CF6] transition-colors"
              >
                Full Stack
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm">
              Community
            </h4>
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <Link
                href="/contribute"
                className="text-slate-400 hover:text-[#8B5CF6] transition-colors"
              >
                Contribute
              </Link>
              <a
                href="https://github.com/sja-thedude/WebPath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#8B5CF6] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            Open Source by{" "}
            <span className="text-white transition-colors hover:text-[#8B5CF6] cursor-default">
              SJA Pathway
            </span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}