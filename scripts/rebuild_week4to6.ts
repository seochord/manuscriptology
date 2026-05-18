import fs from 'fs';

interface LessonContent {
  heading: string;
  body: string;
  bulletPoints?: string[];
}

interface KeyVerse {
  reference: string;
  text: string;
}

interface Lesson {
  id: string;
  week: number;
  lessonNumber: number;
  title: string;
  subtitle: string;
  objectives: string[];
  content: LessonContent[];
  keyVerses: KeyVerse[];
  summary: string;
  discussionQuestions: string[];
}

const week4Lessons: Lesson[] = [
  {
    id: "w1-l1",
    week: 1,
    lessonNumber: 1,
    title: "우리는 어떻게 성경을 갖게 되었는가",
    subtitle: "원본·사본·번역의 기초 개념",
    objectives: [
      "원본(Autograph)과 사본(Copy)의 차이를 설명할 수 있다.",
      "본문 비평(Textual Criticism)이 무엇인지 이해한다.",
      "하나님의 영감과 보존이 왜 함께 다루어져야 하는지 말할 수 있다.",
    ],
    content: [
      {
        heading: "1. 원본이란 무엇인가",
        body: "성경의 저자들이 성령의 영감을 받아 직접 기록한 문서를 '원본(Autograph)'이라 부른다. 그러나 이 원본들은 오랜 세월이 지나며 모두 소실되었다. 우리가 현재 보는 모든 성경은 원본을 베껴 쓴 사본들을 바탕으로 번역된 것이다.",
      },
      {
        heading: "2. 필사의 과정과 본문 비평",
        body: "인쇄술이 발명되기 전까지 성경은 손으로 베껴 써야 했다. 이 과정에서 필사자의 실수로 글자가 빠지거나 중복되는 차이가 생기기도 했다. 서로 다른 사본들을 비교하여 원래의 말씀을 찾아내는 과정을 '본문 비평(Textual Criticism)'이라 한다.",
      },
      {
        heading: "3. 영감과 보존은 함께 간다",
        body: "하나님께서 성경을 완벽하게 기록하게 하셨다면(영감), 그것을 후대까지 완벽하게 지키시는 것(보존) 또한 논리적으로 따라온다. 영감만 있고 보존이 없다면 성경의 권위는 사라진 원본 안에만 머물게 된다.",
      },
      {
        heading: "4. 두 갈래의 사본 지류",
        body: "현존하는 5,000개 이상의 헬라어 사본들은 크게 두 지역의 흐름으로 나뉜다.",
        bulletPoints: [
          "안디옥(Antioch) 전통 본문 — 전체 사본의 약 95% 이상, 킹제임스 성경(KJV)의 뿌리.",
          "알렉산드리아(Alexandria) 소수 본문 — 바티칸 사본(B)·시내 사본(Aleph) 등, 현대 역본의 기초.",
        ],
      },
    ],
    keyVerses: [
      {
        reference: "Psalm 12:6-7",
        text: "The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O LORD, thou shalt preserve them from this generation for ever.",
      },
      {
        reference: "Matthew 24:35",
        text: "Heaven and earth shall pass away, but my words shall not pass away.",
      },
    ],
    summary:
      "원본은 없지만 하나님은 사본들을 통해 말씀을 보존하셨다. 현존 사본은 안디옥(다수·TR 계열)과 알렉산드리아(소수·현대 비평 본문 계열)로 나뉘며, 이 차이가 오늘날 우리가 읽는 성경의 차이를 만들어 낸다.",
    discussionQuestions: [
      "원본이 없다는 사실이 성경의 권위를 약화시킨다고 생각하는가? 그 이유는?",
      "하나님께서 '영감'만 주시고 '보존'을 하지 않으셨다면 어떤 문제가 생기겠는가?",
    ],
  },
  {
    id: "w1-l2",
    week: 1,
    lessonNumber: 2,
    title: "두 도시의 전쟁",
    subtitle: "안디옥과 알렉산드리아 — 두 본문의 기원과 특성",
    objectives: [
      "안디옥 본문의 신학적·역사적 배경을 설명한다.",
      "알렉산드리아 학파의 철학적 성향과 오리겐의 영향을 이해한다.",
      "두 지류의 사본 수·내용·보존 방식 차이를 비교한다.",
    ],
    content: [
      {
        heading: "1. 안디옥 — 신앙의 중심지",
        body: "안디옥은 제자들이 처음으로 '그리스도인'이라 불리고(행 11:26) 사도 바울의 선교 기지가 된 곳이다. 이곳 신자들은 성경을 문자 그대로 믿고, 사도들의 원본을 정밀하게 필사하여 보존하기 시작했다. 이 줄기가 훗날 '전통 본문(Traditional Text / Majority Text)'이 되었고 킹제임스 성경의 기초가 되었다.",
      },
      {
        heading: "2. 알렉산드리아 — 철학의 도시",
        body: "이집트 알렉산드리아는 헬라 철학의 중심지였다. 오리겐(Origen) 같은 학자들은 신플라톤주의 철학을 성경 해석에 접목하여 문자 그대로의 의미보다 비유적·영적 해석을 우선했다. 이 과정에서 자신의 철학과 맞지 않는 구절들을 삭제하거나 수정하는 '추측성 교정(conjectural emendation)'이 생겨났다.",
      },
      {
        heading: "3. 사본 수와 일치성 비교",
        body: "안디옥 본문은 현존 헬라어 사본의 약 95%를 차지하며 사본들 사이의 일치도가 매우 높다. 반면 알렉산드리아 본문의 대표 사본인 바티칸 사본(B)과 시내 사본(Aleph)은 복음서에서만 서로 3,000번 이상 불일치한다.",
      },
      {
        heading: "4. '마모의 역설' — 왜 오래된 사본이 깨끗한가",
        body: "참된 사본은 성도들이 끊임없이 읽고 필사하여 닳아 없어졌다. 반면 알렉산드리아 사본들은 초기 교회로부터 오류가 많다고 외면당해 방치되었기에 물리적으로 잘 보존될 수 있었다. '오래된 사본 = 좋은 사본'이라는 공식은 이 역설을 무시한다.",
      },
    ],
    keyVerses: [
      {
        reference: "Acts 11:26",
        text: "And the disciples were called Christians first in Antioch.",
      },
      {
        reference: "Isaiah 40:8",
        text: "The grass withereth, the flower fadeth: but the word of our God shall stand for ever.",
      },
    ],
    summary:
      "안디옥 본문은 성도들의 손을 통해 공적으로 보존된 다수 본문이고, 알렉산드리아 본문은 철학적 편견으로 오염된 소수 본문이다. 사본 연대보다 전승 과정의 열매가 더 중요한 판단 기준이 된다.",
    discussionQuestions: [
      "알렉산드리아 학파가 성경을 '비유적'으로 해석한 것이 왜 문제가 되는가?",
      "'닳아 없어진 사본'과 '깨끗이 남은 사본' 중 어느 것이 더 신뢰할 만한가? 그 이유는?",
    ],
  },
  {
    id: "w1-l3",
    week: 1,
    lessonNumber: 3,
    title: "하나님의 보존 약속",
    subtitle: "성경이 스스로 증언하는 영원한 보존의 근거",
    objectives: [
      "하나님의 보존 약속을 담은 핵심 구절들을 암송한다.",
      "시편 12:6-7의 보존 약속 해석을 설명한다.",
      "'점과 획'까지의 보존이 의미하는 바를 이해한다.",
    ],
    content: [
      {
        heading: "1. 영원한 보존의 직접 약속",
        body: "하나님께서는 자신의 말씀이 영원히 보존될 것을 여러 구절에서 직접 선언하셨다. 시편 12:6-7은 '주의 말씀들'을 영원히 보존하시겠다는 약속이며, 마태복음 24:35는 하늘과 땅이 사라져도 말씀은 사라지지 않는다고 선포한다.",
      },
      {
        heading: "2. 일점일획까지의 보존",
        body: "마태복음 5:18에서 예수님은 '율법의 일 점 일 획도 없어지지 않을 것'이라 하셨다. 이는 하나님의 보존이 사상이나 주제 수준이 아니라 개별 단어(Words) 수준에서 이루어짐을 시사한다. 요한복음 10:35의 '성경 기록은 폐해지지 못하느니라'도 동일한 원리를 확인해 준다.",
      },
      {
        heading: "3. 세대를 이은 전수 약속",
        body: "이사야 59:21은 '네 입에 둔 나의 말들이 네 씨의 씨의 입에서 이제부터 영원토록 떠나지 아니하리라'라고 약속한다. 이는 보존이 단순히 문서 보관이 아니라 살아있는 공동체 — 교회 — 를 통해 대대로 이어지는 것임을 보여준다.",
      },
      {
        heading: "4. 하나님의 이름보다 높은 말씀의 권위",
        body: "시편 138:2은 '주께서 주의 말씀을 주의 모든 이름 위로 크게 하셨다'고 기록한다. 하나님께서 자신의 이름 이상의 권위를 말씀에 두셨다면, 그 말씀을 잃어버리는 것은 상상할 수 없는 일이다.",
      },
    ],
    keyVerses: [
      {
        reference: "Psalm 12:6-7",
        text: "The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O LORD, thou shalt preserve them from this generation for ever.",
      },
      {
        reference: "Matthew 5:18",
        text: "For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.",
      },
      {
        reference: "1 Peter 1:25",
        text: "But the word of the Lord endureth for ever.",
      },
      {
        reference: "Isaiah 59:21",
        text: "My words which I have put in thy mouth, shall not depart out of thy mouth, nor out of the mouth of thy seed, nor out of the mouth of thy seed's seed, saith the LORD, from henceforth and for ever.",
      },
    ],
    summary:
      "성경은 하나님께서 자신의 말씀을 단어 수준에서 세대를 넘어 보존하시겠다고 반복하여 약속하신다. 이 약속을 신뢰하는 것이 성경 보존을 이해하는 출발점이다.",
    discussionQuestions: [
      "하나님이 영감만 주시고 보존은 하지 않으셨다면, 시편 12:6-7의 약속은 어떻게 해석해야 하는가?",
      "'일점일획'까지 보존하신다는 말씀이 사본학적으로 어떤 의미를 갖는가?",
    ],
  },
  {
    id: "w1-l4",
    week: 1,
    lessonNumber: 4,
    title: "믿음의 논리 vs 불신의 논리",
    subtitle: "성경을 바라보는 두 가지 출발점의 비교",
    objectives: [
      "'믿음의 논리'와 '불신의 논리'의 정의와 차이를 설명한다.",
      "두 논리가 성경 보존 이해에 미치는 결과를 비교한다.",
      "성도가 어떤 출발점에서 말씀을 대해야 하는지 정립한다.",
    ],
    content: [
      {
        heading: "1. 불신의 논리 — 중립을 가장한 인본주의",
        body: "불신의 논리는 신앙을 전제하지 않은 '중립적 지점'에서 성경을 일반 고전 문학과 동일하게 취급한다. 이 접근은 하나님의 섭리적 보존을 무시하고 본문을 학자들의 주관적 판단에 맡긴다. 결과적으로 성경은 '확실한 진리'가 아니라 '개연성이 높은 텍스트'가 된다.",
        bulletPoints: [
          "성경 보존에 대한 하나님의 약속을 무시하거나 부인한다.",
          "'중립성'은 실제로는 하나님의 주권을 배제하는 무신론적 태도다.",
          "본문 비평의 결과는 확실성이 아니라 학문적 확률이 된다.",
          "결국 성경의 최종 권위가 인간 학자의 판단 아래 놓인다.",
        ],
      },
      {
        heading: "2. 믿음의 논리 — 하나님으로부터 시작",
        body: "믿음의 논리는 하나님과 그분의 기록된 말씀을 모든 사고의 출발점으로 삼는다. 하나님이 자신의 말씀을 완벽하게 보존하셨다는 약속을 신뢰하기에, 성도는 '어떤 사본이 더 좋은가'를 따지기 전에 '하나님이 이 약속을 역사 속에서 어떻게 성취하셨는가'를 질문한다.",
        bulletPoints: [
          "하나님이 최고의 실재이며 말씀의 궁극적 권위자다.",
          "보존의 약속(시 12:6-7)을 문자 그대로 신뢰한다.",
          "성도는 말씀의 재판관이 아니라 말씀에 복종하는 종이다.",
          "성경이 독자를 교정하게 해야지, 독자가 성경을 교정해서는 안 된다.",
        ],
      },
      {
        heading: "3. 두 논리의 결과 비교",
        body: "불신의 논리는 성경의 확실성을 확률로 대체하고, 끊임없는 의심의 문화를 교회 안에 심어준다. 믿음의 논리는 성도에게 100%의 확신을 제공하며, 말씀을 '성령의 검'으로 담대하게 사용할 수 있게 한다.",
      },
      {
        heading: "4. '재판관'이 아닌 '종'의 자세",
        body: "성경의 본문을 교정하려 드는 것은 '재판관'의 위치에 서는 것이다. 성도는 말씀 앞에 떨며 복종하는 '종'의 자세를 가져야 한다. 현대 학문의 성과나 원어 사전을 근거로 성경 본문을 수시로 교정하는 교만한 태도는 경계해야 한다.",
      },
    ],
    keyVerses: [
      {
        reference: "Hebrews 11:3",
        text: "Through faith we understand that the worlds were framed by the word of God.",
      },
      {
        reference: "Isaiah 66:2",
        text: "But to this man will I look, even to him that is poor and of a contrite spirit, and trembleth at my word.",
      },
    ],
    summary:
      "성경을 대하는 두 출발점 — 믿음의 논리(하나님 중심)와 불신의 논리(인간 이성 중심) — 은 전혀 다른 결과를 낳는다. 성도는 하나님의 보존 약속을 신뢰하는 믿음의 논리 위에 서야 한다.",
    discussionQuestions: [
      "목사님이 설교 중 '원어에는 이렇게 되어 있다'며 성경 본문을 교정할 때, 이것이 '믿음의 논리'와 '불신의 논리' 중 어디에 가깝다고 생각하는가?",
      "성경 보존을 '확률'의 문제로 보는 것이 신앙생활에 실제로 어떤 영향을 주겠는가?",
    ],
  },
];

