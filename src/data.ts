import { Project, Testimonial, FAQItem, JournalArticle, PricingPlan } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "boreal-vr",
    title: "Boreal VR Headset",
    category: "VR 헤드셋 제품 디자인",
    client: "Nordvision",
    description: "혁신적인 혼합 현실 인터페이스와 초경량 하드웨어 인클로저를 통해 새로운 일상 컴퓨팅을 정의합니다. 다수의 인체공학 및 제품 디자인 어워드를 수상하여 기술력을 검증했습니다.",
    tags: ["제품 디자인", "하드웨어 디자인", "산업 디자인", "3D 모델링"],
    image: "/src/assets/images/boreal_vr_headset_1779245148677.png",
    stats: [
      { label: "실무 무게 절감", value: "35%" },
      { label: "착용감 만족도", value: "98%" },
      { label: "크레딧 누적 점유", value: "+120K" }
    ],
    details: [
      "초경량 친환경 하이브리드 우주 항공 복합 신소재 프레임 설계",
      "안구 열기를 신속하게 해소해 렌즈 습기를 완벽 차단하는 순환 팬 시스템",
      "미세 촉각 자극까지 정밀하게 다듬은 실시간 반응형 고정밀 햅틱 기술 통합",
      "5개 핵심 두상 접점을 고르게 누르는 인체공학 하중 분산으로 장시간 착용 최적화"
    ]
  },
  {
    id: "velocity-motors",
    title: "Velocity Motors",
    category: "자동차 브랜드 플래그십 리빌딩",
    client: "Velocity Motors Group",
    description: "하이 퍼포먼스 럭셔리카의 주행 역동성을 3D 모델로 즉시 체험해 보고 주문할 수 있게 한 고성능 멀티스레드 디지털 플래그십 웹 인터페이스.",
    tags: ["WebGL 3D", "UX 전략", "브랜드 아이덴티티", "프론트엔드 개발"],
    image: "/src/assets/images/sports_car_velocity_1779245173865.png",
    stats: [
      { label: "3D 구성 지연", value: "1.2s" },
      { label: "사용자 도달 증폭", value: "+180%" },
      { label: "온라인 계약", value: "4.8K" }
    ],
    details: [
      "웹 그래픽 하드웨어 가속을 적극 반영한 가상 시제품 드라이빙 컨피규레이터 제작",
      "수십 가지만의 조합 데이터를 대기 시간 없이 가져오는 최적화된 자산 캐싱 구조",
      "시네마틱 영상과 마우스 스크롤을 연동하여 완성도 높은 내러티브 스토리 전개",
      "글로벌 타겟 대금 정산 프로세스를 유연하게 대응하는 원클릭 전자 청구 안전 연동"
    ]
  },
  {
    id: "stride-apex",
    title: "Stride Apex",
    category: "모바일 생태계 & 의류 브랜딩",
    client: "Stride Athletics",
    description: "보행 상태 분석 임베디드 모듈 연동과 더불어 개별 전문 트레이너와의 라이브 데이터 연계를 유기적으로 구현한 프리미엄 애슬레틱 웨어 러닝 허브 솔루션.",
    tags: ["모바일 앱 디자인", "바이오메트릭 동기화", "디자인 가이드라인", "모션 그래픽"],
    image: "/src/assets/images/running_shoe_stride_1779245199416.png",
    stats: [
      { label: "고객 리텐션", value: "88%" },
      { label: "동기화 레이턴시", value: "<15ms" },
      { label: "일간 활성 유저", value: "1.5M" }
    ],
    details: [
      "실시간 운동 불균형 감지 자이로 각도 추세 시각 기법 반영",
      "유저의 한 손 조작성을 보장하고 엄지 터치 반경을 배려한 플루이드 레이아웃 정렬",
      "새벽공기 속 러닝 가시성을 보장하며 시력 보호를 우선시한 하이콘트라스트 다크 스크래치",
      "디지털 디스플레이와 실물 포장 박스 전반의 품격을 지켜주는 코어 타이포그래피 시큐리티"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Arpeggio 팀과의 여정은 완벽한 도약의 계기였습니다. 디테일에 대한 끝없는 집착과 놀랍도록 대담하고 아름다운 해결책들 덕분에 브랜드 가치를 크게 끌어올렸으며, 론칭 이후 실사용 성과 수치가 이전 대비 두 배 가까이 뛰었습니다.",
    author: "데보라 키스 (Deborah Keith)",
    role: "계정 총괄 디렉터 (Account Director)",
    company: "Nordvision",
    videoUrl: "simulation",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: "2",
    quote: "시선을 사로잡는 모션과 고도의 절제미가 어우러진 비주얼 시스템을 선물 받았습니다. 진행 사안에 대한 피드백 소통 역시 번개처럼 부드럽고 만족스럽게 연결되어 멤버십에 지불한 그 어떤 가치도 아깝지 않았습니다.",
    author: "소피아 윌리엄스 (Sophia Williams)",
    role: "수석 마케팅 디렉터 (Marketing Manager)",
    company: "Austrian Air",
    videoUrl: "simulation",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: "3",
    quote: "창의적인 설계 이론과 견고한 타이포 그리드로 구현된 사이트는 당사의 신뢰성 입증에 핵심 돌파구가 되었습니다. 단순한 용역 관계를 뛰어넘는 신뢰 깊은 비즈니스 확장 동반자입니다.",
    author: "니콜라스 산체스 (Nicolas Sánchez)",
    role: "디지털 최고 전략가 (Content Strategist)",
    company: "Greenbay Labs",
    videoUrl: "simulation",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "의뢰한 작업물은 얼마나 신속하게 전달받을 수 있나요?",
    answer: "활성화된 월간 멤버십 안에서 이루어지는 단일 스크린 웹 수정, 디자인 요소 추가, 마케팅 배너 제작, 타이포 구성 같은 일반적인 요건들은 신청 접수 후 평균 48 영업시간 내로 완벽하게 다듬어 즉시 발송해 드립니다. 반면 엄청난 규모의 엔터프라이즈급 기어 모델링이나 대단위 멀티 뷰 레이아웃 개편 프로젝트는 속도를 높이기 위해 긴밀하게 타임라인 단위를 쪼개어, 48시간 주기의 반복적 결과물 형태로 끊김이 없도록 계속 이송 및 보완해 나갑니다."
  },
  {
    id: "faq-2",
    question: "멤버십 구독형 모델은 구체적으로 어떻게 정산하고 쓰나요?",
    answer: "간단하고 압도적으로 경제적입니다. 계약 연장을 강제하는 엄격한 서류 조항이나 많은 조율 리소스를 필요로 하는 내부 디자이너 고용 부담이 배제된 월 정기 정액제를 취합니다. 가입이 완료되는 시점부터 사내 전담 디자이너 팀을 둔 것처럼 희망하시는 제작 요소들을 전용 백로그 큐에 편히 쌓아둘 수 있으며, 저희 디렉터들이 이를 하나씩 도맡아 최고 사양으로 뽑아냅니다. 잠시 외주 피드백 스프린트가 드문해지면 터치 한 번으로 즉시 구독 일시정지를 진행해 지출 일수를 이월할 수 있습니다."
  },
  {
    id: "faq-3",
    question: "구독한 뒤 사용하지 못한 채 남은 잔여일은 정말 일시 정지(Pause)해둘 수 있나요?",
    answer: "네! 사내 비즈니스의 성장 순환 주기가 역동적임을 잘 이해하고 있기에 적극 보장합니다. 귀사에 당장 2~3개의 정밀 웹 개발 및 피그마 디자인 과업만 시급해 약 12일만 사용하고 기한이 남았다면, 멤버십 메뉴의 일시 정지를 작동시켜 주십시오. 잔여 19일의 서비스 기간은 제한 기한 없이 정밀 냉동 보존(Safe Escrow)되어 미래의 마케팅 론칭 시기에 전 단계 내용 그대로 이어받아 곧바로 녹여 재가동하실 수 있습니다."
  },
  {
    id: "faq-4",
    question: "피드백 수정 횟수에도 엄격한 조항이나 제한선이 설정되어 있을까요?",
    answer: "아니요, 완성을 위한 수정 횟수 제한은 전혀 존재하지 않습니다. 귀사 내부에서 담당 임직원 및 엔지니어들과 함께 면밀하게 검토하면서, 원하시는 절대적 미감을 현실로 마주해 온전히 안심하고 승인할 수 있으실 때까지 오로지 품질 업그레이드에 집중하여 끝끝내 다듬어 냅니다."
  },
  {
    id: "faq-5",
    question: "실무 디자인 제작 후 결과물 개발에 투입되는 기술 스택은 무엇인가요?",
    answer: "고급 웹 및 상위 1% 모바일 엔지니어링 생태계를 관통하는 기술 군을 운용합니다. 프론트엔드 작업물에는 무결함 타입 추적을 목표로 하는 TypeScript와 더불어 React, 호환성이 뛰어난 최적화 CSS 프레임워크인 Tailwind, 물리 가속 연산을 담당하는 Motion(Framer Motion)엔진을 조합합니다. 백엔드 구성이 수반될 때는 Express에 미들웨어를 붙이고, 데이터 유실이 불가능한 보안 영구 데이터 환경을 구축해 완성된 프러덕션급 코드를 인도합니다."
  }
];

