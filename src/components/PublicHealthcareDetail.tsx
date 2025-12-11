import { ArrowLeft, Hospital, Clock, MapPin, AlertCircle } from 'lucide-react';

interface PublicHealthcareDetailProps {
  onBack: () => void;
}

export function PublicHealthcareDetail({ onBack }: PublicHealthcareDetailProps) {
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
                  Subsidized Outpatient Care
                </h1>
                <p className="text-green-400">Warga Negara</p>
              </div>
            </div>
          </div>

          {/* Cost Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-4 text-white text-[20px]">Cost to You</h2>
            <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-6">
              <div className="mb-2 text-5xl text-green-400">RM 1.00</div>
              <p className="text-white/70">Total Bill (Flat Rate)</p>
              <div className="mt-4 space-y-2 border-t border-white/20 pt-4">
                <p className="text-sm text-white/80">Includes:</p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li className="flex items-center gap-2 text-[16px]">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Registration
                  </li>
                  <li className="flex items-center gap-2 text-[16px]">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Consultation
                  </li>
                  <li className="flex items-center gap-2 text-[16px]">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Medication
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">How It Works</h2>
            
            <div className="space-y-4">
              {/* Access */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-white text-[18px]">Access</h3>
                </div>
                <p className="text-white/70">
                  Walk-in to any Klinik Kesihatan (KK) nationwide. No appointment needed.
                </p>
              </div>

              {/* Waiting Time */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-white text-[18px]">Waiting Time</h3>
                </div>
                <p className="text-white/70">
                  Expect 60 - 120 minutes depending on crowd. Peak hours are typically 8am - 11am.
                </p>
              </div>

              {/* Referral Rule */}
              <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <AlertCircle className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-white text-[18px]">Referral Rule</h3>
                </div>
                <p className="text-white/90">
                  If you need to see a Specialist at a Major Hospital (e.g., HKL, Hospital Serdang), you <span className="font-semibold text-amber-400">must get a referral letter here first</span> to enjoy the subsidized specialist rate (RM 5.00 first visit).
                </p>
                <div className="mt-3 rounded-lg bg-white/5 p-3">
                  <p className="text-sm text-white/60">
                    Without referral: You will be charged private patient rates at government hospitals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <button className="w-full rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-[18px]">Locate Nearest Klinik Kesihatan</span>
              </div>
            </button>
            <p className="mt-3 text-center text-sm text-white/50">
              Opens integrated location finder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}