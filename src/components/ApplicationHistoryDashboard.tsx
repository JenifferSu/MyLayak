import { Heart, GraduationCap, Bus, Hospital, ArrowLeft, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface ApplicationHistoryDashboardProps {
  onBack: () => void;
  onCategoryClick: (category: string) => void;
}

const categoryCards = [
  {
    id: 'social-services',
    title: 'Social Services',
    icon: Heart,
    statusSummary: '1 Application In Progress',
    latestActivity: 'Bantuan Tunai Rahmah (Under Review)',
    statusIcon: Clock,
    statusColor: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/20',
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    statusSummary: '1 Approved',
    latestActivity: 'Student Grant (Disbursement Pending)',
    statusIcon: CheckCircle,
    statusColor: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20',
  },
  {
    id: 'transportation',
    title: 'Transportation',
    icon: Bus,
    statusSummary: 'No Active Applications',
    latestActivity: null,
    actionText: 'Browse Services',
    statusIcon: AlertCircle,
    statusColor: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: Hospital,
    statusSummary: 'Active Coverage',
    latestActivity: 'Madani Medical Scheme (Active)',
    statusIcon: CheckCircle,
    statusColor: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20',
  },
];

export function ApplicationHistoryDashboard({ onBack, onCategoryClick }: ApplicationHistoryDashboardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-['Arial:Regular',sans-serif] text-[14px]">Back to Wallet</span>
        </button>
        
        <h1 className="mb-4 font-['Arial:Black',sans-serif] text-[30px] leading-[40px] text-white">
          Track Application Status
        </h1>
        <p className="font-['Arial:Regular',sans-serif] text-[16px] leading-[24px] text-white/80">
          View the <span className="font-['Arial:Bold',sans-serif]">real-time progress</span> of your submitted applications.
        </p>
      </div>

      {/* Category Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {categoryCards.map((card) => {
          const IconComponent = card.icon;
          const StatusIcon = card.statusIcon;
          
          return (
            <button
              key={card.id}
              onClick={() => onCategoryClick(card.id)}
              className={`group rounded-3xl border ${card.borderColor} ${card.bgColor} p-8 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15`}
            >
              {/* Header */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                    <IconComponent className="h-8 w-8 text-amber-400" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="mb-1 font-['Arial:Regular',sans-serif] text-[13px] text-white/60">Category</p>
                    <h3 className="font-['Arial:Bold',sans-serif] text-[25px] leading-[28px] text-white">{card.title}</h3>
                  </div>
                </div>
                <StatusIcon className={`h-6 w-6 ${card.statusColor}`} />
              </div>

              {/* Status Summary */}
              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 font-['Arial:Regular',sans-serif] text-[13px] text-white/70">
                  Status Summary
                </p>
                <p className="font-['Arial:Bold',sans-serif] text-[18px] leading-[24px] text-white">
                  {card.statusSummary}
                </p>
              </div>

              {/* Latest Activity or Action */}
              {card.latestActivity ? (
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-2 font-['Arial:Regular',sans-serif] text-[13px] text-white/70">
                    Latest Activity
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[16px] leading-[20px] text-white">
                    {card.latestActivity}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 border-t border-white/10 pt-6">
                  <p className="font-['Arial:Bold',sans-serif] text-[16px] text-amber-400">
                    {card.actionText}
                  </p>
                  <ArrowLeft className="h-4 w-4 rotate-180 text-amber-400" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      </div>
    </div>
  );
}