const faqs = [
  {
    question: "What is Cairn?",
    answer:
      "Cairn is an open-source, community-built roadmap for learning web development. It helps learners find a clear path through web development topics.",
  },
  {
    question: "How do I start learning?",
    answer:
      "Start by exploring the available learning paths and choose the path that matches your goals. Work through the topics step by step and build your knowledge along the way.",
  },
  {
    question: "What are Learning Paths?",
    answer:
      "Learning Paths are structured collections of topics that guide you through different areas of web development, from beginner concepts to more advanced skills.",
  },
  {
    question: "Can I contribute to Cairn?",
    answer:
      "Yes. Cairn is open source and welcomes contributions from the community. You can contribute improvements, content, fixes, and other useful changes through GitHub.",
  },
  {
    question: "How can I contribute?",
    answer:
      "Explore the project's open issues on GitHub, choose a task that matches your skills, make your changes, and open a pull request against the dev branch.",
  },
  {
    question: "Do I need to be an experienced developer to contribute?",
    answer:
      "No. Contributors with different levels of experience can help. Start with an issue that matches your current skills and follow the contribution guidelines.",
  },
  {
    question: "Is Cairn free to use?",
    answer:
      "Yes. Cairn is an open-source learning resource designed to be freely accessible to learners and contributors.",
  },
  {
    question: "Where can I report a problem or suggest an improvement?",
    answer:
      "You can use the project's GitHub issues to report bugs, suggest improvements, or find tasks that need contributors.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8B5CF6] mb-4">
              Help &amp; Guidance
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-6">
              Frequently Asked Questions
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about learning and contributing
              to Cairn.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-lg font-bold text-[#0F172A]">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/10 text-xl text-[#8B5CF6] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-6 py-5 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