const week5Lessons: Lesson[] = [
  {
    id: "w2-l1",
    week: 2,
    lessonNumber: 1,
    title: "성도들의 손에서 살아남은 말씀",
    subtitle: "안디옥 본문의 보존 경로 — 왈덴스인에서 종교개혁까지",
    objectives: [
      "안디옥 본문이 역사 속에서 어떤 경로로 보존되었는지 설명한다.",
      "왈덴스인들이 성경 보존에 기여한 역할을 이해한다.",
      "'만인 제사장직'이 성경 보존과 어떤 관련이 있는지 연결한다.",
    ],
    content: [
      {
        heading: "1. 안디옥에서의 시작 (1세기)",
        body: "안디옥의 초기 신자들은 사도들이 직접 쓴 원본을 소유하고 있었으며, 이를 매우 정밀하게 필사하여 보존하기 시작했다. 이들은 알렉산드리아의 학자들이 철학적 잣대로 본문을 수정할 때 말씀을 있는 그대로 읽고 복사했다.",
      },
      {
        heading: "2. 구 이탈릭 성경과 시리아 페시타 (2세기)",
        body: "AD 150년경 안디옥 본문에서 번역된 시리아어 페시타(Peshitta)와 AD 157년경의 구 이탈릭 성경(Itala)은 수용 본문의 오랜 계보를 증언한다. 이 역본들은 로마 가톨릭의 불가타가 나오기 전 초기 성도들이 목숨 걸고 지킨 순수 성경이다.",
      },
      {
        heading: "3. 알프스의 왈덴스인 (중세)",
        body: "로마 가톨릭의 박해 속에서 '광야 교회'로 불린 왈덴스(Waldenses) 성도들은 안디옥 본문 계열의 이탈릭 성경을 목숨 걸고 지켰다. 이들은 성경을 '거친 망토' 속에 숨겨 다니며 복음을 전했고, 자녀들에게 말씀을 온전히 전수하기 위해 정기적으로 필사하고 암송했다. 이들이 보존한 본문은 훗날 루터의 독일어 성경과 킹제임스 성경의 중요한 기초가 되었다.",
      },
      {
        heading: "4. 만인 제사장직과 보존의 원리",
        body: "하나님은 말씀 보존을 소수의 엘리트 학자나 특정 위원회에 맡기지 않으셨다. 성령의 인도하심을 받는 '만인 제사장'인 평범한 성도들의 공적 사용을 통해 보존해 오셨다. 순수한 사본들이 오늘날 많이 남아있지 않은 이유는 역설적으로 그것들이 '닳아서 없어질 정도로' 읽히고 사용되었기 때문이다.",
      },
    ],
    keyVerses: [
      {
        reference: "Acts 11:26",
        text: "And the disciples were called Christians first in Antioch.",
      },
      {
        reference: "2 Timothy 2:9",
        text: "The word of God is not bound.",
      },
    ],
    summary:
      "안디옥 본문은 학자들의 서재가 아니라 성도들의 손때 묻은 사본들을 통해, 박해의 시대를 거쳐 종교개혁까지 이어졌다. 말씀 보존의 주체는 소수 엘리트가 아닌 만인 제사장 공동체였다.",
    discussionQuestions: [
      "왈덴스인들이 성경을 목숨 걸고 지킨 이유가 무엇이었을까?",
      "'닳아서 없어진 사본'이 오히려 신뢰할 만하다는 역설을 어떻게 설명하겠는가?",
    ],
  },
  {
    id: "w2-l2",
    week: 2,
    lessonNumber: 2,
    title: "에라스무스와 수용 본문의 형성",
    subtitle: "최초의 인쇄본 헬라어 신약 성경과 그 계보",
    objectives: [
      "에라스무스가 수용 본문 형성에 기여한 과정을 설명한다.",
      "스테파누스·베자를 통한 본문 계승 과정을 이해한다.",
      "'수용 본문(Textus Receptus)'이라는 명칭의 유래를 말할 수 있다.",
    ],
    content: [
      {
        heading: "1. 에라스무스와 최초의 인쇄본 (1516년)",
        body: "데시데리우스 에라스무스는 1516년 바젤에서 최초의 인쇄된 헬라어 신약 성경을 출판했다. 그는 로마 가톨릭이 보관하던 바티칸 사본의 변개된 읽기를 거부하고, 안디옥 계열의 비잔틴 사본들(바젤에서 구한 5~6개)을 바탕으로 본문을 구성했다. 이 작업은 종교개혁자들이 '교회의 전통' 대신 '순수한 원어 말씀'이라는 무기를 가질 수 있게 했다.",
      },
      {
        heading: "2. 에라스무스와 불가타의 충돌",
        body: "에라스무스는 마태복음 4:17의 '고해하라(Do penance)'를 '회개하라(Be penitent)'로 바로잡아 가톨릭 교리의 토대를 흔들었다. 또한 성경이 학자와 사제의 전유물이 아니라 농부와 방직공 같은 평범한 사람들도 읽어야 한다고 주장했으며, 그의 책은 가톨릭의 금서 목록에 올랐다.",
      },
      {
        heading: "3. 요한의 콤마(요일 5:7)와 에라스무스의 약속",
        body: "에라스무스는 1판·2판에서 삼위일체 증거 구절인 요한일서 5:7을 헬라어 사본 근거가 없다는 이유로 포함하지 않았다. 비난이 거세지자 그는 '헬라어 사본을 단 하나라도 가져오면 포함하겠다'고 약속했고, 이후 '몬포트 사본(Codex 61)'이 제시되자 1522년 3판에 이 구절을 삽입했다. 이것이 수용 본문과 킹제임스 성경에 그대로 전해진다.",
      },
      {
        heading: "4. 스테파누스 → 베자 → 엘제비르 형제",
        body: "에라스무스의 본문은 이후 로버트 스테파누스(1546-1551년, 절 구분 최초 도입), 테오도르 베자(1565-1604년, 킹제임스 성경의 직접 기초), 엘제비르 형제(1633년)를 거쳐 정착되었다. 1633년 엘제비르 형제의 출판 서문에 '당신은 이제 모든 사람이 수용한 본문(textum ab omnibus receptum)을 갖게 되었다'라고 기록되면서 '수용 본문(Textus Receptus)'이라는 이름이 확립되었다.",
      },
    ],
    keyVerses: [
      {
        reference: "1 John 5:7",
        text: "For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one.",
      },
    ],
    summary:
      "에라스무스로부터 시작된 수용 본문의 계보는 스테파누스·베자·엘제비르 형제를 거쳐 킹제임스 성경의 기초가 되었다. 이 본문은 인쇄술을 통해 종교개혁의 도화선 역할을 했다.",
    discussionQuestions: [
      "에라스무스가 바티칸 사본의 읽기를 거부한 이유는 무엇인가?",
      "요한의 콤마 이야기에서 에라스무스의 '학문적 정직성'은 어떻게 드러나는가?",
    ],
  },
  {
    id: "w2-l3",
    week: 2,
    lessonNumber: 3,
    title: "종교개혁과 킹제임스 성경의 계보",
    subtitle: "루터에서 KJV까지 — 수용 본문을 공유한 형제들",
    objectives: [
      "루터의 독일어 성경과 킹제임스 성경의 공통 기초를 이해한다.",
      "KJV 이전의 영어 선행 역본들과 유럽 각국의 종교개혁 역본을 안다.",
      "종교개혁과 수용 본문의 관계를 설명한다.",
    ],
    content: [
      {
        heading: "1. 루터 — 종교개혁의 본문적 무기",
        body: "마틴 루터는 1522년 독일어 신약 성경을 번역할 때 에라스무스의 1519년 헬라어 본문을 사용했다. 에라스무스의 헬라어 성경이 인쇄된 지 단 1년 만에 루터가 95개조 반박문을 게시한 것은 하나님의 섭리로 평가받는다. 개혁자들은 '교회의 전통'이 아닌 '순수한 원어 말씀'을 무기로 가톨릭에 맞섰다.",
      },
      {
        heading: "2. 킹제임스 성경의 영어 선행 역본들",
        body: "킹제임스 성경은 하늘에서 갑자기 떨어진 것이 아니라, 종교개혁 시기 우수한 영어 성경들을 집대성한 결과물이다.",
        bulletPoints: [
          "윌리엄 틴데일 성경(1525) — KJV 본문을 많은 부분 계승.",
          "커버데일(1535) · 매튜(1537) · 대성경(1539) — 초기 영어 성경.",
          "제네바 성경(1560) — 전통 본문의 권위를 계승.",
          "감독 성경(1568) — KJV 번역의 직접적 기초가 된 공식 역본.",
        ],
      },
      {
        heading: "3. 유럽 각국의 수용 본문 계열 역본들",
        body: "하나님은 영어권뿐 아니라 유럽 각지에서도 수용 본문을 통해 말씀을 보존하셨다.",
        bulletPoints: [
          "디오다티 이탈리아어 성경(1607) — 왈덴스인들의 순수 본문 전통을 이음.",
          "올리베탄 프랑스어 성경 — 왈덴스인들의 후원으로 번역.",
          "레이나 발레라(스페인어) — 스페인어권 전통 본문의 표준.",
        ],
      },
      {
        heading: "4. 수용 본문이란 무엇인가 — 정리",
        body: "수용 본문(TR)은 단일 편집자의 창작물이 아니라, 안디옥에서 시작되어 왈덴스인·에라스무스·종교개혁자들을 통해 검증된 다수 본문의 인쇄 확정판이다. 이 본문이 킹제임스 성경을 통해 영어권에 정착되었고, 각국 언어의 종교개혁 역본들을 통해 전 세계에 전파되었다.",
      },
    ],
    keyVerses: [
      {
        reference: "Jeremiah 6:16",
        text: "Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein, and ye shall find rest for your souls.",
      },
    ],
    summary:
      "루터의 독일어 성경과 킹제임스 성경은 수용 본문이라는 동일한 기초 위에 선 형제 역본이다. 종교개혁은 순수한 원어 본문을 회복한 결과였으며, 이 운동은 유럽 전역의 언어로 확산되었다.",
    discussionQuestions: [
      "에라스무스의 헬라어 성경 출판(1516)과 루터의 95개조(1517)가 1년 간격인 것이 '우연'인가, '섭리'인가?",
    ],
  },
  {
    id: "w2-l4",
    week: 2,
    lessonNumber: 4,
    title: "킹제임스 성경의 번역 과정과 고유한 특징",
    subtitle: "1611년의 기적 — 47명의 학자, 14번의 검토, 이탤릭체의 정직성",
    objectives: [
      "킹제임스 성경의 번역 구조와 검토 과정을 설명한다.",
      "이탤릭체 표기의 신학적 의미와 실제 사례를 이해한다.",
      "직역 원칙(축자적 일치)이 교리 보존에 기여하는 방식을 안다.",
    ],
    content: [
      {
        heading: "1. 번역의 시작과 구성 (1604-1611)",
        body: "1604년 존 레인놀즈 박사의 제안으로 시작된 킹제임스 성경 번역에는 최종 47명의 학자가 참여했다. 이들은 웨스트민스터·옥스퍼드·케임브리지에 각 2그룹씩 총 6개 위원회로 나뉘어 작업을 분담했다. 개인 번역 → 그룹 검토 → 5개 다른 위원회 비평 → 최종 점검의 과정을 거쳐 모든 본문이 최소 14번 이상 검토되었다.",
      },
      {
        heading: "2. 이탤릭체 — 번역자들의 정직성 선언",
        body: "킹제임스 성경에서 이탤릭체로 표기된 단어들은 히브리어·헬라어 원문에는 없지만 영어 문법을 완성하고 의미를 명확히 하기 위해 추가된 단어들이다. 번역자들은 하나님이 주신 영감된 단어와 자신들이 보충한 단어를 이탤릭체로 엄격히 구분하여 독자에게 정직하게 알렸다.",
        bulletPoints: [
          "신명기 8:3의 이탤릭체 'word' — 예수님이 마태복음 4:4에서 그대로 인용하심으로 그 영감이 확인됨.",
        ],
      },
      {
        heading: "3. 직역 원칙 — 단어 대 단어 번역",
        body: "KJV 번역자들은 성경의 모든 단어가 하나님께서 숨을 불어넣으신 것으로 믿어 원어의 단어를 최대한 일대일로 영어에 옮기는 '축자적/형식적 일치(Verbal and Formal Equivalence)' 방식을 고수했다. 이 방식은 번역자의 해석이 개입하는 현대의 '동적 대등(Dynamic Equivalence)' 방식과 다르다.",
      },
      {
        heading: "4. 단수/복수 구분 — 신학적 정밀성",
        body: "킹제임스 성경은 원어의 단수(Thee/Thou)와 복수(Ye/You)를 엄격히 구분하며, '-eth' 어미(abideth, passeth)를 통해 지속적·반복적 행동을 현재 진행형보다 더 정밀하게 표현한다. 또한 저작권 없이 누구나 자유롭게 인쇄·보급할 수 있어 하나님의 말씀이 상업적 제약 없이 전 세계로 퍼져 나갔다.",
      },
    ],
    keyVerses: [
      {
        reference: "Matthew 4:4",
        text: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.",
      },
      {
        reference: "Psalm 138:2",
        text: "Thou hast magnified thy word above all thy name.",
      },
    ],
    summary:
      "킹제임스 성경은 철저한 다중 검토 과정, 이탤릭체를 통한 정직성, 직역 원칙, 저작권 없는 보급을 통해 하나님의 보존된 말씀을 담는 그릇이 되었다.",
    discussionQuestions: [
      "이탤릭체 단어들이 나중에 신약의 인용에서 그대로 확인된다는 사실이 왜 놀라운가?",
    ],
  },
];

