import { Header } from './Header';
import { Clock, FileText, Calendar, Building2, Shield, Lock, ArrowLeft, Search, CheckCircle } from 'lucide-react';

interface ApplicationDetailsProps {
  referenceId: string;
  onBack: () => void;
  onCheckAnother: () => void;
}

export function ApplicationDetails({ referenceId, onBack, onCheckAnother }: ApplicationDetailsProps) {
  // Mock application data based on reference ID
  const applicationData = {
    serviceName: 'Bantuan Tunai Rahmah (BTR)',
    category: 'B40 Household',
    status: 'Under Review',
    submittedDate: 'November 28, 2025',
    credentialsUsed: [
      { name: 'Student Status', verified: true },
      { name: 'B40 Household Eligibility', verified: true },
      { name: 'Regional Eligibility (Sarawak)', verified: true }
    ],
    issuedBy: 'Ministry of Finance Malaysia (MOF)',
    administeredBy: 'LHDN',
    timestamp: 'November 28, 2025 at 2:45 PM'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-4xl">
          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
            {/* Header with Status */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-2xl mb-6">
                <Clock className="w-10 h-10 text-amber-400" />
              </div>
              <h1 className="text-white mb-2">Application Found</h1>
              <p className="text-white/70 text-lg">
                Reference ID: <span className="text-[#F59E0B]">{referenceId}</span>
              </p>
            </div>

            {/* Application Summary Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-amber-400" />
                <h2 className="text-white">Application Summary</h2>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/50 text-sm mb-1">Service Name</p>
                    <p className="text-white">{applicationData.serviceName}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Category</p>
                    <p className="text-white">{applicationData.category}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Application Status</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-300 text-sm">{applicationData.status}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Submitted / Verified Date</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-400" />
                      <p className="text-white">{applicationData.submittedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Used Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-amber-400" />
                <h2 className="text-white">Credentials Used for Verification</h2>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-3">
                {applicationData.credentialsUsed.map((credential, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <span className="text-white">{credential.name}</span>
                    {credential.verified && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full border border-green-500/30">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-300 text-sm">Verified</span>
                      </div>
                    )}
                  </div>
                ))}
                <p className="text-white/40 text-xs mt-4 text-center">
                  Displayed as verified credentials, not editable
                </p>
              </div>
            </div>

            {/* Reference Information Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-amber-400" />
                <h2 className="text-white">Reference Information</h2>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                <div>
                  <p className="text-white/50 text-sm mb-1">Reference ID</p>
                  <p className="text-white font-mono">{referenceId}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Issued By</p>
                  <p className="text-white">{applicationData.issuedBy}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Administered By</p>
                  <p className="text-white">{applicationData.administeredBy}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Submission Timestamp</p>
                  <p className="text-white">{applicationData.timestamp}</p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <Shield className="w-4 h-4 text-white/50" />
                    <span className="text-white/50 text-sm">Official</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <Lock className="w-4 h-4 text-white/50" />
                    <span className="text-white/50 text-sm">Non-transferable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={onBack}
                className="flex-1 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Return to My Eligibility Wallet
              </button>
              <button
                onClick={onCheckAnother}
                className="flex-1 px-8 py-4 bg-[#F59E0B] hover:bg-[#e5a800] text-[#1e3a8a] rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Check Another Reference ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}