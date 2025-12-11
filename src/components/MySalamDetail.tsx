import { ArrowLeft, Heart, XCircle, Database, DollarSign, Bed, AlertCircle, CheckCircle, QrCode, Upload } from 'lucide-react';

interface MySalamDetailProps {
  onBack: () => void;
}

export function MySalamDetail({ onBack }: MySalamDetailProps) {
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
                <Heart className="h-7 w-7 text-green-400" />
              </div>
              <div>
                <h1 className="text-white">
                  Skim Perlindungan Nasional MySalam
                </h1>
                <p className="text-green-400">National Protection Scheme</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-green-400/30 bg-green-400/10 p-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-green-400">Active (Auto-Enrolled)</p>
                <p className="text-sm text-white/60">You are covered as an STR Recipient aged 18+</p>
              </div>
            </div>
          </div>

          {/* Cash Benefits */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">Cash Benefits (Claims)</h2>
            
            <div className="space-y-4">
              {/* Hospital Allowance */}
              <div className="rounded-2xl border border-amber-400/30 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/20">
                    <Bed className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-white text-[18px]">Hospital Allowance</h3>
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-amber-400/20 px-4 py-2">
                    <p className="text-2xl text-amber-400">RM 50/day</p>
                  </div>
                  <p className="text-white/70">Up to 14 days per year</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="mb-2 text-sm text-white/80">
                    If you are admitted to a Government Hospital (e.g., for Dengue, Appendicitis), you get paid <span className="text-amber-400">RM 50 for every day</span> you stay.
                  </p>
                  <div className="mt-3 rounded-lg bg-green-400/10 p-3">
                    <p className="text-sm text-green-400">
                      <span className="font-semibold">Example:</span> 5 Days in Ward = RM 250 Cash in your pocket
                    </p>
                  </div>
                </div>
              </div>

              {/* Critical Illness */}
              <div className="rounded-2xl border border-red-400/30 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/20">
                    <DollarSign className="h-5 w-5 text-red-400" />
                  </div>
                  <h3 className="text-white text-[18px]">Critical Illness</h3>
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-red-400/20 px-4 py-2">
                    <p className="text-2xl text-red-400">RM 8,000</p>
                  </div>
                  <p className="text-white/70">One-off cash payout</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-white/80">
                    RM 8,000 cash if diagnosed with a major illness (Cancer, Heart Disease, Stroke, Kidney Failure, etc).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Claim */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">How to Claim</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/20">
                  <span className="text-amber-400">1</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Get Treatment</h3>
                  <p className="text-white/70">
                    Visit any Government Hospital for admission or diagnosis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/20">
                  <span className="text-amber-400">2</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Get Discharge Note</h3>
                  <p className="text-white/70">
                    Collect your <span className="text-green-400">&quot;Discharge Summary&quot;</span> or <span className="text-green-400">&quot;Medical Certificate&quot;</span> from the hospital
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-green-400/30 bg-green-400/10 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-400/20">
                  <span className="text-green-400">3</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Upload Documents</h3>
                  <p className="text-white/70">
                    Upload your discharge note to the <span className="text-green-400">MySalam Portal</span> or mobile app
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/20">
                  <span className="text-amber-400">4</span>
                </div>
                <div>
                  <h3 className="mb-2 text-white text-[18px]">Receive Payment</h3>
                  <p className="text-white/70">
                    Cash will be deposited to your registered bank account within 14 working days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Status */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">Coverage Status</h2>
            
            <div className="rounded-2xl border border-green-400/30 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-400/20">
                  <Database className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white text-[18px]">Status</h3>
                  <p className="text-sm text-green-400">Active in MySalam database</p>
                </div>
              </div>
              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">B40 Database</span>
                  <span className="text-green-400">Verified</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">STR Recipients List</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Age Requirement</span>
                  <span className="text-green-400">Met (18+)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kiosk Action */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <button
              className="w-full rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <QrCode className="h-5 w-5" />
                <span className="text-[18px]">Get Claim Guide</span>
              </div>
            </button>
            <p className="mt-3 text-center text-sm text-white/60">
              Get a detailed step-by-step claim submission guide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}