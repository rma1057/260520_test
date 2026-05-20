import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Projects from "./components/Projects";
import PartnershipGrid from "./components/PartnershipGrid";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import PricingCalculator from "./components/PricingCalculator";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import MockChat from "./components/MockChat";
import { PRICING_PLANS } from "./data";
import { Sparkles, Calendar, MessageSquare, Check, ArrowRight, HelpCircle } from "lucide-react";

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-[#fafafa] selection:bg-brand selection:text-white">
      {/* Target ID nodes and Layout components */}
      <Header
        onOpenBookModal={() => setIsBookModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      <main className="relative">
        {/* Hero Segment */}
        <Hero onOpenBookModal={() => setIsBookModalOpen(true)} />

        {/* What We Do / Capabilities Matrix */}
        <WhatWeDo />

        {/* Case Studies Container and slide drawer */}
        <Projects onOpenBookModal={() => setIsBookModalOpen(true)} />

        {/* Trust & Partnership bento grid with designer space cat */}
        <PartnershipGrid />

        {/* Testimonials and abstract motion canvas audio reel */}
        <Testimonials />

        {/* Standard Membership Plans & Budget Estimator Component */}
        <section id="pricing" className="py-20 md:py-28 bg-[linear-gradient(180deg,#0a0a0b_0%,#0c0c0d_100%)] border-b border-zinc-900 scroll-mt-12">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            
            {/* Headers */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand font-semibold flex items-center justify-center gap-1">
                <Sparkles className="h-3.5 w-3.5" /> MEMBERSHIP INVESTMENT • 멤버십 가입 비용
              </span>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                지출 제로 설계, 투명한 정액 구독제 요금 플랜
              </h2>
              <p className="text-sm text-zinc-400">
                원하는 패키지 멤버십 등급을 택하고, 사내 디자인 백로그 대기 큐에 리퀘스트를 올리세요. 추가 과금이나 협상 없이 수일 이내 최적화된 시그니처 시안이 발송됩니다.
              </p>
            </div>

            {/* Price Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl border p-6 md:p-8 bg-zinc-950 flex flex-col justify-between relative group transition duration-300 ${
                    plan.isPopular
                      ? "border-brand border-opacity-70 glow-blueScale md:scale-[1.02]"
                      : "border-zinc-900 hover:border-zinc-805"
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 font-mono text-[9px] text-white uppercase tracking-widest font-bold">
                      🔥 인기 폭발 • 기업 사양 추천
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-brand transition duration-200">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                        {plan.description}
                      </p>
                    </div>

                    <div className="border-t border-b border-zinc-900 py-4 flex items-baseline gap-1.5">
                      <span className="font-display text-4xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="font-mono text-xs text-zinc-500">{plan.billing}</span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                        멤버십 포함 핵심 가용 팩:
                      </span>
                      <ul className="space-y-2.5 text-xs text-zinc-400">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex gap-2.5 items-start">
                            <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col gap-2">
                    <button
                      onClick={() => setIsBookModalOpen(true)}
                      className="w-full rounded-xl bg-brand hover:bg-brand/90 text-white font-semibold py-3 text-xs tracking-wider uppercase transition duration-300 cursor-pointer"
                    >
                      즉시 멤버십 구독 가입 신청하기
                    </button>
                    <button
                      onClick={() => setIsBookModalOpen(true)}
                      className="w-full rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white font-semibold py-2.5 text-xs tracking-wider uppercase transition cursor-pointer"
                    >
                      15분 가벼운 사전 화상 미팅 수립
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Interactive Estimate Block */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">또는 필요 사양 조율 자가 기산 진단해보기</p>
              </div>
              <PricingCalculator />
            </div>

          </div>
        </section>

        {/* Collapsible FAQ sections */}
        <FaqSection />

        {/* Creative Journal insights */}
        <Journal />

        {/* Global Footer and Address indexes */}
        <Footer />
      </main>

      {/* Pop up Interactive Schedulers / Assisting Workspaces */}
      <BookingModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />

      <MockChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Sticky Bottom Floating Live Chat handle */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsChatOpen(true)}
          className="relative group flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-2xl transition hover:scale-110 active:scale-95 glow-blue-lg cursor-pointer"
          aria-label="실시간 디자인 상담 챗 봇 열기"
        >
          <span className="absolute inset-0 bg-brand/20 rounded-full animate-ping pointer-events-none" />
          <MessageSquare className="h-5 w-5 transition group-hover:rotate-6" />
        </button>
      </div>

    </div>
  );
}
