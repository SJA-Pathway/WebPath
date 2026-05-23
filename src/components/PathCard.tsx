"use client";

import Link from "next/link";
import { Path } from "@/data/types";
import { Layout, Server, Layers, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PathCard({ path }: { path: Path }) {
  const IconComponent = () => {
    const iconProps = { 
      size: 32, 
      strokeWidth: 1.5,
      className: "transition-transform duration-500 group-hover:rotate-12" 
    };
    switch (path.icon) {
      case "layout": return <Layout {...iconProps} />;
      case "server": return <Server {...iconProps} />;
      case "layers": return <Layers {...iconProps} />;
      default: return <Layout {...iconProps} />;
    }
  };

  return (
    <Link href={`/paths/${path.slug}`} className="group block h-full">
      <div className="relative h-full p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.15)] transition-all duration-500 ease-out flex flex-col overflow-hidden">
        
        {/* Decorative Background Blur */}
        <div 
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{ backgroundColor: path.color }}
        />

        {/* Icon Header */}
        <div className="relative flex justify-between items-start mb-8">
          <div 
            className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
            style={{ 
              backgroundColor: `${path.color}10`, 
              color: path.color,
              boxShadow: `0 0 20px ${path.color}00`
            }}
          >
            <IconComponent />
          </div>
          
          <div className="bg-slate-50 text-slate-400 p-2 rounded-xl group-hover:bg-[#F5F3FF] group-hover:text-[#8B5CF6] transition-colors">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight group-hover:text-[#8B5CF6] transition-colors duration-300">
            {path.title}
          </h3>

          <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base line-clamp-3">
            {path.description}
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
              Modules Count
            </span>
            <span className="text-sm font-black text-[#0F172A]">
              {path.topics.length} Specialized Topics
            </span>
          </div>
          
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0F172A] text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-purple-200"
          >
            <ArrowRight size={20} />
          </div>
        </div>

        {/* Bottom Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-50 overflow-hidden">
          <div 
            className="h-full w-0 group-hover:w-full transition-all duration-700 ease-in-out rounded-full"
            style={{ backgroundColor: path.color }}
          />
        </div>
      </div>
    </Link>
  );
}