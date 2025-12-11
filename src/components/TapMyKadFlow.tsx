import { CreditCard, Loader2, CheckCircle, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

type FlowStep = 'tapCard' | 'reading' | 'verifyPhone' | 'verifying';

interface TapMyKadFlowProps {
  onComplete: () => void;
}

export function TapMyKadFlow({ onComplete }: TapMyKadFlowProps) {
  const [step, setStep] = useState<FlowStep>('tapCard');

  useEffect(() => {
    if (step === 'tapCard') {
      // Simulate card tap after 3 seconds
      const timer = setTimeout(() => {
        setStep('reading');
      }, 3000);
      return () => clearTimeout(timer);
    } else if (step === 'reading') {
      // Simulate card reading for 2 seconds
      const timer = setTimeout(() => {
        setStep('verifyPhone');
      }, 2000);
      return () => clearTimeout(timer);
    } else if (step === 'verifying') {
      // Simulate phone verification for 2 seconds
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  const handleVerifyPhone = () => {
    setStep('verifying');
  };

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-12">
      <div 
        className="w-full max-w-2xl p-12 rounded-3xl shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Step 1: Tap Card */}
        {step === 'tapCard' && (
          <div className="text-center">
            <div className="mb-8">
              <CreditCard className="w-20 h-20 mx-auto text-white mb-6" />
              <h2 className="text-white mb-4">Tap Your MyKad</h2>
              <p className="text-white/90">
                Please place your MyKad on the card reader
              </p>
            </div>

            {/* Card Reader Illustration */}
            <div className="mb-8">
              <img 
                src="/tap-mykad.png" 
                alt="Tap MyKad on reader"
                className="w-full max-w-md mx-auto rounded-2xl"
                style={{
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Pulsing Animation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-[#F59E0B] rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-16 h-16 bg-[#F59E0B] rounded-full relative"></div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Reading Card */}
        {step === 'reading' && (
          <div className="text-center">
            <Loader2 className="w-20 h-20 mx-auto text-white mb-6 animate-spin" />
            <h2 className="text-white mb-4">Reading MyKad</h2>
            <p className="text-white/90">
              Please do not remove your card...
            </p>
            <div className="mt-8">
              <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-[#F59E0B] rounded-full animate-pulse"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Verify Phone */}
        {step === 'verifyPhone' && (
          <div className="text-center">
            <CheckCircle className="w-20 h-20 mx-auto text-green-400 mb-6" />
            <h2 className="text-white mb-4">Card Read Successfully</h2>
            <p className="text-white/90 mb-8">
              Please verify your identity on your phone
            </p>

            <div 
              className="p-8 rounded-2xl mb-8"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <Smartphone className="w-16 h-16 mx-auto text-white mb-4" />
              <p className="text-white mb-2">Check your phone</p>
              <p className="text-white/70 text-sm">
                A verification prompt has been sent to<br />
                <span className="font-medium">+60 12-345 6789</span>
              </p>
            </div>

            <button
              onClick={handleVerifyPhone}
              className="px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105"
              style={{
                background: '#ffffff',
                color: '#1e3a8a',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              I&apos;ve Verified on Phone
            </button>
          </div>
        )}

        {/* Step 4: Verifying */}
        {step === 'verifying' && (
          <div className="text-center">
            <Loader2 className="w-20 h-20 mx-auto text-[#1e3a8a] mb-6 animate-spin" />
            <h2 className="text-white mb-4">Verifying Identity</h2>
            <p className="text-white/90">
              Please wait while we verify your credentials...
            </p>
          </div>
        )}
      </div>
    </main>
  );
}