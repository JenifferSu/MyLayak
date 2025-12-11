import { ArrowLeft, CheckCircle, Clock, Circle, Download, Shield } from 'lucide-react';

interface SocialServicesHistoryProps {
  onBack: () => void;
}

export function SocialServicesHistory({ onBack }: SocialServicesHistoryProps) {
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
          Social Services History
        </h1>

      {/* Application Card */}
      <div>
        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Service Name */}
          <div className="mb-6">
            <h2 className="font-['Arial:Bold',sans-serif] text-[24px] text-white">
              Bantuan Tunai Rahmah (BTR)
            </h2>
          </div>

          {/* Current Status */}
          <div className="mb-8 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                <Clock className="h-4 w-4 text-blue-900" />
              </div>
              <h3 className="font-['Arial:Bold',sans-serif] text-[18px] text-amber-400">
                Under Review
              </h3>
            </div>
            <p className="font-['Arial:Regular',sans-serif] text-[16px] text-white/80">
              Your application is currently being <span className="font-['Arial:Bold',sans-serif]">processed</span> by the agency.
            </p>
          </div>

          {/* Timeline Tracker */}
          <div className="mb-8">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[20px] text-white">
              Timeline Tracker
            </h3>
            
            <div className="space-y-6">
              {/* Submitted */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div className="h-12 w-0.5 bg-white/20" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[18px] text-white">
                    Submitted
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/60">
                    <span className="font-['Arial:Bold',sans-serif]">28 Nov 2025</span>, 2:45 PM
                  </p>
                </div>
              </div>

              {/* Agency Review */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                    <Clock className="h-5 w-5 text-blue-900" />
                  </div>
                  <div className="h-12 w-0.5 bg-white/20" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[18px] text-white">
                    Agency Review
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/60">
                    <span className="font-['Arial:Bold',sans-serif]">In Progress</span> (LHDN)
                  </p>
                </div>
              </div>

              {/* Approval */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <Circle className="h-5 w-5 text-white/40" />
                  </div>
                  <div className="h-12 w-0.5 bg-white/20" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[18px] text-white/60">
                    Approval
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/50">
                    Pending
                  </p>
                </div>
              </div>

              {/* Disbursement */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <Circle className="h-5 w-5 text-white/40" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[16px] text-white/60">
                    Disbursement
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/50">
                    Pending
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Data */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[18px] text-white">
              Verification Data (Auto-Submitted via SET)
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/80">
                  Student Status
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="font-['Arial:Regular',sans-serif] text-[15px] text-white">
                    Verified
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/80">
                  B40 Household
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="font-['Arial:Regular',sans-serif] text-[15px] text-white">
                    Verified
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/80">
                  Region
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="font-['Arial:Regular',sans-serif] text-[15px] text-white">
                    Sarawak Resident
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Application Details */}
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[18px] text-white">
              Application Details
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/60">
                  Reference ID
                </p>
                <p className="font-['Arial:Bold',sans-serif] text-[15px] text-white">
                  1234567
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/60">
                  Agency
                </p>
                <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white">
                  Ministry of Finance (MOF) / LHDN
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[15px] text-white/60">
                  Estimated Completion
                </p>
                <p className="font-['Arial:Bold',sans-serif] text-[15px] text-white">
                  5-7 Working Days
                </p>
              </div>
            </div>
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