import { ArrowLeft, MapPin, CheckCircle, Shield, Bus, Plane, GraduationCap, Laptop } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface RegionalDetailScreenProps {
  onBack: () => void;
}

export function RegionalDetailScreen({ onBack }: RegionalDetailScreenProps) {
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
          {/* Header with Back Button */}
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-['Arial:Regular',sans-serif] text-[14px]">Back to Eligibility Wallet</span>
          </button>
          
          <h1 className="mb-8 font-['Arial:Black',sans-serif] text-[32px] leading-[40px] text-white">
            Regional Profile
          </h1>

        {/* Main Content Container */}
        <div className="space-y-6">
          {/* Regional Profile Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            {/* Header Section */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-white text-[24px] font-normal font-bold">Sarawak Residency</h2>
                <p className="text-white/60 mt-1">Sarawak State Government</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-400/20 px-4 py-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-green-400">Verified Sarawak Resident</span>
              </div>
            </div>

            {/* Residency Details */}
            <div className="mb-6 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="mb-4 text-white text-[17px]">Residency Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60">Region</p>
                  <p className="text-white text-[17px]">Sarawak, Malaysia</p>
                </div>
                <div>
                  <p className="text-sm text-white/60">Residency Status</p>
                  <p className="text-white text-[17px]">Registered Sarawak Resident</p>
                </div>
              </div>
            </div>

            {/* Verified Via */}
            <div className="mb-6 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="mb-4 text-white">Verified Via</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <p className="text-white text-[17px]">National Registration Department (JPN)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <p className="text-white text-[17px]">SarawakPass / MyDigital ID</p>
                </div>
              </div>
            </div>

            {/* Credential Type */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="mb-2 text-white">Credential Type</h3>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-400" />
                <p className="text-white/80 text-[17px]">Non-transferable Regional Eligibility Token (SET)</p>
              </div>
            </div>
          </div>

          {/* Verified Sarawak Subsidies & Services */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-2 text-white text-[22px] font-bold">Verified Sarawak Subsidies & Services</h2>
            <p className="text-white/60 mb-6">(Based on your verified Sarawak eligibility)</p>

            <div className="space-y-4">
              {/* Yayasan Sarawak - Special Financial Assistance 2025 */}
              <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <GraduationCap className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1 text-[20px] font-bold font-normal">Yayasan Sarawak – Special Financial Assistance</h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">Status: Successfully Applied</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/80 mb-4">One-off financial assistance for Sarawak students pursuing higher education.</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white/60">Applied On</p>
                    <p className="text-white/90">05 October 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Issued By</p>
                    <p className="text-white/90">Yayasan Sarawak</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Eligibility Verified Using</p>
                    <ul className="list-disc list-inside text-white/90 space-y-1">
                      <li>Sarawak Regional Eligibility (SET)</li>
                      <li>Student Status (SET)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Verification Method</p>
                    <p className="text-white/90">Auto-verified via MyLayak (no document upload required)</p>
                  </div>
                </div>
              </div>

              {/* Yayasan Sarawak - Free Laptop Programme 2025 */}
              <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Laptop className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1 text-[20px]">Yayasan Sarawak – Free Laptop Programme</h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">Status: Successfully Applied</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/80 mb-4">Provision of laptop devices for eligible Sarawak students.</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white/60">Applied On</p>
                    <p className="text-white/90">28 March 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Issued By</p>
                    <p className="text-white/90">Yayasan Sarawak</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Eligibility Verified Using</p>
                    <ul className="list-disc list-inside text-white/90 space-y-1">
                      <li>Sarawak Regional Eligibility (SET)</li>
                      <li>Student Status (SET)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Notes</p>
                    <p className="text-white/90">Eligibility was pre-validated before application submission.</p>
                  </div>
                </div>
              </div>

              {/* Domestic Flight Subsidy (East Malaysia) */}
              <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Plane className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1 text-[20px]">Domestic Flight Subsidy (East Malaysia)</h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">Status: Eligible</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/80 mb-4">Subsidised domestic flights between:<br />Sarawak ↔ Peninsular Malaysia / Sabah</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white/60">Eligibility Verified On</p>
                    <p className="text-white/90">20 February 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Issued By</p>
                    <p className="text-white/90">Ministry of Transport / State-linked Agencies</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Usage Method</p>
                    <p className="text-white/90">Redeemable during ticket booking via participating airlines.</p>
                  </div>
                </div>
              </div>

              {/* Regional Transport Assistance (Sarawak) */}
              <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Bus className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1 text-[20px]">Regional Transport Assistance (Sarawak)</h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">Status: Active</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/80 mb-4">Discounted inter-district and public transport services within Sarawak.</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white/60">Activated On</p>
                    <p className="text-white/90">15 January 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Issued By</p>
                    <p className="text-white/90">Sarawak State Authorities</p>
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