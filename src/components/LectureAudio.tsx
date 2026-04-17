import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface LectureAudioProps {
  textToRead: string;
}

export default function LectureAudio({ textToRead }: LectureAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const chunksRef = useRef<string[]>([]);
  const currentChunkIndexRef = useRef(0);
  const isPlayingRef = useRef(false);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Split text into chunks (sentences)
    const sentences = textToRead
      .replace(/([.?!])\s*(?=[A-Z가-힣])/g, "$1|")
      .split("|")
      .filter(s => s.trim().length > 0);
    
    chunksRef.current = sentences;
    currentChunkIndexRef.current = 0;
    
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [textToRead]);

  const stopAudio = () => {
    isPlayingRef.current = false;
    isPausedRef.current = false;
    setIsPlaying(false);
    setIsPaused(false);
    setIsLoading(false);
    currentChunkIndexRef.current = 0;
    window.speechSynthesis.cancel();
  };

  const playNextChunk = () => {
    if (!isPlayingRef.current || isPausedRef.current) return;

    if (currentChunkIndexRef.current >= chunksRef.current.length) {
      stopAudio();
      return;
    }

    const text = chunksRef.current[currentChunkIndexRef.current];
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.lang = 'ko-KR';
    
    const voices = window.speechSynthesis.getVoices();
    const koVoices = voices.filter(v => v.lang === 'ko-KR' || v.lang === 'ko_KR');
    const bestVoice = koVoices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Google') || 
      v.name.includes('Premium')
    ) || koVoices[0];

    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      if (!isPlayingRef.current) return; // Stopped
      currentChunkIndexRef.current += 1;
      
      // Play next chunk after a tiny delay
      setTimeout(() => {
        playNextChunk();
      }, 50);
    };

    utterance.onerror = (event) => {
      if (event.error === 'canceled' || event.error === 'interrupted') return;
      console.error("SpeechSynthesis error:", event);
      stopAudio();
    };

    window.speechSynthesis.speak(utterance);
  };

  const toggleSpeech = () => {
    if (isPlaying) {
      // Pause
      isPlayingRef.current = false;
      isPausedRef.current = true;
      setIsPlaying(false);
      setIsPaused(true);
      window.speechSynthesis.cancel(); // Cancel current utterance to pause immediately
      return;
    }

    if (isPaused) {
      // Resume
      isPlayingRef.current = true;
      isPausedRef.current = false;
      setIsPlaying(true);
      setIsPaused(false);
      playNextChunk(); // Resume from current chunk
      return;
    }

    // Start
    setIsLoading(true);
    isPlayingRef.current = true;
    isPausedRef.current = false;
    currentChunkIndexRef.current = 0;
    playNextChunk();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 mb-12 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSpeech}
            disabled={isLoading}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
              isPlaying 
                ? 'bg-brand-100 text-brand-700 shadow-brand-100' 
                : 'bg-brand-600 text-white shadow-brand-200 hover:bg-brand-700'
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </motion.button>

          {(isPlaying || isPaused) && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={stopAudio}
              className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 flex items-center justify-center transition-colors"
              title="정지"
            >
              <Square className="w-5 h-5 fill-current" />
            </motion.button>
          )}
        </div>
        <div>
          <h3 className="font-black text-slate-900 tracking-tight">오디오 듣기</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
            {isPaused ? 'PAUSED' : isPlaying ? 'PLAYING' : 'LISTEN TO THE LECTURE'}
          </p>
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
              className="w-1.5 bg-brand-500 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
}
