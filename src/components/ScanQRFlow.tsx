import { QrCode, Loader2, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ScanQRFlowProps {
  onComplete: () => void;
}

type FlowStep = 'showQR' | 'verifying' | 'verified';

export function ScanQRFlow({ onComplete }: ScanQRFlowProps) {
  const [step, setStep] = useState<FlowStep>('showQR');

  useEffect(() => {
    if (step === 'showQR') {
      // Show QR for 3 seconds
      const timer = setTimeout(() => setStep('verifying'), 3000);
      return () => clearTimeout(timer);
    } else if (step === 'verifying') {
      // Show verifying for 2 seconds
      const timer = setTimeout(() => setStep('verified'), 2000);
      return () => clearTimeout(timer);
    } else if (step === 'verified') {
      // Show verified for 2 seconds then complete
      const timer = setTimeout(() => onComplete(), 2000);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  return (
    <main className="flex-1 flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-3xl">
        {/* Step 1: Show QR Code */}
        {step === 'showQR' && (
          <div 
            className="p-12 rounded-3xl border border-white/20 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{
                background: 'rgba(245, 158, 11, 0.2)',
                border: '3px solid #F59E0B'
              }}
            >
              <QrCode className="w-12 h-12 text-amber-500" strokeWidth={2} />
            </div>
            <h2 className="text-white mb-4">
              Scan QR Code
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Open your MyDigital ID App and scan the code below
            </p>

            {/* QR Code Display */}
            <div 
              className="w-80 h-80 mx-auto rounded-3xl p-8 mb-8"
              style={{
                background: 'white',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Actual QR Code Pattern */}
              <div className="w-full h-full grid grid-cols-8 gap-1">
                {[
                  1,1,1,1,1,0,1,0,
                  1,0,0,0,1,0,1,1,
                  1,0,1,0,1,0,0,1,
                  1,0,0,0,1,0,1,0,
                  1,1,1,1,1,0,1,1,
                  0,0,0,0,0,0,0,0,
                  1,0,1,1,0,1,1,0,
                  0,1,0,1,1,0,1,1
                ].map((cell, i) => (
                  <div
                    key={i}
                    className="rounded-sm"
                    style={{
                      background: cell ? '#1e40af' : 'transparent'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Instruction with animation */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
              <p className="text-white/60 text-sm">Waiting for scan...</p>
            </div>

            {/* App Info */}
            <div 
              className="mt-6 inline-block px-6 py-3 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <p className="text-white/60 text-sm">Use</p>
              <p className="text-white font-semibold">MyDigital ID App</p>
            </div>
          </div>
        )}

        {/* Step 2: Verifying */}
        {step === 'verifying' && (
          <div 
            className="p-12 rounded-3xl border border-white/20 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{
                background: 'rgba(59, 130, 246, 0.2)',
                border: '3px solid #3b82f6'
              }}
            >
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin" strokeWidth={2} />
            </div>
            <h2 className="text-white mb-4">
              Verifying...
            </h2>
            <p className="text-white/70 text-lg">
              Authenticating your identity
            </p>
            
            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}

        {/* Step 3: Verified */}
        {step === 'verified' && (
          <div 
            className="p-12 rounded-3xl border border-green-400/30 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(34, 197, 94, 0.3)'
            }}
          >
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{
                background: 'rgba(34, 197, 94, 0.2)',
                border: '3px solid #22c55e'
              }}
            >
              <CheckCircle className="w-12 h-12 text-green-400" strokeWidth={2} />
            </div>
            <h2 className="text-white mb-4">
              Login Successful!
            </h2>
            <p className="text-white/70 text-lg">
              QR code authenticated successfully
            </p>
            
            {/* Success animation */}
            <div className="mt-8">
              <div className="w-16 h-1 bg-green-400 mx-auto rounded-full animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
