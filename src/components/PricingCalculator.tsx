import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, Zap, FileText, BadgePercent, Check } from "lucide-react";

interface OptionGroup {
  name: string;
  price: number;
}

export default function PricingCalculator() {
  // Configured inputs
  const [designScope, setDesignScope] = useState<"standard" | "complex" | "enterprise">("complex");
  const [development, setDevelopment] = useState(true);
  const [urgency, setUrgency] = useState<"standard" | "express">("standard");
  const [weeklySync, setWeeklySync] = useState(false);
  const [showDirectPlanMatch, setShowDirectPlanMatch] = useState(true);

  // Compute calculated prices dynamically
  const BASE_PRICE = 4500;
  
  const getDesignMarkup = () => {
    if (designScope === "standard") return 0;
    if (designScope === "complex") return 1500;
    return 3500;
  };

  const getDevMarkup = () => (development ? 2800 : 0);
  const getUrgencyMarkup = () => (urgency === "express" ? 1400 : 0);
  const getSyncMarkup = () => (weeklySync ? 800 : 0);

  const calculateTotalPrice = () => {
    return BASE_PRICE + getDesignMarkup() + getDevMarkup() + getUrgencyMarkup() + getSyncMarkup();
  };

  const currentPrice = calculateTotalPrice();

  // Match calculator to subscription plans
  const getRecommendedPlan = () => {
    if (currentPrice <= 6500) {
      return {
        name: "코어 플랜 (Core Plan)",
        price: "$5,499",
        desc: "입력하신 요구사항 수준에 적정하게 최적 세팅됩니다! 시니어 디자이너가 동시 1개 파이프라인으로 높은 디테일 보장을 주도합니다.",
        isBookable: true
      };
    } else if (currentPrice <= 10000) {
      return {
        name: "프로 플랜 (Pro Plan)",
        price: "$9,499",
        desc: "강력 추천 모델! 동시 2개 다폴더 독립 생산 라인 개방, 완벽 리액트 정렬 컴포넌트 코드 직접 및 주간 회의 통합 케어가 제공됩니다.",
        isBookable: true
      };
    } else {
      return {
        name: "커스텀 엔터프라이즈 조율",
        price: "개별 상담",
        desc: "설계하신 자산 가치는 표준 멤버십 사양을 상회합니다. 맞춤형 연계 및 예비 조율 전담 협약(하이브리드 패키지) 상담을 나누세요.",
        isBookable: false
      };
    }
  };

  const planRecommendation = getRecommendedPlan();

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-brand/10 blur-2xl" />
      
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-6">
          <div>
            <span className="font-mono text-[10px] uppercase text-brand tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" /> Creative Scope Estimator 및 가치 대조 진단
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-1">
              디자인 & 개발 권장 멤버십 자가 예측
            </h3>
            <p className="text-sm text-zinc-400">
              필요를 유연하게 튜닝 조정하고, Arpeggio의 최적 효율 구간 요금대를 실시간 매칭 분석해 보십시오.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-center">
            <span className="font-mono text-xs text-zinc-400">표선 요금제 실시간 대조 표시</span>
            <button
              onClick={() => setShowDirectPlanMatch(!showDirectPlanMatch)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showDirectPlanMatch ? "bg-brand" : "bg-zinc-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showDirectPlanMatch ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls list */}
          <div className="lg:col-span-7 space-y-6">
            {/* Design complexity scale */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">
                디자인 핵심 범위 복잡 사양
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "standard", label: "기본형 (Standard)", desc: "단일 론칭 MVP 및 핵심 요소" },
                  { key: "complex", label: "다변화 (Complex)", desc: "SaaS 대시보드 및 복잡 플랫폼 정렬" },
                  { key: "enterprise", label: "엔터프라이즈", desc: "고성능 3D 그래픽스 & 일류 일러스트" }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setDesignScope(item.key as any)}
                    className={`rounded-xl border p-3 text-left transition ${
                      designScope === item.key
                        ? "border-brand bg-brand/5 text-white"
                        : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                    }`}
                  >
                    <span className="block text-xs font-semibold">{item.label}</span>
                    <span className="block text-[10px] mt-0.5 text-zinc-500 truncate">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dev toggle */}
            <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/10 p-4">
              <div>
                <span className="block text-xs font-semibold text-white">동시 수반되는 프로덕션급 프론트엔드 개발</span>
                <span className="block text-[10px] text-zinc-500 mt-0.5">
                  디자인 완료 단계를 넘어 반응형 코딩(React / Tailwind 최적화) 산출물 원본을 직접 조립 컴파일 인도해 드립니다.
                </span>
              </div>
              <button
                onClick={() => setDevelopment(!development)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${
                  development ? "bg-brand" : "bg-zinc-800"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    development ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Urgency */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">
                산출 스프린트 희망 인도 가속도
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: "standard", label: "기본 권장 속도", desc: "평균 48-72시간 최적 수립", icon: Calendar },
                  { key: "express", label: "익스프레스 급송", desc: "활성 백로그 큐 48시간 내 최우선 처리", icon: Zap }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setUrgency(item.key as any)}
                      className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                        urgency === item.key
                          ? "border-brand bg-brand/5 text-white"
                          : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${urgency === item.key ? "text-brand" : "text-zinc-500"}`} />
                      <div>
                        <span className="block text-xs font-semibold">{item.label}</span>
                        <span className="block text-[10px] text-zinc-500 mt-0.5">{item.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Video reviews */}
            <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/10 p-4">
              <div>
                <span className="block text-xs font-semibold text-white">정기 주간 성과 싱크 화상 콜 배정</span>
                <span className="block text-[10px] text-zinc-500 mt-0.5">
                  메신저 공유 단계를 보완하여, 당사 대표 및 전담 크리에이티브 리드와 라이브 화상 회의를 소집 배치합니다.
                </span>
              </div>
              <button
                onClick={() => setWeeklySync(!weeklySync)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${
                  weeklySync ? "bg-brand" : "bg-zinc-800"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    weeklySync ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Pricing display outputs */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-zinc-900 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="font-mono text-[9px] uppercase text-zinc-400 tracking-widest block mb-1">
                자가 튜닝에 따른 예상 월간 성과 가치
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-white tracking-tight">
                  ${currentPrice.toLocaleString()}
                </span>
                <span className="font-mono text-zinc-500 text-xs">/월 성과가치 상당</span>
              </div>
            </div>

            {showDirectPlanMatch && (
              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4 space-y-3 relative glow-orange">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-brand tracking-wider font-semibold">
                    ⭐ 실시간 맞춤 권장 정액 요금제 매칭
                  </span>
                  <span className="rounded bg-brand px-1.5 py-0.5 font-mono text-[9px] text-white">
                    최적 매칭
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">
                    {planRecommendation.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5 font-sans leading-relaxed">
                    {planRecommendation.desc}
                  </p>
                </div>
                <div className="flex items-baseline gap-1 pt-1.5 border-t border-zinc-800">
                  <span className="text-xs font-semibold text-zinc-400">실 결제 연동 가격:</span>
                  <span className="font-display text-xl font-extrabold text-brand">{planRecommendation.price}</span>
                  <span className="text-[10px] text-zinc-500 font-mono">/월</span>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider block">
                전 등급 멤버십 공통 항시 기본 편입권
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-sans">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-brand" /> 활성 대기 큐 전체 과업 수정 보완 무제한 제공
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-brand" /> 소통 리스크를 최소화환 사내 슬랙 단독 특설 핫라인 구축
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-brand" /> 제품 파이프라인 휴면기 시 잔여일수 홀드 이월 제도 보증
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-brand hover:bg-brand/90 text-white font-semibold py-3 text-xs tracking-wide uppercase transition duration-200"
            >
              선택한 희망 요건으로 상세 미팅 상담 개시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
