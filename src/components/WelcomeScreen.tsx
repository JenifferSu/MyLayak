import type { LoginMethod } from '../App';
import svgPaths from "../imports/svg-hwffk5c5hj";
import imgLogo from "figma:asset/b31e750f75fab698b65b97888c8e434c1c1b8a3c.png";

interface WelcomeScreenProps {
  onLoginStart: (method: LoginMethod) => void;
}

// QR Code Icon - Simplified and Bold
function QRIcon() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-[56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        {/* Top-left corner square */}
        <rect x="4" y="4" width="20" height="20" stroke="#FDB022" strokeWidth="6" fill="none" rx="2" />
        <rect x="10" y="10" width="8" height="8" fill="#FDB022" rx="1" />
        
        {/* Top-right corner square */}
        <rect x="32" y="4" width="20" height="20" stroke="#FDB022" strokeWidth="6" fill="none" rx="2" />
        <rect x="38" y="10" width="8" height="8" fill="#FDB022" rx="1" />
        
        {/* Bottom-left corner square */}
        <rect x="4" y="32" width="20" height="20" stroke="#FDB022" strokeWidth="6" fill="none" rx="2" />
        <rect x="10" y="38" width="8" height="8" fill="#FDB022" rx="1" />
        
        {/* Bottom-right simplified dots */}
        <rect x="34" y="34" width="7" height="7" fill="#FDB022" rx="1" />
        <rect x="45" y="34" width="7" height="7" fill="#FDB022" rx="1" />
        <rect x="34" y="45" width="7" height="7" fill="#FDB022" rx="1" />
        <rect x="45" y="45" width="7" height="7" fill="#FDB022" rx="1" />
      </svg>
    </div>
  );
}

// Card Icon (MyKad) - Simplified and Bold
function CardIcon() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-[56px] bg-[rgba(255,234,176,0)]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        {/* Card outline - bold and rounded */}
        <rect x="6" y="14" width="44" height="28" stroke="#FDB022" strokeWidth="6" fill="none" rx="4" strokeLinecap="round" strokeLinejoin="round" />
        {/* Chip representation */}
        <rect x="12" y="22" width="10" height="8" fill="#FDB022" rx="1.5" />
        {/* Card stripe */}
        <line x1="6" y1="26" x2="50" y2="26" stroke="#FDB022" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Lock Icon (Powered by) - Pixel Perfect
function LockIcon() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {/* Lock body */}
        <rect x="4" y="8" width="10" height="7" stroke="white" strokeWidth="1.5" fill="none" rx="1.5" strokeOpacity="0.65" />
        {/* Lock shackle */}
        <path d="M6 8V5.5C6 3.567 7.343 2 9 2C10.657 2 12 3.567 12 5.5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.65" />
        {/* Lock dot */}
        <circle cx="9" cy="11.5" r="1" fill="white" fillOpacity="0.65" />
      </svg>
    </div>
  );
}

export function WelcomeScreen({ onLoginStart }: WelcomeScreenProps) {
  return (
    <div className="relative size-full" data-name="WelcomeScreen">
      {/* Logo Container - Centered */}
      <div className="absolute h-[65px] left-1/2 top-[34px] translate-x-[-50%] w-[146px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="MyLayak Logo" className="absolute h-[225.3%] left-[-2.97%] max-w-none top-[-63.3%] w-full" src={imgLogo} />
        </div>
      </div>

      {/* Tagline - Centered */}
      <div className="absolute h-[28px] left-1/2 top-[107px] translate-x-[-50%]" data-name="Paragraph">
        <p className="font-['Arial:Bold',sans-serif] leading-[28px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">Stop applying. Start receiving</p>
      </div>

      {/* Main Card Container - Centered - Expanded Height */}
      <div className="absolute bg-[rgba(3,3,3,0.3)] border border-[rgba(255,255,255,0.2)] border-solid h-[510px] left-1/2 translate-x-[-50%] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[162px] w-[920px]" data-name="Container">
        
        {/* Welcome Heading - Centered */}
        <div className="absolute h-[40px] left-1/2 translate-x-[-50%] top-[56px]" data-name="Paragraph">
          <p className="font-['Arial:Black',sans-serif] leading-[40px] not-italic text-[42px] text-center text-nowrap text-white whitespace-pre text-[40px]">Welcome to MyLayak</p>
        </div>

        {/* Subtitle - Centered */}
        <div className="absolute h-[24px] left-1/2 translate-x-[-50%] top-[112px]" data-name="Paragraph">
          <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[19px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre text-[18px]">Access public services securely using your national ID</p>
        </div>

        {/* Buttons Container - Reduced Height */}
        <div className="absolute gap-[40px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[280px] left-[60px] top-[180px] w-[800px]" data-name="Container">
          
          {/* Insert MyKad Button */}
          <button
            onClick={() => onLoginStart('mykad')}
            className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] opacity-80 place-self-stretch relative rounded-[16px] shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:bg-[rgba(255,255,255,0.25)] cursor-pointer text-[16px] flex flex-col items-center justify-center"
            data-name="Button"
          >
            {/* Icon Circle - Centered in button */}
            <div className="bg-white rounded-full size-[90px] flex items-center justify-center shadow-lg mb-6" data-name="Container">
              <CardIcon />
            </div>

            {/* Text - Centered with adjusted spacing */}
            <div className="w-full px-4" data-name="Container">
              <p className="font-['Arial:Bold',sans-serif] leading-[28px] not-italic text-center text-white mb-3 whitespace-pre text-[28px]">Insert MyKad</p>
              <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[#baf5ff] text-[18px] text-center whitespace-pre">Insert MyKad into kiosk</p>
            </div>
          </button>

          {/* Scan QR Button */}
          <button
            onClick={() => onLoginStart('qr')}
            className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] opacity-80 place-self-stretch relative rounded-[16px] shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:bg-[rgba(255,255,255,0.25)] cursor-pointer text-[16px] flex flex-col items-center justify-center"
            data-name="Button"
          >
            {/* Icon Circle - Centered in button */}
            <div className="bg-white rounded-full size-[90px] flex items-center justify-center shadow-lg mb-6" data-name="Container">
              <QRIcon />
            </div>

            {/* Text - Centered with adjusted spacing */}
            <div className="w-full px-4" data-name="Container">
              <p className="font-['Arial:Bold',sans-serif] leading-[28px] not-italic text-center text-white mb-3 whitespace-pre text-[28px]">Scan MyDigital ID QR</p>
              <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[#baf5ff] text-[18px] text-center whitespace-pre">Open MyDigital ID app and scan</p>
            </div>
          </button>
        </div>
      </div>

      {/* Footer - Powered by MyDigital ID - Centered with better alignment */}
      <div className="absolute h-[20px] left-1/2 translate-x-[-50%] top-[710px] flex items-center justify-center gap-2" data-name="Container">
        <LockIcon />
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[14px] text-[rgba(255,255,255,0.65)] whitespace-pre">Powered by MyDigital ID</p>
      </div>
    </div>
  );
}