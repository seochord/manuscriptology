import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { curriculumData, Lecture } from '../data/curriculum';
import LectureAudio from './LectureAudio';

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

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors mb-6 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>목차로 돌아가기</span>
      </button>

      <LectureAudio textToRead={textToRead} />

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <header className="bg-white border-b border-slate-100 p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full -mr-64 -mt-64 blur-[100px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50 rounded-full -ml-32 -mb-32 blur-[80px] opacity-40"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 text-white text-[9px] font-black rounded-full mb-10 uppercase tracking-[0.3em] shadow-xl shadow-slate-200">
              Week {lecture.week} <span className="opacity-30 mx-1">|</span> {lecture.stageTitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-0 leading-[1.1] tracking-tighter">
              {lecture.title}
            </h1>
          </div>
        </header>

        <div className="p-8 md:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-24 group">
              <div className="absolute -left-10 top-0 bottom-0 w-2 bg-gradient-to-b from-sky-500 via-blue-600 to-indigo-700 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.4)]"></div>
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.6] font-medium italic tracking-tight">
                {lecture.description}
              </p>
            </div>

            <div className="space-y-24 text-slate-800 text-lg leading-[2]">
              {lecture.content.map((section, idx) => (
                <section key={idx} className="relative">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-sky-600 font-black text-xl border border-slate-100 shadow-sm">
                      {idx + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      {section.heading}
                    </h2>
                    <div className="flex-grow h-px bg-gradient-to-r from-slate-100 to-transparent"></div>
                  </div>
                  <div className="space-y-8">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-slate-700 font-medium leading-[2.1]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {lecture.quote && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-32 p-12 md:p-16 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-3xl shadow-sky-900/20"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-sky-500/20 rounded-2xl flex items-center justify-center mb-10">
                    <span className="text-5xl font-serif text-sky-400 leading-none mt-4">"</span>
                  </div>
                  <p className="text-2xl md:text-4xl font-serif italic leading-tight mb-12 tracking-tight">
                    {lecture.quote.text}
                  </p>
                  <div className="flex items-center justify-end gap-4">
                    <div className="h-px w-12 bg-sky-500/50"></div>
                    <footer className="text-sky-400 font-black tracking-[0.2em] uppercase text-sm">
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
                    <div className="w-3 h-10 bg-sky-600 rounded-full"></div>
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
                    className="absolute bottom-8 right-8 bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-sky-600 hover:text-white"
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
              ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-sm'
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
