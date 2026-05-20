import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles, ShieldCheck, User, MessageCircle, ArrowRight } from "lucide-react";

interface MockChatProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: "user" | "agency";
  text: string;
  time: string;
  isSpecial?: boolean;
}

const TEMPLATE_QUESTIONS = [
  "48시간 안에 SaaS 대시보드 설계 전송이 진짜 가능한가요?",
  "구독 정지 일수 이월 방식은 구체적으로 어떻게 보존되나요?",
  "리액트 인터랙티브 화면 모션 애니메이션 코딩도 가입 범위인가요?",
  "동시에 여러 개의 디자인/개발 과업을 병행 전개할 수도 있나요?"
];

export default function MockChat({ isOpen, onClose }: MockChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "agency",
      text: "안녕하세요! Arpeggio의 수석 디렉터 마르첼로(Marcello)입니다. ⚡ 오늘 귀사 제품에서 더 수급 속도를 내고 싶은 비주얼 파트가 있으실까요? 아래 추천 질문을 고르시거나, 희망 요건을 하단 검색창에 한글로 자유롭게 입력해 대화해 보세요!",
      time: "방금 전"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender: "user", text: textToSend, time: formattedTime }]);
    setInputValue("");
    setIsTyping(true);

    // Dynamic response logic
    setTimeout(() => {
      setIsTyping(false);
      let reply = "";
      let isSpecial = false;

      const normText = textToSend.toLowerCase();
      if (normText.includes("48") || normText.includes("대시보드") || normText.includes("dashboard") || normText.includes("속도")) {
        reply = "네, 확실합니다. 일반 SaaS 대시보드 작업의 경우, 핵심 유저 동선과 컴포넌트를 정의한 주요 5개 주요 화면의 고기능 피그마 시안을 48 영업시간 내로 완성해서 즉각 이관해 배포해 드립니다. 실제 구동되는 리액트 컴파일 최적화 프론트엔드 작업의 경우, 상세 호환 레이아웃 검증을 수반하므로 평균 약 3-4일의 스프린트가 가용됩니다.";
        isSpecial = true;
      } else if (normText.includes("정지") || normText.includes("이월") || normText.includes("billing") || normText.includes("정산")) {
        reply = "지극히 단순하고 명확합니다! 당사의 멤버십은 한 달(31일) 주기 기산 단위로 흐릅니다. 론칭 기능들을 모두 다듬어서 이번 달에 단 12일만 소비하시고 계정 일시정지를 발동하면, 남은 19일 일수의 사용 기한은 안전하게 에스크로 상태로 세이브 처리되어 향후 몇 달 뒤의 리뉴얼 작업 때 온전히 해동해 이어서 쓰실 수 있게 안배해 드립니다.";
      } else if (normText.includes("리액트") || normText.includes("애니메이션") || normText.includes("모션") || normText.includes("framer")) {
        reply = "전담 전공이자 주무기 분야입니다. 사용자의 엄지 손가락 반경 마찰력까지 디테일하게 고려하는 Framer Motion(Motion) 마이크로 프레임 보정과 WebGL, 캔버스 가속 그래픽스를 이용해 제품 시각의 품격을 최고 단위로 마크업해 드립니다.";
        isSpecial = true;
      } else if (normText.includes("동시") || normText.includes("여러개") || normText.includes("plans") || normText.includes("병행")) {
        reply = "동시에 독립된 두 종류 이상의 크레이티브 백로그 개발 라인이 분주히 작동해야 하는 규모의 사내 사정이라면, 당사의 '프로 플랜 (Pro Plan, 월 $9,499)'을 추천합니다. 디자인 디렉터 1명과 단독 개발 엔지니어 1명이 귀사에 밀접 공동 배치되어, 두 갈래의 스프린트 스트림을 실시간 교차 전개해 냅니다.";
      } else {
        reply = "문의해 주신 요구 사항 조항을 명확히 확인했습니다! 무척 도전적이고 비즈니스 가치가 높은 디지털 프로덕트가 될 것 같아 기대가 큽니다. Arpeggio가 가꾸는 고감도 미적 팩터와 맞춤 프론트 코드에 딱 맞닿아 있습니다. 빠른 실시간 설계 검증을 위해 15분 전략 비대면 초대장을 수령 수립해 보실까요?";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "agency", text: reply, time: formattedTime, isSpecial }
      ]);
    }, 1100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-zinc-800 bg-zinc-950 shadow-2xl">
          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-zinc-900 bg-zinc-900/40 p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-500" />
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-brand font-display font-bold text-sm">
                  AR
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-sm font-semibold text-white">Marcello</span>
                  <ShieldCheck className="h-4 w-4 text-brand" />
                </div>
                <span className="font-mono text-[10px] text-emerald-400">실시간 온라인 • 전담 진단 보조</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-900 hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="absolute bottom-0 right-0 left-0 h-[1.5px] bg-brand/40" />
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-brand text-white rounded-tr-none"
                      : msg.isSpecial
                      ? "border border-brand/30 bg-brand/5 text-zinc-100 rounded-tl-none glow-orange"
                      : "bg-zinc-900 text-zinc-200 rounded-tl-none border border-zinc-800"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="mt-1 font-mono text-[9px] text-zinc-500 px-1">{msg.time}</span>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 p-3.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
                </div>
                <span className="mt-1 font-mono text-[9px] text-zinc-500 px-1">답변 타이핑 중...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions footer */}
          {messages.length === 1 && (
            <div className="border-t border-zinc-900 bg-zinc-900/10 p-3 space-y-1.5">
              <span className="font-mono text-[9px] text-zinc-500 uppercase px-1">자주 묻는 핵심 단축 질문</span>
              <div className="flex flex-col gap-1.5">
                {TEMPLATE_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="flex items-center justify-between rounded-lg border border-zinc-900 bg-zinc-900/40 p-2.5 text-left text-xs text-zinc-400 transition hover:border-zinc-805 hover:bg-zinc-900 hover:text-white cursor-pointer"
                  >
                    <span>{q}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message input */}
          <div className="border-t border-zinc-900 bg-zinc-950 p-4">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                placeholder="해결 및 설계가 요구되는 요건을 입력하세요..."
                className="w-full rounded-full border border-zinc-800 bg-zinc-900/60 py-3 pr-12 pl-4 text-xs text-white placeholder-zinc-500 transition focus:border-brand focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleSendMessage(inputValue)}
                className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand/90 hover:scale-105 cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-2.5 text-center">
              <span className="font-mono text-[9px] text-zinc-605 text-zinc-550">
                ⚡ 질문에 실시간으로 즉시 반응하는 전용 샌드박스 대화방
              </span>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
