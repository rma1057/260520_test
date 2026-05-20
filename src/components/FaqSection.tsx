import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { Plus, Minus, HelpCircle, ShieldQuestion } from "lucide-react";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  return (
    <section id="faq" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-900 scroll-mt-12">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-brand font-semibold flex items-center justify-center gap-1.5">
            <ShieldQuestion className="h-4 w-4 animate-pulse" /> 투명함과 솔직함 중심 조율
          </span>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            자주 묻는 질문 FAQ
          </h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            업무 범위 산출법, 사용하지 않은 일 수 이월 동결 정책, 전용 소통 채널, 원본 지적 지식재산권 일수 인도 등에 대한 구체적인 내용입니다.
          </p>
        </div>

        {/* Accordions Matrix */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand border-opacity-60 bg-brand/5 glow-orange"
                    : "border-zinc-900 bg-zinc-900/10 hover:border-zinc-800"
                }`}
              >
                {/* Trigger Row */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition select-none cursor-pointer"
                >
                  <span className="font-display text-xs md:text-sm font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Indicator icons */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-zinc-400">
                    {isOpen ? <Minus className="h-3 w-3 text-brand" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>

                {/* Animated Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-zinc-900 text-xs text-zinc-400 font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
