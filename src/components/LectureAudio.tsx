import { useState, useEffect } from 'react';
import { Play, Square, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

interface LectureAudioProps {
  textToRead: string;
}

export default function LectureAudio({ textToRead }: LectureAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stopAudio = () => {
    if ((window as any).currentAudioSource) {
      try {
        (window as any).currentAudioSource.stop();
      } catch (e) {
        // Ignore errors if already stopped
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Reset audio when text changes
    stopAudio();
  }, [textToRead]);

  const generateAndPlayAudio = async () => {
    setIsLoading(true);
    
    // Create or resume AudioContext immediately on user interaction
    let audioCtx = (window as any).currentAudioContext;
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      (window as any).currentAudioContext = audioCtx;
    }
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API Key is missing. Please check your environment.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: textToRead }] }],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (base64Audio) {
        playRawPCM(base64Audio, audioCtx);
      } else {
        throw new Error("No audio data returned from Gemini");
      }
    } catch (error: any) {
      console.error("Failed to generate audio:", error);
      alert(`오디오 생성에 실패했습니다: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const playRawPCM = async (base64Audio: string, audioCtx: AudioContext) => {
    try {
      const binaryString = atob(base64Audio);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const sampleRate = 24000;
      const numChannels = 1;
      
      // Ensure byte length is a multiple of 2 for Int16Array
      const bufferLength = bytes.length - (bytes.length % 2);
      const int16Array = new Int16Array(bytes.buffer, 0, bufferLength / 2);
      
      const float32Array = new Float32Array(int16Array.length);
      for (let i = 0; i < int16Array.length; i++) {
        float32Array[i] = int16Array[i] / 32768.0;
      }

      const audioBuffer = audioCtx.createBuffer(numChannels, float32Array.length, sampleRate);
      audioBuffer.copyToChannel(float32Array, 0);

      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      
      source.onended = () => {
        setIsPlaying(false);
      };

      source.start();
      setIsPlaying(true);
      
      (window as any).currentAudioSource = source;

    } catch (error) {
      console.error("Error playing PCM audio:", error);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 mb-12 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isPlaying ? stopAudio : generateAndPlayAudio}
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
          <h3 className="font-black text-slate-900 tracking-tight">AI 오디오 강의</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Listen to the lecture with AI voice</p>
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
