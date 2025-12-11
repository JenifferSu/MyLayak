import { ArrowLeft, GraduationCap, TrendingUp, CheckCircle, Shield, Banknote } from 'lucide-react';
import { Button } from './ui/button';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface PTPTNDetailProps {
  onBack: () => void;
}

export function PTPTNDetail({ onBack }: PTPTNDetailProps) {
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
          <h1 className="text-white">Service Details</h1>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Program Header */}
          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10">
              <GraduationCap className="h-10 w-10 text-amber-400" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 text-white">PTPTN Loan Repayment Exemption</h2>
              <p className="text-white/60">(First Class Honours)</p>
            </div>
          </div>

          {/* Eligibility Status */}
          <div className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-amber-400" />
              <h3 className="text-xl text-white">Eligibility Status</h3>
            </div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-2">
              <TrendingUp className="h-5 w-5 text-amber-400" />
              <span className="text-amber-400">On Track (Conditional)</span>
            </div>
            <p className="mt-3 text-white/80">Your academic performance currently meets the requirements.</p>
          </div>

          {/* Incentive Details */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl text-white">Incentive Details</h3>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div>
                <p className="mb-2 text-sm text-white/60">Benefit</p>
                <p className="text-xl text-green-400">Convert Loan to Scholarship</p>
                <p className="text-white/60">(RM 0 Repayment)</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <Banknote className="h-5 w-5 text-amber-400" />
                  <p className="text-sm text-white/60">Current Loan Amount</p>
                </div>
                <p className="mt-2 text-2xl text-white">RM 24,000.00</p>
              </div>
            </div>
          </div>

          {/* Why You Qualify */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl text-white">Why You Qualify (Auto-Matched)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Loan Type</p>
                  <p className="text-sm text-white/60">Degree (Full Time)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Household Income</p>
                  <p className="text-sm text-white/60">B40/M40 Verified (Data from LHDN)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
                <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Current CGPA</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl text-amber-400">3.82</span>
                    <span className="text-white/60">/</span>
                    <span className="text-white/60">Target: &gt;3.75</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-green-400"
                      style={{ width: '95%' }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-green-400">You are above the minimum threshold!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <h3 className="mb-3 text-white">Important Note</h3>
            <p className="text-white/80">
              Continue maintaining your CGPA above 3.75 until graduation. The final exemption will be processed automatically after your degree is conferred and verified by MOHE.
            </p>
          </div>

          {/* Action Button */}
          <Button className="h-16 w-full rounded-xl bg-amber-400 text-xl text-blue-900 transition-all hover:bg-amber-500">
            View Academic Projection
          </Button>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-6">
            <Shield className="h-4 w-4 text-white/50" />
            <span className="text-sm text-white/50">Verified by PTPTN & MOHE</span>
          </div>
        </div>
      </div>
    </div>
  );
}