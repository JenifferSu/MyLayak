import { ArrowLeft, CheckCircle, Clock, Download, Shield } from 'lucide-react';

interface EducationHistoryProps {
  onBack: () => void;
}

export function EducationHistory({ onBack }: EducationHistoryProps) {
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
          Education Assistance History
        </h1>

      {/* Application Card */}
      <div>
        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Service Name */}
          <div className="mb-6">
            <h2 className="font-['Arial:Bold',sans-serif] text-[24px] text-white">
              Bantuan Kewangan Pelajar (Student Grant)
            </h2>
          </div>

          {/* Current Status */}
          <div className="mb-8 rounded-2xl border border-green-400/30 bg-green-400/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
                <CheckCircle className="h-4 w-4 text-blue-900" />
              </div>
              <h3 className="font-['Arial:Bold',sans-serif] text-[18px] text-green-400">
                Approved (Disbursement Pending)
              </h3>
            </div>
            <p className="font-['Arial:Regular',sans-serif] text-[16px] text-white/80">
              Your application has been <span className="font-['Arial:Bold',sans-serif]">approved</span>. Payment is currently being <span className="font-['Arial:Bold',sans-serif]">processed</span>.
            </p>
          </div>

          {/* Timeline Tracker */}
          <div className="mb-8">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[18px] text-white">
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
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[16px] text-white">
                    Submitted
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                    <span className="font-['Arial:Bold',sans-serif]">10 Nov 2025</span>
                  </p>
                </div>
              </div>

              {/* Institute Verification */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div className="h-12 w-0.5 bg-white/20" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[16px] text-white">
                    Institute Verification
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                    <span className="font-['Arial:Bold',sans-serif]">Verified</span> (Asia Pacific University)
                  </p>
                </div>
              </div>

              {/* Approval */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div className="h-12 w-0.5 bg-white/20" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[16px] text-white">
                    Approval
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                    Approved on <span className="font-['Arial:Bold',sans-serif]">25 Nov 2025</span>
                  </p>
                </div>
              </div>

              {/* Disbursement */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                    <Clock className="h-5 w-5 text-blue-900" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="mb-1 font-['Arial:Bold',sans-serif] text-[16px] text-white">
                    Disbursement
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                    <span className="font-['Arial:Bold',sans-serif]">In Progress</span> (Processing)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[16px] text-white">
              Payment Details
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  Approved Amount
                </p>
                <p className="font-['Arial:Bold',sans-serif] text-[16px] text-white">
                  RM 300.00 (One-off)
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  Bank Name
                </p>
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white">
                  Maybank (**** 8829)
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/60">
                  Estimated Credit Date
                </p>
                <p className="font-['Arial:Bold',sans-serif] text-[14px] text-green-400">
                  Within 3 working days
                </p>
              </div>
            </div>
          </div>

          {/* Verification Data */}
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-['Arial:Bold',sans-serif] text-[16px] text-white">
              Verification Data
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/80">
                  Student Status
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="font-['Arial:Regular',sans-serif] text-[14px] text-white">
                    Active (Degree)
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white/80">
                  CGPA Check
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="font-['Arial:Regular',sans-serif] text-[14px] text-white">
                    {`> 3.0 Verified`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 transition-all hover:bg-white/15">
            <Download className="h-5 w-5 text-white" />
            <span className="font-['Arial:Bold',sans-serif] text-[16px] text-white">
              View Approval Letter
            </span>
          </button>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
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