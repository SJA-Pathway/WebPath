"use client";

import Link from "next/link";
import {
  PlusCircle,
  Link2,
  Compass,
  Edit3,
  CheckCircle,
  Code,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ContributePage() {
  const ways = [
    {
      title: "Add Topics",
      icon: <PlusCircle size={24} />, // تكبير الأيقونة قليلاً
      desc: "Write content for new or existing topics in any path.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Add Resources",
      icon: <Link2 size={24} />,
      desc: "Link helpful tutorials, docs, videos, and articles.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "New Paths",
      icon: <Compass size={24} />,
      desc: "Propose entire new learning paths (DevOps, AI, etc.).",
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Fix & Improve",
      icon: <Edit3 size={24} />,
      desc: "Fix typos, improve explanations, or update outdated content.",
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 pt-24 pb-44 md:pt-32 md:pb-48 px-5 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[80px] md:blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-blue-500 rounded-full blur-[80px] md:blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Contribute to <span className="text-indigo-400">WebPath</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            WebPath is open source and community-driven. Every contribution
            helps someone learn web development.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Contribution Ways Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-24 md:-mt-24 mb-16 md:mb-20">
          {ways.map((way, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md p-7 md:p-6 rounded-[2rem] border border-white shadow-xl shadow-slate-200/50 hover:translate-y-[-5px] transition-all duration-300"
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${way.color} flex items-center justify-center mb-5 md:mb-6`}
              >
                {way.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-3">
                {way.title}
              </h3>
              <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
                {way.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-10 order-1">
            {/* Step-by-Step Guide */}
            <section className="bg-white p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 md:mb-10 flex items-center gap-3">
                <Terminal className="text-indigo-600 w-7 h-7 md:w-8 md:h-8" />{" "}
                How to Contribute
              </h2>

              <div className="space-y-12">
                <div className="relative pl-10 border-l-2 border-slate-100">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <p className="text-slate-800 text-[17px] md:text-lg font-semibold mb-4 leading-snug">
                    Fork the repository at
                  </p>
                  <a
                    href="https://github.com/sja-thedude/WebPath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:underline break-all font-medium text-sm md:text-base"
                  >
                    github.com/sja-thedude/WebPath{" "}
                    <ArrowRight size={16} className="flex-shrink-0" />
                  </a>
                </div>

                <div className="relative pl-10 border-l-2 border-slate-100 pb-2">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <p className="text-slate-800 text-[17px] md:text-lg font-semibold mb-6 leading-snug">
                    Clone your fork and create a new branch:
                  </p>
                  <div className="bg-slate-950 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl overflow-hidden border border-white/5">
                    <pre className="text-indigo-300 font-mono text-[13px] sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap break-all">
                      <code className="block">
                        {`git clone https://github.com/YOUR_USERNAME/WebPath.git
cd WebPath/webpath
git checkout -b feature/add-typescript-topic`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* JSON Code Example Section */}
            <section className="bg-indigo-600 p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-white overflow-hidden relative group">
              <Code className="absolute right-[-20px] bottom-[-20px] w-48 h-48 md:w-64 md:h-64 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
              <h2 className="text-2xl md:text-3xl font-black mb-6 relative z-10">
                Adding a New Topic
              </h2>
              <p className="text-indigo-50 text-base md:text-lg mb-8 max-w-lg relative z-10 leading-relaxed font-medium">
                Topics live in JSON files under{" "}
                <code className="bg-indigo-700/50 px-2 py-0.5 rounded text-white text-sm md:text-base border border-indigo-400/30">
                  src/data/paths/[path-name].json
                </code>
              </p>
              <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 relative z-10">
                <pre className="text-indigo-200 font-mono text-xs md:text-sm leading-loose overflow-x-auto">
                  <code>{`{
  "slug": "typescript-basics",
  "title": "TypeScript Basics",
  "description": "Add static typing to JavaScript.",
  "level": "intermediate",
  "order": 6,
  "content": "Your markdown-style content here...",
  "resources": [
    { "title": "TypeScript Handbook", "url": "...", "type": "docs" }
  ]
}`}</code>
                </pre>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-8 order-2">
            {/* New Path Tip */}
            <div className="bg-white p-7 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 mb-4">
                Adding a New Path
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Create a new JSON file in{" "}
                <code className="text-indigo-600 font-bold break-all">
                  src/data/paths/
                </code>{" "}
                (e.g., <code>devops.json</code>) following the structure, then
                import it in <code>index.ts</code>.
              </p>
            </div>

            {/* Guidelines List */}
            <div className="bg-slate-900 p-7 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white">
              <h2 className="text-xl md:text-2xl font-black mb-7 border-b border-white/10 pb-5">
                Guidelines
              </h2>
              <ul className="space-y-6">
                {[
                  "Keep explanations clear and beginner-friendly.",
                  "Include working code examples where possible.",
                  "Link to official documentation as primary sources.",
                  "Use the correct level (beginner, intermediate, advanced).",
                  "Test your changes locally before submitting a PR.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-slate-300 text-[14px] md:text-base leading-relaxed group"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub CTA */}
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-white text-center shadow-2xl shadow-indigo-200">
              <FaGithub size={50} className="mx-auto mb-6 opacity-30" />
              <p className="font-bold text-lg md:text-xl mb-8 leading-tight">
                Ready to make your first contribution?
              </p>
              <a
                href="https://github.com/sja-thedude/WebPath"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-indigo-600 py-4 md:py-5 rounded-2xl font-black text-sm md:text-base hover:shadow-lg transition-all active:scale-95"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
