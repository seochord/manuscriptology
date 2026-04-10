import { useState, useEffect } from 'react';
import { Play, Square, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface LectureAudioProps {
  textToRead: string;
}

export default function LectureAudio({ textToRead }: LectureAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stopAudio = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  useEffect(() => {
    // Reset audio when text changes or component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [textToRead]);

  const toggleSpeech = () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    setIsLoading(true);
    
    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    // Set language to Korean
    utterance.lang = 'ko-KR';
    
    // Find a good Korean voice if available
    const voices = window.speechSynthesis.getVoices();
    const koVoices = voices.filter(v => v.lang === 'ko-KR' || v.lang === 'ko_KR');
    
    // Prefer Google, Microsoft Natural, or Premium voices for better quality
    const bestVoice = koVoices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Google') || 
      v.name.includes('Premium')
    ) || koVoices[0];

    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    // Adjust speed and pitch for a more natural feel
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = (event) => {
      console.error("SpeechSynthesis error:", event);
      setIsLoading(false);
      setIsPlaying(false);
    };

    // Speak!
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 mb-12 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSpeech}
          disabled={isLoading}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
            isPlaying 
              ? 'bg-slate-900 text-white shadow-slate-200' 
              : 'bg-sky-600 text-white shadow-sky-200 hover:bg-sky-700'
          }`}
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : isPlaying ? (
            <Square className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-1" />
          )}
        </motion.button>
        <div>
          <h3 className="font-black text-slate-900 tracking-tight">오디오 듣기</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Listen to the lecture</p>
        </div>
      </div>
      {isPlaying && (
        <div className="flex items-end gap-1.5 h-8 px-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                height: [8, 24, 12, 32, 16][i % 5],
                opacity: [0.5, 1, 0.7, 1, 0.6][i % 5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 0.8 + i * 0.1, 
                ease: "easeInOut",
                repeatType: "mirror"
              }}
              className="w-1.5 bg-sky-500 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
}
