import { CreditCard, QrCode, Shield, Lock } from 'lucide-react';
import { useState } from 'react';

interface WelcomeLoginProps {
  onSelectMyKad: () => void;
  onSelectQR: () => void;
}

export function WelcomeLogin({ onSelectMyKad, onSelectQR }: WelcomeLoginProps) {
  const [hoveredCard, setHoveredCard] = useState<'mykad' | 'qr' | null>(null);

  return (
    <main className="flex-1 flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-6xl">
        {/* Login Cards - Split Layout */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Card A - Tap MyKad */}
          <div
            onMouseEnter={() => setHoveredCard('mykad')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-10 rounded-3xl transition-all duration-300 flex flex-col"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(30px)',
              border: hoveredCard === 'mykad' 
                ? '2px solid rgba(255, 255, 255, 0.6)' 
                : '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: hoveredCard === 'mykad'
                ? '0 20px 60px rgba(255, 255, 255, 0.2), 0 0 80px rgba(100, 200, 255, 0.3)'
                : '0 10px 40px rgba(0, 0, 0, 0.2)',
              transform: hoveredCard === 'mykad' ? 'scale(1.02)' : 'scale(1)',
              minHeight: '500px'
            }}
          >
            {/* Icon Container with 3D MyKad */}
            <div className="mb-8 flex-shrink-0">
              <div 
                className="w-40 h-40 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 relative"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* 3D Terminal with Card Reader */}
                <div className="relative">
                  {/* Card shadow */}
                  <div 
                    className="absolute top-2 left-2 w-24 h-16 rounded-lg"
                    style={{ background: 'rgba(0, 0, 0, 0.2)' }}
                  />
                  {/* Main card */}
                  <div 
                    className="relative w-24 h-16 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <CreditCard className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  {/* Card reader base */}
                  <div 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-3 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #475569 0%, #64748b 100%)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 
              className="mb-4 text-center text-4xl"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#ffffff',
                fontWeight: 700
              }}
            >
              Tap MyKad
            </h2>

            {/* Description */}
            <p 
              className="text-center mb-8 leading-relaxed text-lg flex-grow"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#ffffff'
              }}
            >
              Place your MyKad on the card reader for quick and secure verification
            </p>

            {/* Action Button */}
            <button
              onClick={onSelectMyKad}
              className="w-full py-4 px-6 rounded-xl transition-all duration-300 flex-shrink-0"
              style={{
                background: '#ffffff',
                color: '#1e3a8a',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '18px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 28px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
              }}
            >
              Use Kiosk Reader
            </button>

            {/* Hover glow effect */}
            {hoveredCard === 'mykad' && (
              <div 
                className="absolute -inset-1 rounded-3xl -z-10 blur-2xl"
                style={{ background: 'rgba(100, 200, 255, 0.4)' }}
              />
            )}
          </div>

          {/* Card B - Scan QR Code */}
          <div
            onMouseEnter={() => setHoveredCard('qr')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-10 rounded-3xl transition-all duration-300 flex flex-col"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(50px)',
              border: hoveredCard === 'qr' 
                ? '1px solid rgba(255, 255, 255, 0.4)' 
                : '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: hoveredCard === 'qr'
                ? '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 80px rgba(34, 211, 238, 0.4)'
                : '0 20px 40px rgba(0, 0, 0, 0.6)',
              transform: hoveredCard === 'qr' ? 'scale(1.02)' : 'scale(1)',
              minHeight: '500px'
            }}
          >
            {/* Icon Container with QR Code */}
            <div className="mb-8 flex-shrink-0">
              <div 
                className="w-40 h-40 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* QR Code with scanning frame */}
                <div className="relative w-24 h-24">
                  {/* QR Code white background */}
                  <div 
                    className="absolute inset-0 rounded-lg p-3"
                    style={{
                      background: '#fff',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div className="grid grid-cols-5 gap-1 h-full">
                      {[...Array(25)].map((_, i) => (
                        <div
                          key={i}
                          className="rounded-sm"
                          style={{
                            background: [0, 1, 3, 4, 5, 9, 15, 19, 20, 21, 23, 24].includes(i)
                              ? '#1e40af'
                              : 'transparent'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Scan corners - tracking dots style */}
                  <div 
                    className="absolute -top-2 -left-2 w-6 h-6 rounded-tl-lg"
                    style={{ 
                      borderLeft: '4px solid #06b6d4',
                      borderTop: '4px solid #06b6d4'
                    }}
                  />
                  <div 
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-tr-lg"
                    style={{ 
                      borderRight: '4px solid #06b6d4',
                      borderTop: '4px solid #06b6d4'
                    }}
                  />
                  <div 
                    className="absolute -bottom-2 -left-2 w-6 h-6 rounded-bl-lg"
                    style={{ 
                      borderLeft: '4px solid #06b6d4',
                      borderBottom: '4px solid #06b6d4'
                    }}
                  />
                  <div 
                    className="absolute -bottom-2 -right-2 w-6 h-6 rounded-br-lg"
                    style={{ 
                      borderRight: '4px solid #06b6d4',
                      borderBottom: '4px solid #06b6d4'
                    }}
                  />
                  {/* Tracking dots */}
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full animate-pulse"
                    style={{ background: '#06b6d4' }}
                  />
                  <div 
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full animate-pulse"
                    style={{ background: '#06b6d4', animationDelay: '0.3s' }}
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 
              className="mb-4 text-center text-4xl"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#ffffff',
                fontWeight: 700
              }}
            >
              Scan QR Code
            </h2>

            {/* Description */}
            <p 
              className="text-center mb-8 leading-relaxed text-lg flex-grow"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#ffffff'
              }}
            >
              Use your smartphone to scan the QR code and authenticate instantly
            </p>

            {/* Action Button */}
            <button
              onClick={onSelectQR}
              className="w-full py-4 px-6 rounded-xl transition-all duration-300 flex-shrink-0"
              style={{
                background: '#ffffff',
                color: '#1e3a8a',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '18px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 28px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
              }}
            >
              Use MyDigital ID App
            </button>

            {/* Hover glow effect */}
            {hoveredCard === 'qr' && (
              <div 
                className="absolute -inset-1 rounded-3xl -z-10 blur-2xl"
                style={{ background: 'rgba(100, 200, 255, 0.4)' }}
              />
            )}
          </div>
        </div>

        {/* Security Badge */}
        <div 
          className="flex items-center justify-center gap-3 py-5 px-8 rounded-xl mx-auto max-w-md mb-6"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
          }}
        >
          <Lock className="w-6 h-6 text-green-400" />
          <div 
            className="flex items-center gap-2"
            style={{ color: '#ffffff', fontFamily: "'Inter', sans-serif", fontSize: '16px' }}
          >
            <span>Secured by</span>
            <span className="font-semibold">MyDigital ID</span>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Footer Note */}
        <p 
          className="text-center mt-4"
          style={{ 
            color: '#ffffff',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            opacity: 0.9
          }}
        >
          Your data is encrypted and protected under the Malaysian Personal Data Protection Act
        </p>
      </div>
    </main>
  );
}