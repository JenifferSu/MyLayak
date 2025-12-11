import { useState } from 'react';
import { Header } from './Header';
import { Search, AlertCircle } from 'lucide-react';

interface CheckApplicationInputProps {
  onSubmit: (referenceId: string) => void;
  onBack: () => void;
}

export function CheckApplicationInput({ onSubmit, onBack }: CheckApplicationInputProps) {
  const [referenceId, setReferenceId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Validate reference ID format
    const cleanId = referenceId.trim().toUpperCase();
    
    if (!cleanId) {
      setError('Please enter a reference ID');
      return;
    }

    // Basic format validation (e.g., MYL-12345678)
    if (cleanId.length < 5) {
      setError('Invalid reference ID format');
      return;
    }

    setError('');
    onSubmit(cleanId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-2xl">
          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
            {/* Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-2xl mb-6">
                <Search className="w-10 h-10 text-blue-400" />
              </div>
              <h1 className="text-white mb-3">Check Application Status</h1>
              <p className="text-white/70 text-lg">
                Please enter your application reference ID to view its current status.
              </p>
            </div>

            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label htmlFor="referenceId" className="block text-white mb-3 text-lg">
                  Reference ID
                </label>
                <input
                  id="referenceId"
                  type="text"
                  value={referenceId}
                  onChange={(e) => {
                    setReferenceId(e.target.value);
                    setError('');
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g. MYL-08658603"
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  autoFocus
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}

              {/* Security Note */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-sm mb-1">Security Note</p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      Only applications linked to your verified identity will be displayed. 
                      This prevents unauthorized access to application data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={onBack}
                className="flex-1 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/20"
              >
                Back to Wallet
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-8 py-4 bg-[#F59E0B] hover:bg-[#e5a800] text-[#1e3a8a] rounded-xl transition-all shadow-lg"
              >
                Check Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}