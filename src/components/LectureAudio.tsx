import { useState, useEffect } from 'react';
import { Play, Square, Loader2 } from 'lucide-react';
import { GoogleGenAI, Modality } from '@google/genai';

interface LectureAudioProps {
  textToRead: string;
}

export default function LectureAudio({ textToRead }: LectureAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stopAudio = () => {
    if ((window as any).currentAudioSource) {
      (window as any).currentAudioSource.stop();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Reset audio when text changes
    stopAudio();
  }, [textToRead]);

  const generateAndPlayAudio = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: textToRead }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' }, // Zephyr is a clear male voice
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (base64Audio) {
        playRawPCM(base64Audio);
      }
    } catch (error) {
      console.error("Failed to generate audio:", error);
      alert("오디오 생성에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const playRawPCM = async (base64Audio: string) => {
    try {
      const binaryString = atob(base64Audio);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // The audio is 16-bit PCM, 24000 Hz, mono
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const sampleRate = 24000;
      const numChannels = 1;
      
      // Convert 16-bit PCM to Float32
      const int16Array = new Int16Array(bytes.buffer);
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
      
      // We can't easily pause/resume a BufferSource, so we'll just keep track of the context
      (window as any).currentAudioSource = source;
      (window as any).currentAudioContext = audioCtx;

    } catch (error) {
      console.error("Error playing PCM audio:", error);
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isPlaying ? (
            <Square className="w-5 h-5 fill-current cursor-pointer" onClick={stopAudio} />
          ) : (
            <Play className="w-5 h-5 fill-current cursor-pointer ml-1" onClick={generateAndPlayAudio} />
          )}
        </div>
        <div>
          <h3 className="font-medium text-slate-900">강의 듣기</h3>
          <p className="text-sm text-slate-500">AI 음성으로 강의 내용을 들을 수 있습니다.</p>
        </div>
      </div>
      {isPlaying && (
        <div className="flex gap-1">
          <div className="w-1.5 h-4 bg-sky-400 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
          <div className="w-1.5 h-6 bg-sky-500 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
          <div className="w-1.5 h-3 bg-sky-400 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
          <div className="w-1.5 h-5 bg-sky-600 rounded-full animate-[bounce_1s_infinite_600ms]"></div>
        </div>
      )}
    </div>
  );
}
