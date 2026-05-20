import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ArrowUpRight, X, BarChart3, Clock, Layers, Star, Plus } from "lucide-react";

interface ProjectsProps {
  onOpenBookModal: () => void;
}

export default function Projects({ onOpenBookModal }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-900 bg-zinc-950 relative scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Section Heading with subtle accent lines */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-900">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand block mb-1">
              PROVEN OUTCOMES • 검증된 비즈니스 파괴력
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              시그니처 케이스 스터디
            </h2>
            <p className="text-sm text-zinc-400 max-w-md mt-1 font-sans">
              스마트 웨어러블 하드웨어, 실시간 WebWebGL 카 컨피규레이터 통합, 트레이닝 기어 브랜드 구축 등 당사의 최신 대표 릴리스를 인터랙티브하게 확인해 보십시오.
            </p>
          </div>
          <div className="flex gap-2 font-mono text-[10px] uppercase text-zinc-500">
            <span>필터:</span>
            <span className="text-white hover:text-brand transition cursor-pointer font-semibold">전체 포트폴리오 보기</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer flex flex-col h-full rounded-2xl border border-zinc-900 bg-zinc-900/10 p-4 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/30"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-805 bg-black">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Brand pill inside card image */}
                <div className="absolute top-3 left-3 rounded-full bg-zinc-950/80 backdrop-blur border border-zinc-800 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-brand">
                  {proj.client}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-3 right-3 rounded-full bg-brand/90 p-1.5 text-white transition-transform duration-300 group-hover:rotate-45">
                  <Plus className="h-4 w-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase text-brand tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mt-1 group-hover:text-brand transition">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60">
                  {proj.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[8px] bg-zinc-900 text-zinc-400 border border-zinc-800 rounded px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deepen Trust Quote Section */}
        <div className="mt-20 rounded-2xl border border-dashed border-zinc-800 p-8 text-center bg-zinc-900/10 max-w-3xl mx-auto">
          <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">당사의 특화된 상세 역량 기술서 및 사양이 필요하신가요?</p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            당사의 크리에이티브 파이프라인은 귀사의 사내 고성능 리서치 확장 부서인 것처럼 매끄럽고 신속하게 작동합니다. 저희의 상세 업무 범위 영역을 검토하시거나 마일스톤 디자인 의뢰를 넣어 Arpeggio의 실제 성능을 한치 오차 없이 체감해 보십시오.
          </p>
          <button 
            onClick={onOpenBookModal}
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase text-brand hover:text-white transition"
          >
            <span>상담 및 전용 기술 진단 콜백 신청</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Case Study Detail Side Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
              onClick={() => setSelectedProject(null)}
            />

            {/* Side Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="relative w-full max-w-xl h-full border-l border-zinc-900 bg-zinc-950 p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
            >
              {/* Top border decor accent */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-brand" />

              <div className="space-y-6">
                {/* Header Close elements */}
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-brand font-bold block mb-0.5">
                      Case Study Specs • 케이스 스터디 상세 검토
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg p-1.5 text-zinc-400 bg-zinc-900/50 hover:text-white hover:bg-zinc-900 transition"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Big Image Section */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-900 max-h-60">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full object-cover max-h-60"
                  />
                  <div className="absolute bottom-2 left-2 rounded bg-zinc-950/90 px-2 py-0.5 font-mono text-[9px] text-zinc-300 border border-zinc-800">
                    고객사: {selectedProject.client}
                  </div>
                </div>

                {/* Metric Outcomes Widget Row */}
                {selectedProject.stats && (
                  <div className="grid grid-cols-3 gap-3 border-y border-zinc-900 py-4">
                    {selectedProject.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <span className="block font-display text-2xl font-bold text-brand tracking-tight">
                          {stat.value}
                        </span>
                        <span className="block font-mono text-[9px] text-zinc-500 tracking-wider mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Scope Description */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 text-brand" /> 개요 및 비즈니스 의의
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technical Bullet Highlights */}
                {selectedProject.details && (
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-brand" /> 주요 시선 및 상세 산출 성과
                    </h4>
                    <ul className="space-y-2 font-sans text-xs text-zinc-400">
                      {selectedProject.details.map((detail, key) => (
                        <li key={key} className="flex gap-2 items-start">
                          <span className="text-brand shrink-0 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action buttons inside drawer */}
              <div className="border-t border-zinc-900 pt-6 mt-8 space-y-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenBookModal();
                  }}
                  className="w-full rounded-xl bg-brand hover:bg-brand/90 text-white font-semibold py-3 text-xs tracking-wider uppercase transition duration-300"
                >
                  위 프로젝트와 유사한 기획 상담 미팅하기
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full rounded-xl bg-zinc-900 text-zinc-300 font-semibold py-3 text-xs tracking-wider uppercase transition border border-zinc-800 hover:border-zinc-700"
                >
                  아카이브 대시보드로 복귀
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
