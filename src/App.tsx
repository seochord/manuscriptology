import { useState } from 'react';
import { BookMarked } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Home from './components/Home';
import LectureViewer from './components/LectureViewer';
import BibleOverview from './components/BibleOverview';
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
    const maxWeek = Math.max(...curriculumData.map(c => c.week));
    if (currentWeek !== null && currentWeek < maxWeek) {
      setCurrentWeek(currentWeek + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentWeek !== null && currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
      window.scrollTo(0, 0);
    }
  };

  const currentLecture = currentWeek !== null 
    ? curriculumData.find(l => l.week === currentWeek) 
    : null;

  const maxWeek = Math.max(...curriculumData.map(c => c.week));

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900">
      <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-40 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={handleBack}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                <BookMarked className="w-6 h-6 text-accent-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-slate-900 tracking-tighter leading-none">성경말씀과 보존</span>
              <span className="text-[9px] text-brand-600 font-black uppercase tracking-[0.4em] mt-1.5 opacity-80">Manuscriptology</span>
            </div>
          </div>
          {currentWeek !== null && (
            <div className="hidden md:flex items-center gap-8">
              <div className="flex flex-col items-end gap-1">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">Learning Progress</span>
                <span className="text-sm font-black text-slate-900 tabular-nums">{Math.round((currentWeek / maxWeek) * 100)}%</span>
              </div>
              <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/30">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentWeek / maxWeek) * 100}%` }}
                  className="h-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 shadow-[0_0_15px_rgba(88,145,173,0.5)]"
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
              {currentLecture.week <= 3 ? (
                <BibleOverview 
                  lecture={currentLecture} 
                  onBack={handleBack}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  hasNext={currentWeek < maxWeek}
                  hasPrev={currentWeek > 0}
                />
              ) : (
                <LectureViewer 
                  lecture={currentLecture} 
                  onBack={handleBack}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  hasNext={currentWeek < maxWeek}
                  hasPrev={currentWeek > 0}
                />
              )}
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

      <footer className="py-8 text-center text-slate-400 text-sm font-medium">
        &copy; {new Date().getFullYear()} seochord. All rights reserved.
      </footer>
    </div>
  );
}
