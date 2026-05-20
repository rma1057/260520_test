import React from "react";
import { motion } from "motion/react";
import { ArrowDownRight, Sparkles, TrendingUp, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenBookModal: () => void;
}

export default function Hero({ onOpenBookModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900 bg-zinc-950 pb-20 pt-16 md:pb-28">
      {/* Decorative ambient glowing grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f11_1px,transparent_1px),linear-gradient(to_bottom,#0f0f11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Dynamic ambient color light blobs */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand/10 blur-[100px]" />
      <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-zinc-800/20 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Top text and Call to Actions */}
          <div className="lg:col-span-6 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-1.5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand animate-ping" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand">
                현재 글로벌 엘리트 파트너십 선착순 모집 중
              </span>
            </div>

            <h1 className="font-display text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-[70px] leading-tight">
              단 하나의 구독으로, <br />
              <span className="text-stroke hover:text-white transition duration-500">무제한</span> 디자인 <br />
              <span className="text-brand">이터레이션.</span>
            </h1>

            <p className="max-w-md text-sm text-zinc-400 font-sans leading-relaxed">
              매달 청구되는 비싼 고정 고용비나 속도가 느린 기존 대행사에 답답하셨나요? 
              세계 최고 품질의 구독형 제품 디자인과 인터랙티브 리액트 코드를 48시간 스프린트 주기로 즉각 전달해 드립니다.
            </p>

            {/* Quick value props list */}
            <div className="grid grid-cols-2 gap-3 text-xs text-zinc-400 font-mono py-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-brand" />
                <span>무제한 시안 수정 보완</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-brand" />
                <span>평균 48시간 이내 발송</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-brand" />
                <span>자유로운 이월 및 일시 정지</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-brand" />
                <span>피그마 + 리액트 최종 인도</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="group flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-white transition hover:bg-brand/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>구독 요금제 보기</span>
                <ArrowDownRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <button
                onClick={onOpenBookModal}
                className="rounded-full border border-zinc-800 bg-zinc-900/20 px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-zinc-300 transition hover:border-zinc-700 hover:text-white"
              >
                무료 30분 전략 미팅 신청
              </button>
            </div>
          </div>

          {/* Majestic Hero Display Banner Overlay (As seen in Reference) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/30 shadow-2xl group flex items-end">
              
              {/* Massive branding background text layer in Toss Blue */}
              <div className="absolute inset-0 select-none overflow-hidden flex flex-col justify-between py-10 opacity-30 pointer-events-none">
                <div className="font-display font-black text-7xl md:text-[110px] tracking-tighter text-brand leading-none pl-4 uppercase">
                  Arpeggio
                </div>
                <div className="font-display font-black text-7xl md:text-[110px] tracking-tighter text-stroke leading-none uppercase text-right pr-4">
                  Agency
                </div>
                <div className="font-display font-black text-7xl md:text-[110px] tracking-tighter text-brand leading-none pl-4 uppercase">
                  Arpeggio
                </div>
              </div>

              {/* The high fashion model image overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-4 rounded-xl overflow-hidden border border-zinc-800/80 glow-blue"
              >
                <img
                  src="/src/assets/images/cool_fashion_hero_1779245126928.png"
                  alt="Arpeggio Creative Editorial Model"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />
                
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40" />
                
                {/* Floating pill badge */}
                <div className="absolute top-4 left-4 rounded-full bg-brand px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="h-3 w-3 animate-spin" />
                  <span>The Creative Agency®</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-brand">케이스 스터디 1.1</p>
                  <h3 className="font-display text-lg font-bold text-white mt-0.5">보레알 VR 글로벌 론칭 브랜딩</h3>
                  <p className="text-xs text-zinc-400">제품 릴리스 단 7일 만에 사용자 총 인게이지먼트 지표 35% 증폭 달성.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scrolling Partner Tape Segment (Bottom border line section) */}
        <div className="mt-20 border-t border-zinc-900 pt-8">
          <p className="text-center font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-6">
            빠르게 변화를 주도하는 초고속 성장 기업들이 Arpeggio와 함께 가갑게 상생합니다
          </p>
          <div className="relative w-full overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent_0%,_black_15%,_black_85%,_transparent_100%)]">
            <div className="inline-block animate-[marquee_25s_linear_infinite] space-x-12">
              {["Velocity Group", "Austrian Air", "Nordvision VR", "Greenbay Lab", "Stride Athletics", "Apex Dynamics", "Quantum Soft", "Milano Work", "Canned Lynx"].map((partner, idx) => (
                <span
                  key={idx}
                  className="font-display text-xs font-bold uppercase tracking-widest text-zinc-500 select-none hover:text-brand transition cursor-default"
                >
                  {partner} •
                </span>
              ))}
            </div>
            {/* Repeat for seamless marquee effect */}
            <div className="absolute top-0 inline-block animate-[marquee_25s_linear_infinite] space-x-12 [animation-delay:-12.5s]">
              {["Velocity Group", "Austrian Air", "Nordvision VR", "Greenbay Lab", "Stride Athletics", "Apex Dynamics", "Quantum Soft", "Milano Work", "Canned Lynx"].map((partner, idx) => (
                <span
                  key={idx + 10}
                  className="font-display text-xs font-bold uppercase tracking-widest text-zinc-500 select-none hover:text-brand transition cursor-default"
                >
                  {partner} •
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles for Scrolling Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
