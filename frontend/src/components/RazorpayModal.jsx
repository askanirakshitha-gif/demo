import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, CreditCard, Smartphone, Building, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const RazorpayModal = ({ isOpen, onClose, amount, eventName, studentName, email, onSuccess }) => {
  const [method, setMethod] = useState('upi');
  const [upiId, setUpiId] = useState(`${email ? email.split('@')[0] : 'student'}@okhdfcbank`);
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8920');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('789');
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      const generatedPaymentId = `pay_TH26_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setTimeout(() => {
        onSuccess(generatedPaymentId);
      }, 1200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-md bg-[#0e0e1a] border border-purple-500/40 rounded-2xl shadow-[0_0_50px_rgba(121,40,202,0.4)] overflow-hidden"
      >
        {/* Razorpay Top Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-blue-500 text-white font-black flex items-center justify-center text-xs tracking-tighter shadow-md">
              Rzp
            </div>
            <div>
              <h3 className="text-white font-bold text-sm flex items-center gap-1.5">
                TECH HABBA 2K26
                <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded border border-green-500/40">Verified</span>
              </h3>
              <p className="text-[11px] text-blue-200">Official Acharya Fest Payment Gateway</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Amount Summary */}
        <div className="bg-[#151528] px-6 py-4 flex items-center justify-between border-b border-white/5">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Event Registration</span>
            <span className="text-sm font-bold text-white line-clamp-1">{eventName}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Total Payable</span>
            <span className="text-2xl font-black text-neon-cyan font-mono">₹{amount}</span>
          </div>
        </div>

        {completed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto text-green-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-white">Payment Successful!</h4>
            <p className="text-sm text-gray-300">
              Generating your unique Registration ID and digital receipt...
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setMethod('upi')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                  method === 'upi'
                    ? 'bg-purple-900/40 border-pink-500 text-pink-400 shadow-[0_0_12px_rgba(255,42,109,0.3)]'
                    : 'bg-dark-800/60 border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                <span className="text-[11px] font-bold">UPI / QR</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('card')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                  method === 'card'
                    ? 'bg-purple-900/40 border-pink-500 text-pink-400 shadow-[0_0_12px_rgba(255,42,109,0.3)]'
                    : 'bg-dark-800/60 border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span className="text-[11px] font-bold">Cards</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('netbanking')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                  method === 'netbanking'
                    ? 'bg-purple-900/40 border-pink-500 text-pink-400 shadow-[0_0_12px_rgba(255,42,109,0.3)]'
                    : 'bg-dark-800/60 border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                <Building className="w-5 h-5" />
                <span className="text-[11px] font-bold">Netbanking</span>
              </button>
            </div>

            {/* Method Inputs */}
            {method === 'upi' && (
              <div className="space-y-3 bg-dark-900/80 p-4 rounded-xl border border-white/5">
                <label className="text-xs font-semibold text-gray-300 block">Enter UPI ID (Google Pay, PhonePe, Paytm)</label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0a14] border border-purple-900/60 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                />
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] text-gray-400">Fast Pay:</span>
                  {['@okaxis', '@okhdfcbank', '@ybl', '@paytm'].map((suf) => (
                    <button
                      key={suf}
                      type="button"
                      onClick={() => setUpiId((prev) => `${prev.split('@')[0]}${suf}`)}
                      className="text-[10px] bg-white/5 hover:bg-pink-500/20 text-gray-300 hover:text-pink-300 px-2 py-0.5 rounded border border-white/10 transition-colors"
                    >
                      {suf}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {method === 'card' && (
              <div className="space-y-3 bg-dark-900/80 p-4 rounded-xl border border-white/5">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#0a0a14] border border-purple-900/60 rounded-lg text-sm text-white font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Expiry Date</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#0a0a14] border border-purple-900/60 rounded-lg text-sm text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">CVV</label>
                    <input
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#0a0a14] border border-purple-900/60 rounded-lg text-sm text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {method === 'netbanking' && (
              <div className="space-y-3 bg-dark-900/80 p-4 rounded-xl border border-white/5">
                <label className="text-xs font-semibold text-gray-300 block">Select Popular Bank</label>
                <div className="grid grid-cols-2 gap-2">
                  {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak', 'Canara Bank'].map((b) => (
                    <label key={b} className="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer">
                      <input type="radio" name="bank" defaultChecked={b === 'HDFC Bank'} />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Pay Button */}
            <button
              onClick={handlePay}
              disabled={processing}
              className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,2,238,0.5)]"
            >
              {processing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing ₹{amount}...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>PAY ₹{amount} SECURELY</span>
                </>
              )}
            </button>

            {/* Security Footnote */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
              <Shield className="w-3.5 h-3.5 text-green-400" />
              <span>256-bit SSL Encrypted • Razorpay Certified Payment</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RazorpayModal;
