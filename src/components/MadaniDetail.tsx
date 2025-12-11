import { ArrowLeft, Hospital, XCircle, AlertCircle, TrendingUp, CheckCircle, MapPin, Smartphone } from 'lucide-react';

interface MadaniDetailProps {
  onBack: () => void;
}

export function MadaniDetail({ onBack }: MadaniDetailProps) {
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
          <div className="rounded-3xl border border-green-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-400/20">
                <Hospital className="h-7 w-7 text-green-400" />
              </div>
              <div>
                <h1 className="text-white">
                  Skim Perubatan Madani
                </h1>
                <p className="text-green-400">Private GP Access</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-green-400/30 bg-green-400/10 p-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-green-400">Eligible (Verified B40)</p>
                <p className="text-sm text-white/60">Linked to your STR (Sumbangan Tunai Rahmah) status</p>
              </div>
            </div>
          </div>

          {/* Your Quota Balance */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">Your Quota Balance</h2>
            
            <div className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-4xl text-amber-400">RM 75.00</p>
                  <p className="text-sm text-white/60">Annual quota for singles</p>
                </div>
                <div className="h-16 w-px bg-white/20" />
                <div className="flex-1">
                  <p className="mb-2 text-white/80">Resets: 1st January 2026</p>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-amber-400" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-400" />
                <h3 className="text-amber-400">Program Overview</h3>
              </div>
              <p className="text-white/80">
                This scheme allows you to visit <span className="text-green-400">private clinics for free</span>, reserved for <span className="text-green-400">STR Recipients (B40 Category)</span>.
              </p>
            </div>
          </div>

          {/* How to Use */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">How to Use (No Payment Needed)</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/20">
                  <span className="text-amber-400">1</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Find Clinic</h3>
                  <p className="text-white/70">
                    Look for the <span className="text-amber-400">&quot;Skim Perubatan Madani&quot;</span> sticker at private clinics (e.g., Poliklinik Murni, Klinik Mediviron)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/20">
                  <span className="text-amber-400">2</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Verify</h3>
                  <p className="text-white/70">
                    Show your <span className="text-green-400">MyKad</span> at the counter
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/20">
                  <span className="text-amber-400">3</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Treat</h3>
                  <p className="text-white/70">
                    Get consulted and take medicine for <span className="text-green-400">fever/flu/cough/headache</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-green-400/30 bg-green-400/10 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-400/20">
                  <span className="text-green-400">4</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Pay</h3>
                  <p className="text-2xl text-green-400">RM 0.00</p>
                  <p className="text-sm text-white/60">(Deducted from your RM 75 quota)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Scope */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">What's Covered</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                <div>
                  <p className="text-white text-[18px]">Acute Outpatient Care</p>
                  <p className="text-sm text-white/60">Fever, Flu, Cough, Sore Throat, Headache</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                <div>
                  <p className="text-white text-[18px]">Basic Medication</p>
                  <p className="text-sm text-white/60">Antibiotics, painkillers, cough syrup included</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-red-400/10 p-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                <div>
                  <p className="text-white text-[18px]">NOT Covered</p>
                  <p className="text-sm text-white/60">Chronic conditions, specialist referrals, dental, optical</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kiosk Action */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <button
              className="w-full rounded-2xl bg-gradient-to-r from-green-400 to-green-500 px-8 py-4 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <Smartphone className="h-5 w-5" />
                <span className="text-[18px]">Scan to Find Nearest Private Clinic</span>
              </div>
            </button>
            <p className="mt-3 text-center text-sm text-white/60">
              Opens mobile map with Madani-registered clinics nearby
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}