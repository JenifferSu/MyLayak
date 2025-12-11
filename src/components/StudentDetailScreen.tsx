import { ArrowLeft, GraduationCap, CheckCircle, BookOpen, Calendar, Building2, BadgeCheck, Shield } from 'lucide-react';
import { Button } from './ui/button';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface StudentDetailScreenProps {
  onBack: () => void;
}

export function StudentDetailScreen({ onBack }: StudentDetailScreenProps) {
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
            Student Status — Verified
          </h1>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Top Section with Icon and Title */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
              <GraduationCap className="h-8 w-8 text-amber-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-white/60 mb-1">Institution</p>
              <h2 className="text-white text-[20px]">Asia Pacific University of Technology & Innovation (APU)</h2>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-400/20 px-6 py-2.5 border border-green-400/30">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-400">Active Student</span>
          </div>

          {/* Student Details Section */}
          <div className="mb-8">
            <h3 className="mb-6 text-white text-[20px]">Student Details</h3>
            
            <div className="space-y-4">
              {/* Student ID */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1 text-[15px]">Student ID</p>
                <p className="text-white text-[18px]">TP062194</p>
              </div>

              {/* Course */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1 text-[15px]">Course</p>
                <p className="text-white text-[18px]">B.Sc Computer Science</p>
              </div>

              {/* Level */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1 text-[15px]">Level</p>
                <p className="text-white text-[18px]">Undergraduate</p>
              </div>

              {/* Study Mode */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1 text-[15px]">Study Mode</p>
                <p className="text-white text-[18px]">Full-time</p>
              </div>

              {/* Validity Period */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/60 mb-1 text-[15px]">Validity Period</p>
                <p className="text-white text-[18px]">Until December 2026</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/20" />

          {/* Verified Student-Based Subsidies & Services Section */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <h3 className="text-white text-[17px] font-bold">Verified Student-Based Subsidies & Services</h3>
            </div>
            <p className="text-sm text-white/60 mb-6 text-[15px]">(Successfully Applied & Verified)</p>
            
            <div className="space-y-6">
              {/* PTPTN */}
              <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/20">
                    <BookOpen className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1 text-[20px]">Perbadanan Tabung Pendidikan Tinggi Nasional (PTPTN)</h4>
                    <div className="inline-flex items-center gap-1.5 text-sm">
                      <span className="text-white/80">Status</span>
                      <CheckCircle className="h-4 w-4 text-green-400 ml-1" />
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-24 shrink-0">
                      <p className="text-sm text-white/60 text-[14px]">Loan Type</p>
                    </div>
                    <div>
                      <p className="text-sm text-white text-[16px]">PTPTN Education Loan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-24 shrink-0">
                      <p className="text-sm text-white/60">Application State</p>
                    </div>
                    <div>
                      <p className="text-sm text-white text-[16px]">Successfully Approved</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-24 shrink-0">
                      <p className="text-sm text-white/60">Applied Date</p>
                    </div>
                    <div>
                      <p className="text-sm text-white text-[16px]">22 February 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-24 shrink-0">
                      <p className="text-sm text-white/60">Verified Using</p>
                    </div>
                    <div>
                      <p className="text-sm text-white text-[16px]">Student Status Eligibility (SET)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-2 text-[14px]">Verification Method</p>
                  <ul className="space-y-1.5 text-sm text-white">
                    <li className="flex items-start gap-2">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span className="text-[16px]">University enrolment records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span className="text-[16px]">Ministry of Higher Education linkage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/60 mt-0.5">•</span>
                      <span className="text-[16px]">MyDigital ID authentication</span>
                    </li>
                  </ul>
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