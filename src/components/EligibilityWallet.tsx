import svgPaths from "../imports/svg-a84b5tyf2v";

interface EligibilityWalletProps {
  onViewServices: () => void;
  onLogout: () => void;
  onCardClick: (cardId: string) => void;
  onCheckApplication: () => void;
}

function LogoutIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p2c1f680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M14 8H6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d={svgPaths.p12257fa0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function GraduationCapIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p36917500} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M36.6667 16.6667V26.6667" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p25a5c600} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p12bc9800} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p26e2d200} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function MapPinIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.pae32d00} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.pdd0b300} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_65_144)">
          <path d={svgPaths.p7de3b00} stroke="#05DF72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} stroke="#05DF72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_65_144">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LockIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p18f7f580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p4317f80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ShieldIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p39608d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ShieldIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p2d0e6200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ShieldIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p639ae80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export function EligibilityWallet({ onViewServices, onLogout, onCardClick, onCheckApplication }: EligibilityWalletProps) {
  return (
    <div className="h-[770px] w-[1069px] overflow-clip relative mx-auto">
      {/* Header */}
      <div className="absolute content-stretch flex h-[60px] items-center justify-between left-[48px] top-[48px] w-[973px]">
        <div className="h-[60px] relative shrink-0 w-[189.68px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-[189.68px]">
            <div className="h-[24px] relative shrink-0 w-full">
              <p className="absolute font-['Arial:Black',sans-serif] leading-[24px] left-0 not-italic text-[28px] text-nowrap text-white top-[-2px] whitespace-pre font-normal">My Eligibility Wallet</p>
            </div>
            <div className="h-[28px] relative shrink-0 w-full">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] whitespace-pre">Your verified credentials</p>
            </div>
          </div>
        </div>
        <button 
          onClick={onLogout}
          className="h-[40px] relative rounded-[8px] shrink-0 w-[105px] bg-clip-padding border-0 border-[transparent] border-solid hover:bg-white/5 transition-colors"
        >
          <div className="absolute left-[12px] size-[20px] top-[10px]">
            <LogoutIcon />
          </div>
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[64px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-[8px] translate-x-[-50%] whitespace-pre">Logout</p>
        </button>
      </div>

      {/* Cards Container */}
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[486px] items-start left-[48px] top-[140px] w-[973px]">
        {/* Student Status Card */}
        <button 
          onClick={() => onCardClick('student')}
          className="bg-[rgba(255,255,255,0.1)] h-[146px] relative rounded-[24px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.15)] transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
          <div className="absolute content-stretch flex gap-[24px] h-[80px] items-center left-[33px] top-[33px] w-[907px]">
            <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[80px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[80px]">
                <GraduationCapIcon />
              </div>
            </div>
            <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-full">
                <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full">
                  <p className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic text-[22px] text-nowrap text-white whitespace-pre">Student Status</p>
                  <div className="bg-[rgba(5,223,114,0.2)] h-[28px] relative rounded-[1.67772e+07px] shrink-0 w-[90.727px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[28px] items-center px-[12px] py-0 relative w-[90.727px]">
                      <CheckCircleIcon />
                      <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[23.5px] not-italic text-[#05df72] text-[14px] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">Currently enrolled student</p>
              </div>
            </div>
            <div className="h-[80px] relative shrink-0 w-[153.438px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[153.438px]">
                <div className="bg-[rgba(255,255,255,0.05)] h-[36px] relative rounded-[10px] shrink-0 w-[153.438px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-0 relative w-[153.438px]">
                    <LockIcon />
                    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[53.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Non-transferable</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[153.438px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-0 py-0 relative w-[153.438px]">
                    <ShieldIcon1 />
                    <div className="h-[20px] relative shrink-0 w-[43.086px]">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[22.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Official</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* B40 Household Card */}
        <button 
          onClick={() => onCardClick('b40')}
          className="bg-[rgba(255,255,255,0.1)] h-[146px] relative rounded-[24px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.15)] transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
          <div className="absolute content-stretch flex gap-[24px] h-[80px] items-center left-[33px] top-[33px] w-[907px]">
            <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[80px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[80px]">
                <HomeIcon />
              </div>
            </div>
            <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-full">
                <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full">
                  <p className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic text-[22px] text-nowrap text-white whitespace-pre">B40 Household Eligibility</p>
                  <div className="bg-[rgba(5,223,114,0.2)] h-[28px] relative rounded-[1.67772e+07px] shrink-0 w-[90.727px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[28px] items-center px-[12px] py-0 relative w-[90.727px]">
                      <CheckCircleIcon />
                      <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[23.5px] not-italic text-[#05df72] text-[14px] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">Qualified household income bracket</p>
              </div>
            </div>
            <div className="h-[80px] relative shrink-0 w-[153.438px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[153.438px]">
                <div className="bg-[rgba(255,255,255,0.05)] h-[36px] relative rounded-[10px] shrink-0 w-[153.438px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-0 relative w-[153.438px]">
                    <LockIcon />
                    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[53.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Non-transferable</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[153.438px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-0 py-0 relative w-[153.438px]">
                    <ShieldIcon2 />
                    <div className="h-[20px] relative shrink-0 w-[43.086px]">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[22.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Official</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Regional Eligibility Card */}
        <button 
          onClick={() => onCardClick('regional')}
          className="bg-[rgba(255,255,255,0.1)] h-[146px] relative rounded-[24px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.15)] transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
          <div className="absolute content-stretch flex gap-[24px] h-[80px] items-center left-[33px] top-[33px] w-[907px]">
            <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[80px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[80px]">
                <MapPinIcon />
              </div>
            </div>
            <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-full">
                <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full">
                  <p className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic text-[22px] text-nowrap text-white whitespace-pre">Regional Eligibility</p>
                  <div className="bg-[rgba(5,223,114,0.2)] h-[28px] relative rounded-[1.67772e+07px] shrink-0 w-[90.727px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[28px] items-center px-[12px] py-0 relative w-[90.727px]">
                      <CheckCircleIcon />
                      <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[23.5px] not-italic text-[#05df72] text-[14px] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">Location-based services</p>
              </div>
            </div>
            <div className="h-[80px] relative shrink-0 w-[153.438px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[153.438px]">
                <div className="bg-[rgba(255,255,255,0.05)] h-[36px] relative rounded-[10px] shrink-0 w-[153.438px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-0 relative w-[153.438px]">
                    <LockIcon />
                    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[53.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Non-transferable</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[153.438px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-0 py-0 relative w-[153.438px]">
                    <ShieldIcon3 />
                    <div className="h-[20px] relative shrink-0 w-[43.086px]">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[22.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Official</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="absolute left-[48px] top-[658px] w-[973px] flex gap-[24px] items-center justify-end">
        {/* Primary Button - View Available Services */}
        <button 
          onClick={onViewServices}
          className="bg-[#ffb900] content-stretch flex h-[64px] items-center justify-center px-[64px] py-[8px] rounded-[14px] hover:bg-[#e5a800] transition-colors"
        >
          <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#1c398e] text-[18px] text-center text-nowrap whitespace-pre">View Available Services</p>
        </button>

        {/* Secondary Button - Check Application */}
        <button 
          onClick={onCheckApplication}
          className="bg-[rgba(59,130,246,0.8)] content-stretch flex h-[64px] items-center justify-center px-[48px] py-[8px] rounded-[14px] hover:bg-[rgba(59,130,246,0.9)] transition-colors border border-[rgba(255,255,255,0.2)]"
        >
          <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-white text-[18px] text-center text-nowrap whitespace-pre">{`Check Application `}</p>
        </button>
      </div>
    </div>
  );
}