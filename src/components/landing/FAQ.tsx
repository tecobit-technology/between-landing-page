import { Plus } from "lucide-react";
import { useState } from "react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#EAE8E4]">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-lg text-[#3A3535] group-hover:text-[#CD848C] transition-colors">
          {question}
        </span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-45 text-[#CD848C]" : "text-[#9A9595]"}`}>
          <Plus className="w-5 h-5" />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
      >
        <p className="text-[#8A8585] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Is Between really free?",
      a: "Yes, the core features of Between are completely free. We offer a Premium subscription for cloud backup and extra themes."
    },
    {
      q: "Can I use it on multiple devices?",
      a: "Currently, Between is designed to be on your primary phone to ensure maximum security, but tablet support is coming soon."
    },
    {
      q: "What happens if we break up?",
      a: "You can disconnect at any time. You'll have the option to export your shared data or permanently delete it."
    },
    {
      q: "Is my data sold to advertisers?",
      a: "Never. Our business model is subscription-based, not ad-based. You are our customer, not our product."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container-tight max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-[#CD848C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3A3535]">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;