"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { paths, getTopic } from "@/data";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen, Code, ArrowLeft } from "lucide-react";
import React from "react";

function parseContent(raw: string) {
  const text = Array.isArray(raw) ? raw.join("\n") : raw;
  const lines = text.split("\n");
  const elements: { type: string; content: string }[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push({ type: "code", content: codeBuffer.join("\n") });
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }
    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push({ type: "h2", content: line.slice(3) });
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
      if (match) {
        elements.push({
          type: "li-bold",
          content: `<strong>${match[1]}</strong>: ${match[2]}`,
        });
      }
    } else if (line.startsWith("- ")) {
      elements.push({ type: "li", content: line.slice(2) });
    } else if (line.trim()) {
      elements.push({ type: "p", content: line });
    }
  }
  return elements;
}

export default function TopicPage({ params }: { params: any }) {
  const { pathSlug, topicSlug } = React.use(params) as { pathSlug: string, topicSlug: string };
  const result = getTopic(pathSlug, topicSlug);
  if (!result) notFound();

  const { path, topic } = result;
  const sorted = [...path.topics].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((t) => t.slug === topic.slug);
  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const next = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;
  const elements = parseContent(topic.content);

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="bg-[#0F172A] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8B5CF6] blur-[120px] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8 overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link href="/paths" className="hover:text-white transition-colors shrink-0">
              Paths
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <Link href={`/paths/${path.slug}`} className="hover:text-white transition-colors truncate max-w-[100px] md:max-w-[200px] shrink-0">
              {path.title}
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <span className="text-[#8B5CF6] truncate shrink-0">{topic.title}</span>
          </nav>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              {topic.title}
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
              {topic.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:leading-relaxed">
              {elements.map((el, i) => {
                if (el.type === "h2") return <h2 key={i} className="text-3xl text-[#0F172A] mt-12 mb-6">{el.content}</h2>;
                if (el.type === "code") return (
                  <div key={i} className="relative group my-8">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-10 blur group-hover:opacity-20 transition" />
                    <pre className="relative bg-[#0F172A] p-6 rounded-xl overflow-x-auto border border-white/10">
                      <code className="text-purple-300 font-mono text-sm leading-7">{el.content}</code>
                    </pre>
                  </div>
                );
                if (el.type === "li-bold" || el.type === "li") return (
                  <ul key={i} className="list-none p-0 my-4">
                    <li className="flex gap-4 items-start text-slate-600">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: el.content }} />
                    </li>
                  </ul>
                );
                return <p key={i} className="text-slate-600 mb-6">{el.content}</p>;
              })}
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-6">
              {prev ? (
                <Link href={`/paths/${path.slug}/${prev.slug}`} className="flex flex-col gap-2 group max-w-[200px]">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#8B5CF6] transition-colors">Previous</span>
                  <span className="flex items-center gap-2 text-[#0F172A] font-black group-hover:translate-x-[-4px] transition-transform">
                    <ChevronLeft size={20} /> {prev.title}
                  </span>
                </Link>
              ) : <div />}
              
              {next ? (
                <Link href={`/paths/${path.slug}/${next.slug}`} className="flex flex-col gap-2 group text-right max-w-[200px]">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#8B5CF6] transition-colors">Next Topic</span>
                  <span className="flex items-center justify-end gap-2 text-[#0F172A] font-black group-hover:translate-x-[4px] transition-transform">
                    {next.title} <ChevronRight size={20} />
                  </span>
                </Link>
              ) : <div />}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            {topic.resources.length > 0 && (
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-[#8B5CF6]" />
                  <h2 className="text-xl font-black text-[#0F172A]">Resources</h2>
                </div>
                <div className="space-y-4">
                  {topic.resources.map((r) => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#8B5CF6] hover:shadow-md transition-all group"
                    >
                      <span className="text-[#0F172A] font-bold flex items-center justify-between">
                        {r.title}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">{r.type}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}