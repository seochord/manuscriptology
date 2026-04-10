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
    <div className="max-w-7xl mx-auto pb-32 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-sky-50/50 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-blue-200/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      <header className="text-center mb-28 pt-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white shadow-md border border-sky-100 text-sky-700 font-bold text-sm mb-10 tracking-widest uppercase"
        >
          <ShieldCheck className="w-5 h-5" />
          The Authority of Traditional Text & KJV
        </motion.div>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 tracking-tight leading-[1.05]">
          성경 보존의 역사와<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">사본학 입문</span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
          피터 럭크만, 에드워드 힐즈, 게일 리플린저 등 최고의 강사진과 함께<br className="hidden md:block" />
          하나님의 말씀이 어떻게 보존되어 왔는지 탐구하는 12주간의 여정.
        </p>
        
        <div className="flex flex-wrap justify-center gap-10 mt-16">
          {[
            { icon: Clock, label: "12주 과정", sub: "체계적인 커리큘럼" },
            { icon: BookOpen, label: "주 1회 30분", sub: "핵심 요약 강의" },
            { icon: Users, label: "온라인 수강", sub: "언제 어디서나" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 bg-white shadow-lg shadow-slate-200/50 px-8 py-5 rounded-[2rem] border border-white">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-sky-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-900">{item.label}</div>
                <div className="text-xs text-slate-400 font-black uppercase tracking-widest mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
        {curriculumData.map((lecture, idx) => (
          <motion.div
            key={lecture.week}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 3) * 0.1 }}
            whileHover={{ y: -12, scale: 1.03 }}
            onClick={() => onSelectLecture(lecture.week)}
            className="group bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm hover:shadow-3xl hover:shadow-sky-100/50 hover:border-sky-300 transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-50 rounded-bl-[140px] -mr-16 -mt-16 transition-all group-hover:scale-150 group-hover:bg-sky-100 duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center text-sm font-black shadow-xl shadow-sky-200">
                    {lecture.week}
                  </span>
                  <span className="text-xs font-black text-sky-600 uppercase tracking-widest">Week</span>
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-3 py-1.5 rounded-lg">
                  {lecture.stageTitle.split('(')[0].trim()}
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-sky-700 transition-colors leading-[1.2] tracking-tight">
                {lecture.title}
              </h3>
              
              <p className="text-slate-500 text-lg leading-relaxed line-clamp-3 mb-10 flex-grow font-medium">
                {lecture.description}
              </p>
              
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-100 to-blue-50 border-2 border-white shadow-sm flex items-center justify-center text-sky-700 text-sm font-black">
                    {lecture.instructor.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Instructor</div>
                    <div className="text-base font-black text-slate-700 tracking-tight">
                      {lecture.instructor}
                    </div>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-inner">
                  <BookOpen className="w-7 h-7 text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  );
}