const week6Lessons: Lesson[] = [
  {
    id: "w3-l1",
    week: 3,
    lessonNumber: 1,
    title: "웨스트코트와 호트 — 현대 비평 본문의 형성",
    subtitle: "1881년 개역 위원회의 비밀스러운 전략과 신학적 문제",
    objectives: [
      "웨스트코트와 호트의 신학적 배경과 문제를 설명한다.",
      "1881년 개역 위원회가 수용 본문을 대체한 과정을 이해한다.",
      "현대 역본의 기초가 된 두 사본(B, Aleph)의 특성을 안다.",
    ],
    content: [
      {
        heading: "1. 웨스트코트와 호트의 신학적 실체",
        body: "브룩 포스 웨스트코트와 펜튼 존 호트는 킹제임스 성경의 기초인 수용 본문을 '비열하고 악당 같은(vile, villainous)' 본문이라고 표현할 만큼 전통 본문에 강한 적대감을 보였다. 이들은 성경의 무오성을 믿지 않았으며, 창조 기록·대속·지옥의 실재성에 대해 자유주의적 견해를 가지고 있었다. 또한 '고스트리 길드'라는 심령주의 모임에도 관여했다.",
      },
      {
        heading: "2. 1881년 개역 위원회의 비밀 전략",
        body: "1870년 소집된 개역 위원회에는 '명백한 오류만 최소한으로 수정한다'는 지침이 있었다. 그러나 웨스트코트와 호트는 20년간 비밀리에 편집해 온 새로운 헬라어 본문을 위원회에 비밀 배포하며 작업을 주도했다. 위원들은 10년간 '침묵의 철칙' 아래 비밀 회의를 진행했고, 전통 본문을 지지하던 스크리브너 같은 소수 위원들은 수적 우위에 밀려 패배했다. 최종적으로 헬라어 본문에서 약 6,000곳, 영어 번역에서 36,000곳 이상이 수정되었다.",
      },
      {
        heading: "3. 바티칸 사본(B)과 시내 사본(Aleph)의 실체",
        body: "현대 역본의 기초가 된 두 사본은 심각한 결함을 가지고 있다.",
        bulletPoints: [
          "바티칸 사본(B): 복음서에서만 1,491번 단어나 구절을 누락, 전체 수용 본문과 약 8,000곳 이상 차이.",
          "시내 사본(Aleph): 전체에 걸쳐 약 15,000곳의 수정 흔적, 최대 10명의 교정자 개입.",
          "두 사본이 서로 복음서에서만 3,000번 이상 불일치함.",
          "초기 교회로부터 오류가 많다고 외면당해 도서관이나 수도원에 방치되었기에 물리적으로 살아남을 수 있었음.",
        ],
      },
      {
        heading: "4. '본문 1500년 실종설'의 모순",
        body: "현대 비평학은 참된 성경 본문이 약 1,500년간 교회에서 사라졌다가 19세기에 학자들에 의해 '발견'되었다고 주장한다. 그러나 이것은 하나님이 자신의 말씀 보존 약속을 어기고 교회를 오류 속에 방치하셨다는 결론에 이른다.",
      },
    ],
    keyVerses: [
      {
        reference: "2 Timothy 3:16",
        text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.",
      },
    ],
    summary:
      "웨스트코트와 호트는 자유주의적 신학 배경 위에서 비밀스러운 전략으로 전통 본문을 대체했다. 이들이 채택한 바티칸·시내 사본은 상호 불일치가 심하고 초기 교회에서 외면당했던 오염된 본문이다.",
    discussionQuestions: [
      "성경의 무오성을 믿지 않는 학자들이 성경 번역을 주도하면 어떤 결과가 생길 수 있는가?",
      "'1500년 실종설'이 하나님의 보존 약속과 어떻게 충돌하는가?",
    ],
  },
  {
    id: "w3-l2",
    week: 3,
    lessonNumber: 2,
    title: "현대 역본의 교리적 변개 사례",
    subtitle: "신성·보혈·삼위일체·구원론에서 삭제된 말씀들",
    objectives: [
      "현대 역본에서 삭제되거나 변개된 주요 구절들을 KJV와 비교한다.",
      "이러한 변개가 핵심 교리에 미치는 영향을 설명한다.",
      "저작권이 현대 역본의 변개와 어떤 법적 관계에 있는지 이해한다.",
    ],
    content: [
      {
        heading: "1. 예수 그리스도의 신성 약화",
        body: "현대 역본들은 예수님의 신성을 증거하는 구절들을 수정하여 그분의 하나님 되심을 모호하게 만들었다.",
        bulletPoints: [
          "딤전 3:16 — KJV '하나님께서 육신으로 나타나시고' → 현대역 'He/Who who appeared in the flesh'(주어 모호).",
          "행 3:13,26 — KJV '아들(Son)' → 현대역 '종(servant)'으로 격하.",
          "요 9:35 — KJV '하나님의 아들' → 현대역 '인자(Son of Man)'로 교체.",
          "계 1:11 — KJV '나는 알파와 오메가요 처음과 마지막이라' → 현대역에서 전체 삭제.",
          "단 3:25 — KJV '하나님의 아들' → 현대역 '신들의 아들(a son of the gods)'.",
        ],
      },
      {
        heading: "2. 보혈과 구원론의 핵심 삭제",
        body: "구원의 근거와 방법에 관한 구절들도 심각하게 훼손되었다.",
        bulletPoints: [
          "골 1:14 — KJV '그분의 피를 통하여' → 현대역에서 문구 전체 삭제.",
          "행 8:37 — KJV 내시의 신앙 고백 '예수 그리스도가 하나님의 아들이심을 믿노라' → 현대역에서 구절 전체 삭제.",
          "마 9:13 / 막 2:17 — KJV '죄인들을 불러 회개에 이르게 하러' → 현대역에서 '회개에' 삭제.",
          "고전 1:18 / 행 2:47 — KJV '구원받은(are saved)' → 현대역 '구원을 얻어 가는(are being saved)'으로 변개(행위 구원 암시).",
        ],
      },
      {
        heading: "3. 삼위일체와 기도의 훼손",
        body: "삼위일체 교리를 지지하는 구절들과 기도 고백이 약화되었다.",
        bulletPoints: [
          "요일 5:7 — KJV '하늘에 증언하는 세 분: 아버지·말씀·성령, 이 셋은 하나' → 현대역에서 구절 전체 삭제.",
          "마 6:13 — KJV 주기도문 송영 '왕국과 권능과 영광이 영원토록' → 현대역에서 삭제.",
          "빌 4:13 — KJV '나를 강건하게 하시는 그리스도를 통해' → 현대역 '그(him)'로 대체하여 대상 불분명.",
        ],
      },
      {
        heading: "4. 저작권과 상업적 변개의 상관관계",
        body: "현대 역본들은 모두 저작권을 소유하고 있다. 저작권법상 '2차 저작물'로 보호받으려면 기존 역본과 '실질적인 차이'가 있어야 한다. 이 때문에 번역자들은 가장 적합한 단어가 있더라도 법적 소유권을 위해 억지로 단어를 바꾸거나 문장을 뒤섞어야 한다는 상업적 압박을 받는다. 킹제임스 성경은 저작권이 없는 유일한 영어 성경으로, 이러한 상업적 변개의 굴레에서 자유롭다.",
      },
    ],
    keyVerses: [
      {
        reference: "Colossians 1:14",
        text: "In whom we have redemption through his blood, even the forgiveness of sins.",
      },
      {
        reference: "1 Timothy 3:16",
        text: "And without controversy great is the mystery of godliness: God was manifest in the flesh.",
      },
    ],
    summary:
      "현대 역본들은 예수님의 신성, 보혈의 공로, 삼위일체, 구원의 확신 등 기독교의 핵심 교리와 관련된 수천 개의 단어를 삭제하거나 약화했다. 이는 오염된 사본의 채택, 상업적 저작권 압박, 번역 위원회 구성의 문제가 복합적으로 작용한 결과다.",
    discussionQuestions: [
      "골로새서 1:14에서 '그분의 피를 통하여'가 삭제될 때 구원 교리에 어떤 영향이 생기는가?",
      "저작권을 취득하기 위해 성경 단어를 바꾼다는 것이 신학적으로 어떤 문제를 일으키는가?",
    ],
  },
  {
    id: "w3-l3",
    week: 3,
    lessonNumber: 3,
    title: "영적 분별을 위한 성경 공부 — 일곱 봉인",
    subtitle: "보존된 말씀을 온전히 깨닫기 위한 일곱 가지 실천",
    objectives: [
      "성경을 영적으로 분별하기 위한 일곱 가지 실천 단계를 설명한다.",
      "성경이 성경을 해석하는 방법론을 이해한다.",
      "매일의 규칙적인 성경 읽기와 암송의 중요성을 정립한다.",
    ],
    content: [
      {
        heading: "1. 첫째 봉인 — 거듭남 (A New Heart)",
        body: "성경을 깨닫기 위한 가장 근본적인 조건은 예수 그리스도를 구세주로 영접하여 성령으로 거듭나는 것이다. 거듭나지 않은 '본성에 속한 사람(natural man)'은 하나님의 영의 일들을 받아들이지 못하며 영적으로 분별할 수 없다(고전 2:14). 영적 분별력은 지식의 문제가 아니라 하나님과 바른 관계를 맺은 마음의 문제다.",
      },
      {
        heading: "2. 둘째 봉인 — 간절한 기도 (Pray)",
        body: "성경을 공부하기 전에는 반드시 하나님께 지혜와 명철을 구하는 기도를 드려야 한다. 야고보서 1:5의 약속처럼 지혜가 부족할 때 하나님께 간구하면 주신다. 다니엘이 죄를 자백하고 간구했을 때 가브리엘을 통해 깨달음을 얻은 것이 그 예다(단 9:20-21).",
      },
      {
        heading: "3. 셋째 봉인 — 읽기와 들음 (Read and Hear)",
        body: "성도의 감각을 하나님의 말씀으로 가득 채워야 한다. 인터넷·텔레비전·소셜 미디어 등 하나님의 세밀한 음성을 가로막는 세상의 소음을 줄이거나 끊어야 한다. 교회 출석을 통해 말씀을 가르치는 목자들로부터 지식과 명철을 공급받아야 하며, 가르치는 자들이 사람의 학위나 주석이 아닌 성경 자체를 기준으로 가르치는지 분별해야 한다.",
      },
      {
        heading: "4. 넷째 봉인 — 부지런한 탐구 (Seek)",
        body: "성경 이해를 위해 매일 보물을 찾듯 말씀을 연구해야 한다. '영적인 것은 영적인 것으로 비교하는' 성경적 방법론을 사용한다(고전 2:13). 킹제임스 성경은 문맥을 통해 단어를 정의하는 '자체 내장 사전' 구조를 가지고 있으므로, 모르는 단어는 외부 사전보다 성경의 다른 구절들을 대조하여 찾아야 한다.",
      },
      {
        heading: "5. 다섯째 봉인 — 매일의 읽기 (Daily Study)",
        body: "성경 읽기는 하루도 거르지 않고 매일 수행해야 한다. 이스라엘 자손이 광야에서 매일 만나를 거두어야 했던 것과 같다. 창세기부터 요한계시록까지 계속해서 반복하여 통독하는 습관이 중요하다.",
      },
      {
        heading: "6. 여섯째 봉인 — 암송과 묵상 (Memorize and Meditate)",
        body: "하나님의 말씀을 마음속에 깊이 새기고(암송) 항상 그 말씀을 생각(묵상)해야 한다. 시편 119:99의 '주의 증언들을 묵상하므로 나의 명철함이 나의 모든 스승보다 뛰어납니다'라는 말씀처럼, 묵상은 모든 인간적 교육을 능가하는 이해력을 가져다준다.",
      },
      {
        heading: "7. 일곱째 봉인 — 순종과 즐거워함 (Obey and Delight)",
        body: "성경에 대한 이해도는 주님과 얼마나 가까이 걷느냐에 비례한다. 하나님께서 이미 주신 빛(말씀)에 순종하지 않으면서 더 많은 깨달음을 구하는 것은 옳지 않다. 시편 1:2처럼 말씀을 진정한 기쁨(Delight)으로 삼아 밤낮으로 묵상할 때 참된 영적 복을 누리게 된다.",
      },
    ],
    keyVerses: [
      {
        reference: "James 1:5",
        text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
      },
      {
        reference: "Psalm 119:99",
        text: "I have more understanding than all my teachers: for thy testimonies are my meditation.",
      },
      {
        reference: "1 Corinthians 2:13",
        text: "Which things also we speak, not in the words which man's wisdom teacheth, but which the Holy Ghost teacheth; comparing spiritual things with spiritual.",
      },
    ],
    summary:
      "성경을 온전히 깨닫기 위해서는 지적 방법론 이전에 거듭남·기도·매일의 읽기·암송·순종·말씀을 즐거워하는 마음이 필요하다. 이 일곱 단계는 성경을 살아있는 하나님의 말씀으로 대하는 마음가짐의 회복이다.",
    discussionQuestions: [
      "일곱 봉인 중 자신이 가장 취약한 영역은 어디인가? 구체적으로 어떻게 개선할 수 있는가?",
      "'성경이 성경을 해석한다'는 원칙을 실제 성경 공부에서 어떻게 적용할 수 있는가?",
    ],
  },
  {
    id: "w3-l4",
    week: 3,
    lessonNumber: 4,
    title: "결론 — 보존된 말씀을 향한 성도의 자세",
    subtitle: "옛 길로 돌아가라 — 최종 권위의 회복과 삶의 적용",
    objectives: [
      "성경 역본 논쟁의 핵심 결론을 자신의 언어로 요약한다.",
      "'옛 길(Old Paths)'로 돌아가는 것의 구체적 의미를 설명한다.",
      "성도로서 보존된 말씀에 대해 취해야 할 실천적 자세를 정립한다.",
    ],
    content: [
      {
        heading: "1. 보존에 대한 약속은 성취되었다",
        body: "하나님은 자신의 말씀을 영원히 보존하시겠다고 약속하셨다(시 12:6-7). 만약 하나님이 원본을 영감으로 주시고 보존하지 않으셨다면, 영감 교리는 학문적 유희에 불과할 것이다. 우리는 원본과 동일한 권위를 가진 보존된 말씀을 오늘날 손에 쥐고 있다. 이 확신이 성도의 최종 권위다.",
      },
      {
        heading: "2. 두 지류의 종착지 — 열매로 판단하라",
        body: "안디옥 계보(수용 본문 → KJV)는 종교개혁과 위대한 선교 운동, 대부흥 운동(웨슬리·화이트필드·무디)의 기초가 되었다. 알렉산드리아 계보(현대 비평 본문 → 현대 역본들)는 1881년 개역 이후 단 하나의 국가적 부흥도 만들어내지 못했다는 지적이 있다. 성경은 '열매로 나무를 안다'고 말한다(마 7:20).",
      },
      {
        heading: "3. '옛 길'로 돌아가는 것의 의미",
        body: "예레미야 6:16의 '옛 길을 물어보고 그리로 가라'는 말씀처럼, 옛 길로 돌아가는 것은 단순히 과거로의 회귀가 아니다. 이는 하나님의 보존된 말씀의 최종 권위를 회복함으로써 영적 생명력을 되찾는 것이다.",
        bulletPoints: [
          "인본주의 철학과 타협하지 않는 단호한 신앙.",
          "다수가 현대 역본을 사용해도 검증된 보존 역본을 지키는 용기.",
          "성경을 비평의 대상이 아니라 순종해야 할 최종 권위로 인정.",
          "죄에 대한 성경의 날카로운 경고를 완화하지 않고 선포함.",
        ],
      },
      {
        heading: "4. 성도의 실천적 자세",
        body: "말씀 앞에 굴복하는 '종'의 자세로 매일 말씀을 읽고, 암송하며, 그 말씀에 온전히 순종할 때 성령님은 진리의 봉인을 열어주신다. '기록되었으되'라고 단호히 선포할 수 있는 확신이 성도의 영적 전쟁 무기다(엡 6:17). 하나님께서 오늘날 우리 손에 완전하게 보존된 말씀을 주셨다는 확신 위에 서는 것이 이 모든 공부의 결론이다.",
      },
    ],
    keyVerses: [
      {
        reference: "Jeremiah 6:16",
        text: "Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein, and ye shall find rest for your souls.",
      },
      {
        reference: "Ephesians 6:17",
        text: "And take the helmet of salvation, and the sword of the Spirit, which is the word of God.",
      },
      {
        reference: "Psalm 12:6-7",
        text: "The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O LORD, thou shalt preserve them from this generation for ever.",
      },
    ],
    summary:
      "성경 역본 논쟁의 결론은 단순하다. 하나님은 자신의 말씀을 보존하셨고, 우리는 그 보존된 말씀을 선택할 수 있다. '기록되었으되'라고 담대하게 선포하는 성도가 이 어두운 세대에서 빛과 소금의 역할을 감당할 수 있다.",
    discussionQuestions: [
      "이 3주 과정을 통해 성경 역본에 대한 자신의 관점이 어떻게 변화했는가?",
      "'보존된 말씀에 서겠다'는 결단이 실제 삶에서 어떤 구체적인 변화를 요구하는가?",
    ],
  },
];

