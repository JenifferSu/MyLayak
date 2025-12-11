import { ArrowLeft, ArrowRight, Bus } from 'lucide-react';

interface TransportationHistoryProps {
  onBack: () => void;
  onViewServices: () => void;
}

export function TransportationHistory({ onBack, onViewServices }: TransportationHistoryProps) {
  return (
    <div className="flex min-h-screen items-start justify-center p-8 pt-12">
      <div className="w-full max-w-4xl">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-['Arial:Regular',sans-serif] text-[14px]">Back to Eligibility Wallet</span>
        </button>
        
        <h1 className="mb-8 font-['Arial:Black',sans-serif] text-[32px] leading-[40px] text-white">
          Transportation History
        </h1>

        {/* Empty State */}
        <div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-12 shadow-xl backdrop-blur-xl text-center">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                <Bus className="h-12 w-12 text-white/50" strokeWidth={2} />
              </div>
            </div>

            {/* State */}
            <h2 className="mb-4 font-['Arial:Bold',sans-serif] text-[24px] leading-[32px] text-white">
              No Applications Found
            </h2>

            {/* Description */}
            <p className="mb-8 font-['Arial:Regular',sans-serif] text-[16px] leading-[24px] text-white/70">
              You have not applied for any transportation subsidies yet.
            </p>

            {/* Suggestion */}
            <div className="mb-8 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-6">
              <p className="mb-2 font-['Arial:Bold',sans-serif] text-[18px] text-blue-400">
                Good News!
              </p>
              <p className="font-['Arial:Regular',sans-serif] text-[14px] leading-[20px] text-white">
                You are <span className="font-['Arial:Bold',sans-serif]">pre-qualified</span> for the <span className="font-['Arial:Bold',sans-serif]">My50 Travel Pass</span> and <span className="font-['Arial:Bold',sans-serif]">FlySiswa Subsidy</span>.
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={onViewServices}
              className="group mx-auto flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 transition-all hover:bg-amber-500"
            >
              <span className="font-['Arial:Bold',sans-serif] text-[16px] text-blue-900">
                View Eligible Transport Services
              </span>
              <ArrowRight className="h-5 w-5 text-blue-900 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}