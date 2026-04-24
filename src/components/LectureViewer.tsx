import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { curriculumData, Lecture } from '../data/curriculum';
import LectureAudio from './LectureAudio';
import CommentSection from './CommentSection';

interface LectureViewerProps {
  lecture: Lecture;
  onBack: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function LectureViewer({ lecture, onBack, onNext, onPrev, hasNext, hasPrev }: LectureViewerProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const textToRead = useMemo(() => {
    let text = `${lecture.title}. `;
    text += `${lecture.description} `;
    lecture.content.forEach(section => {
      text += `${section.heading}. `;
      section.paragraphs.forEach(p => {
        text += `${p} `;
      });
    });
    return text;
  }, [lecture]);

  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 hover:underline font-bold break-all">
            [관련자료링크]
          </a>
        );
      }
      return part;
    });
  };

  const renderFormattedText = (text: string, isCaption: boolean = false) => {
    if (text.includes(' | ')) {
      const parts = text.split(' | ');
      return (
        <div className={`bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 ${isCaption ? 'w-full' : ''}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
            {renderTextWithLinks(parts[0])}
          </h3>
          <ul className="space-y-3">
            {parts.slice(1).map((part, idx) => {
              const spText = part.trim();
              if (!spText) return null;
              const isVerse = /^-\s?[가-힣]{1,2}\s?\d+/.test(spText);
              
              return (
                <li key={idx} className="flex items-start gap-3 text-slate-700 leading-[1.8]">
                  {isVerse ? (
                    <span className={`mt-1 font-bold text-lg ${lecture.week <= 3 ? "text-brand-500" : "text-accent-500"}`}>•</span>
                  ) : (
                    <span className={`mt-1.5 text-sm ${lecture.week <= 3 ? "text-brand-500" : "text-accent-500"}`}>■</span>
                  )}
                  <span>{renderTextWithLinks(isVerse ? spText.replace(/^-\s?/, '').trim() : spText)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return (
      <p className="text-slate-700 font-medium leading-[2.1]">
        {renderTextWithLinks(text)}
      </p>
    );
  };

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors mb-6 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>목차로 돌아가기</span>
      </button>

      <LectureAudio textToRead={textToRead} />

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <header className="bg-white border-b border-slate-100 p-10 md:p-20 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full -mr-64 -mt-64 blur-[100px] opacity-60 ${
            lecture.week <= 3 ? "bg-brand-50" : "bg-accent-50"
          }`}></div>
          <div className={`absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full -ml-32 -mb-32 blur-[80px] opacity-40 ${
            lecture.week <= 3 ? "bg-brand-100" : "bg-accent-100"
          }`}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className={`inline-flex items-center gap-3 px-5 py-2 text-white text-[9px] font-black rounded-full mb-10 uppercase tracking-[0.3em] shadow-xl shadow-slate-200 ${
              lecture.week <= 3 ? "bg-brand-900" : "bg-accent-900"
            }`}>
              {lecture.week === 0 ? (
                lecture.stageTitle
              ) : (
                <>
                  Week {lecture.week} <span className="opacity-30 mx-1">|</span> {lecture.stageTitle}
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-0 leading-[1.1] tracking-tighter">
              {lecture.title}
            </h1>
          </div>
        </header>

        <div className="p-8 md:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-24 group">
              <div className={`absolute -left-10 top-0 bottom-0 w-2 rounded-full shadow-[0_0_20px_rgba(88,145,173,0.4)] ${
                lecture.week <= 3 ? "bg-gradient-to-b from-brand-400 via-brand-600 to-brand-800" : "bg-gradient-to-b from-accent-400 via-accent-600 to-accent-800"
              }`}></div>
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.6] font-medium italic tracking-tight">
                {lecture.description}
              </p>
              
              {lecture.sourceReferences && lecture.sourceReferences.length > 0 && (
                <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-xl">📚</span> 참고 문헌 (Source References)
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lecture.sourceReferences.map((ref, idx) => (
                      <li key={idx} className="flex flex-col bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <span className="font-bold text-slate-800 text-lg mb-1">{ref.author}</span>
                        <span className="text-slate-500 text-sm italic">《{ref.book}》</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-24 text-slate-800 text-lg leading-[2]">
              {lecture.content.map((section, idx) => {
                const isStageSubTitle = section.heading.startsWith('---') && section.heading.endsWith('---');
                const match = !isStageSubTitle ? section.heading.match(/^(\d+)\.?\s*(.*)/) : null;

                return (
                  <section key={idx} className={`relative ${isStageSubTitle ? 'mt-16 first:mt-0' : ''}`}>
                    {isStageSubTitle ? (
                      <div className="flex items-center gap-6 mb-10">
                        <div className="flex-grow h-px bg-slate-200"></div>
                        <h2 className={`text-xl md:text-2xl font-black tracking-tight px-6 py-2.5 rounded-full border shadow-sm ${
                          lecture.week <= 3 ? "text-brand-800 bg-brand-50 border-brand-100" : "text-accent-800 bg-accent-50 border-accent-100"
                        }`}>
                          {section.heading.replace(/^---?\s*/, '').replace(/\s*---?$/, '')}
                        </h2>
                        <div className="flex-grow h-px bg-slate-200"></div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-6 mb-10">
                        <span className={`flex items-center justify-center shrink-0 w-12 h-12 rounded-2xl font-black text-xl border shadow-sm ${
                          match 
                            ? lecture.week <= 3 
                              ? 'bg-brand-50 text-brand-600 border-brand-100' 
                              : 'bg-accent-50 text-accent-600 border-accent-100'
                            : 'bg-slate-50 text-slate-400 border-slate-100'
                        }`}>
                          {match ? match[1] : idx + 1}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                          {match ? match[2] : section.heading}
                        </h2>
                        {!match && <div className="flex-grow h-px bg-gradient-to-r from-slate-100 to-transparent"></div>}
                      </div>
                    )}
                    <div className="space-y-8">
                      {section.paragraphs
                        .filter(p => !(section.images && section.images.some(img => img.caption === p)))
                        .map((paragraph, pIdx) => (
                        <div key={pIdx}>
                          {renderFormattedText(paragraph)}
                        </div>
                      ))}
                      {section.images && section.images.length > 0 && (
                        <div className="flex flex-col mt-10 border-t border-slate-200">
                          {section.images.map((img, iIdx) => (
                            <div key={iIdx} className="flex flex-col md:flex-row gap-6 items-center py-6 border-b border-slate-200 group">
                              <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden bg-slate-100 rounded-xl shrink-0 shadow-sm">
                                <img 
                                  src={img.url} 
                                  alt={img.alt} 
                                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                                  referrerPolicy="no-referrer" 
                                />
                              </div>
                              <div className="w-full md:w-2/3 flex flex-col justify-center">
                                {renderFormattedText(img.caption, true)}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>

            {lecture.quote && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`mt-32 p-12 md:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-3xl ${
                  lecture.week <= 3 ? "bg-slate-900 shadow-brand-900/20" : "bg-slate-900 shadow-accent-900/20"
                }`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32 blur-3xl ${
                  lecture.week <= 3 ? "bg-brand-500/10" : "bg-accent-500/20"
                }`}></div>
                <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full -ml-24 -mb-24 blur-3xl ${
                  lecture.week <= 3 ? "bg-brand-400/10" : "bg-accent-400/20"
                }`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${
                    lecture.week <= 3 ? "bg-brand-500/20" : "bg-accent-500/20"
                  }`}>
                    <span className={`text-5xl font-serif leading-none mt-4 ${
                      lecture.week <= 3 ? "text-brand-400" : "text-accent-400"
                    }`}>"</span>
                  </div>
                  <p className="text-2xl md:text-4xl font-serif italic leading-tight mb-12 tracking-tight">
                    {lecture.quote.text}
                  </p>
                  <div className="flex items-center justify-end gap-4">
                    <div className={`h-px w-12 ${
                      lecture.week <= 3 ? "bg-brand-400/50" : "bg-accent-400/50"
                    }`}></div>
                    <footer className={`font-black tracking-[0.2em] uppercase text-sm ${
                      lecture.week <= 3 ? "text-brand-400" : "text-accent-400"
                    }`}>
                      {lecture.quote.author}
                    </footer>
                  </div>
                </div>
              </motion.div>
            )}

            {lecture.chart && (
              <div className="mt-32">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-10 rounded-full ${
                      lecture.week <= 3 ? "bg-brand-600" : "bg-accent-600"
                    }`}></div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{lecture.chart.title}</h3>
                  </div>
                </div>
                <div className="relative group rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
                  <img
                    src={lecture.chart.url}
                    alt={lecture.chart.title}
                    className="w-full h-auto object-cover cursor-pointer transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    onClick={() => setIsImageExpanded(true)}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <button
                    onClick={() => setIsImageExpanded(true)}
                    className={`absolute bottom-8 right-8 bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:text-white ${
                      lecture.week <= 3 ? "hover:bg-brand-600" : "hover:bg-accent-600"
                    }`}
                  >
                    <Maximize2 className="w-4 h-4" />
                    Expand Visual
                  </button>
                </div>
                <div className="mt-8 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-slate-500 leading-relaxed italic font-medium">
                    {lecture.chart.description}
                  </p>
                </div>
              </div>
            )}
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
              ? lecture.week <= 3 
                ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm' 
                : 'bg-accent-600 text-white hover:bg-accent-700 shadow-sm'
              : 'opacity-50 cursor-not-allowed bg-slate-200 text-slate-500'
          }`}
        >
          다음 강의
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <AnimatePresence>
        {isImageExpanded && lecture.chart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setIsImageExpanded(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsImageExpanded(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lecture.chart.url}
              alt={lecture.chart.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
