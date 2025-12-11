import { useEffect } from 'react';
import { CreditCard, QrCode } from 'lucide-react';
import type { LoginMethod } from '../App';

interface ReadingIdScreenProps {
  loginMethod: LoginMethod;
  onComplete: () => void;
}

export function ReadingIdScreen({ loginMethod, onComplete }: ReadingIdScreenProps) {
  useEffect(() => {
    // Simulate reading time (2 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-16 text-center shadow-2xl backdrop-blur-xl">
          {/* Animation Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {loginMethod === 'mykad' ? (
                <CreditCard className="h-32 w-32 text-amber-400" />
              ) : (
                <QrCode className="h-32 w-32 text-amber-400" />
              )}
              {/* Pulsing rings animation */}
              <div className="absolute inset-0 animate-ping rounded-full bg-amber-400/20" />
              <div className="absolute inset-0 animate-pulse rounded-full bg-amber-400/10" />
            </div>
          </div>

          {/* Text */}
          <h2 className="mb-4 text-white text-[20px]">
            Reading your MyDigital ID...
          </h2>
          
          {/* Loading indicator */}
          <div className="mx-auto mt-8 flex w-64 justify-center gap-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.3s]" />
            <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.15s]" />
            <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
}