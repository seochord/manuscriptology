import { motion } from 'motion/react';
import { BookOpen, Clock, ShieldCheck, Users } from 'lucide-react';
import { curriculumData } from '../data/curriculum';

interface HomeProps {
  onSelectLecture: (week: number) => void;
}

export default function Home({ onSelectLecture }: HomeProps) {
  // Group by stage
  const stages = curriculumData.reduce((acc, lecture) => {
    if (!acc[lecture.stage]) {
      acc[lecture.stage] = {
        title: lecture.stageTitle,
        lectures: []
      };
    }
    acc[lecture.stage].lectures.push(lecture);
    return acc;
  }, {} as Record<number, { title: string; lectures: typeof curriculumData }>);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto pb-24"
    >
      <header className="text-center mb-16 pt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 font-medium text-sm mb-6">
          <ShieldCheck className="w-4 h-4" />
          전통 본문과 KJV의 권위 수호
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          성경 보존의 역사와<br className="hidden md:block" /> 사본학 입문
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          피터 럭크만, 에드워드 힐즈, 게일 리플린저 등 최고의 강사진과 함께하는 12주간의 사본학 여정.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 text-slate-600">
            <Clock className="w-5 h-5 text-sky-500" />
            <span>12주 과정</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <BookOpen className="w-5 h-5 text-sky-500" />
            <span>주 1회 30분</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Users className="w-5 h-5 text-sky-500" />
            <span>온라인 수강</span>
          </div>
        </div>
      </header>

      <div className="space-y-12">
        {Object.entries(stages).map(([stageNum, stage], idx) => (
          <motion.section
            key={stageNum}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600 text-white font-bold">
                {stageNum}
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{stage.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stage.lectures.map((lecture) => (
                <div
                  key={lecture.week}
                  onClick={() => onSelectLecture(lecture.week)}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col h-full"
                >
                  <div className="text-sm font-medium text-sky-600 mb-2">
                    {lecture.week}주차
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                    {lecture.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {lecture.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-slate-500">
                      강사: {lecture.instructor}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                      <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
