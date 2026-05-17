import { useState, useEffect, FormEvent } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

interface CommentSectionProps {
  lectureId: number;
}

export default function CommentSection({ lectureId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  // Load comments from localStorage when lectureId changes
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_lecture_${lectureId}`);
    if (storedComments) {
      try {
        setComments(JSON.parse(storedComments));
      } catch (e) {
        console.error('Failed to parse comments', e);
      }
    } else {
      setComments([]);
    }
  }, [lectureId]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`comments_lecture_${lectureId}`, JSON.stringify(comments));
  }, [comments, lectureId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: crypto.randomUUID(),
      author: authorName.trim() || '익명',
      text: newComment.trim(),
      createdAt: new Date().toISOString(),
    };

    setComments((prev) => [...prev, comment]);
    setNewComment('');
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="mt-16 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="w-6 h-6 text-brand-600" />
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">댓글</h3>
        </div>
        <p className="text-slate-500 font-medium">
          느낀점 또는 의견을 자유롭게 남겨주세요.
        </p>
      </div>

      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-[200px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="이름 (선택)"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>
            
            <div className="relative">
              <textarea
                placeholder="의견을 남겨주세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="absolute bottom-4 right-4 bg-brand-600 text-white p-2.5 rounded-xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        <div className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
              <p className="text-slate-400 font-medium">아직 등록된 의견이 없습니다. 첫 번째 의견을 남겨보세요!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-slate-900">{comment.author}</span>
                  <span className="text-xs text-slate-400 font-medium">{formatDate(comment.createdAt)}</span>
                </div>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {comment.text}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
