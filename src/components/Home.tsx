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
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-sky-100 text-sky-700 font-bold text-xs mb-8 tracking-widest uppercase"
        >
          <ShieldCheck className="w-4 h-4" />
          The Authority of Traditional Text & KJV
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
          성경 보존의 역사와<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">사본학 입문</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          피터 럭크만, 에드워드 힐즈, 게일 리플린저 등 최고의 강사진과 함께<br className="hidden md:block" />
          하나님의 말씀이 어떻게 보존되어 왔는지 탐구하는 12주간의 여정.
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
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-sky-200">
                    {lecture.week}
                  </span>
                  <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Week</span>
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-2 py-1 rounded">
                  {lecture.stageTitle.split('(')[0].trim()}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors leading-tight">
                {lecture.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow font-medium">
                {lecture.description}
              </p>
              
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-100 to-blue-50 border-2 border-white shadow-sm flex items-center justify-center text-sky-700 text-xs font-black">
                    {lecture.instructor.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Instructor</div>
                    <div className="text-sm font-bold text-slate-700 tracking-tight">
                      {lecture.instructor}
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-sm">
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
