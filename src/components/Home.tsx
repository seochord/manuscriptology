import { motion } from 'motion/react';
import { BookOpen, Clock, ShieldCheck, Users, Headphones, PenTool } from 'lucide-react';
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-50/50 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      <header className="text-center mb-20 pt-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white shadow-xl shadow-brand-100/50 border border-brand-100 text-brand-700 font-black text-[10px] mb-10 tracking-[0.3em] uppercase"
        >
          <ShieldCheck className="w-4 h-4" />
          Scripture & Preservation
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[1.05]">
          성경말씀과 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800">보존</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight mb-8">
          영원불변한 하나님의 말씀이 어떤 역사적 과정과 절대적인 섭리 속에서 
          완벽하게 보존되어 우리에게 주어졌는지 <span className="text-brand-700 font-black">9주의 여정</span>을 통해 생생히 확인해 보세요.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base font-bold text-slate-700 bg-white/60 py-4 px-8 rounded-full border border-slate-200/60 shadow-sm max-w-4xl mx-auto backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
            말씀의 기원과 전달
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-[pulse_2s_ease-in-out_infinite_200ms]"></span>
            성경 사본의 역사
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-500 animate-[pulse_2s_ease-in-out_infinite_400ms]"></span>
            완전한 보존의 증거
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md hover:bg-white transition-all"
          >
            <div className="bg-slate-100 p-2.5 rounded-xl text-slate-600 mt-0.5 shrink-0">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm mb-1.5">도입 ~ 3주차 (기초 뼈대)</h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                다양한 저자들의 책을 바탕으로 직접 발췌하여 정리한 자료입니다. 
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md border-b-2 hover:border-b-accent-500 hover:bg-white transition-all group"
          >
            <div className="bg-accent-50 p-2.5 rounded-xl text-accent-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                4주차 ~ 8주차 (심화 과정 통합)
                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-accent-100 text-accent-700 text-[9px] uppercase tracking-wider font-black shadow-sm">오디오 지원</span>
              </h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                관련 내용 10권 이상의 저서를 바탕으로 핵심을 길게 편집하였으며, <span className="font-bold text-accent-700">오디오 기능</span>을 제공합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Introduction Banner (Week 0) */}
      {curriculumData.find(l => l.week === 0) && (
        <div className="px-4 md:px-0 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={() => onSelectLecture(0)}
            className="group bg-gradient-to-br from-brand-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-brand-800 shadow-2xl hover:shadow-brand-900/50 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-accent-400/20 duration-700"></div>
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[10px] font-black text-accent-400 uppercase tracking-[0.2em] bg-brand-800/50 px-4 py-2 rounded-full border border-brand-700/50">
                  {curriculumData.find(l => l.week === 0)?.stageTitle}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-accent-400 transition-colors leading-[1.2] tracking-tight">
                {curriculumData.find(l => l.week === 0)?.title}
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-[1.8] font-medium tracking-tight max-w-3xl">
                {curriculumData.find(l => l.week === 0)?.description}
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-brand-800/50 flex items-center justify-center group-hover:bg-accent-400 group-hover:text-brand-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-brand-700/50 backdrop-blur-sm">
                <BookOpen className="w-8 h-8 text-accent-400 group-hover:text-brand-900" />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {curriculumData.filter(l => l.week !== 0).map((lecture, idx) => (
          <motion.div
            key={lecture.week}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 3) * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => onSelectLecture(lecture.week)}
            className={`group rounded-[2.5rem] p-8 border transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden ${
              lecture.week <= 3 
                ? "bg-slate-50 border-brand-200/60 shadow-sm hover:shadow-xl hover:shadow-brand-100 hover:border-brand-300"
                : "bg-gradient-to-br from-accent-50/50 to-white border-accent-200/60 shadow-sm hover:shadow-2xl hover:shadow-accent-200 hover:border-accent-400"
            }`}
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[120px] -mr-16 -mt-16 transition-all group-hover:scale-150 duration-700 ${
              lecture.week <= 3 ? "bg-brand-100/50 group-hover:bg-brand-100" : "bg-accent-100/50 group-hover:bg-accent-200/60"
            }`}></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`absolute inset-0 blur-md opacity-20 group-hover:opacity-40 transition-opacity ${
                      lecture.week <= 3 ? "bg-brand-500" : "bg-accent-500"
                    }`}></div>
                    <span className={`relative w-10 h-10 rounded-xl text-white flex items-center justify-center text-sm font-black shadow-xl ${
                      lecture.week <= 3 ? "bg-brand-800" : "bg-accent-700"
                    }`}>
                      {lecture.week}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Week</span>
                </div>
                <div className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border ${
                  lecture.week <= 3 
                    ? "text-brand-600 bg-brand-50 border-brand-100/50" 
                    : "text-accent-700 bg-accent-50 border-accent-200/50"
                }`}>
                  {lecture.stageTitle.split('(')[0].trim()}
                </div>
              </div>

              <h3 className={`text-2xl font-black mb-5 transition-colors leading-[1.2] tracking-tight ${
                lecture.week <= 3 ? "text-slate-900 group-hover:text-brand-700" : "text-slate-900 group-hover:text-accent-700"
              }`}>
                {lecture.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-[1.8] line-clamp-3 flex-grow font-medium tracking-tight mb-10">
                {lecture.description}
              </p>
              
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    lecture.week <= 3 ? "bg-brand-400" : "bg-accent-400"
                  }`}></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available Now</span>
                </div>
                <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center transition-all duration-500 shadow-sm border border-slate-100 min-w-12 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 ${
                  lecture.week <= 3 ? "group-hover:bg-brand-600" : "group-hover:bg-accent-600"
                }`}>
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
