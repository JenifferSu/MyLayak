import { ArrowLeft, Banknote, X, ExternalLink, Shield, Database, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface STRDetailProps {
  onBack: () => void;
}

export function STRDetail({ onBack }: STRDetailProps) {
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
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-400/20 bg-red-900/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Program Header */}
          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-400/10">
              <Banknote className="h-10 w-10 text-red-400" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 text-white">Sumbangan Tunai Rahmah</h2>
              <p className="text-white/60">(Fasa 2 - Belia)</p>
            </div>
          </div>

          {/* Eligibility Status */}
          <div className="mb-8 rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <X className="h-6 w-6 text-red-400" />
              <h3 className="text-xl text-white">Eligibility Status</h3>
            </div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-400/20 px-4 py-2">
              <X className="h-5 w-5 text-red-400" />
              <span className="text-red-400">Not Eligible</span>
            </div>
            <p className="mt-3 text-white/80">Based on your household income profile.</p>
          </div>

          {/* Reason for Rejection */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl text-white">Reason for Rejection</h3>
            <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
              <div className="mb-4 flex items-start gap-3">
                <X className="mt-1 h-6 w-6 flex-shrink-0 text-red-400" />
                <div>
                  <p className="mb-2 text-lg text-white">Income Threshold Exceeded</p>
                  <p className="text-white/80">
                    Your linked household income profile exceeds the limit for the &quot;Single/Student&quot; category.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Details */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl text-white">Verification Details (Read-Only)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Database className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Data Source</p>
                  <p className="text-sm text-white/60">LHDN Main Database (Cukai) & PADU Hub</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Verified Household Income</p>
                  <p className="text-sm text-red-400">&gt; RM 5,000 (M40 Category)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Database className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Last Sync</p>
                  <p className="text-sm text-white/60">08 Dec 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <div className="mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-400" />
              <h3 className="text-white">Note</h3>
            </div>
            <p className="text-white/80">
              This status is managed centrally by LHDN. You do not need to update your income here. 
              If your family&apos;s income status changes, the LHDN database will automatically update 
              your eligibility in the next assessment cycle.
            </p>
          </div>

          {/* Action Button */}
          <Button className="h-16 w-full rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20">
            <ExternalLink className="mr-2 h-5 w-5" />
            View LHDN Profile (External)
          </Button>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-6">
            <Shield className="h-4 w-4 text-white/50" />
            <span className="text-sm text-white/50">Verified by LHDN & Ministry of Finance</span>
          </div>
        </div>
      </div>
    </div>
  );
}