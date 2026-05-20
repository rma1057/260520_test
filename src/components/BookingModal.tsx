import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Sparkles, CheckCircle2, Video } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_TIMES = ["오전 09:00", "오전 10:30", "오후 01:00", "오후 03:30", "오후 05:00"];
const DATES = [
  { day: "월", num: "25", label: "2026년 5월 25일 (월)" },
  { day: "화", num: "26", label: "2026년 5월 26일 (화)" },
  { day: "수", num: "27", label: "2026년 5월 27일 (수)" },
  { day: "목", num: "28", label: "2026년 5월 28일 (목)" },
  { day: "금", num: "29", label: "2026년 5월 29일 (금)" }
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState(DATES[0]);
  const [selectedTime, setSelectedTime] = useState(AVAILABLE_TIMES[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("UI/UX 디자인 및 웹 엔지니어링");
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl md:p-8"
          >
            {/* Top blue highlight line */}
            <div className="absolute top-0 right-0 left-0 h-[2px] bg-brand animate-pulse" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 transition hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-brand animate-ping" />
                    <span className="font-mono text-xs tracking-widest text-brand uppercase">Meet Arpeggio • 비대면 전략 싱크</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                    1:1 무료 파트너 미팅 예약
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    단 15분 만에 제품 디자인 방향성 수립, 맞춤형 요금제 제안, 그리고 핵심 레퍼런스를 밀접하게 확인해보세요.
                  </p>
                </div>

                {/* Calendar Selector */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 text-brand" /> 달력 날짜 선택
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {DATES.map((date) => (
                      <button
                        key={date.num}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`flex flex-col items-center justify-center rounded-lg border p-2 transition-all cursor-pointer ${
                          selectedDate.num === date.num
                            ? "border-brand bg-brand/10 text-brand font-medium"
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-white"
                        }`}
                      >
                        <span className="text-[10px] uppercase font-mono">{date.day}</span>
                        <span className="text-sm font-semibold">{date.num}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeslots Selector */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-brand" /> 예약 가능 시간대 (KST 한국 표준시)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {AVAILABLE_TIMES.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-full px-3 py-1.5 text-xs transition cursor-pointer ${
                          selectedTime === time
                            ? "bg-brand font-medium text-white"
                            : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">귀하의 성함</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="김 아르페"
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-zinc-500 transition focus:border-brand focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">회신용 법인 이메일</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ceo@company.com"
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-zinc-500 transition focus:border-brand focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">진단이 필요한 핵심 도메인</label>
                    <div className="relative">
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-xs text-white transition focus:border-brand focus:outline-none appearance-none cursor-pointer"
                      >
                        <option>UI/UX 디자인 및 웹 엔지니어링</option>
                        <option>SaaS 및 비즈니스 디자인 시스템 수립</option>
                        <option>고감도 모바일 비주얼 프로토타이핑</option>
                        <option>전체 연동 인터랙티브 리빌딩 전개</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">▼</div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand/90 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Video className="h-4 w-4 transition group-hover:rotate-12" />
                  미팅 초대 초대장 전송 신청하기
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center space-y-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full" />
                  <CheckCircle2 className="relative h-16 w-16 text-brand" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    미팅 가예약이 신청되었습니다!
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 max-w-sm font-sans leading-relaxed">
                    안녕하세요, <strong className="text-white">{name}</strong>님! 귀하의 미팅 일정을{" "}
                    <span className="text-brand font-medium">{selectedDate.label}</span>{" "}
                    <span className="text-brand font-medium">{selectedTime}</span>에 임시 등록했습니다.
                  </p>
                </div>
                <div className="w-full rounded-xl bg-zinc-900 p-4 font-mono text-left text-xs text-zinc-400 border border-zinc-800 space-y-2">
                  <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                    <span>전담 호스트:</span>
                    <span className="text-white font-medium">마르첼로 (Founder / Arpeggio)</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                    <span>진행 방식:</span>
                    <span className="text-white flex items-center gap-1"><Video className="h-3 w-3 text-brand" /> 구글 미트 비대면 화상 콜 (15분)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>진단 분야:</span>
                    <span className="text-white truncate max-w-[200px]">{projectType}</span>
                  </div>
                </div>
                <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">
                  미팅 수락을 위한 캘린더 초대 링크가 입력해주신 주소 <span className="text-white font-medium">{email}</span>로 안전하게 발송되었습니다.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-zinc-800 hover:bg-zinc-700 px-6 py-2 text-xs font-semibold text-white transition cursor-pointer"
                >
                  메인 화면으로 가기
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
