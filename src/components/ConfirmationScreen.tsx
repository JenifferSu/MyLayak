import { CheckCircle, X, Lock, ArrowLeft, GraduationCap, Bus, Hospital, Heart, Laptop, Wheat } from 'lucide-react';
import { Button } from './ui/button';
import type { Service } from '../App';

interface ConfirmationScreenProps {
  service: Service | null;
  onConfirm: () => void;
  onBack: () => void;
}

const iconMap = {
  GraduationCap,
  Bus,
  Hospital,
  Heart,
  Laptop,
  Wheat,
};

export function ConfirmationScreen({ service, onConfirm, onBack }: ConfirmationScreenProps) {
  if (!service) return null;

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-3xl">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 gap-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </Button>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/20 bg-white/10 p-12 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-400/20">
              <Lock className="h-10 w-10 text-amber-400" />
            </div>
            <h2 className="mb-3 text-white">
              Confirm Service Activation
            </h2>
            <p className="text-lg text-white/70">
              Review what information will be shared
            </p>
          </div>

          {/* Service Info */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10">
                {IconComponent && <IconComponent className="h-8 w-8 text-amber-400" strokeWidth={2} />}
              </div>
              <div>
                <h3 className="mb-1 text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60">{service.category}</p>
              </div>
            </div>
          </div>

          {/* What WILL be shared */}
          <div className="mb-6 rounded-2xl border border-green-400/30 bg-green-400/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <h3 className="text-white">
                Will share:
              </h3>
            </div>
            <ul className="space-y-2">
              {service.eligibilityRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90">
                  <span className="mt-1 text-green-400">✓</span>
                  <span>{requirement} (verified status only)</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What will NOT be shared */}
          <div className="mb-8 rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <X className="h-5 w-5 text-red-400" />
              <h3 className="text-white">
                Will NOT share:
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-white/90">
                <span className="mt-1 text-red-400">✗</span>
                <span>Income amount or financial details</span>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <span className="mt-1 text-red-400">✗</span>
                <span>Home address or location data</span>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <span className="mt-1 text-red-400">✗</span>
                <span>Personal documents or identification numbers</span>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <span className="mt-1 text-red-400">✗</span>
                <span>Date of birth or biometric data</span>
              </li>
            </ul>
          </div>

          {/* Security Badge */}
          <div className="mb-8 flex items-center justify-center gap-2 text-white/50">
            <Lock className="h-4 w-4" />
            <span className="text-sm">Secure channel active</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="h-14 flex-1 rounded-xl border-white/20 bg-white/5 text-white transition-all duration-300 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="h-14 flex-1 rounded-xl bg-amber-400 text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-amber-300 hover:shadow-2xl"
            >
              Confirm & Activate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}