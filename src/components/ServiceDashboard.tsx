import { ServiceCard } from './ServiceCard';
import { useState } from 'react';
import { 
  ClipboardCheck, 
  FileText, 
  Search, 
  Download, 
  UserCheck, 
  Building2,
  Wallet,
  FileCheck
} from 'lucide-react';

interface ServiceDashboardProps {
  userName: string;
  onNavigateToEligibility: () => void;
}

export function ServiceDashboard({ userName, onNavigateToEligibility }: ServiceDashboardProps) {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Check Eligibility',
      description: 'Verify your eligibility for government programs and benefits',
      verified: true,
      onClick: onNavigateToEligibility
    },
    {
      icon: FileText,
      title: 'Apply for Services',
      description: 'Submit applications for government services and assistance',
      verified: true
    },
    {
      icon: Search,
      title: 'Check Application Status',
      description: 'Track the progress of your submitted applications',
      verified: false
    },
    {
      icon: Download,
      title: 'Download Documents',
      description: 'Access and download your official certificates and documents',
      verified: false
    },
    {
      icon: UserCheck,
      title: 'Update Profile',
      description: 'Manage and update your personal information securely',
      verified: false
    },
    {
      icon: Building2,
      title: 'Agency Directory',
      description: 'Find contact information for government agencies and offices',
      verified: false
    },
    {
      icon: Wallet,
      title: 'Financial Assistance',
      description: 'Explore available financial aid and subsidy programs',
      verified: true
    },
    {
      icon: FileCheck,
      title: 'Verify Documents',
      description: 'Authenticate and verify official government documents',
      verified: false
    }
  ];

  return (
    <main className="flex-1 container mx-auto px-8 py-12">
      {/* Welcome Section with User Name */}
      <div className="text-center mb-12">
        <div 
          className="inline-block px-6 py-2 rounded-full mb-4"
          style={{
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid #F59E0B'
          }}
        >
          <p className="text-amber-400 text-sm">Logged in as <span className="font-semibold">{userName}</span></p>
        </div>
        <h1 className="text-white mb-4">
          Welcome to MyLayak Digital Service Kiosk
        </h1>
        <p className="text-white/80 text-xl max-w-2xl mx-auto">
          Access government services quickly and securely. Select a service below to get started.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            verified={service.verified}
            onClick={service.onClick}
          />
        ))}
      </div>

      {/* Quick Help Section */}
      <div 
        className="mt-12 max-w-4xl mx-auto p-8 rounded-3xl border border-white/20"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2 className="text-white mb-4 text-center">Need Assistance?</h2>
        <p className="text-white/80 text-center mb-6">
          Our support team is available 24/7 to help you with any questions or technical issues.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            className="px-8 py-4 rounded-xl text-black font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: '#F59E0B' }}
          >
            Call Support
          </button>
          <button 
            className="px-8 py-4 rounded-xl border border-white/40 text-white font-semibold transition-all hover:bg-white/10"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            View FAQ
          </button>
        </div>
      </div>
    </main>
  );
}