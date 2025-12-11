import { Lock, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="w-full"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(15px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.9)',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left Side - Coat of Arms */}
          <div className="flex items-center gap-4">
            {/* Malaysian Government Coat of Arms (Jata Negara) - Simplified representation */}
            <div className="w-16 h-16 flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield outline */}
                <path 
                  d="M32 8 L48 12 L48 28 C48 38 42 46 32 54 C22 46 16 38 16 28 L16 12 L32 8 Z" 
                  fill="rgba(245, 158, 11, 0.15)"
                  stroke="#F59E0B" 
                  strokeWidth="2"
                />
                {/* Inner shield detail */}
                <path 
                  d="M32 14 L42 17 L42 28 C42 35 38 41 32 47 C26 41 22 35 22 28 L22 17 L32 14 Z" 
                  fill="rgba(30, 58, 138, 0.1)"
                  stroke="#1e3a8a" 
                  strokeWidth="1.5"
                />
                {/* Star symbol */}
                <path 
                  d="M32 24 L33 27 L36 27 L34 29 L35 32 L32 30 L29 32 L30 29 L28 27 L31 27 Z"
                  fill="#F59E0B"
                />
                {/* Crescent */}
                <circle cx="32" cy="36" r="4" stroke="#1e3a8a" strokeWidth="1.5" fill="none" />
                <circle cx="33.5" cy="36" r="3" fill="rgba(30, 58, 138, 0.2)" />
              </svg>
            </div>
            <div 
              className="text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div 
                className="font-semibold"
                style={{ color: '#1e3a8a' }}
              >
                Kerajaan Malaysia
              </div>
              <div style={{ color: '#64748b' }}>
                Government of Malaysia
              </div>
            </div>
          </div>

          {/* Center - Copyright */}
          <div 
            className="text-center text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <p style={{ color: '#1e3a8a' }}>
              &copy; 2025 MyLayak. Official Government Service.
            </p>
            <p className="text-xs mt-1" style={{ color: '#64748b' }}>
              Secure · Trusted · Efficient
            </p>
          </div>

          {/* Right Side - Powered By Badge */}
          <div 
            className="flex items-center gap-3 px-6 py-3 rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(30, 58, 138, 0.15)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Shield className="w-5 h-5 text-green-600" />
            <div 
              className="text-right"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="text-xs" style={{ color: '#64748b' }}>
                Powered by
              </div>
              <div className="font-semibold flex items-center gap-2" style={{ color: '#1e3a8a' }}>
                MyDigital ID
                <Lock className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}