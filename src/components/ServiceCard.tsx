import { LucideIcon, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  verified: boolean;
  onClick?: () => void;
}

export function ServiceCard({ icon: Icon, title, description, verified, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className="relative p-6 rounded-2xl border border-white/20 text-left transition-all duration-300 hover:scale-105 group"
      style={{
        background: isHovered 
          ? 'rgba(255, 255, 255, 0.15)' 
          : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        boxShadow: isHovered
          ? '0 12px 40px 0 rgba(0, 0, 0, 0.2)'
          : '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Verified Badge */}
      {verified && (
        <div 
          className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full text-xs"
          style={{
            background: '#F59E0B',
            color: '#000'
          }}
        >
          <CheckCircle className="w-3 h-3" />
          <span className="font-semibold">Verified</span>
        </div>
      )}

      {/* Icon Container */}
      <div 
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
        style={{
          background: isHovered 
            ? 'rgba(245, 158, 11, 0.2)' 
            : 'rgba(255, 255, 255, 0.1)',
          border: isHovered ? '2px solid #F59E0B' : '2px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Icon 
          className="w-8 h-8 transition-colors duration-300" 
          style={{ 
            color: isHovered ? '#F59E0B' : 'white',
            strokeWidth: 2
          }} 
        />
      </div>

      {/* Content */}
      <h3 className="text-white mb-2">
        {title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>

      {/* Hover Arrow Indicator */}
      <div 
        className="mt-4 text-amber-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
      >
        Start Service
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          className="transition-transform group-hover:translate-x-1"
        >
          <path 
            d="M6 3 L11 8 L6 13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}