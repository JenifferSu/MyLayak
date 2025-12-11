import { ArrowLeft, Heart, XCircle, AlertCircle, Calendar, CheckCircle } from 'lucide-react';

interface PeKaB40DetailProps {
  onBack: () => void;
}

export function PeKaB40Detail({ onBack }: PeKaB40DetailProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Healthcare
          </button>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Title Card */}
          <div className="rounded-3xl border border-red-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-400/20">
                <Heart className="h-7 w-7 text-red-400" />
              </div>
              <div>
                <h1 className="text-white">
                  Skim Peduli Kesihatan (PeKa B40)
                </h1>
                <p className="text-red-400">Free Health Screening Package</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-400/10 p-4">
              <XCircle className="h-5 w-5 text-red-400" />
              <div>
                <p className="text-red-400">Not Eligible (Age Restriction)</p>
                <p className="text-sm text-white/60 text-[15px]">Even though you are B40, this program has a minimum age requirement</p>
              </div>
            </div>
          </div>

          {/* Program Benefits (What you're missing) */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">Program Benefits</h2>
            <p className="mb-4 text-sm text-white/60 text-[15px]">
              PeKa B40 provides comprehensive health screening to eligible B40 recipients:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
                <div>
                  <p className="text-white text-[18px]">Full Medical Checkup</p>
                  <p className="text-sm text-white/60 text-[15px]">Blood pressure, cholesterol, diabetes screening</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
                <div>
                  <p className="text-white text-[18px]">Cancer Screening</p>
                  <p className="text-sm text-white/60 text-[15px]">Breast, cervical, colorectal cancer tests</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
                <div>
                  <p className="text-white text-[18px]">Cardiovascular Assessment</p>
                  <p className="text-sm text-white/60 text-[15px]">Heart disease and stroke risk evaluation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
                <div>
                  <p className="text-white">100% Free of Charge</p>
                  <p className="text-sm text-white/60 text-[15px]">At participating private clinics nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why You Cannot Access This */}
          <div className="rounded-3xl border border-red-400/30 bg-red-400/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <h2 className="text-white text-[20px]">Why You Cannot Access This</h2>
            </div>
            <h3 className="mb-4 text-amber-400">Age Restriction</h3>
            <p className="mb-6 text-white/80">
              Even though you are a verified <span className="text-green-400">B40 Household Member</span>, PeKa B40 health screening is specifically designed for preventive care in middle-aged and elderly citizens.
            </p>

            <div className="space-y-4">
              {/* Your Status */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <h3 className="text-white text-[18px]">Your Status</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-green-400/20 px-4 py-2">
                      <p className="text-green-400">B40 Household</p>
                    </div>
                    <span className="text-white/60">•</span>
                    <p className="text-white/70">Verified STR Recipient</p>
                  </div>
                </div>
              </div>

              {/* Age Requirement */}
              <div className="rounded-2xl border border-red-400/30 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <h3 className="text-white text-[18px]">Age Requirement</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-400/20 px-4 py-2">
                    <p className="text-2xl text-red-400">40+ years old</p>
                  </div>
                  <p className="text-white/70">Minimum age to participate</p>
                </div>
                <div className="mt-4 rounded-lg bg-white/5 p-3">
                  <p className="text-sm text-white/60">
                    This screening package is focused on detecting age-related chronic diseases and cancers that typically affect people over 40.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Healthcare Options */}
          <div className="rounded-3xl border border-green-400/30 bg-green-400/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <h2 className="text-white text-[20px]">Your Alternative Healthcare Access</h2>
            </div>
            <p className="mb-4 text-white/80">
              As a B40 student, you already have excellent healthcare coverage:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                <div>
                  <p className="text-white text-[18px]">Skim Perubatan Madani</p>
                  <p className="text-sm text-white/60">RM 75 annual credit for free private GP visits</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                <div>
                  <p className="text-white text-[18px]">MySalam Protection</p>
                  <p className="text-sm text-white/60">RM 50/day hospital allowance + RM 8,000 critical illness cover</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                <div>
                  <p className="text-white text-[18px]">Klinik Kesihatan (Government)</p>
                  <p className="text-sm text-white/60">RM 1 flat rate for any health concern</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Eligibility */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-400" />
              <h2 className="text-white text-[20px]">Future Eligibility</h2>
            </div>
            <p className="text-white/80">
              If you remain in the <span className="text-green-400">B40 category</span> and reach <span className="text-amber-400">40 years of age</span>, you will automatically qualify for PeKa B40 health screening.
            </p>
            <div className="mt-4 rounded-lg bg-white/5 p-4">
              <p className="text-sm text-white/60">
                The system will check your eligibility annually based on your MyKad age and household income status.
              </p>
            </div>
          </div>

          {/* Action Disabled */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <button
              disabled
              className="w-full cursor-not-allowed rounded-2xl bg-white/10 px-8 py-4 text-white/40 opacity-50"
            >
              <div className="flex items-center justify-center gap-2">
                <XCircle className="h-5 w-5" />
                <span>Action Disabled</span>
              </div>
            </button>
            <p className="mt-3 text-center text-sm text-white/50">
              You do not meet the minimum age requirement (40 years old)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
