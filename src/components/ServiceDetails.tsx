import { CheckCircle, ArrowLeft, Shield, Lock, GraduationCap, Bus, Hospital, Heart, Laptop, Wheat } from 'lucide-react';
import { Button } from './ui/button';
import type { Service } from '../App';

interface ServiceDetailsProps {
  service: Service | null;
  onAccept: () => void;
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

export function ServiceDetails({ service, onAccept, onBack }: ServiceDetailsProps) {
  if (!service) return null;

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 gap-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Services
        </Button>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/20 bg-white/10 p-12 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="mb-8 flex items-start gap-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              {IconComponent && <IconComponent className="h-12 w-12 text-amber-400" strokeWidth={2} />}
            </div>
            <div className="flex-1">
              <div className="mb-3 inline-block rounded-lg bg-amber-400/20 px-3 py-1">
                <span className="text-sm text-amber-400">{service.category}</span>
              </div>
              <h2 className="mb-3 text-white">
                {service.title}
              </h2>
              <p className="text-lg text-white/70">
                {service.description}
              </p>
            </div>
          </div>

          {/* Why You Qualify Section */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-6 text-white">
              Why You Qualify
            </h3>
            <div className="space-y-4">
              {service.eligibilityRequirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                >
                  <CheckCircle className="h-6 w-6 shrink-0 text-green-400" />
                  <span className="text-white/90">{requirement}</span>
                  <div className="ml-auto rounded-full bg-green-400/20 px-3 py-1">
                    <span className="text-sm text-green-400">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Message */}
          <div className="mb-8 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-6">
            <div className="flex items-start gap-3">
              <Shield className="mt-1 h-5 w-5 shrink-0 text-blue-300" />
              <div className="flex items-start gap-2">
                <Lock className="mt-1 h-4 w-4 shrink-0 text-blue-300" />
                <p className="text-white/90">
                  Only required eligibility is shared — no documents, no income data
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Button
              onClick={onAccept}
              className="h-16 rounded-xl bg-amber-400 px-16 text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-amber-300 hover:shadow-2xl"
            >
              Accept & Activate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}