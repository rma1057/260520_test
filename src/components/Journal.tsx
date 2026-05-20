import React from "react";
import { JOURNAL } from "../data";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export default function Journal() {
  return (
    <section id="journal" className="py-20 md:py-28 bg-[linear-gradient(180deg,#0c0c0d_0%,#09090a_100%)] border-b border-zinc-900 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-zinc-900">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand font-bold block mb-1">
              THE ARPEGGIO JOURNAL • 디자인 & 설계 통찰서
            </span>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              깊이 있는 통찰과 크리에이티브 혁신
            </h2>
            <p className="text-sm text-zinc-400 max-w-sm mt-1">
              인터랙티브 웹 모션의 미래, 마이크로 반응 설계 및 디자인 구조론에 관한 디렉터들의 깊이 있는 생각들을 나눕니다.
            </p>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
            <BookOpen className="h-4.5 w-4.5 text-brand" />
            <span>수석 디렉터 팀에 의해 매주 정식 업데이트 발행</span>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {JOURNAL.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer flex flex-col justify-between h-full rounded-2xl border border-zinc-900 bg-zinc-950 p-4 transition duration-300 hover:border-zinc-805 hover:bg-zinc-900/10"
            >
              <div className="space-y-4">
                {/* Fixed Ratio Cover Frame */}
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-900 bg-black">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-mono text-[9px]">
                    <span className="text-brand font-semibold uppercase">{article.category}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-500 flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-white group-hover:text-brand transition duration-200">
                    {article.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-normal line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Ticker Bottom row */}
              <div className="pt-4 mt-6 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="font-mono text-[9px] text-zinc-500">{article.date}</span>
                <span className="font-mono text-[9px] text-zinc-400 flex items-center gap-0.5 group-hover:text-white transition">
                  지문 읽기 <ArrowUpRight className="h-3 w-3 text-brand" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
