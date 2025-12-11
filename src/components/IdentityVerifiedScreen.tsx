import { CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';

interface IdentityVerifiedScreenProps {
  onContinue: () => void;
}

export function IdentityVerifiedScreen({ onContinue }: IdentityVerifiedScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-16 text-center shadow-2xl backdrop-blur-xl">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <CheckCircle className="h-32 w-32 text-green-400" strokeWidth={2} />
              {/* Success pulse animation */}
              <div className="absolute inset-0 animate-ping rounded-full bg-green-400/20" style={{ animationDuration: '1s', animationIterationCount: '2' }} />
            </div>
          </div>

          {/* Text */}
          <h2 className="mb-4 text-white text-[26px] font-bold">
            Identity verified successfully
          </h2>
          
          <div className="mb-12 flex items-center justify-center gap-2 text-white/70">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-lg text-[16px]">
              No personal data is stored or shared
            </p>
          </div>

          {/* Continue Button */}
          <Button
            onClick={onContinue}
            className="h-16 rounded-xl bg-amber-400 px-12 text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-amber-300 hover:shadow-2xl text-[18px]"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
