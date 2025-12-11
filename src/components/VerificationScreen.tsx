import { useEffect } from 'react';
import { Smartphone, Shield } from 'lucide-react';

interface VerificationScreenProps {
  onComplete: () => void;
}

export function VerificationScreen({ onComplete }: VerificationScreenProps) {
  useEffect(() => {
    // Simulate verification time (3 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

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
                <Smartphone className="h-20 w-20 text-amber-400" />
              </div>
              {/* Rotating ring animation */}
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-amber-400" style={{ animationDuration: '1.5s' }} />
            </div>
          </div>

          {/* Text */}
          <h2 className="mb-4 text-white text-[25px] font-bold">
            Please authenticate using MyDigital ID
          </h2>
          
          <p className="mb-8 text-[18px] text-white/70">
            Complete verification on your device
          </p>

          {/* Loading indicator */}
          <div className="mx-auto mt-8 h-2 w-64 overflow-hidden rounded-full bg-white/10">
            <div className="h-full animate-pulse bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-[length:200%_100%]" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
          </div>

          {/* Trust badge */}
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-white/50">
            <Shield className="h-4 w-4" />
            <span>Biometric data stays within MyDigital ID</span>
          </div>
        </div>
      </div>
    </div>
  );
}