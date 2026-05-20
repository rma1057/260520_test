import React, { useState } from "react";
import { Send, ArrowUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-zinc-900 pb-16">
          {/* Brand profile & newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-2xl font-black uppercase text-white">
              Arpeggio<span className="text-brand">®</span>
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              우리는 관습에 박혀 고가에 형성된 기존 에이전시 업계의 비용 지출 방식을 완벽하게 거부합니다. 극도로 절제된 스위스/모던 예술 타이포그래피 기준과 완성도 높은 타입 안정성 코드를 오직 가벼운 연간/비정기 구독 모델 형태로 매끄럽게 지원합니다.
            </p>
            
            {/* Newsletter form */}
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand font-semibold block mb-1">
                디자인 타이포그래피 & 기술 트렌드 위클리 아카이브 구독하기
              </span>
              
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="relative max-w-sm flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@comapny.com"
                    className="w-full rounded-full border border-zinc-800 bg-zinc-900 px-4 py-3 pr-12 text-xs text-white placeholder-zinc-500 transition focus:border-brand focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand/90 cursor-pointer"
                    aria-label="이메일 구독 신청"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              ) : (
                <div className="rounded-xl border border-brand/20 bg-brand/5 p-3 flex items-center gap-2.5 max-w-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  <span className="font-mono text-[10px] text-zinc-400">
                    구독 완료됨! 매주 월요일, 엄선된 폰트 팩 및 인터랙티브 아이디어가 배송됩니다.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Links index */}
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div className="space-y-3">
              <h4 className="font-mono text-[9px] uppercase text-zinc-500 tracking-widest">바로 가기 메뉴</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#projects" className="hover:text-brand transition">시그니처 아카이브</a></li>
                <li><a href="#services" className="hover:text-brand transition">디자인 업무 범위</a></li>
                <li><a href="#pricing" className="hover:text-brand transition">멤버십 요금 계산</a></li>
                <li><a href="#faq" className="hover:text-brand transition">자주 묻는 질문 FAQ</a></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-mono text-[9px] uppercase text-zinc-500 tracking-widest">회사 정책 공고</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#" className="hover:text-brand transition">디렉터 진용 정보</a></li>
                <li><a href="#" className="hover:text-brand transition">크리에이티브 인재 채용</a></li>
                <li><a href="#" className="hover:text-brand transition">정당 이양 이용 약관</a></li>
                <li><a href="#" className="hover:text-brand transition">밀착 기술 비밀 엄수 서약</a></li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-mono text-[9px] uppercase text-zinc-500 tracking-widest">글로벌 헤드쿼터</h4>
              <p className="text-zinc-400 font-sans leading-relaxed">
                Arpeggio Labs LLC<br />
                85 Broad Street<br />
                New York, NY 10004<br />
                <span className="text-brand font-mono">collab@arpeggio.agency</span>
              </p>
            </div>
          </div>
        </div>

        {/* Massive, Stylized Catalog Brand Title Block */}
        <div className="py-12 border-b border-zinc-900 select-none overflow-hidden relative">
          <h1 className="font-display font-black text-[60px] sm:text-[100px] md:text-[140px] lg:text-[170px] uppercase text-center text-zinc-900 leading-none tracking-tighter opacity-70">
            ARPEGGIO
          </h1>
        </div>

        {/* Lower row */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-[9px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Arpeggio Labs LLC. All rights reserved. Registered trademark worldwide.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition cursor-pointer">디자인 시스템 규격 v1.1</span>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition group border border-zinc-900 rounded-full px-2.5 py-1 hover:border-zinc-805 cursor-pointer"
            >
              <span>상단으로 복귀</span>
              <ArrowUp className="h-3 w-3 transition duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
