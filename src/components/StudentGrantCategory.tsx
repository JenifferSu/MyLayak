import { ArrowLeft, CheckCircle, X, Plane, GraduationCap, Banknote, Award, Shield, Lock } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface StudentGrantCategoryProps {
  onBack: () => void;
  onServiceSelect: (serviceId: string) => void;
}

const availableServices = [
  {
    id: 'flysiswa',
    title: 'FlySiswa Domestic Flight Subsidy',
    status: 'Eligible',
    value: 'RM 300.00 Credit Shell',
    icon: Plane,
    actionText: 'Redeem Voucher',
  },
  {
    id: 'ptptn',
    title: 'PTPTN Loan Repayment Discount',
    status: 'Active Tracking',
    value: '100% Exemption (First Class Honours)',
    icon: GraduationCap,
    actionText: 'View CGPA Target',
  },
];

const ineligibleServices = [
  {
    id: 'jpa',
    title: 'JPA Dermasiswa (PIDN)',
    status: 'Conflict Found',
    reason: 'Active PTPTN Loan detected.',
    icon: Award,
  },
  {
    id: 'str',
    title: 'Sumbangan Tunai Rahmah (STR)',
    status: 'Not Eligible',
    reason: 'Household Income Threshold Exceeded (Auto-verified via LHDN).',
    icon: Banknote,
  },
];

export function StudentGrantCategory({ onBack, onServiceSelect }: StudentGrantCategoryProps) {
  return (
    <div className="min-h-screen w-screen overflow-hidden relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={backgroundImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-12">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all hover:bg-white/20"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white">Student Financial Assistance</h1>
            <p className="mt-1 text-white/60">
              Data Source: Auto-synced with MOHE & LHDN (Last updated: 08 Dec 2025)
            </p>
          </div>
        </div>

        {/* Available Services Section */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/20">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl text-white">Available Services (Pre-Qualified)</h2>
              <p className="text-white/60">You can apply or redeem these immediately.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {availableServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => onServiceSelect(service.id)}
                  className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/15"
                >
                  {/* Header */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <IconComponent className="h-8 w-8 text-amber-400" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-green-400/20 px-3 py-1">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-xs text-green-400">{service.status}</span>
                      </div>
                      <h3 className="mb-2 text-xl text-white">{service.title}</h3>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 text-sm text-white/60">
                      {service.id === 'flysiswa' ? 'Value' : 'Target'}
                    </p>
                    <p className="text-white">{service.value}</p>
                  </div>

                  {/* Action */}
                  <div className="h-12 w-full rounded-xl bg-amber-400 text-blue-900 transition-all hover:bg-amber-500 flex items-center justify-center">
                    {service.actionText}
                  </div>

                  {/* Security Badge */}
                  <div className="mt-4 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
                    <Shield className="h-4 w-4 text-white/50" />
                    <span className="text-sm text-white/50">Official source verified</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ineligible Services Section */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400/20">
              <X className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl text-white">Ineligible Services (Locked)</h2>
              <p className="text-white/60">You cannot apply for these. Click to see the database reason.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {ineligibleServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => onServiceSelect(service.id)}
                  className="group rounded-3xl border border-red-400/20 bg-red-900/10 p-8 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-red-400/40 hover:bg-red-900/20"
                >
                  {/* Header */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-red-400/10">
                      <IconComponent className="h-8 w-8 text-red-400" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-red-400/20 px-3 py-1">
                          <X className="h-4 w-4 text-red-400" />
                          <span className="text-xs text-red-400">{service.status}</span>
                        </div>
                        <Lock className="h-5 w-5 text-red-400/50" />
                      </div>
                      <h3 className="mb-2 text-xl text-white">{service.title}</h3>
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="mb-6 rounded-2xl border border-red-400/20 bg-red-400/5 p-4">
                    <p className="mb-1 text-sm text-white/60">Reason</p>
                    <p className="text-white/80">{service.reason}</p>
                  </div>

                  {/* View Details */}
                  <div className="flex items-center justify-center gap-2 text-white/50">
                    <span className="text-sm">Click to view detailed reason</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}