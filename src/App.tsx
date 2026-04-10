import { useState } from 'react';
import { BookMarked } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Home from './components/Home';
import LectureViewer from './components/LectureViewer';
import { curriculumData } from './data/curriculum';

export default function App() {
  const [currentWeek, setCurrentWeek] = useState<number | null>(null);

  const handleSelectLecture = (week: number) => {
    setCurrentWeek(week);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentWeek(null);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (currentWeek && currentWeek < curriculumData.length) {
      setCurrentWeek(currentWeek + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentWeek && currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
      window.scrollTo(0, 0);
    }
  };

  const currentLecture = currentWeek 
    ? curriculumData.find(l => l.week === currentWeek) 
    : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900">
      <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-40 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={handleBack}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                <BookMarked className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-slate-900 tracking-tighter leading-none">성경 사본학</span>
              <span className="text-[9px] text-sky-600 font-black uppercase tracking-[0.4em] mt-1.5 opacity-80">Manuscriptology</span>
            </div>
          </div>
          {currentWeek && (
            <div className="hidden md:flex items-center gap-8">
              <div className="flex flex-col items-end gap-1">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">Learning Progress</span>
                <span className="text-sm font-black text-slate-900 tabular-nums">{Math.round((currentWeek / curriculumData.length) * 100)}%</span>
              </div>
              <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/30">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentWeek / curriculumData.length) * 100}%` }}
                  className="h-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        <AnimatePresence mode="wait">
          {currentLecture ? (
            <motion.div
              key="viewer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <LectureViewer 
                lecture={currentLecture} 
                onBack={handleBack}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={currentWeek < curriculumData.length}
                hasPrev={currentWeek > 1}
              />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Home onSelectLecture={handleSelectLecture} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
