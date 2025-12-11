import { LogOut, User } from 'lucide-react';

interface HeaderProps {
  userName?: string;
  onLogout?: () => void;
}

export function Header({ userName, onLogout }: HeaderProps) {
  return (
    <header 
      className="w-full"
      style={{
        height: '80px',
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(50px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="h-full px-12 flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 8 L12 32 L28 32 M20 24 L32 12 L38 18" 
                stroke="#ffffff" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M20 24 L32 12 L38 18" 
                stroke="#F59E0B" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                opacity="0.8"
              />
            </svg>
          </div>
          
          {/* Brand Name */}
          <h1 
            style={{ 
              color: '#ffffff', 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 700,
              fontSize: '24px',
              letterSpacing: '-0.02em'
            }}
          >
            MyLayak
          </h1>
        </div>

        {/* Right Side - User Info & Logout */}
        {userName && (
          <div className="flex items-center gap-4">
            {/* User Name */}
            <span 
              style={{ 
                color: '#ffffff', 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '16px'
              }}
            >
              {userName} bin Abu
            </span>

            {/* Logout Button - Icon Only */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)'
                }}
                aria-label="Logout"
              >
                <LogOut className="w-5 h-5" style={{ color: '#EF4444' }} />
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}