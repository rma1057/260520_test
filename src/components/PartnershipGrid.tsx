import React from "react";
import { motion } from "motion/react";
import { Smile, RefreshCcw, Slack, Figma, Github, ShieldAlert, Cpu } from "lucide-react";

export default function PartnershipGrid() {
  return (
    <section className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-brand font-semibold">
            THE CRITICAL DIFFERENCE • 근본적인 시스템의 격차
          </span>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            프로젝트 하청이 아닌 밀착형 가치 정렬
          </h2>
          <p className="text-sm text-zinc-400">
            자동화된 과업 보고 파이프라인과 완벽한 내부화 워크플로우를 통하여 파트너사 임직원의 소통 편의성과 프로젝트 성공 가능성을 극대화합니다.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: The Designer White Cat & Satisfaction (5 columns) */}
          <div className="col-span-1 md:col-span-5 rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 bg-brand/10 blur-xl rounded-full" />
            
            <div className="space-y-2 z-10">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand">Quality Assurance</span>
              <h3 className="font-display text-lg font-bold text-white">
                파트너 협업 만족 지표: 90%+
              </h3>
              <p className="text-xs text-zinc-400 max-w-sm">
                결과물의 완성도를 집요하고 가혹할 정도로 사내 자체 검수합니다. 맞춤 밀접 온보딩 채널과 신속한 다이렉트 소통을 통해 고객사의 실제 요구 수준을 원치 않는 수준 이상으로 충족해 드립니다.
              </p>
            </div>

            {/* Cat Photo Frame */}
            <div className="mt-6 relative mx-auto aspect-square w-full max-w-[210px] rounded-xl overflow-hidden border border-zinc-800 bg-black/50 glow-orange">
              <img
                src="/src/assets/images/satisfaction_cat_1779245225339.png"
                alt="Satisfaction Assurance White Cat"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-2 right-2 rounded-full bg-brand px-2 py-0.5 text-[8px] font-mono text-white font-bold uppercase tracking-widest animate-pulse">
                90% 만족도 검증 완료
              </div>
              <div className="absolute bottom-1 left-1 right-1 bg-zinc-950/90 py-1.5 px-2 text-center text-[9px] font-mono text-zinc-400 rounded border border-zinc-800">
                ⭐ 검증된 프레스티지급 시각적 감도
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Integrations Matrix (7 columns) */}
          <div className="col-span-1 md:col-span-7 rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand">Integrated Pipeline</span>
              <h3 className="font-display text-lg font-bold text-white">
                귀사 팀이 항상 사용하는 업무 연동 통합
              </h3>
              <p className="text-xs text-zinc-400 max-w-lg">
                정신 사납고 낯설며 적응하기 까다로운 에이전시 전용 알림 메일이나 외부 대시보드를 강제하지 않습니다. 피그마 산출물은 라이브 링크로 자동 연계되고, 최종 완료 코드베이스는 사내 GitHub 리포지토리로 직접 커밋 빌드 전송됩니다.
              </p>
            </div>

            {/* Visual Workspace Matrix Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Figma, label: "Figma 크리에이티브", context: "디자인 실시간 싱크" },
                { icon: Slack, label: "Slack 다이렉트 콜", context: "핫라인 전용 공유 채널" },
                { icon: Github, label: "GitHub 리포지토리", context: "코드 원클릭 머지 전송" },
                { icon: Cpu, label: "React + Tailwind", context: "타입 검증 컴파일 소스" }
              ].map((tool, idx) => {
                const ToolIcon = tool.icon;
                return (
                  <div
                    key={idx}
                    className="group-hover:border-zinc-700 rounded-xl border border-zinc-900 bg-zinc-950/60 p-4 font-mono text-left transition hover:border-brand/40 hover:bg-zinc-950"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-brand transition mb-3">
                      <ToolIcon className="h-4.5 w-4.5 text-brand" />
                    </div>
                    <span className="block text-xs font-semibold text-white">{tool.label}</span>
                    <span className="block text-[9px] text-zinc-500 mt-1">{tool.context}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t border-zinc-900/80 pt-4 flex items-center gap-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-[10px] font-mono text-zinc-500">
                모든 디자인 에셋과 연동 데이터는 법적 효력을 갖는 NDA(비밀유지계약) 가이드라인에 따라 원격 보호됩니다.
              </p>
            </div>
          </div>

          {/* Card 3: Pausing system (6 columns) */}
          <div className="col-span-1 md:col-span-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand">Flexible Billing</span>
              <h3 className="font-display text-lg font-bold text-white">
                필요하지 않은 휴식 주간에는 잠시 일시정지 (Pause)
              </h3>
              <p className="text-xs text-zinc-400">
                실제로 귀사의 파이프라인이 정밀 작동하는 기간(일 수 기산)에 대해서만 정직하게 지불하십시오. 대항목 기능의 릴리스를 완료하고 잠시 로드맵을 보충하는 기간이 오면 구독 정지를 동작시켜 남은 일수를 에스크로 예치 보존해 두십시오.
              </p>
            </div>

            {/* Interactive Trial escrow countdown simulator */}
            <div className="mt-6 border border-zinc-800 bg-zinc-950 rounded-xl p-4 font-mono space-y-3">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 uppercase">예치 보존 상태 (Escrow)</span>
                <span className="rounded bg-zinc-900 px-1.5 py-0.5 text-emerald-400 font-medium">안전함 & 즉시 해동가능</span>
              </div>
              <div className="flex items-center justify-between border-y border-zinc-900 py-2.5">
                <div>
                  <span className="text-white text-sm font-semibold">사용 가능 일수: 18일</span>
                  <span className="block text-[8px] text-zinc-600">월 31일 주기의 표준 멤버십 결제분 기준</span>
                </div>
                <button
                  type="button"
                  className="rounded bg-brand hover:bg-brand/90 px-3 py-1 text-[10px] text-white font-bold transition group-hover:scale-105"
                >
                  멤버십 즉시 일시 정지
                </button>
              </div>
              <p className="text-[9px] text-zinc-600 leading-normal">
                💡 홀드 대기 처리된 잔여 이월 일수는 시간 경과로 인한 소멸 기한이 전혀 없으며, 신규 제품 사양 및 테스트가 수립되면 곧바로 재개하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* Card 4: Safety Guarantee (6 columns) */}
          <div className="col-span-1 md:col-span-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand">Zero Friction Risks</span>
              <h3 className="font-display text-lg font-bold text-white">
                언제든 자유로운 구독 중지와 무제한 피드백 반영 보장
              </h3>
              <p className="text-xs text-zinc-400">
                결과적으로 귀사 사내 마케팅, 리서치, 그리고 경영진 단계에서 만장일치의 완벽한 감도를 얻으실 때까지 횟수에 아무 연연하지 않고 완성도를 높입니다. 진행되는 모든 저작 소스 자산 및 산출권(IP)은 첫 릴리스 즉시 귀사 법인 자산으로 이양됩니다.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800 px-3 py-1 text-[10px] font-mono">
                ✓ 소스 소유물(IP) 무상 양도 약정
              </span>
              <span className="rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800 px-3 py-1 text-[10px] font-mono">
                ✓ 강력 비밀 준수 NDA 보증 가입
              </span>
              <span className="rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800 px-3 py-1 text-[10px] font-mono">
                ✓ 일류 시니어 엔지니어링 케어 풀
              </span>
              <span className="rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800 px-3 py-1 text-[10px] font-mono">
                ✓ 투명하고 직관적인 추가금 제로 정액제
              </span>
            </div>

            <div className="mt-4 text-[9px] text-zinc-600 font-mono">
              글로벌 크리에이티브 제품 미학 및 ISO 편의 만족 조항에 따라 완수 설계되었습니다.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
