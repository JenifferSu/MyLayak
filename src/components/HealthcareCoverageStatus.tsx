import { ArrowLeft, CheckCircle, MapPin, Clock, Shield } from 'lucide-react';

interface HealthcareCoverageStatusProps {
  onBack: () => void;
}

export function HealthcareCoverageStatus({ onBack }: HealthcareCoverageStatusProps) {
  return (
    <div className="flex min-h-screen items-start justify-center p-8 pt-12">
      <div className="w-full max-w-4xl">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-['Arial:Regular',sans-serif] text-[14px]">Back to Status Dashboard</span>
        </button>
        
        <h1 className="mb-8 font-['Arial:Black',sans-serif] text-[32px] leading-[40px] text-white">
          Healthcare Coverage Status
        </h1>

      {/* Coverage Card */}
      <div>
        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Service Name */}
          <div className="mb-6">
            <h2 className="font-['Arial:Bold',sans-serif] text-[24px] text-white">
              Skim Perubatan Madani (Private GP)
            </h2>
          </div>

          {/* Current Status */}
          <div className="mb-8 rounded-2xl border border-green-400/30 bg-green-400/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
                <CheckCircle className="h-4 w-4 text-blue-900" />
              </div>
              <h3 className="font-['Arial:Bold',sans-serif] text-[18px] text-green-400">
                Active Coverage
              </h3>
            </div>
            <p className="font-['Arial:Regular',sans-serif] text-[16px] text-white/80">
              You are eligible for <span className="font-['Arial:Bold',sans-serif]">fully subsidized</span> treatment at registered private clinics.
            </p>
          </div>

          {/* Benefit Usage (Quota Tracker) */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[18px] text-white">
              Benefit Usage (Quota Tracker)
            </h3>
            
            <div className="space-y-4">
              {/* Total Annual Allocation */}
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  Total Annual Allocation
                </p>
                <p className="font-['Arial:Bold',sans-serif] text-[16px] text-white">
                  RM 75.00
                </p>
              </div>

              {/* Amount Used */}
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  Amount Used
                </p>
                <p className="font-['Arial:Regular',sans-serif] text-[16px] text-white/80">
                  RM 0.00
                </p>
              </div>

              {/* Current Balance */}
              <div className="rounded-xl border border-green-400/30 bg-green-400/10 p-4">
                <div className="flex justify-between">
                  <p className="font-['Arial:Bold',sans-serif] text-[14px] text-green-400">
                    Current Balance
                  </p>
                  <p className="font-['Arial:Bold',sans-serif] text-[20px] text-green-400">
                    RM 75.00
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500" 
                    style={{ width: '100%' }}
                  />
                </div>
                <p className="mt-1 text-right font-['Arial:Regular',sans-serif] text-[12px] text-white/60">
                  100% Available
                </p>
              </div>
            </div>
          </div>

          {/* Validity */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[16px] text-white">
              Validity
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-white/60" />
                <div className="flex-1">
                  <p className="font-['Arial:Regular',sans-serif] text-[12px] text-white/60">
                    Valid From
                  </p>
                  <p className="font-['Arial:Bold',sans-serif] text-[16px] text-white">
                    01 Jan 2025
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-white/60" />
                <div className="flex-1">
                  <p className="font-['Arial:Regular',sans-serif] text-[12px] text-white/60">
                    Valid Until
                  </p>
                  <p className="font-['Arial:Bold',sans-serif] text-[16px] text-white">
                    31 Dec 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Information */}
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[16px] text-white">
              Reference Information
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  Beneficiary Name
                </p>
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white">
                  [User Name]
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  IC Number
                </p>
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white">
                  020821-XX-XXXX
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  Issued By
                </p>
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white">
                  ProtectHealth / KKM
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 transition-all hover:bg-white/15">
              <Clock className="h-5 w-5 text-white" />
              <span className="font-['Arial:Bold',sans-serif] text-[16px] text-white">
                View Usage History
              </span>
            </button>
            
            <button className="flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400 px-6 py-4 transition-all hover:bg-amber-500">
              <MapPin className="h-5 w-5 text-blue-900" />
              <span className="font-['Arial:Bold',sans-serif] text-[16px] text-blue-900">
                Find Nearest Clinic
              </span>
            </button>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 border-t border-white/10 pt-4">
            <Shield className="h-4 w-4 text-white/50" />
            <span className="font-['Arial:Regular',sans-serif] text-[14px] text-white/50">
              Official source verified
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}