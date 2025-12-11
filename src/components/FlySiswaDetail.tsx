import { ArrowLeft, CheckCircle, Plane, MapPin, Calendar, Shield } from 'lucide-react';
import { Button } from './ui/button';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface FlySiswaDetailProps {
  onBack: () => void;
}

export function FlySiswaDetail({ onBack }: FlySiswaDetailProps) {
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
              <Plane className="h-10 w-10 text-amber-400" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 text-white">FlySiswa 2025</h2>
              <p className="text-white/60">(Subsidi Tiket Penerbangan IPT)</p>
            </div>
          </div>

          {/* Eligibility Status */}
          <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <h3 className="text-xl text-white">Eligibility Status</h3>
            </div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-400/20 px-4 py-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-green-400">Eligible</span>
            </div>
            <p className="mt-3 text-white/80">Pre-qualified based on JPN and University records.</p>
          </div>

          {/* Subsidy Details */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl text-white">Subsidy Details</h3>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div>
                <p className="mb-2 text-sm text-white/60">Value</p>
                <p className="text-2xl text-amber-400">RM 300.00</p>
                <p className="text-white/60">(Digital Voucher)</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="mb-2 text-sm text-white/60">Usage</p>
                <p className="text-white">
                  For flight tickets between Peninsular Malaysia ↔ Sabah/Sarawak/Labuan.
                </p>
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
                  <p className="mb-1 text-white">Citizenship</p>
                  <p className="text-sm text-white/60">Malaysian (Verified via MyIdentity)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Home Address</p>
                  <p className="text-sm text-white/60">Sabah (Verified via MyKad)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <div className="flex-1">
                  <p className="mb-1 text-white">Campus Location</p>
                  <p className="text-sm text-white/60">Kuala Lumpur (Verified via APU Database)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Duration */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl text-white">Application Duration</h3>
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-amber-400" />
                  <p className="text-sm text-white/60">Redemption Open</p>
                </div>
                <p className="text-white">02 May 2025</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-amber-400" />
                  <p className="text-sm text-white/60">Redemption Close</p>
                </div>
                <p className="text-white">31 Dec 2025</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button className="h-16 w-full rounded-xl bg-amber-400 text-xl text-blue-900 transition-all hover:bg-amber-500">
            Generate Voucher Code
          </Button>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-6">
            <Shield className="h-4 w-4 text-white/50" />
            <span className="text-sm text-white/50">Verified by Ministry of Transport (MOT)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
