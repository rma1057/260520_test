import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Testimonial } from "../types";
import { Play, X, Sparkles, Volume2, UserCheck, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Math-based visual particles wave inside the simulated player modal
  useEffect(() => {
    if (!activeTestimonial || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let offset = 0;
    const draw = () => {
      ctx.fillStyle = "#09090b";
      ctx.fillRect(0, 0, width, height);

      // Render mathematical digital waves mimicking futuristic abstract video
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 71, 0, 0.4)";
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += 3) {
        const y = height / 2 + Math.sin(x * 0.006 + offset) * 45 * Math.cos(x * 0.002 + offset * 0.5);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Render secondary wave
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 3) {
        const y = height / 2 + Math.cos(x * 0.008 - offset * 0.8) * 35 * Math.sin(x * 0.003 - offset * 0.3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw subtle running time code
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.font = "10px monospace";
      const timecode = `00:00:${Math.min(59, Math.floor(offset * 2)).toString().padStart(2, "0")}`;
      ctx.fillText(`REC • LIVE SYNCH DECK  [ ${timecode} ]`, 20, 30);

      offset += 0.012;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTestimonial]);

  return (
    <section className="py-20 md:py-28 bg-[linear-gradient(180deg,#080809_0%,#0c0c0d_100%)] border-b border-zinc-900 overflow-hidden relative">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-zinc-900">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand block mb-1">
              CLIENT TESTIMONIALS • 생생한 파트너의 권고
            </span>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              함께 이뤄낸 도약과 성공의 경험들
            </h2>
            <p className="text-sm text-zinc-400 max-w-sm mt-1">
              월 정액 조율 멤버십 서비스를 활발히 이용 중인 파트너사 대표들의 투명한 코멘트입니다.
            </p>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-500">
            <UserCheck className="h-4.5 w-4.5 text-brand" />
            <span>100% 검증된 투명한 실제 기업 파트너 평판</span>
          </div>
        </div>

        {/* Quotes list grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 relative group transition duration-300 hover:border-zinc-805"
            >
              <div className="absolute top-4 right-4 text-zinc-800 pointer-events-none group-hover:text-brand/20 transition duration-300">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              <div className="space-y-4">
                <p className="text-xs text-zinc-300 leading-relaxed font-sans italic">
                  "{t.quote}"
                </p>
                
                {/* Watch Reel Button Trigger */}
                <button
                  onClick={() => setActiveTestimonial(t)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 hover:bg-zinc-850 px-3 py-1.5 font-mono text-[9px] text-zinc-400 hover:text-white transition"
                >
                  <Play className="h-3 w-3 text-brand fill-brand" />
                  <span>실시간 전략 성과 기록 재생</span>
                </button>
              </div>

              {/* Profile Bio */}
              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="h-10 w-10 rounded-full object-cover border border-zinc-800"
                />
                <div>
                  <h4 className="font-display text-xs font-bold text-white">{t.author}</h4>
                  <span className="block text-[10px] text-zinc-500 font-mono">
                    {t.role} @ <strong className="text-zinc-400 font-normal">{t.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Simulated Video Reel Player Overlay Modal */}
      <AnimatePresence>
        {activeTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setActiveTestimonial(null)}
            />

            {/* Video Box Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Top info line */}
              <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-900/40 p-3 px-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
                  <span className="font-mono text-[9px] uppercase text-zinc-400">
                    현재 가상 재생 섹션: {activeTestimonial.author} ({activeTestimonial.company})
                  </span>
                </div>
                <button
                  onClick={() => setActiveTestimonial(null)}
                  className="rounded-lg p-1 text-zinc-400 hover:text-white hover:bg-zinc-900 transition"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* High precision Simulated Screen Canvas */}
              <div className="relative aspect-video bg-zinc-950 flex items-center justify-center">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                
                {/* Centered volume warning */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-zinc-950/80 backdrop-blur rounded px-2.5 py-1 text-[10px] font-mono text-zinc-400 border border-zinc-900">
                  <Volume2 className="h-3 w-3 text-brand" />
                  <span>비디오 스트림 음소거 해제 상태</span>
                </div>
              </div>

              {/* Under-player Quote summary */}
              <div className="p-4 md:p-6 bg-zinc-950 space-y-2">
                <span className="font-mono text-[9px] uppercase text-brand tracking-widest font-semibold flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" /> 파트너 성찰 및 신뢰 내러티브
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  "Arpeggio가 초반에 완성한 정밀한 시제품 구조 및 레이아웃 검토 솔루션 덕분에, 전체 마케팅 기획 전반의 수치를 기민하게 최적화하고 이관하여 괄목할 성장을 만들 수 있었습니다. 이들의 고감도 정액 구독 인터랙티브 지원을 정말 주저없이 확고하게 강력 권장 드립니다."
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
