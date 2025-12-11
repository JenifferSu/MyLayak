import { useEffect } from 'react';
import { CheckCircle, Lock, Shield } from 'lucide-react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  useEffect(() => {
    // Simulate processing time (2.5 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-16 text-center shadow-2xl backdrop-blur-xl">
          {/* Animation Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-amber-400/20">
                <Lock className="h-20 w-20 text-amber-400" />
              </div>
              {/* Rotating ring animation */}
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-amber-400" style={{ animationDuration: '1s' }} />
            </div>
          </div>

          {/* Text */}
          <h2 className="mb-8 text-white">
            Activating service securely...
          </h2>

          {/* Status Indicators */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-white/90">Eligibility validated</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-white/90">Secure transmission completed</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4 opacity-50">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" />
              <span className="text-white/90">Finalizing activation...</span>
            </div>
          </div>

          {/* Loading bar */}
          <div className="mx-auto h-2 w-64 overflow-hidden rounded-full bg-white/10">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-amber-300"
              style={{ 
                animation: 'progressBar 2.5s ease-in-out forwards',
              }}
            />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
