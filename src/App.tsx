import { useState } from 'react';
import { BookMarked } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={handleBack}
          >
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
              <BookMarked className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">Manuscriptology</span>
          </div>
          {currentWeek && (
            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500">
              <span>진도율: {Math.round((currentWeek / curriculumData.length) * 100)}%</span>
              <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-500"
                  style={{ width: `${(currentWeek / curriculumData.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {currentLecture ? (
          <LectureViewer 
            lecture={currentLecture} 
            onBack={handleBack}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={currentWeek < curriculumData.length}
            hasPrev={currentWeek > 1}
          />
        ) : (
          <Home onSelectLecture={handleSelectLecture} />
        )}
      </main>
    </div>
  );
}
