import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, Calendar, Trophy, Download, Eye, 
  CheckCircle2, Clock, AlertTriangle, XCircle, Plus, Sparkles, QrCode, Shield 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useRegistrations } from '../context/RegistrationContext';
import ParticleBackground from '../components/ParticleBackground';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { registrations, accommodations } = useRegistrations();

  const [activeTab, setActiveTab] = useState('events');

  // Filter registrations for current student (or show all sample registrations)
  const studentRegistrations = registrations.filter(
    (r) => !user || r.email === user.email || r.studentName === user.name || true
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'REGISTRATION CONFIRMED':
      case 'PAYMENT VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-green-950/80 text-green-400 border border-green-500/40">
            <CheckCircle2 className="w-3 h-3" /> {status}
          </span>
        );
      case 'PAYMENT PENDING':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40">
            <Clock className="w-3 h-3" /> {status}
          </span>
        );
      case 'CANCELLED':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-red-950/80 text-red-400 border border-red-500/40">
            <XCircle className="w-3 h-3" /> {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/40">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Welcome Header */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/40 mb-10 bg-gradient-to-r from-[#14142b] via-[#0f0f1c] to-[#14142b]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-[2px] shadow-[0_0_20px_rgba(255,42,109,0.4)]">
                <div className="w-full h-full bg-[#0a0a14] rounded-2xl flex items-center justify-center font-cyber font-black text-2xl text-neon-cyan">
                  {user?.name ? user.name.charAt(0) : 'A'}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-pink-400 uppercase tracking-widest block">
                  PARTICIPANT DASHBOARD
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-white font-cyber">
                  Welcome, <span className="neon-text">{user?.name || 'Aryan Sharma'}</span>
                </h1>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  {user?.college || 'Acharya Institute of Technology'} • USN: {user?.usn || '1AY22CS045'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/register" className="btn-primary !py-2.5 !px-5 text-xs font-bold gap-2">
                <Plus className="w-4 h-4" />
                <span>REGISTER NEW EVENT</span>
              </Link>
              <Link to="/accommodation" className="btn-outline !py-2.5 !px-5 text-xs font-bold">
                BOOK HOSTEL
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="glass-card p-5 rounded-2xl border border-cyan-500/30">
            <span className="text-gray-400 text-xs font-mono uppercase block mb-1">TOTAL REGISTERED</span>
            <span className="text-3xl font-black text-neon-cyan font-mono">{studentRegistrations.length}</span>
            <span className="text-[11px] text-cyan-400/80 block mt-1">Championship Contests</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-green-500/30">
            <span className="text-gray-400 text-xs font-mono uppercase block mb-1">CONFIRMED PASSES</span>
            <span className="text-3xl font-black text-green-400 font-mono">
              {studentRegistrations.filter(r => r.registrationStatus === 'REGISTRATION CONFIRMED').length}
            </span>
            <span className="text-[11px] text-green-400/80 block mt-1">QR Passes Ready</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-amber-500/30">
            <span className="text-gray-400 text-xs font-mono uppercase block mb-1">PAYMENT PENDING</span>
            <span className="text-3xl font-black text-amber-400 font-mono">
              {studentRegistrations.filter(r => r.paymentStatus === 'PAYMENT PENDING').length}
            </span>
            <span className="text-[11px] text-amber-300/80 block mt-1">Requires Verification</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-pink-500/30">
            <span className="text-gray-400 text-xs font-mono uppercase block mb-1">TOTAL FEES PAID</span>
            <span className="text-3xl font-black text-neon-pink font-mono">
              ₹{studentRegistrations.filter(r => r.paymentStatus === 'PAYMENT VERIFIED').reduce((acc, r) => acc + (r.amount || 0), 0)}
            </span>
            <span className="text-[11px] text-pink-400/80 block mt-1">Via Razorpay</span>
          </div>

        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-purple-900/40 mb-6 gap-6 text-sm font-cyber">
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-3 border-b-2 transition-all font-bold ${
              activeTab === 'events' ? 'border-pink-500 text-pink-400' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            My Event Registrations ({studentRegistrations.length})
          </button>
          <button
            onClick={() => setActiveTab('hostels')}
            className={`pb-3 border-b-2 transition-all font-bold ${
              activeTab === 'hostels' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Hostel Reservations ({accommodations.length})
          </button>
        </div>

        {/* Registrations Table */}
        {activeTab === 'events' && (
          <div className="glass-card rounded-2xl border border-purple-500/30 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-dark-900/90 border-b border-white/10 text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                    <th className="p-4">Event Name</th>
                    <th className="p-4">Reg ID</th>
                    <th className="p-4">Team / Squad</th>
                    <th className="p-4">Date & Venue</th>
                    <th className="p-4">Payment Status</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-gray-200 font-mono">
                  {studentRegistrations.map((reg) => (
                    <tr key={reg.registrationId} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-white font-sans text-sm">
                        {reg.eventName}
                      </td>
                      <td className="p-4 text-neon-cyan font-bold">
                        {reg.registrationId}
                      </td>
                      <td className="p-4 text-pink-400">
                        {reg.teamName || <span className="text-gray-500">Individual</span>}
                      </td>
                      <td className="p-4 text-gray-400">
                        <div>{reg.date}</div>
                        <div className="text-[11px] text-gray-500">{reg.venue}</div>
                      </td>
                      <td className="p-4">
                        {getStatusBadge(reg.paymentStatus)}
                      </td>
                      <td className="p-4">
                        {getStatusBadge(reg.registrationStatus)}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/confirmation/${reg.registrationId}`}
                            className="p-2 rounded-lg bg-dark-900 text-cyan-400 hover:bg-cyan-950/60 border border-cyan-500/30 transition-colors"
                            title="View E-Pass & QR"
                          >
                            <QrCode className="w-4 h-4" />
                          </Link>
                          <Link
                            to={`/confirmation/${reg.registrationId}`}
                            className="p-2 rounded-lg bg-dark-900 text-pink-400 hover:bg-pink-950/60 border border-pink-500/30 transition-colors"
                            title="Download Receipt"
                          >
                            <Download className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {studentRegistrations.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                <p className="text-sm">You haven't registered for any events yet.</p>
                <Link to="/events" className="btn-primary !py-2 !px-4 text-xs mt-3 inline-block">
                  Browse All Events & Register
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Hostel Accommodations Tab */}
        {activeTab === 'hostels' && (
          <div className="glass-card rounded-2xl border border-purple-500/30 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-dark-900/90 border-b border-white/10 text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                    <th className="p-4">Booking ID</th>
                    <th className="p-4">Lead Guest</th>
                    <th className="p-4">Guests</th>
                    <th className="p-4">Dates</th>
                    <th className="p-4">Total Amount</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-gray-200 font-mono">
                  {accommodations.map((acc) => (
                    <tr key={acc.bookingId} className="hover:bg-white/[0.02]">
                      <td className="p-4 text-cyan-400 font-bold">{acc.bookingId}</td>
                      <td className="p-4 text-white font-bold">{acc.name}</td>
                      <td className="p-4">{acc.numPeople} Persons ({acc.gender} Wing)</td>
                      <td className="p-4 text-purple-300">{acc.checkInDate} to {acc.checkOutDate} ({acc.numDays} Days)</td>
                      <td className="p-4 text-amber-400 font-bold">₹{acc.totalAmount}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-green-950/80 text-green-400 border border-green-500/40 text-[11px]">
                          VERIFIED
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {accommodations.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                <p className="text-sm">No hostel bookings found.</p>
                <Link to="/accommodation" className="btn-outline !py-2 !px-4 text-xs mt-3 inline-block">
                  Book Campus Accommodation
                </Link>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
