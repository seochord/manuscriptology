export interface Section {
  heading: string;
  paragraphs: string[];
  images?: {
    url: string;
    alt: string;
    caption: string;
  }[];
}

export interface Lecture {
  week: number;
  stage: number;
  stageTitle: string;
  title: string;
  instructor: string;
  description: string;
  content: Section[];
  quote?: { text: string; author: string };
  chart?: { title: string; url: string; description: string };
  sourceReferences?: { author: string; book: string }[];
}

export const curriculumData: Lecture[] = [
  {
    "week": 0,
    "stage": 0,
    "stageTitle": "들어가며 (Introduction)",
    "title": "성경말씀에 대하여",
    "instructor": "KJV 사본학 전문가",
    "description": "성경말씀의 영감과 보존에 관한 근본적인 진리들을 살펴봅니다.",
    "content": [
      {
        "heading": "하나님의 기록된 말씀",
        "paragraphs": [
          "하나님께서는 자신의 뜻을 단지 생각이나 구두로만 전달하지 않으시고, '기록된 책'으로 보존하셨습니다(출 17:14, 신 17:19). 이는 선지자들이 떠난 후에도 하나님의 말씀을 변함없이 검증하고 확신할 수 있게 하기 위함입니다.",
          "베드로는 하늘에서 들려온 음성보다 더 확실한 것이 '기록된 예언의 말씀'이라고 증언했습니다(벧후 1:19-21). 기록된 말씀은 주관적 체험보다 객관적이고 권위 있는 최종 표준이 됩니다."
        ]
      },
      {
        "heading": "영감과 보존의 원리",
        "paragraphs": [
          "성경의 모든 단어는 하나님의 영감으로 주어졌습니다(딤후 3:16). 만약 하나님이 말씀을 완벽하게 기록하게 하셨다면, 그 말씀을 후대까지 완벽하게 지키시는 것(보존) 또한 당연한 하나님의 책임입니다.",
          "시편 12:6-7은 주의 말씀들이 순수한 말씀들이며, 주께서 그것들을 이 세대로부터 영원토록 보존하실 것임을 분명히 약속하고 있습니다. 이 약속은 원본뿐만 아니라 오늘날 우리 손에 들린 성경에도 적용됩니다."
        ]
      }
    ]
  },
  {
    "week": 1,
    "stage": 0,
    "stageTitle": "성경의 기초",
    "title": "성경구성, 권별 주제 대조표",
    "instructor": "성경 강해사",
    "description": "성경의 기본 구조와 각 권별 주제 대조표 및 통계를 알아봅니다.",
    "content": [
      {
        "heading": "성경의 시대별 구분",
        "paragraphs": [
          "세상의 창건 이전 (요 17:24, 엡 1:4, 벧전 1:20) | 하나님께서 예수님을 사랑하셨다 | 예수님 안에서 우리를 택하시고 입양하심",
          "천지창조와 인류의 탄생 (창 1~3장) | 천지만물 창조 | 사탄의 타락",
          "죄가 인간에게 들어옴 (창 3장~) | 첫째 아담으로부터 죄가 들어옴",
          "히브리 민족의 시작 (창 12장~) | 아브라함, 이삭, 야곱, 요셉",
          "율법의 시작 (구약, 출 20장~) | 모세로부터 율법이 주어졌음",
          "예수님과 십자가 사건 (4복음서) | 예수님의 사역과 죽으심",
          "구약과 신약의 과도기 (십자가 ~ 행 2장) | 교리적 전수 과정에 주의",
          "교회시대 (행 2장 ~ 계 4장) | 은혜로 구원을 얻는 신약 교회 시대",
          "대환란 (계 5장 ~ 19장) | 야곱의 환란의 때",
          "천년왕국 (계 20장 ~ 21장) | 예수님과 성도가 통치하는 지상 왕국",
          "영원한 세계 (계 22장~) | 새 예루살렘에서 영원히 거함"
        ]
      }
    ]
  },
  {
    "week": 2,
    "stage": 0,
    "stageTitle": "성경의 기초",
    "title": "성경보존, 사본사용, 번역에 대한 말씀",
    "instructor": "성경 강해사",
    "description": "성경 보존과 사본 사용, 번역에 관한 성경 속 기록들을 확인합니다.",
    "content": [
      {
        "heading": "보존에 대한 성경적 증거",
        "paragraphs": [
          "마태복음 5:18 - '율법의 일점일획도 성취될 때까지 결코 사라지지 아니하리라.'",
          "마태복음 24:35 - '하늘과 땅은 없어질 것이나 나의 말들은 없어지지 아니하리라.'",
          "베드로전서 1:23-25 - '주의 말씀은 영원토록 지속되느니라.'",
          "이사야 40:8 - '풀은 마르고 꽃은 시드나 우리 하나님의 말씀은 영원토록 서리라.'"
        ]
      },
      {
        "heading": "번역과 사용에 대한 원리",
        "paragraphs": [
          "하나님께서는 구약은 히브리어로, 신약은 당시의 공용어인 헬라어(Koine Greek)로 기록하게 하셨습니다. 이는 복음이 모든 민족에게 전파되게 하기 위함입니다(마 28:19-20).",
          "사본을 만드는 과정에서 하나님은 자신의 백성들을 사용하셨습니다. 성도들이 말씀을 주야로 묵상하고 실행하기 위해 필사하고 읽는 과정 자체가 보존의 역사였습니다."
        ]
      }
    ]
  },
  {
    "week": 3,
    "stage": 0,
    "stageTitle": "성경의 역사",
    "title": "성경 사본 및 번역의 역사",
    "instructor": "성경 역사학자",
    "description": "구약과 신약의 주요 사본들과 번역본들의 보존 역사를 총정리합니다.",
    "content": [
      {
        "heading": "신약 사본의 두 계보",
        "paragraphs": [
          "안디옥 계열(전통 본문): 사도들로부터 내려온 순수한 사본들로, 대다수 본문(Majority Text)을 형성하며 킹제임스 성경의 기초가 됨.",
          "알렉산드리아 계열(비평 본문): 이집트에서 철학자들과 영지주의자들에 의해 수정된 사본들로, 바티칸 및 시내 사본이 대표적이며 현대 개역 성경들의 기초가 됨."
        ]
      }
    ]
  },
  {
    "week": 4,
    "stage": 1,
    "stageTitle": "심화과정 1",
    "title": "보존의 계보 : 안디옥의 빛에서 킹제임스 성경까지",
    "instructor": "사본 역사학자",
    "description": "안디옥에서 시작된 순수한 본문의 물줄기가 어떻게 알렉산드리아의 부패를 이기고 KJV로 완성되었는지 그 웅장한 역사를 다룹니다.",
    "sourceReferences": [
      { "author": "Dr. Sam Gipp", "book": "An Understandable History of the Bible" },
      { "author": "Dean John W. Burgon", "book": "The Revision Revised" },
      { "author": "Alexander McClure", "book": "The Translators Revived" }
    ],
    "content": [
      {
        "heading": "1. 두 도시의 영적 전쟁: 안디옥 vs 알렉산드리아",
        "paragraphs": [
          "안디옥은 사도적 전통을 따르는 95% 이상의 다수 본문이 형성된 곳입니다. 반면 알렉산드리아는 오리겐과 영지주의자들의 비유적 해석과 본문 변개가 일어난 곳입니다.",
          "한국 적용: 우리가 현재 사용하는 '개역개정'의 저본이 어디서 왔는지, 그 뿌리가 안디옥인지 알렉산드리아인지 질문하는 것으로부터 이 심화 과정은 시작됩니다."
        ]
      },
      {
        "heading": "2. 쓰레기통에서 건진 사본의 실체",
        "paragraphs": [
          "1859년에 발견된 시내 사본과 바티칸 사본은 수많은 필사 오류를 포함하고 있습니다. 이 두 사본은 서로 간에도 3,036회나 불일치합니다.",
          "이는 '가장 오래된 사본이 가장 정확하다'는 현대 비평학의 가설이 얼마나 허구적인지를 보여주는 강력한 증거입니다."
        ]
      },
      {
        "heading": "3. KJV 번역자들과 14단계 검토",
        "paragraphs": [
          "킹제임스 성경은 47명의 당대 최고 학자들이 15개국 이상의 언어를 섭렵하며 6개 위원회에서 교차 검증을 거쳐 완성되었습니다.",
          "총 14단계의 엄격한 검토 과정을 거쳤으며, 번역자들이 자신의 생각을 넣지 않았음을 증명하는 이탤릭체 표기 방식은 그들의 정직성을 보여줍니다."
        ]
      },
      {
        "heading": "4. 사탄의 공격을 이겨낸 하나님의 섭리",
        "paragraphs": [
          "1605년 화약 음모 사건은 킹제임스 성경 번역을 막으려는 사탄의 직접적인 공격이었습니다. 하지만 하나님은 이를 막으셨고 안디옥에서 종교개혁을 거쳐 KJV로 이어지는 보존의 계보를 완성하셨습니다."
        ]
      }
    ]
  },
  {
    "week": 5,
    "stage": 1,
    "stageTitle": "심화과정 2",
    "title": "현대의 대배반: 1881년의 비밀과 웨스트코트/호트의 정체",
    "instructor": "비판 사본학자",
    "description": "현대 비평 본문의 음침한 기원인 웨스트코트/호트의 실체와 번역자들의 영적 징후를 추적합니다.",
    "sourceReferences": [
      { "author": "Dean John Burgon", "book": "The Revision Revised" },
      { "author": "Sam Gipp", "book": "An Understandable History of the Bible" },
      { "author": "Edward F. Hills", "book": "The King James Version Defended" }
    ],
    "content": [
      {
        "heading": "1. 1881년의 대배반: 웨스트코트와 호트의 정체",
        "paragraphs": [
          "현대 역본의 기초를 놓은 웨스트코트와 호트는 강령술 협회 활동, 진화론 맹신 등 비성경적인 배경을 가졌습니다.",
          "그들은 전통 본문을 증오하며 10년 동안 비밀 회의를 통해 자신들만의 본문을 만들어냈습니다."
        ]
      },
      {
        "heading": "2. 유니테리언의 침투와 기만적 편집",
        "paragraphs": [
          "번역 위원회에 유니테리언 학자인 밴스 스미스가 포함되어 디모데전서 3:16의 '하나님'을 '그'로 바꾸는 등 치명적인 변개를 주도했습니다.",
          "알렉산드리아 사본을 표준화하여 교회의 권위를 학자들의 손으로 옮겨버린 사건입니다."
        ]
      },
      {
        "heading": "3. 번역자들에게 나타난 영적·신체적 징후",
        "paragraphs": [
          "ASV 번역을 주도한 필립 샤프는 목소리를 잃었고, J.B. 필립스는 우울증과 마귀의 공격을 고백했습니다. 케네스 테일러 등 많은 현대 역본 번역자들이 신체적, 정신적 타격을 입었습니다.",
          "한국 교수법 포인트: '나무를 그 열매로 알리라'(마 7:17-20). 번역자의 삶의 열매가 그 번역의 영적 기원을 드러냅니다. 영적 전쟁의 관점에서 이 현상을 이해해야 합니다."
        ]
      }
    ]
  },
  {
    "week": 6,
    "stage": 1,
    "stageTitle": "심화과정 3",
    "title": "현대 역본의 심각한 삭제와 변개의 실체",
    "instructor": "본문 비평 분석가",
    "description": "통계로 입증되는 현대 역본의 삭제와 예수 그리스도의 신성을 공격하는 정밀한 변개 사례들을 분석합니다.",
    "sourceReferences": [
      { "author": "Keith Piper", "book": "Serious Omissions in Modern Bible Versions" },
      { "author": "Dean John Burgon", "book": "The Revision Revised" },
      { "author": "Edward F. Hills", "book": "The King James Version Defended" }
    ],
    "content": [
      {
        "heading": "1. 통계로 본 현대 역본의 삭제: 2,886단어의 실종",
        "paragraphs": [
          "현대 비평 본문(UBS)은 공인 본문에 비해 2,886단어(약 2.1%)가 삭제되었습니다. 이는 마가복음 16:9-20, 요한복음 7:53-8:11 같은 중요한 구절들의 권위를 훼손하는 결과를 낳았습니다."
        ]
      },
      {
        "heading": "2. 그리스도의 신성에 대한 정밀한 공격: 17가지 방법",
        "paragraphs": [
          "키이쓰 파이퍼는 현대 역본들이 어떻게 주님의 신성을 격하하는지 분석했습니다. 행 3:13,26에서 '아들'을 '종'으로, 딤전 3:16에서 '하나님'을 삭제하고, 요 9:35에서 '하나님의 아들'을 '인자'로 바꾸는 등 정밀한 공격이 이루어졌습니다."
        ]
      },
      {
        "heading": "3. 구원 교리의 변질",
        "paragraphs": [
          "마 9:13에서 '회개'가 삭제되고, 골 1:14에서 '그의 피를 통하여'가 사라졌으며, 행 8:37의 에티오피아 내시의 신앙 고백이 통째로 빠지는 등 구원 교리의 핵심들이 가려졌습니다."
        ]
      },
      {
        "heading": "4. 요한의 콤마와 문법적 증거",
        "paragraphs": [
          "요한일서 5:7-8에서 '요한의 콤마'를 삭제하면 헬라어 문법상 성(性) 불일치가 발생합니다. 이는 원래 이 구절이 존재했어야만 문법적으로 완벽함을 입증하는 강력한 내적 증거입니다."
        ]
      }
    ]
  },
  {
    "week": 7,
    "stage": 1,
    "stageTitle": "심화과정 4",
    "title": "상업적 동기와 바른 성경 분별법",
    "instructor": "성경 분별 교사",
    "description": "성경이 저작권에 묶인 상업적 상품이 된 현실을 진단하고, 바른 성경을 분별하는 7가지 기준을 배웁니다.",
    "sourceReferences": [
      { "author": "Jasper James Ray", "book": "God Wrote Only One Bible" },
      { "author": "David Otis Fuller", "book": "Which Bible?" },
      { "author": "Sam Gipp", "book": "An Understandable History of the Bible" }
    ],
    "content": [
      {
        "heading": "1. 하나님의 말씀과 저작권의 굴레",
        "paragraphs": [
          "킹제임스 성경은 저작권이 없어 무상 보급되지만, 현대 역본들은 '2차 저작물'로 등록되어 저작권 보호를 받습니다. 이는 상업적 이익을 위해 끊임없이 본문을 변개해야 하는 동기를 제공합니다."
        ]
      },
      {
        "heading": "2. 개정되는 상품 vs 영원한 진리",
        "paragraphs": [
          "수십 년마다 새로운 역본을 구매하도록 유도하는 상업적 모델은 성경을 하나의 '상품'으로 전락시켰습니다. 하나님의 말씀은 시대를 초월하는 진리여야 합니다."
        ]
      },
      {
        "heading": "3. 바른 성경 분별을 위한 7가지 시험",
        "paragraphs": [
          "① 계보(Genealogy): 안디옥의 순수 사본 계열인가?",
          "② 수량(Quantity): 95% 이상 대다수 사본이 지지하는가?",
          "③ 시대(Age): 초기부터 사용된 흔적이 있는가?",
          "④ 다양성(Variety): 여러 지역에서 보편적으로 사용되었는가?",
          "⑤ 연속성(Continuity): 역사 속에서 끊임없이 사용되어 왔는가?",
          "⑥ 신뢰도(Reliability): 필사 정확도가 높은가?",
          "⑦ 문맥(Context): 주변 구절들과 교리적으로 조화를 이루는가?"
        ]
      },
      {
        "heading": "4. 7가지 시험의 실전 적용",
        "paragraphs": [
          "이 7가지 기준을 통해 KJV와 현대 역본을 비교해 보면 어떤 성경이 하나님의 보존된 말씀인지 명확히 분별할 수 있습니다. 한국의 개역개정과 한글 KJV를 이 기준들에 대입해 보십시오."
        ]
      }
    ]
  },
  {
    "week": 8,
    "stage": 1,
    "stageTitle": "심화과정 5",
    "title": "보존의 승리: 최종 권위 위에 굳게 서라",
    "instructor": "성경 수호자",
    "description": "400년 역사의 열매를 증명하고, 믿음의 논리를 통해 보존된 말씀 위에 성도의 삶을 확립하는 최종 결론입니다.",
    "sourceReferences": [
      { "author": "Jasper James Ray", "book": "God Wrote Only One Bible" },
      { "author": "David Otis Fuller", "book": "Which Bible?" },
      { "author": "Edward F. Hills", "book": "The King James Version Defended" }
    ],
    "content": [
      {
        "heading": "1. 열매로 알리라: KJV의 400년 승리",
        "paragraphs": [
          "웨슬리, 화이트필드, 스펄전, 무디 같은 거장들의 부흥은 모두 KJV를 통해 일어났습니다. 1881년 이후 현대 역본들이 쏟아져 나왔지만, 영적 부흥보다는 교회의 세속화와 신학적 타락이 가속화되었습니다."
        ]
      },
      {
        "heading": "2. 믿음의 논리 vs 불신의 논리",
        "paragraphs": [
          "불신의 논리는 성경을 인간의 이성으로 교정하려 합니다. 반면 믿음의 논리는 시편 12:6-7의 약속을 따라 하나님이 자신의 말씀을 완벽하게 보존하셨음을 믿고 그 앞에 무릎 꿇는 것입니다."
        ]
      },
      {
        "heading": "3. 영적 통찰을 여는 일곱 가지 봉인의 실천",
        "paragraphs": [
          "말씀을 깨닫기 위해 ① 거듭남, ② 기도, ③ 세상 소음 차단, ④ 부지런한 탐구, ⑤ 매일 읽기, ⑥ 암송과 묵상, ⑦ 순종과 기쁨의 자세를 갖추어야 합니다."
        ]
      },
      {
        "heading": "4. 보존된 말씀과 변치 않는 믿음의 도",
        "paragraphs": [
          "최종 권고: 오늘 여러분의 손에 들린 보존된 말씀을 100% 신뢰하십시오. '기록되었으되'의 확신 속에서 매일 말씀을 정독하고, 보존된 말씀을 여러분의 삶의 최종 권위로 삼으십시오."
        ]
      }
    ],
    "quote": {
      "text": "The Bible - we don't need to rewrite it, we need to reread it!",
      "author": "Lester Roloff"
    }
  }
];
