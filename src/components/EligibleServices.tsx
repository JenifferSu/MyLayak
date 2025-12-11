import svgPaths from "../imports/svg-vaw36hpglf";
import type { Service } from '../App';

interface EligibleServicesProps {
  onServiceSelect: (service: Service) => void;
  onBack: () => void;
}

const services: Service[] = [
  {
    id: 'student-grant',
    title: 'Student Grant',
    icon: 'GraduationCap',
    description: 'Financial assistance for education expenses',
    eligibilityRequirements: ['Student Status', 'B40 Eligibility'],
    category: 'Education',
  },
  {
    id: 'transport-subsidy',
    title: 'Transport Subsidy',
    icon: 'Bus',
    description: 'Reduced fares for public transportation',
    eligibilityRequirements: ['Student Status', 'B40 Eligibility'],
    category: 'Transportation',
  },
  {
    id: 'healthcare-benefit',
    title: 'Healthcare Benefit',
    icon: 'Hospital',
    description: 'Access to subsidized medical services',
    eligibilityRequirements: ['B40 Eligibility', 'Regional Eligibility'],
    category: 'Healthcare',
  },
  {
    id: 'senior-care',
    title: 'Senior Care Program',
    icon: 'Heart',
    description: 'Comprehensive care services for elderly citizens',
    eligibilityRequirements: ['Senior Citizen Eligibility'],
    category: 'Social Services',
  },
  {
    id: 'digital-access',
    title: 'Digital Access Program',
    icon: 'Laptop',
    description: 'Free internet and device assistance',
    eligibilityRequirements: ['B40 Eligibility', 'Regional Eligibility'],
    category: 'Technology',
  },
  {
    id: 'food-assistance',
    title: 'Food Assistance',
    icon: 'Wheat',
    description: 'Monthly food support for eligible households',
    eligibilityRequirements: ['B40 Eligibility'],
    category: 'Social Services',
  },
];

// SVG Icon Components
function GraduationCapIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d={svgPaths.p355a240} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 13.3333V21.3333" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3858b240} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function BusIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d="M10.6667 8V16" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 8V16" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 16H28.8" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3d8c96c0} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p292c5c00} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 24H18.6667" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p11115780} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HospitalIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d={svgPaths.pacc5d80} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 9.33333V18.6667" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M11.3333 14H20.6667" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p375c4a00} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HeartIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d={svgPaths.p28895840} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function LaptopIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d="M4 25.3333H28" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 25.3333V6.66667C26.6667 5.95942 26.3857 5.28115 25.8856 4.78105C25.3855 4.28095 24.7072 4 24 4H8C7.29276 4 6.61448 4.28095 6.11438 4.78105C5.61429 5.28115 5.33334 5.95942 5.33334 6.66667V25.3333" stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p33a28372} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function WheatIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d={svgPaths.p2c917000} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3d09fdf0} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p9901970} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p229a8c00} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p11949d00} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2cd33600} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p34281100} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1188a00} stroke="#FFB900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ShieldIcon() {
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

function BackArrowIcon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p203476e0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

const iconComponents = {
  GraduationCap: GraduationCapIcon,
  Bus: BusIcon,
  Hospital: HospitalIcon,
  Heart: HeartIcon,
  Laptop: LaptopIcon,
  Wheat: WheatIcon,
};

export function EligibleServices({ onServiceSelect, onBack }: EligibleServicesProps) {
  return (
    <div className="h-[934px] w-[1069px] overflow-clip relative mx-auto">
      {/* Header Section */}
      <div className="absolute left-[48px] top-[48px] w-[973px]">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="h-[36px] relative rounded-[8px] w-[138.836px] hover:bg-white/5 transition-colors"
        >
          <BackArrowIcon />
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[38px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[8px] whitespace-pre">Back to Wallet</p>
        </button>

        {/* Title */}
        <div className="h-[24px] relative w-[973px] mt-[24px]">
          <p className="font-['Arial:Black',sans-serif] leading-[24px] not-italic text-[26px] text-nowrap text-white whitespace-pre">{`Services You're Eligible For`}</p>
        </div>

        {/* Subtitle */}
        <div className="h-[28px] relative w-[973px] mt-[8px]">
          <p className="font-['Arial:Regular',sans-serif] leading-[28px] not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre font-normal">All services have been pre-qualified based on your eligibility tokens</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="absolute left-[48px] top-[216px] w-[973px] grid grid-cols-3 gap-[24px]">
        {services.map((service) => {
          const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
          return (
            <button
              key={service.id}
              onClick={() => onServiceSelect(service)}
              className="bg-[rgba(255,255,255,0.1)] flex flex-col gap-[24px] h-[331px] items-start p-[33px] rounded-[24px] hover:bg-[rgba(255,255,255,0.15)] transition-all relative"
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
              
              {/* Icon Container */}
              <div className="h-[64px] w-full flex items-start">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-[16px] size-[64px] flex items-center justify-center">
                  <IconComponent />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full flex flex-col gap-[8px]">
                {/* Category Badge */}
                <div className="bg-[rgba(255,185,0,0.2)] h-[32px] rounded-[10px] px-[12px] flex items-center w-fit">
                  <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic text-[#ffb900] text-[13px] text-nowrap whitespace-pre">{service.category}</p>
                </div>

                {/* Title */}
                <h3 className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic text-[21px] text-white text-left">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-left">
                  {service.description}
                </p>
              </div>

              {/* Footer - Official Source Verified */}
              <div className="w-full border-t border-[rgba(255,255,255,0.1)] pt-[8px] flex items-center gap-[8px]">
                <ShieldIcon />
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre">Official source verified</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}