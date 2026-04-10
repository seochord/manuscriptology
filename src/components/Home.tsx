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
    <div className="max-w-6xl mx-auto pb-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-sky-50/50 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      <header className="text-center mb-20 pt-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white shadow-xl shadow-sky-100/50 border border-sky-100 text-sky-700 font-black text-[10px] mb-10 tracking-[0.3em] uppercase"
        >
          <ShieldCheck className="w-4 h-4" />
          The Authority of Traditional Text & KJV
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[1.05]">
          성경 보존의 역사와<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800">사본학 입문</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
          하나님의 말씀이 어떻게 보존되어 왔는지 탐구하는<br className="hidden md:block" />
          <span className="text-slate-900 font-black">12주간의 학문적 여정</span>에 여러분을 초대합니다.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { icon: Clock, label: "12주 과정", sub: "체계적인 커리큘럼" },
            { icon: BookOpen, label: "주 1회 30분", sub: "핵심 요약 강의" },
            { icon: Users, label: "온라인 수강", sub: "언제 어디서나" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-sky-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900">{item.label}</div>
                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {curriculumData.map((lecture, idx) => (
          <motion.div
            key={lecture.week}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 3) * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => onSelectLecture(lecture.week)}
            className="group bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-sky-100 hover:border-sky-300 transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[120px] -mr-16 -mt-16 transition-all group-hover:scale-150 group-hover:bg-sky-100 duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-sky-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <span className="relative w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-black shadow-xl">
                      {lecture.week}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Week</span>
                </div>
                <div className="text-[9px] font-black text-sky-600 uppercase tracking-[0.2em] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100/50">
                  {lecture.stageTitle.split('(')[0].trim()}
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-sky-700 transition-colors leading-[1.2] tracking-tight">
                {lecture.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-[1.8] line-clamp-3 mb-10 flex-grow font-medium tracking-tight">
                {lecture.description}
              </p>
              
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available Now</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-slate-100">
                  <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
