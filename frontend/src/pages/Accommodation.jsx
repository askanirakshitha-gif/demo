import { useState } from 'react';
import { 
  Building, Calendar, Users, Shield, CheckCircle2, 
  Sparkles, Bed, Utensils, Wifi, Lock, ArrowRight, CreditCard 
} from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import { useAuth } from '../context/AuthContext';
import RazorpayModal from '../components/RazorpayModal';
import ParticleBackground from '../components/ParticleBackground';

const Accommodation = () => {
  const { addAccommodation } = useRegistrations();
  const { user } = useAuth();

  const RATE_PER_DAY = 450;

  const [bookingForm, setBookingForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    college: user?.college || 'Acharya Institute of Technology',
    gender: 'Male',
    numPeople: 2,
    checkInDate: '2026-11-14',
    checkOutDate: '2026-11-17',
  });

  const [numDays, setNumDays] = useState(3);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Recalculate days when dates change
  const handleDateChange = (field, val) => {
    const updated = { ...bookingForm, [field]: val };
    setBookingForm(updated);

    const checkIn = new Date(updated.checkInDate);
    const checkOut = new Date(updated.checkOutDate);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNumDays(diffDays > 0 ? diffDays : 1);
  };

  const totalAmount = RATE_PER_DAY * bookingForm.numPeople * (numDays > 0 ? numDays : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentId) => {
    setShowPaymentModal(false);
    const booking = addAccommodation({
      ...bookingForm,
      numDays,
      totalAmount,
      paymentId,
      paymentStatus: 'VERIFIED'
    });
    setConfirmedBooking(booking);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-500 mb-2 block">
            // OUTSTATION HOSPITALITY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
            CAMPUS <span className="neon-text">ACCOMMODATION</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Stay on-campus inside Acharya’s state-of-the-art hostel blocks with 24/7 security, WiFi, and meal options.
          </p>
        </div>

        {confirmedBooking ? (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-green-500/40 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto text-green-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div>
              <span className="text-xs font-mono text-green-400 font-bold uppercase block">BOOKING CONFIRMED</span>
              <h2 className="text-2xl font-black text-white font-cyber mt-1">Hostel Room Reserved</h2>
              <p className="text-gray-400 text-xs mt-1">Booking ID: <span className="text-cyan-400 font-mono font-bold">{confirmedBooking.bookingId}</span></p>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 text-xs text-left font-mono space-y-2 text-gray-300">
              <div className="flex justify-between"><span className="text-gray-400">Reserved For:</span><span className="text-white font-bold">{confirmedBooking.name}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Total Guests:</span><span className="text-cyan-400 font-bold">{confirmedBooking.numPeople} People</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Duration:</span><span className="text-purple-300 font-bold">{confirmedBooking.checkInDate} to {confirmedBooking.checkOutDate} ({confirmedBooking.numDays} Days)</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Total Paid:</span><span className="text-amber-400 font-bold">₹{confirmedBooking.totalAmount}</span></div>
            </div>

            <p className="text-xs text-gray-400">
              Please present this Booking ID and your College ID at the Acharya Hostel Helpdesk on arrival.
            </p>

            <button
              onClick={() => setConfirmedBooking(null)}
              className="btn-primary text-xs"
            >
              BOOK ANOTHER ROOM
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Perks & Pricing Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-card p-6 rounded-2xl border border-pink-500/30 bg-gradient-to-br from-[#16162a] to-[#0d0d18]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold block mb-1">
                  OFFICIAL TARIFF
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-white font-mono">₹450</span>
                  <span className="text-xs text-gray-400 font-mono">/ person / day</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Budget-friendly, secure, sanitized hostel accommodation exclusively for registered fest participants and faculty mentors.
                </p>
              </div>

              {/* Amenity list */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
                <h4 className="font-cyber font-bold text-xs uppercase tracking-widest text-cyan-400">
                  INCLUDED AMENITIES
                </h4>

                <div className="space-y-3 text-xs text-gray-300">
                  <div className="flex items-start gap-3">
                    <Bed className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Furnished Rooms & Mattresses</span>
                      <span className="text-gray-400 text-[11px]">Separate boys & girls hostels with hot water facilities.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wifi className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Campus High-Speed WiFi</span>
                      <span className="text-gray-400 text-[11px]">24/7 uninterrupted connectivity for hackathon teams.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">24/7 Security & Wardens</span>
                      <span className="text-gray-400 text-[11px]">CCTV surveillance and secure luggage lockers.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Cafeteria Access</span>
                      <span className="text-gray-400 text-[11px]">Hygienic campus food court with North & South Indian meals.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Booking Form with Dynamic Price Calculator (7 cols) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/30 space-y-6">
                <h3 className="font-cyber font-bold text-lg text-white flex items-center gap-2">
                  <Building className="w-5 h-5 text-cyan-400" />
                  <span>Reserve Hostel Beds</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Lead Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-3.5 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Hostel Wing</label>
                    <select
                      value={bookingForm.gender}
                      onChange={(e) => setBookingForm({ ...bookingForm, gender: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    >
                      <option value="Male">Boys Hostel Block</option>
                      <option value="Female">Girls Hostel Block</option>
                    </select>
                  </div>
                </div>

                {/* Interactive Calculator Inputs */}
                <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5 space-y-4">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase block">
                    // DURATION & PERSON CALCULATOR
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Number of People</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={bookingForm.numPeople}
                        onChange={(e) => setBookingForm({ ...bookingForm, numPeople: parseInt(e.target.value) || 1 })}
                        className="w-full px-3 py-2 bg-[#0a0a14] border border-white/10 rounded-lg text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Check-in Date</label>
                      <input
                        type="date"
                        value={bookingForm.checkInDate}
                        onChange={(e) => handleDateChange('checkInDate', e.target.value)}
                        className="w-full px-3 py-2 bg-[#0a0a14] border border-white/10 rounded-lg text-white font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Check-out Date</label>
                      <input
                        type="date"
                        value={bookingForm.checkOutDate}
                        onChange={(e) => handleDateChange('checkOutDate', e.target.value)}
                        className="w-full px-3 py-2 bg-[#0a0a14] border border-white/10 rounded-lg text-white font-mono text-xs"
                      />
                    </div>
                  </div>

                  {/* Calculated Price Display */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs text-gray-400 font-mono">
                      <span>{bookingForm.numPeople} People × {numDays} Days × ₹450 =</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-neon-cyan font-mono">₹{totalAmount}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Booking */}
                <button
                  type="submit"
                  className="btn-primary w-full !py-3.5 text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(217,2,238,0.5)]"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>BOOK ACCOMMODATION (₹{totalAmount})</span>
                </button>
              </form>
            </div>

          </div>
        )}

      </div>

      <RazorpayModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={totalAmount}
        eventName={`Hostel Stay (${bookingForm.numPeople} Persons, ${numDays} Days)`}
        studentName={bookingForm.name}
        email={bookingForm.email}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Accommodation;