export const JOURNAL: JournalArticle[] = [
  {
    id: "j-1",
    title: "미세 상호작용(Micro-Interactions)의 미학",
    category: "인터랙션 경험",
    description: "작은 애니메이션이 만드는 압도적 격차. 정교하게 제어된 웹의 미세 동작이 프리미엄 제품 경험을 가속하고 지표를 비틀어 놓는 노하우.",
    readTime: "읽는 시간 4분",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400",
    date: "2026년 5월 12일"
  },
  {
    id: "j-2",
    title: "에코-에너지 효율 디지털 디자인의 구현 방식",
    category: "디지털 생태",
    description: "효율성 및 데이터 압축 설계를 반영해 화면의 불필요 에너지를 차단하고 무거운 서버 오버헤드와 페이지 인입 속도를 가라앉히는 실무 팁.",
    readTime: "읽는 시간 6분",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400",
    date: "2026년 5월 18일"
  },
  {
    id: "j-3",
    title: "구조적 변형: 가변 타이포그래피 그리드",
    category: "시각 타이포",
    description: "독단적인 장식을 덜어낸 네오 그로테스크 텍스트와 분할 시스템 구조가 전해주는 고상하고 신념 깊은 기업의 아이덴티티 전술.",
    readTime: "읽는 시간 5분",
    image: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=400",
    date: "2026년 5월 19일"
  },
  {
    id: "j-4",
    title: "AI 공동 창달 시대: 디자인 지능적 전환",
    category: "인텔리전스",
    description: "인간의 독보적 아트 디렉션 비전과 초정밀 초고속 제너레이티브 디자인 인프라가 톱니바퀴처럼 만나 최우수 시안을 전개하는 상생 지식.",
    readTime: "읽는 시간 7분",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400",
    date: "2026년 5월 20일"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "core-plan",
    name: "코어 플랜 (Core Plan)",
    price: "$5,499",
    billing: "/월",
    description: "프로젝트 진행 속도를 견고히 하고 매달 끊김 없이 감각적인 비주얼 리소스와 검증된 프론트엔드 시안을 지속 보충하고 싶은 빠른 성장형 스타트업용 정석 요금제.",
    features: [
      "한 번에 하나의 활성 작업 집중 처리",
      "평균 48시간 이내 신속한 완성형 시안 조기 전송",
      "제한선이 없는 풍성한 디자인 백로그 배치 및 무제한 추가 보완",
      "사내 실무진과 직소통하는 엄선된 전담 시니어 UI 디자이너 매정",
      "작업 완료한 원본 피그마 구성 및 완벽 가변형 자산 파일 100% 이관",
      "프로젝트 누락 및 혼선을 차단하고 수시 보고를 제공하는 전용 슬랙 채널 배정",
      "기업의 성장에 발맞추어 점진적 다변화를 가미한 기초 가이드 시스템 구축"
    ],
    isPopular: false
  },
  {
    id: "pro-plan",
    name: "프로 플랜 (Pro Plan)",
    price: "$9,499",
    billing: "/월",
    description: "동시다발적으로 다양한 부문의 그래픽 과제와 최고 성능의 인터랙티브 컴파일 개발이 진행 중인 엔터프라이즈 및 하이엔드 전용 하프 솔루션 패키지.",
    features: [
      "동시 2개의 독립 활성 생산 라인 평행 가동",
      "수석 아트 디렉터 및 프론트엔드 핵심 웹 엔지니어 전담팀 배정",
      "작업 중요도 기준에 반응하는 고화질 일간 브리핑 & 가동 스케줄 조정",
      "React/Tailwind 완전 조립형 특화 고사양 프런트 컴포넌트 코드 직접 제공",
      "일정 검토 및 기획 싱크를 맞추는 데일리 화상 스케줄 비디오 콜 소집 지원",
      "온/오프라인 전 영역의 시각 통합을 추진하는 프리미엄 미학 규격 지침 제공",
      "초고사양 3D 드로잉 랜더링 및 독창적인 프러덕션 애니메이션 가변 디자인"
    ],
    isPopular: true
  }
];
