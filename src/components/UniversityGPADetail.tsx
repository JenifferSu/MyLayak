import { ArrowLeft, Shield, CheckCircle, XCircle, Download, AlertTriangle } from 'lucide-react';

interface UniversityGPADetailProps {
  onBack: () => void;
}

export function UniversityGPADetail({ onBack }: UniversityGPADetailProps) {
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
          <div className="rounded-3xl border border-amber-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/20">
                <Shield className="h-7 w-7 text-amber-400" />
              </div>
              <div>
                <h1 className="text-white">
                  Student Group Personal Accident
                </h1>
                <p className="text-amber-400">Group PA Insurance</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-green-400/30 bg-green-400/10 p-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-green-400">Active (Semester Coverage)</p>
                <p className="text-sm text-white/60">Policy is linked to your active semester registration</p>
              </div>
            </div>
          </div>

          {/* Critical Distinction */}
          <div className="rounded-3xl border border-amber-400/30 bg-amber-400/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
              <h2 className="text-white text-[20px]">Critical Distinction (Read Carefully)</h2>
            </div>
            
            <div className="space-y-4">
              {/* COVERS */}
              <div className="rounded-2xl border border-green-400/30 bg-white/10 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <h3 className="text-green-400 text-[18px]">COVERS: Accidents & Injuries</h3>
                </div>
                <div className="mb-4 space-y-2 text-white/80">
                  <p className="text-sm">Examples:</p>
                  <ul className="space-y-1 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                      <span>Slipping in the lecture hall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                      <span>Sports injuries on campus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                      <span>Motorbike accidents traveling to class</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-sm text-white/80">
                    <span className="text-green-400">Benefit:</span> Reimbursement of medical bills (Pay first, Claim later)
                  </p>
                </div>
              </div>

              {/* DOES NOT COVER */}
              <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <h3 className="text-red-400 text-[18px]">DOES NOT COVER: Illness & Sickness</h3>
                </div>
                <div className="mb-4 space-y-2 text-white/80">
                  <p className="text-sm">Examples:</p>
                  <ul className="space-y-1 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                      <span>Viral fever</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                      <span>Food poisoning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                      <span>Appendicitis</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-sm text-white/80">
                    <span className="text-red-400">Reality:</span> If you get sick, you cannot use this card. You must go to a Government Hospital (Tier 1) or use your own private insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Claim Process */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-white text-[20px]">Claim Process</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                  1
                </div>
                <div>
                  <h3 className="mb-1 text-white text-[18px]">Pay the medical bill yourself</h3>
                  <p className="text-sm text-white/60">Keep all original receipts and medical reports</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                  2
                </div>
                <div>
                  <h3 className="mb-1 text-white text-[18px]">Submit documentation</h3>
                  <p className="text-sm text-white/60">Bring original receipt + Incident Report to Student Services</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                  3
                </div>
                <div>
                  <h3 className="mb-1 text-white text-[18px]">Wait for reimbursement</h3>
                  <p className="text-sm text-white/60">Processing time: 14-30 working days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <button className="w-full rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-[18px]">
              <div className="flex items-center justify-center gap-2">
                <Download className="h-5 w-5" />
                <span>Download Claim Form</span>
              </div>
            </button>
            <p className="mt-3 text-center text-sm text-white/50">
              PDF form for insurance reimbursement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}