function toSections(lessons: Lesson[]) {
  const sections: any[] = [];
  
  lessons.forEach((lesson) => {
    sections.push({
      heading: `[Lesson ${lesson.lessonNumber}] ${lesson.title}: ${lesson.subtitle}`,
      paragraphs: [
        "**[학습 목표]**",
        ...lesson.objectives.map(o => "- " + o)
      ]
    });
    
    lesson.content.forEach((c) => {
      const p = [c.body];
      if (c.bulletPoints && c.bulletPoints.length > 0) {
        c.bulletPoints.forEach((b: string) => p.push("- " + b));
      }
      sections.push({
        heading: c.heading,
        paragraphs: p
      });
    });
    
    const extraContent = [];
    if (lesson.keyVerses.length > 0) {
      extraContent.push("**[핵심 구절]**");
      lesson.keyVerses.forEach(kv => {
        extraContent.push(`- ${kv.reference}: ${kv.text}`);
      });
    }
    extraContent.push(`**[요약]** ${lesson.summary}`);
    
    if (lesson.discussionQuestions.length > 0) {
      extraContent.push("**[토론 및 질문]**");
      lesson.discussionQuestions.forEach(q => extraContent.push("- " + q));
    }
    
    sections.push({
      heading: "정리 및 토론",
      paragraphs: extraContent
    });
  });
  
  return sections;
}

