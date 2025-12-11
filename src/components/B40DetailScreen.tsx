import { ArrowLeft, Home, CheckCircle, DollarSign, Users, Zap, Building2, Shield, Calendar, BadgeCheck } from 'lucide-react';
import { Button } from './ui/button';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface B40DetailScreenProps {
  onBack: () => void;
}

export function B40DetailScreen({ onBack }: B40DetailScreenProps) {
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
      <div className="relative z-10 flex min-h-screen items-start justify-center p-8 pt-12">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-['Arial:Regular',sans-serif] text-[14px]">Back to Eligibility Wallet</span>
          </button>
          
          <h1 className="mb-8 font-['Arial:Black',sans-serif] text-[32px] leading-[40px] text-white">
            Household Profile
          </h1>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Top Section with Icon and Title */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
              <Home className="h-8 w-8 text-amber-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-white text-[24px] font-bold">B40 Household Eligibility</h2>
              <div className="mt-3 text-sm text-white/60">
                <span className="block text-[15px]">Issued By:</span>
                <span className="block mt-1 text-[16px]">Department of Statistics Malaysia (DOSM) · LHDN · MyDigital ID</span>
              </div>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-400/20 px-6 py-2.5 border border-green-400/30">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-400">Verified B40 Household</span>
          </div>

          {/* Household Eligibility Details Section */}
          <div className="mb-8">
            <h3 className="mb-6 text-white text-[18px]">Household Eligibility Details</h3>
            
            <div className="space-y-4">
              {/* Income Classification */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1">Income Classification</p>
                <p className="text-white text-[17px]">B40 – Bottom 40% Household Income Group</p>
              </div>

              {/* Household Status */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1">Household Status</p>
                <p className="text-white text-[17px]">Government-verified low-income household</p>
              </div>

              {/* Verification Method */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-2">Verification Method</p>
                <ul className="space-y-1.5 text-white">
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-0.5">•</span>
                    <span className="text-[17px]">Cross-verified with LHDN income records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-0.5">•</span>
                    <span className="text-[17px]">National household registry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-0.5">•</span>
                    <span className="text-[17px]">Authenticated via MyDigital ID</span>
                  </li>
                </ul>
              </div>

              {/* Credential Type */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1">Credential Type</p>
                <p className="text-white text-[17px]">Soulbound Eligibility Token (Non-transferable)</p>
              </div>

              {/* Verified Date */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1">Verified Date</p>
                <p className="text-white text-[17px]">18 July 2025</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/20" />

          {/* Subsidies & Services Section */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <h3 className="text-white text-[20px] font-bold">Subsidies & Services</h3>
            </div>
            <p className="text-sm text-white/60 mb-6 text-[15px]">(Verified & Successfully Applied)</p>
            
            <div className="space-y-6">
              {/* Bantuan Tunai Rahmah (BTR) */}
              <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/20">
                    <DollarSign className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1 text-[20px] font-normal font-bold">Bantuan Tunai Rahmah (BTR)</h4>
                    <div className="inline-flex items-center gap-1.5 text-sm">
                      <span className="text-white/80">Status:</span>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-[15px]">Successfully Applied</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 mb-5 text-sm text-[16px]">
                  Federal cash assistance for eligible B40 households.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-4 w-4 text-white/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 text-[14px]">Applied Date</p>
                      <p className="text-sm text-white text-[16px]">10 March 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building2 className="h-4 w-4 text-white/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 text-[14px]">Issued By</p>
                      <p className="text-sm text-white text-[16px]">Ministry of Finance Malaysia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="h-4 w-4 text-white/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 text-[14px]">Eligibility Verified Using</p>
                      <p className="text-sm text-white text-[16px]">B40 Household Eligibility (SET)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-4 w-4 text-white/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 text-[14px]">Disbursement Method</p>
                      <p className="text-sm text-white text-[16px]">Direct bank credit / MyKad-linked account</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Electricity Subsidy */}
              <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/20">
                    <Zap className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1 text-[20px] font-bold font-normal">Electricity Subsidy (Domestic Tariff Relief – TNB)</h4>
                    <div className="inline-flex items-center gap-1.5 text-sm">
                      <span className="text-white/80">Status:</span>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-[15px]">Active</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 mb-5 text-sm text-[16px]">
                  Subsidised electricity tariff for B40 households.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-4 w-4 text-white/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 text-[14px]">Activated On</p>
                      <p className="text-sm text-white text-[16px]">1 April 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building2 className="h-4 w-4 text-white/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 text-[14px]">Issued By</p>
                      <p className="text-sm text-white text-[16px]">Tenaga Nasional Berhad (TNB)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="h-4 w-4 text-white/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60 text-[14px]">Eligibility Verified Using</p>
                      <p className="text-sm text-white text-[16px]">B40 Household Eligibility (SET)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}