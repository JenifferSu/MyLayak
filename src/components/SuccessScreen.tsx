import { CheckCircle, Hash, Sparkles, Star, GraduationCap, Bus, Hospital, Heart, Laptop, Wheat } from 'lucide-react';
import { Button } from './ui/button';
import type { Service } from '../App';

interface SuccessScreenProps {
  service: Service | null;
  onFinish: () => void;
  onCheckOtherServices: () => void;
}

const iconMap = {
  GraduationCap,
  Bus,
  Hospital,
  Heart,
  Laptop,
  Wheat,
};

export function SuccessScreen({ service, onFinish, onCheckOtherServices }: SuccessScreenProps) {
  if (!service) return null;

  // Generate a mock reference ID
  const referenceId = `MYL-${Date.now().toString().slice(-8)}`;
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-3xl">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-16 text-center shadow-2xl backdrop-blur-xl">
          {/* Success Icon with celebration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <CheckCircle className="h-32 w-32 text-green-400" strokeWidth={2} />
              {/* Celebration animation */}
              <div className="absolute inset-0 animate-ping rounded-full bg-green-400/60" style={{ animationDuration: '1s', animationIterationCount: '3' }} />
              {/* Confetti elements */}
              <div className="absolute -top-4 -left-4 animate-bounce" style={{ animationDelay: '0s' }}>
                <Sparkles className="h-8 w-8 text-amber-400" />
              </div>
              <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDelay: '0.1s' }}>
                <Star className="h-8 w-8 text-amber-400" />
              </div>
              <div className="absolute -bottom-4 left-0 animate-bounce" style={{ animationDelay: '0.2s' }}>
                <Star className="h-8 w-8 text-amber-400" />
              </div>
              <div className="absolute -bottom-4 right-0 animate-bounce" style={{ animationDelay: '0.3s' }}>
                <Sparkles className="h-8 w-8 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h2 className="mb-4 text-white">
            Service activated successfully!
          </h2>
          
          <p className="mb-8 text-xl text-white/70">
            {service.title} has been added to your account
          </p>

          {/* Service Card */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10">
                {IconComponent && <IconComponent className="h-8 w-8 text-amber-400" strokeWidth={2} />}
              </div>
              <div className="text-left">
                <h3 className="mb-1 text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60">{service.category}</p>
              </div>
            </div>
          </div>

          {/* Reference ID */}
          <div className="mb-10 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Hash className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-amber-400">Reference ID</span>
            </div>
            <p className="font-mono text-2xl tracking-wider text-white">
              {referenceId}
            </p>
            <p className="mt-2 text-sm text-white/50">
              Save this reference for your records
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={onFinish}
              className="h-16 flex-1 rounded-xl border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white/15"
            >
              Return to Wallet
            </Button>
            <Button
              onClick={onCheckOtherServices}
              className="h-16 flex-1 rounded-xl bg-amber-400 text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-amber-300 hover:shadow-2xl"
            >
              Check Other Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}