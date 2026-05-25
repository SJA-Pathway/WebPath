import Link from "next/link";
import { Topic } from "@/data/types";
import { ChevronRight, BookOpen } from "lucide-react";

const levelColors: Record<string, string> = {
  beginner: "#10B981",
  intermediate: "#F59E0B",
  advanced: "#EF4444",
};

export default function TopicCard({
  topic,
  pathSlug,
  index,
}: {
  topic: Topic;
  pathSlug: string;
  index: number;
}) {
  return (
    <Link
      href={`/paths/${pathSlug}/${topic.slug}`}
      className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#8B5CF6]/30 transition-all flex items-center gap-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl font-black text-slate-300 group-hover:bg-[#F5F3FF] group-hover:text-[#8B5CF6] transition-colors shrink-0">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-xl font-bold text-[#0F172A] truncate group-hover:text-[#8B5CF6] transition-colors">
            {topic.title}
          </h3>
          <span 
            className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border"
            style={{ 
              color: levelColors[topic.level], 
              borderColor: `${levelColors[topic.level]}40`,
              backgroundColor: `${levelColors[topic.level]}05`
            }}
          >
            {topic.level}
          </span>
        </div>
        <p className="text-slate-500 text-sm line-clamp-1">{topic.description}</p>
      </div>

      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all transform group-hover:translate-x-1">
        <ChevronRight size={20} />
      </div>
    </Link>
  );
}