const fileContent = fs.readFileSync('src/data/curriculum.ts', 'utf8');
const startIdx = fileContent.indexOf('export const curriculumData: Lecture[] = [');

const newArray = [
  {
    week: 0,
    stage: 0,
    stageTitle: "들어가며 (Introduction)",
    title: "성경말씀에 대하여",
    instructor: "",
    description: "성경말씀에 관한 구절들을 살펴봅니다.",
    content: []
  },
  {
    week: 1,
    stage: 0,
    stageTitle: "성경의 기초",
    title: "성경구성, 권별 주제 대조표",
    instructor: "",
    description: "성경의 기본 구조와 각 권별 주제 대조표 및 통계를 알아봅니다.",
    content: [
      {
        heading: "성경의 시대별 구분",
        paragraphs: [
          "세상의 창건 이전 (요 17:24, 엡 1:4, 벧전 1:20) | 하나님께서 예수님을 사랑하셨다 | 예수님 안에서 우리를 택하시고 입양하심 | 구속을 위해 미리 정하여졌음",
          "천지창조와 인류의 탄생 (창 1~3장) | 천지만물 창조 | 사탄의 탄생",
          "죄가 인간에게 들어옴 (창 3장~) | 첫째 아담으로부터 죄가 들어옴",
          "히브리 민족의 시작 (창 12장~) | 아브라함, 이삭, 야곱, 요셉",
          "율법의 시작 (구약, 출 20장~) | 모세로부터 율법이 주어졌음",
          "예수님과 십자가 사건 (4복음서) | 예수님의 사역과 죽으심 (마 27, 막 15, 눅 23, 요 19)",
          "구약과 신약의 과도기 (십자가 ~ 행 2장) | 구약과 신약이 전개되는 과도기적 시점 주의 (교리적 전수 과정)",
          "교회시대 (행 2장 ~ 계 4장) | 은혜로 구원을 얻는 신약 교회 시대",
          "대환란 (계 5장 ~ 19장) | 야곱의 환란의 때",
          "천년왕국 (계 20장 ~ 21장) | 예수님과 성도가 통치하는 지상 왕국 시대",
          "영원한 세계 (계 22장~) | 땅은 없어지고 새 예루살렘에서 영원히 거함"
        ]
      }
    ]
  },
  {
    week: 2,
    stage: 0,
    stageTitle: "성경의 기초",
    title: "성경보존, 사본사용, 번역에 대한 말씀",
    instructor: "",
    description: "성경 보존과 사본 사용, 번역에 관한 성경 속 기록들을 확인합니다.",
    content: []
  },
  {
    week: 3,
    stage: 0,
    stageTitle: "성경의 역사",
    title: "성경 사본 및 번역의 역사",
    instructor: "",
    description: "구약과 신약의 주요 사본들과 번역본들의 보존 역사를 총정리합니다.",
    content: []
  },
  {
    week: 4,
    stage: 1,
    stageTitle: "심화과정 1",
    title: "기초 — 보존의 약속과 두 지류",
    instructor: "",
    description: "성경이 어떻게 기록되고 전수되었는지, 그리고 두 가지 사본 지류(안디옥 vs 알렉산드리아)가 무엇인지 이해합니다. 하나님의 보존 약속을 성경 본문에서 확인하고, 말씀을 대하는 두 가지 출발점(믿음의 논리 vs 불신의 논리)을 비교합니다.",
    content: toSections(week4Lessons)
  },
  {
    week: 5,
    stage: 1,
    stageTitle: "심화과정 2",
    title: "역사 — 수용 본문과 킹제임스 성경",
    instructor: "",
    description: "안디옥 본문이 왈덴스인·에라스무스·종교개혁자들을 통해 어떻게 보존되었는지 추적합니다. 에라스무스의 수용 본문 형성, 종교개혁 역본들의 계보, 킹제임스 성경의 번역 과정과 이탤릭체·직역 원칙 등 고유한 특징을 배웁니다.",
    content: toSections(week5Lessons)
  },
  {
    week: 6,
    stage: 2,
    stageTitle: "심화과정 3",
    title: "심화 — 현대 비평 본문과 영적 분별",
    instructor: "",
    description: "웨스트코트·호트의 현대 비평 본문 형성 과정과 그 신학적 문제를 분석합니다. 현대 역본들의 구체적인 교리 변개 사례를 KJV와 비교하고, 보존된 말씀을 온전히 깨닫기 위한 일곱 가지 실천 단계를 배우며, 성도의 최종 자세를 정립합니다.",
    content: toSections(week6Lessons)
  }
];

fs.writeFileSync('src/data/curriculum.ts', fileContent.substring(0, startIdx) + "export const curriculumData: Lecture[] = " + JSON.stringify(newArray, null, 2) + "\n;\n", 'utf8');
console.log('Done!');
