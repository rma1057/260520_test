import React, { useState, useEffect } from "react";
import { MessageSquare, Calendar, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenBookModal: () => void;
  onOpenChat: () => void;
}

export default function Header({ onOpenBookModal, onOpenChat }: HeaderProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Brand Logo & Creative agency label */}
        <div className="flex items-center gap-4">
          <a href="#" className="font-display text-xl font-black tracking-tighter text-white hover:text-brand transition">
            Arpeggio<span className="text-brand">®</span>
          </a>
          <div className="hidden h-4 w-[1px] bg-zinc-800 md:block" />
          <span className="hidden font-mono text-[10px] uppercase text-zinc-500 tracking-widest md:inline-block">
            크리에이티브 디자인 에이전시 — 디지털 제품 설계 & 엔지니어링
          </span>
        </div>

        {/* Navigation items / Fine links */}
        <nav className="hidden items-center gap-6 lg:flex">
          <a href="#projects" className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white transition">
            프로젝트
          </a>
          <a href="#services" className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white transition">
            업무 범위
          </a>
          <a href="#pricing" className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white transition">
            가격 및 구독
          </a>
          <a href="#faq" className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white transition">
            자주 묻는 질문
          </a>
          <a href="#journal" className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white transition">
            저널
          </a>
        </nav>

        {/* Action Triggers & Running Clock */}
        <div className="flex items-center gap-4">
          {/* Running UTC display */}
          <div className="hidden items-center gap-1.5 font-mono text-[10px] text-zinc-500 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
            <span>KST:</span>
            <span className="text-zinc-300 font-medium">{time || "12:00:00"}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenChat}
              className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
            >
              <MessageSquare className="h-3 w-3 text-brand" />
              <span>실시간 상담</span>
            </button>
            <button
              onClick={onOpenBookModal}
              className="rounded-full bg-brand px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white transition hover:bg-brand/90 hover:scale-[1.03]"
            >
              <span>전략 미팅 예약</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
