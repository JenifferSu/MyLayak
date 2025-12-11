import { CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface LoginSuccessProps {
  userName: string;
  onContinue: () => void;
}

export function LoginSuccess({ userName, onContinue }: LoginSuccessProps) {
  useEffect(() => {
    // Auto-continue after 3 seconds
    const timer = setTimeout(() => onContinue(), 3000);
    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <main className="flex-1 flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-2xl">
        <div 
          className="p-16 rounded-3xl border border-green-400/30 text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(30px)',
            boxShadow: '0 20px 60px rgba(34, 197, 94, 0.3)'
          }}
        >
          {/* Success Icon with animation */}
          <div className="relative mb-8">
            <div 
              className="w-32 h-32 mx-auto rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(34, 197, 94, 0.2)',
                border: '4px solid #22c55e'
              }}
            >
              <CheckCircle className="w-16 h-16 text-green-400" strokeWidth={2.5} />
            </div>
            
            {/* Animated rings */}
            <div 
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: 'rgba(34, 197, 94, 0.1)',
                animationDuration: '2s'
              }}
            />
          </div>

          {/* Success Message */}
          <h1 className="text-white mb-4">
            Login Successfully!
          </h1>
          
          <div 
            className="inline-block px-8 py-4 rounded-2xl mb-8"
            style={{
              background: 'rgba(245, 158, 11, 0.2)',
              border: '2px solid #F59E0B'
            }}
          >
            <p className="text-white/70 text-lg mb-2">Welcome back,</p>
            <p className="text-white text-3xl">{userName}</p>
          </div>

          {/* Continue Button */}
          <button
            onClick={onContinue}
            className="group px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-3 mx-auto"
            style={{
              background: '#F59E0B',
              color: '#000',
              boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)'
            }}
          >
            <span>Continue to Dashboard</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Auto-redirect indicator */}
          <p className="text-white/50 text-sm mt-6">
            Redirecting automatically in a moment...
          </p>
        </div>
      </div>
    </main>
  );
}
