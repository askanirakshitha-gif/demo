import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Download, ArrowLeft, Calendar, MapPin, User, ShieldCheck, Sparkles, Printer, Copy, Check } from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import QRCodeGenerator from '../components/QRCodeGenerator';
import ParticleBackground from '../components/ParticleBackground';
import confetti from 'canvas-confetti';

const Confirmation = () => {
  const { regId } = useParams();
  const navigate = useNavigate();
  const { registrations } = useRegistrations();
  const [reg, setReg] = useState(null);
  const [copied, setCopied] = useState(false);
  const receiptRef = useRef();

  useEffect(() => {
    // Launch celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.5 }
    });

    const found = registrations.find((r) => r.registrationId === regId);
    if (found) {
      setReg(found);
    } else if (registrations.length > 0) {
      setReg(registrations[0]);
    }
  }, [regId, registrations]);

  const handleCopyId = () => {
    if (!reg) return;
    navigator.clipboard.writeText(reg.registrationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  if (!reg) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Registration Not Found</h2>
        <Link to="/events" className="btn-primary">Browse All Events</Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Success Badge */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto mb-4 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.5)] animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-green-400 block mb-1">
            // PAYMENT & VERIFICATION CONFIRMED
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-cyber">
            REGISTRATION <span className="neon-text">SUCCESSFUL</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            TECH HABBA 2K26 • Acharya Institute of Technology
          </p>
        </div>

        {/* Official Digital Ticket Card */}
        <div 
          ref={receiptRef}
          className="glass-card rounded-3xl border border-pink-500/40 p-6 sm:p-8 bg-gradient-to-b from-[#131326] via-[#0d0d18] to-[#131326] shadow-[0_0_50px_rgba(255,42,109,0.25)] relative overflow-hidden"
        >
          {/* Subtle neon accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Ticket Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase block">
                OFFICIAL FEST E-PASS & RECEIPT
              </span>
              <h3 className="font-cyber font-black text-2xl text-white">
                TECH HABBA <span className="neon-text">2K26</span>
              </h3>
              <p className="text-xs text-gray-400">12 - 14 Nov 2026 • Acharya Campus, Bengaluru</p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] text-gray-400 font-mono block">REGISTRATION ID</span>
              <div className="inline-flex items-center gap-2 bg-dark-900 px-3 py-1.5 rounded-lg border border-pink-500/50 mt-1">
                <span className="font-cyber font-black text-neon-pink text-base">{reg.registrationId}</span>
                <button
                  onClick={handleCopyId}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Copy ID"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Ticket Body: QR & Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
            
            {/* QR Code */}
            <div className="flex flex-col items-center justify-center p-4 bg-dark-900/80 rounded-2xl border border-white/5 text-center">
              <QRCodeGenerator value={reg.registrationId} size={150} />
              <span className="text-[10px] text-gray-400 font-mono mt-2">
                Scan at Arena Desk for Badge
              </span>
            </div>

            {/* Details */}
            <div className="md:col-span-2 space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5">
                <span className="text-gray-400 text-[10px] uppercase block mb-0.5">EVENT</span>
                <span className="text-white font-bold text-sm">{reg.eventName}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5">
                  <span className="text-gray-400 text-[10px] uppercase block mb-0.5">PARTICIPANT</span>
                  <span className="text-cyan-300 font-bold">{reg.studentName}</span>
                </div>

                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5">
                  <span className="text-gray-400 text-[10px] uppercase block mb-0.5">TEAM NAME</span>
                  <span className="text-pink-400 font-bold">{reg.teamName || 'Individual Entry'}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5">
                  <span className="text-gray-400 text-[10px] uppercase block mb-0.5">PAYMENT STATUS</span>
                  <span className="text-green-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> SUCCESSFUL (₹{reg.amount})
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5">
                  <span className="text-gray-400 text-[10px] uppercase block mb-0.5">DATE & TIME</span>
                  <span className="text-purple-300 font-bold">{reg.date || '12 Nov 2026'}</span>
                </div>
              </div>

              {reg.teamMembers && reg.teamMembers.length > 0 && (
                <div className="p-3 rounded-xl bg-dark-900/60 border border-white/5">
                  <span className="text-gray-400 text-[10px] uppercase block mb-1">TEAM SQUAD MEMBERS</span>
                  <div className="text-[11px] text-gray-300 flex flex-wrap gap-2">
                    {reg.teamMembers.map((m, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {m.name} ({m.usn})
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Ticket Footer Instructions */}
          <div className="bg-[#0b0b14] p-4 rounded-xl border border-white/5 text-[11px] text-gray-400 space-y-1">
            <p className="text-gray-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" /> Instructions for Day of Fest:
            </p>
            <p>1. Present this digital ticket QR or printed receipt at the Registration Desk (AIT Main Block).</p>
            <p>2. Mandatory: Carry valid college identification card for verification.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrintReceipt}
            className="btn-primary w-full sm:w-auto !py-3 !px-6 text-xs font-bold flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>DOWNLOAD RECEIPT / PRINT E-PASS</span>
          </button>

          <Link
            to="/dashboard"
            className="btn-outline w-full sm:w-auto !py-3 !px-6 text-xs font-bold text-center"
          >
            VIEW MY REGISTRATIONS
          </Link>

          <Link
            to="/events"
            className="text-xs font-mono text-gray-400 hover:text-white px-4 py-2"
          >
            BACK TO EVENTS
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Confirmation;
