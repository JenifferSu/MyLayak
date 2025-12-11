import { ArrowLeft, CheckCircle, XCircle, AlertCircle, Hospital, Shield, Heart } from 'lucide-react';

interface HealthcareCoverageProps {
  onBack: () => void;
  onDetailClick: (detailType: 'public-healthcare' | 'university-gpa' | 'madani' | 'mysalam' | 'peka-b40') => void;
}

export function HealthcareCoverage({ onBack, onDetailClick }: HealthcareCoverageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </button>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Title Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h1 className="mb-4 text-white text-[28px] font-bold">
              Medical Access & Protection
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <span className="rounded-lg bg-green-400/20 px-3 py-1 text-sm text-green-400 text-[15px]">
                B40 Household
              </span>
              <span className="text-white/60">•</span>
              <span className="rounded-lg bg-blue-400/20 px-3 py-1 text-sm text-blue-400 text-[15px]">
                STR Recipient
              </span>
              <span className="text-white/60">•</span>
              <span className="rounded-lg bg-amber-400/20 px-3 py-1 text-sm text-amber-400 text-[15px]">
                Active Student
              </span>
            </div>
          </div>

          {/* Tier 1: Immediate Care (Skip the Queue) */}
          <div className="rounded-3xl border border-green-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/20">
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div>
                <h2 className="text-white text-[20px]">Tier 1: Immediate Care (Skip the Queue)</h2>
                <p className="text-sm text-green-400 text-[15px]">You no longer need to wait hours at Klinik Kesihatan</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Skim Perubatan Madani */}
              <button
                onClick={() => onDetailClick('madani')}
                className="group w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Hospital className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px]">Skim Perubatan Madani (Private GP)</h3>
                      <p className="text-sm text-white/60 text-[15px]">FREE treatment at Private Clinics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Active (RM 75.00 Credit)</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60 text-[15px]">
                    <span className="text-green-400">Scope:</span> Fever, Flu, Cough, Headache (Acute Outpatient)
                  </p>
                </div>
              </button>

              {/* Klinik Kesihatan */}
              <button
                onClick={() => onDetailClick('public-healthcare')}
                className="group w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Hospital className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px]">Klinik Kesihatan (Government)</h3>
                      <p className="text-sm text-white/60 text-[15px]">Specialist referrals or chronic issues</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Eligible</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-white/50">Cost</p>
                    <p className="text-white">RM 1.00 flat rate</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Tier 2: Financial Protection (Cash Payouts) */}
          <div className="rounded-3xl border border-amber-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/20">
                <div className="h-3 w-3 rounded-full bg-amber-400" />
              </div>
              <div>
                <h2 className="text-white text-[20px]">Tier 2: Financial Protection (Cash Payouts)</h2>
                <p className="text-sm text-amber-400 text-[15px]">Get paid cash if you fall sick or get injured</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* MySalam */}
              <button
                onClick={() => onDetailClick('mysalam')}
                className="group w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Heart className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px]">MySalam (National Takaful)</h3>
                      <p className="text-sm text-white/60">Hospital Income + Critical Illness Cash</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Active Policy</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-white/50">Hospital Income</p>
                    <p className="text-white">RM 50 / day</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Critical Illness</p>
                    <p className="text-white">RM 8,000</p>
                  </div>
                </div>
              </button>

              {/* University GPA */}
              <button
                onClick={() => onDetailClick('university-gpa')}
                className="group w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Shield className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px]">University Group Personal Accident (GPA)</h3>
                      <p className="text-sm text-white/60">Accidental Injury Reimbursement</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Active (Student ID)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-white/50">Coverage</p>
                    <p className="text-white">Sports / Traffic Accidents</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Tier 3: Ineligible / Locked */}
          <div className="rounded-3xl border border-red-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400/20">
                <div className="h-3 w-3 rounded-full bg-red-400" />
              </div>
              <div>
                <h2 className="text-white text-[20px]">Tier 3: Ineligible / Locked</h2>
                <p className="text-sm text-[rgb(255,128,132)] text-[15px]">Not Qualified</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* PeKa B40 Health Screening */}
              <button
                onClick={() => onDetailClick('peka-b40')}
                className="group w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-red-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Heart className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px]">PeKa B40 Health Screening</h3>
                      <p className="text-sm text-white/60">Preventive Health Checkup Package</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-red-400/20 px-3 py-1">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span className="text-xs text-[rgb(255,128,132)] text-[14px]">Age Restricted</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60">
                    <span className="text-[rgb(255,128,132)]">Reason:</span> Minimum age requirement is 40 years old
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}