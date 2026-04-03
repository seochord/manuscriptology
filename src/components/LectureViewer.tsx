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
    let text = `${lecture.title}. 강사, ${lecture.instructor}. `;
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto pb-24"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors mb-6 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>목차로 돌아가기</span>
      </button>

      <LectureAudio textToRead={textToRead} />

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <header className="bg-slate-50 border-b border-slate-200 p-8">
          <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-medium rounded-full mb-4">
            {lecture.week}주차 • {lecture.stageTitle}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {lecture.title}
          </h1>
          <div className="flex items-center gap-3 text-slate-600">
            <span className="font-medium">강사: {lecture.instructor}</span>
          </div>
        </header>

        <div className="p-8 md:p-12">
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium border-l-4 border-sky-200 pl-4">
            {lecture.description}
          </p>

          <div className="space-y-12 text-slate-800 text-lg leading-[1.8]">
            {lecture.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-slate-700">{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          {lecture.quote && (
            <blockquote className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200 relative">
              <div className="absolute top-4 left-4 text-6xl text-sky-200 font-serif leading-none opacity-50">"</div>
              <p className="text-xl md:text-2xl font-serif text-slate-800 italic leading-snug relative z-10 mb-4">
                {lecture.quote.text}
              </p>
              <footer className="text-right text-sky-700 font-medium">
                — {lecture.quote.author}
              </footer>
            </blockquote>
          )}

          {lecture.chart && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{lecture.chart.title}</h3>
              <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src={lecture.chart.url}
                  alt={lecture.chart.title}
                  className="w-full h-auto object-cover cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                  onClick={() => setIsImageExpanded(true)}
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setIsImageExpanded(true)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 className="w-5 h-5 text-slate-700" />
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-3">{lecture.chart.description}</p>
            </div>
          )}
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
    </motion.div>
  );
}
