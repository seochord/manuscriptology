import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Lecture } from '../data/curriculum';
import CommentSection from './CommentSection';
import { recordingVerses, preservationVerses, manuscriptUsageVerses, translationUsageVerses, bibleStructure, bibleStats, bookThemes, otManuscripts, ntManuscripts } from '../data/bibleData';

interface BibleOverviewProps {
  lecture: Lecture;
  onBack: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function BibleOverview({ lecture, onBack, onNext, onPrev, hasNext, hasPrev }: BibleOverviewProps) {
  const [showAllVerses, setShowAllVerses] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors mb-6 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>목차로 돌아가기</span>
      </button>

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <header className="bg-white border-b border-slate-100 p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full -mr-64 -mt-64 blur-[100px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-100 rounded-full -ml-32 -mb-32 blur-[80px] opacity-40"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 text-white text-[9px] font-black rounded-full mb-10 uppercase tracking-[0.3em] shadow-xl shadow-slate-200">
              {lecture.stageTitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-0 leading-[1.1] tracking-tighter">
              {lecture.title}
            </h1>
          </div>
        </header>

        <div className="p-8 md:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-16 group">
              <div className="absolute -left-10 top-0 bottom-0 w-2 bg-gradient-to-b from-brand-400 via-brand-600 to-brand-800 rounded-full shadow-[0_0_20px_rgba(88,145,173,0.4)]"></div>
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.6] font-medium italic tracking-tight">
                {lecture.description}
              </p>
            </div>

            <div className="space-y-24">
              {/* Section 1: 서론 및 말씀의 보물창고 (1주차) */}
              {lecture.week === 1 && (
                <>
                <section className="mb-24">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 font-black text-xl border border-slate-100 shadow-sm">1</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">성경, 하나님의 살아있는 말씀</h2>
                  </div>

                  <div className="bg-white p-8 md:p-14 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-50 rounded-full -ml-48 -mb-48 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10 space-y-10">
                      <div className="space-y-8">
                        <p className="text-lg md:text-2xl text-slate-800 leading-[1.8] break-keep text-justify font-handwriting">
                          성경은 인간의 유한한 지혜나 의도에서 비롯된 것이 아니라, 하나님의 거룩한 사람들이 성령의 강력한 감동을 받아 기록한 지고한 진리의 성전입니다. 태초에 모든 만물을 창조하신 권능의 말씀은 도가니에서 일곱 번 정련된 은보다 더 순결하며, 하늘과 땅이 사라질지라도 일점일획조차 결코 사라지지 않고 영원토록 보존될 것입니다. 본 과정에서 엄선한 <strong>108개의 핵심 성경 구절</strong>들은 살아 있는 권능이자 양날검보다 예리하게 우리의 혼과 영을 찔러 쪼개며, 마음 깊은 곳의 생각과 의도를 분별해 내는 거룩한 빛입니다.
                        </p>
                        
                        <p className="text-lg md:text-2xl text-slate-800 leading-[1.8] break-keep text-justify font-handwriting">
                          이 모든 기록의 정점이자 결론은 오직 말씀이 육신이 되어 우리 가운데 거하신 예수 그리스도이십니다. 구약의 복잡한 예언과 신약의 역사적 성취는 오직 예수님이 그리스도이시며 하나님의 아들이심을 증언하는 데 집중되어 있으며, 우리는 그분의 말씀을 통해 영원하고 풍성한 생명을 누리게 됩니다. 주의 말씀은 어둠 속을 걷는 우리 발의 등불이자 행로의 빛이며, 썩지 않는 씨앗이 되어 우리를 다시 태어나게 하는 영적 생명의 원천입니다.
                        </p>

                        <p className="text-lg md:text-2xl text-slate-800 leading-[1.8] break-keep text-justify font-handwriting">
                          그러므로 우리는 진리의 말씀을 바르게 나누어 공부함으로써 하나님 앞에 부끄러울 것이 없는 온전한 일꾼으로 서야 합니다. 말씀을 몸의 양식보다 소중히 여기고 주야로 묵상하며, 배운 바를 삶에서 온전히 실행하는 자가 되어야 합니다. 주를 두려워하는 마음으로 말씀을 상고하고 그 안에 깊이 거할 때, 비로소 우리의 길이 형통하고 진정한 성공이 뒤따르며 하나님이 보살피시는 축복된 신앙의 길을 걷게 될 것입니다.
                        </p>
                      </div>

                      <div className="pt-10 border-t border-slate-100">
                        <p className="text-brand-800 font-bold italic text-lg md:text-xl leading-relaxed text-center">
                          "이는 하나님의 말씀은 살아 있고 권능이 있으며 그 어떤 양날검보다 더 예리하여, 혼과 영 그리고 관절들과 골수를 찔러 가르기까지 하고, 마음의 생각들과 의도들의 분별자이기 때문이라." <br className="hidden md:block" /> (히 4:12)
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 font-black text-xl border border-slate-100 shadow-sm">2</span>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">관련 성경구절 모두 보기</h2>
                    </div>
                    <button
                       onClick={() => setShowAllVerses(!showAllVerses)}
                       className="flex items-center gap-2 px-4 py-2.5 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                       {showAllVerses ? (
                         <>기록된 원문 숨기기 <ChevronUp className="w-4 h-4"/></>
                       ) : (
                         <>모든 구절 더보기 ({recordingVerses.length}개) <ChevronDown className="w-4 h-4"/></>
                       )}
                    </button>
                  </div>

                  <AnimatePresence>
                    {showAllVerses && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 mt-4 mb-8">
                          <div className="space-y-6">
                            {recordingVerses.map((verse, idx) => (
                              <div key={idx} className="space-y-3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                  <span className="shrink-0 inline-block px-3 py-1 bg-brand-100 text-brand-700 text-sm font-bold rounded-md whitespace-nowrap">{verse.reference}</span>
                                  <p className="text-slate-800 leading-relaxed text-base font-medium whitespace-pre-line">{verse.text}</p>
                                </div>
                                <div className="bg-brand-50 border-l-4 border-brand-400 p-4 rounded-r-lg mt-2">
                                  <p className="text-sm font-bold text-brand-800"><span className="text-brand-600 mr-2">📌 도출되는 교훈:</span> {verse.lesson}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!showAllVerses && (
                    <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-6 text-center text-slate-500 font-medium my-8">
                      우측 상단의 '모든 구절 더보기' 버튼을 클릭하면 성경 구절 원문 전체와 도출된 교훈들을 확인할 수 있습니다.
                    </div>
                  )}
                </section>
                </>
              )}

              {/* Section 2: 성경의 구성 (2주차) */}
              {lecture.week === 2 && (
                <>
                <section className="mb-24">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 font-black text-xl border border-slate-100 shadow-sm">1</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">성경의 구성</h2>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800">성경의 세 구분</h3>
                        <p className="text-xs text-slate-500 mt-1">참고: 성경통론, 바이블마스터, 성경주석, 성경익스프레스, 성서핸드북, David Reagon, Roy B. Zuck</p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                          <thead>
                            <tr className="bg-slate-50/50 text-slate-500 text-sm uppercase tracking-wider">
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">구분</th>
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">역사서</th>
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">시가서(구약), 서신서(신약)</th>
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">예언서</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {bibleStructure.threeDivisions.map((item, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50">
                                <td className="px-6 py-3 text-slate-800 font-medium whitespace-nowrap">{item.testament}</td>
                                <td className="px-6 py-3 text-slate-700">{item.history}</td>
                                <td className="px-6 py-3 text-slate-700">{item.poetryEpistles}</td>
                                <td className="px-6 py-3 text-slate-700">{item.prophecy}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800">성경의 구성 상세 (통계)</h3>
                        <p className="text-xs text-slate-500 mt-1">참고: Brandon Peterson, 피터럭크만, 할레이, 조병호, 테리홀</p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                          <thead>
                            <tr className="bg-slate-50/50 text-slate-500 text-sm uppercase tracking-wider">
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">구분</th>
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">신,구약 (전체)</th>
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">구약</th>
                              <th className="px-6 py-3 font-semibold border-b border-slate-200">신약</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {bibleStats.overview.map((item, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50">
                                <td className="px-6 py-3 font-medium text-slate-800 whitespace-nowrap">{item.category}</td>
                                <td className="px-6 py-3 text-slate-700">{item.total}</td>
                                {item.nt ? (
                                  <>
                                    <td className="px-6 py-3 text-slate-700 whitespace-pre-line leading-relaxed pb-4">{item.ot}</td>
                                    <td className="px-6 py-3 text-slate-700">{item.nt}</td>
                                  </>
                                ) : (
                                  <td colSpan={2} className="px-6 py-3 text-slate-700 whitespace-pre-line leading-relaxed pb-4">{item.ot}</td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800">기타 구성</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <tbody className="divide-y divide-slate-100">
                            {bibleStats.misc.map((item, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50">
                                <td className="px-6 py-3 font-medium text-slate-800 w-1/3 bg-slate-50/30">{item.category}</td>
                                <td className="px-6 py-3 text-slate-700">{item.content}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                          <h3 className="text-lg font-bold text-slate-800">구약(유대인식)-24권</h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50/50 text-slate-500 text-sm uppercase tracking-wider">
                                <th className="px-6 py-3 font-semibold border-b border-slate-200 w-1/3">구분</th>
                                <th className="px-6 py-3 font-semibold border-b border-slate-200">책 이름</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {bibleStructure.jewishDivisions.map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50">
                                  <td className="px-6 py-3 font-medium text-slate-800 bg-slate-50/30">
                                    {item.name}
                                  </td>
                                  <td className="px-6 py-3 text-slate-700 text-sm leading-relaxed">{item.books}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                          <h3 className="text-lg font-bold text-slate-800">구약(이방인식)-39권 및 신약-27권</h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                              <tr className="bg-slate-50/50 text-slate-500 text-sm uppercase tracking-wider">
                                <th className="px-6 py-3 font-semibold border-b border-slate-200 w-1/6">구약(이방인식)-39권</th>
                                <th className="px-6 py-3 font-semibold border-b border-slate-200 w-2/6">책 이름</th>
                                <th className="px-6 py-3 font-semibold border-b border-slate-200 w-1/6">신약-27권</th>
                                <th className="px-6 py-3 font-semibold border-b border-slate-200 w-2/6">책 이름</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {bibleStructure.gentileDivisionsCombined.map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50">
                                  <td className="px-6 py-3 font-medium text-slate-800 bg-slate-50/30">{item.otName}</td>
                                  <td className="px-6 py-3 text-slate-700 text-sm leading-relaxed">{item.otBooks}</td>
                                  <td className="px-6 py-3 font-medium text-slate-800 bg-slate-50/30">{item.ntName}</td>
                                  <td className="px-6 py-3 text-slate-700 text-sm leading-relaxed">{item.ntBooks}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 신규 추가된 거시적 역사 및 학자별 구분 */}
                {lecture.content.map((section, sIdx) => (
                  <section key={sIdx} className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 font-black text-xl border border-slate-100 shadow-sm">{sIdx + 2}</span>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{section.heading}</h2>
                    </div>
                    
                    {sIdx === 0 ? (
                      /* 거시적 파노라마 그리드 레이아수 */
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.paragraphs.map((p, pIdx) => {
                          const parts = p.split('|').map(s => s.trim());
                          return (
                            <div key={pIdx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all flex flex-col">
                              <div className="text-xs font-black text-brand-600 mb-2 px-2 py-1 bg-brand-50 rounded-md self-start">
                                Step {pIdx + 1}
                              </div>
                              <h3 className="text-base font-black text-slate-900 mb-3 leading-tight">{parts[0]}</h3>
                              <div className="space-y-2 mt-auto">
                                {parts.slice(1).map((item, iIdx) => (
                                  <div key={iIdx} className="text-[13px] text-slate-600 flex items-start gap-2">
                                    <span className="text-brand-400 mt-1">•</span>
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {section.paragraphs.map((p, pIdx) => {
                          if (p.includes('|')) {
                            const [title, ...rest] = p.split('|').map(s => s.trim());
                            return (
                              <div key={pIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-200 transition-all">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-brand-400"></span>
                                  {title}
                                </h3>
                                <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                                  {rest.map((item, iIdx) => (
                                    <span key={iIdx} className="bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            );
                          }
                          return (
                            <p key={pIdx} className="text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
                              {p}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </section>
                ))}

                {/* Section 3: 권별 주제 대조표 */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 font-black text-xl border border-slate-100 shadow-sm">{lecture.content.length + 2}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">성경 권별 주제 대조표</h2>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto max-h-[500px] overflow-y-auto relative">
                      <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 z-10 bg-slate-100 shadow-sm">
                          <tr className="text-slate-600 text-sm uppercase tracking-wider">
                            <th className="px-6 py-3 font-bold border-b border-slate-200 w-1/4">성경 각 권</th>
                            <th className="px-6 py-3 font-bold border-b border-slate-200 w-3/8">존 필립스 (John Phillips)</th>
                            <th className="px-6 py-3 font-bold border-b border-slate-200 w-3/8">할레이 (H. H. Halley)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {bookThemes.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/80">
                              <td className="px-6 py-2.5 font-bold text-slate-800 bg-slate-50/30">{item.book}</td>
                              <td className="px-6 py-2.5 text-slate-700 text-sm">{item.phillips}</td>
                              <td className="px-6 py-2.5 text-slate-700 text-sm">{item.halley}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                </>
              )}

              {/* Section 4: 성경 보존, 사본 사용, 번역에 대한 말씀 (3주차) */}
              {lecture.week === 3 && (
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 font-black text-xl border border-slate-100 shadow-sm">1</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">성경 보존, 사본 사용, 번역에 대한 말씀</h2>
                  </div>

                  <div className="space-y-8">
                    {/* 1. 성경 보존 */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-3">성경 보존에 대한 말씀</h3>
                      <div className="space-y-4">
                        {preservationVerses.map((verse, idx) => (
                          <div key={idx} className="space-y-2 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                            <span className="inline-flex items-center px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-md">
                              {verse.reference}
                            </span>
                            <p className="text-slate-800 leading-relaxed font-medium">"{verse.text}"</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. 사본 사용 */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-3">사본 사용에 대한 말씀</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {manuscriptUsageVerses.map((verse, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <span className="block text-brand-700 text-xs font-bold mb-1">{verse.reference}</span>
                            <p className="text-slate-700 text-sm font-medium">{verse.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. 번역 사용 */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-3">번역 사용에 대한 말씀</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {translationUsageVerses.map((verse, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <span className="block text-brand-700 text-xs font-bold mb-1">{verse.reference}</span>
                            <p className="text-slate-700 text-sm font-medium">{verse.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Section 5: 성경 사본 및 번역의 역사 (연대순) (4주차) */}
              {lecture.week === 4 && (
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brand-600 font-black text-xl border border-slate-100 shadow-sm">1</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">성경 사본 및 번역의 역사 (연대순)</h2>
                  </div>

                  <div className="space-y-8">
                    {/* 구약 Timeline */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100">구약 사본</h3>
                      <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
                        {otManuscripts.map((item, idx) => (
                          <div key={idx} className="relative pl-6">
                            <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                            <div className="mb-1">
                              <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">{item.period}</span>
                            </div>
                            <h4 className="text-base font-bold text-slate-800 mt-2 mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 신약 Timeline */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100">신약사본 및 성경전서</h3>
                      <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
                        {ntManuscripts.map((item, idx) => (
                          <div key={idx} className="relative pl-6">
                            <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                            <div className="mb-1">
                              <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">{item.period}</span>
                            </div>
                            <h4 className="text-base font-bold text-slate-800 mt-2 mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

            </div>
          </div>
        </div>
      </article>

      <CommentSection lectureId={lecture.week} />

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
            hasPrev
              ? 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              : 'opacity-50 cursor-not-allowed text-slate-400'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          이전 강의
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
            hasNext
              ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
              : 'opacity-50 cursor-not-allowed bg-slate-200 text-slate-500'
          }`}
        >
          다음 강의
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
