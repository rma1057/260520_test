import React, { useState } from "react";
import { motion } from "motion/react";
import { Layers, Smartphone, Sparkles, Terminal, Palette, MonitorCheck, RefreshCw } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Palette,
    title: "브랜드 디자인 & 정체성 시스템",
    items: ["로고 및 시각 심볼 디자인 가이드라인", "고급 타이포그래피 스타일링 규칙", "인터랙티브 벡터 일러스트레이션 스펙트럼", "피그마(Figma) 코어 디자인 컴포넌트 설정", "디지털 브랜드 자산 세부 가이드북 배포"]
  },
  {
    icon: Layers,
    title: "SaaS & 고성능 웹 인터페이스",
    items: ["지능형 사용자 행동 동선 와이어프레임", "초압축 대시보드 및 복잡 데이터 반응형 레이아웃", "설계 무결성을 보장하는 고품질 컴포넌트 팩", "시그니처 마케팅 웹 랜딩페이지 구축", "구체화된 유저 여정 UX 매트릭스 수립"]
  },
  {
    icon: Smartphone,
    title: "차세대 모바일 애플리케이션 디자인",
    items: ["iOS 및 Android용 전용 오가닉 레이아웃 설계", "대화식 터치 피그마 인터랙티브 프로토타이핑", "밀도 높은 바이오메트릭 추적 다이어그램 제작", "스와이프 연동 고가용성 와이어프레임 모델", "인프라 이송용 리액트 네이티브 친화 에셋 이송"]
  },
  {
    icon: Terminal,
    title: "초고속 엔지니어링 컴파일 코드",
    items: ["Tailwind CSS 모듈 조합형 초밀착 경밀 스타일링", "React 단일 페이지 최적 최첨단 패키징 설계", "Framer Motion 프레임 단위 모션 가속 미세 세팅", "유지보수를 가속하는 전 코딩 핸드오프 프로세스", "경량 API 라우트 연계 설계 및 프록시 구축"]
  }
];

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-[linear-gradient(180deg,#0c0c0d_0%,#080809_100%)] border-b border-zinc-900 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky Left Heading text */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand font-bold flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 animate-spin" /> 완벽을 향하는 고밀도 오피니언
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl leading-tight">
              프리미엄 파트너. <br />
              <span className="text-stroke">한계 없는 업무.</span>
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm">
              저희는 심미적인 하이엔드 시각 인터랙션 그래픽 환경과 버그 없는 고품질 컴파일 코드를 완전히 융합하여 제공합니다. 별도의 그래픽 스튜디오와 개발 외주 업체를 이원화하여 조율하며 낭비하던 고가의 에너지를 하나의 멤버십으로 완전히 지워 보십시오.
            </p>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-4 space-y-2">
              <span className="font-mono text-[9px] uppercase text-zinc-500">신속 발송 구좌제</span>
              <p className="text-[11px] text-zinc-400">
                수정이 잦은 단일 카드 조율, 마케팅 배너 보강, 버튼 모션 등의 작은 스프린트는 클릭 후 평균 <strong className="text-white">48 영업 시간 내</strong> 완성 시안이 직접 이송됩니다.
              </p>
            </div>
          </div>

          {/* Right Cards list */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={cap.title}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`rounded-2xl border p-6 bg-zinc-950/40 select-none transition-all duration-300 ${
                    isHovered
                      ? "border-brand border-opacity-70 bg-zinc-900/10 glow-orangeScale"
                      : "border-zinc-900"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-zinc-400 transition mb-4">
                    <Icon className={`h-5 w-5 transition duration-300 ${isHovered ? "text-brand scale-110 rotate-3" : "text-zinc-400"}`} />
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-3">
                    {cap.title}
                  </h3>
                  <ul className="space-y-2 text-xs text-zinc-500 font-sans">
                    {cap.items.map((item) => (
                      <li key={item} className="flex gap-2 items-start hover:text-white transition duration-200">
                        <span className={`transition ${isHovered ? "text-brand" : "text-zinc-600"}`}>▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
