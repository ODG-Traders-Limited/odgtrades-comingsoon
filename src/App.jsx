import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle } from 'lucide-react';
import logo from './assets/logo.png';
import sphere from './assets/sphere.png';

// Elegant entry transitions
const baseFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// Animated Countdown Unit
const AnimatedUnit = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center min-w-[3rem]">
      <div className="h-8 overflow-hidden flex items-center justify-center font-mono relative">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-medium text-lg md:text-xl block"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-gray-600 text-[10px] font-sans font-light mt-1 select-none tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
};

export default function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFocused, setIsFocused] = useState(false);

  // Calculate countdown to August 15, 2026
  useEffect(() => {
    const launchDate = new Date("August 15, 2026 00:00:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      const existingWaitlist = JSON.parse(localStorage.getItem('odg_waitlist') || '[]');
      existingWaitlist.push({ email, date: new Date().toISOString() });
      localStorage.setItem('odg_waitlist', JSON.stringify(existingWaitlist));
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-between items-center px-6 py-12 md:py-16 selection:bg-[#F3A92C]/10 selection:text-[#F3A92C] overflow-hidden">
      
      {/* 1. Drifting Grid Background (Trading chart style, very subtle) */}
      <div className="absolute inset-0 grid-bg animate-grid-drift z-0 pointer-events-none opacity-85"></div>

      {/* 2. Left and Right Vertical Divider Lines (Draw in animation) */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0 origin-top hidden lg:block z-0 pointer-events-none"
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0 origin-top hidden lg:block z-0 pointer-events-none"
      />

      {/* 3. Slow-Moving, Pulsing Radial Glows */}
      <motion.div 
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full bg-[#F3A92C]/[0.02] blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full bg-[#F3A92C]/[0.015] blur-[120px] pointer-events-none z-0"
      />

      {/* 4. Very Faint Rotating Watermark Sphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] aspect-square z-0 pointer-events-none opacity-[0.05] mix-blend-screen"
        style={{ 
          WebkitMaskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)', 
          maskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)' 
        }}
      >
        <motion.img 
          animate={{ rotate: 360 }}
          transition={{ duration: 280, repeat: Infinity, ease: "linear" }}
          src={sphere} 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Subtle top alignment border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-4xl flex justify-center">
        <motion.img 
          initial="hidden" 
          animate="visible" 
          variants={baseFade}
          src={logo} 
          alt="ODG Trades" 
          className="h-8 md:h-9 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity" 
        />
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-lg flex flex-col items-center justify-center my-auto py-12 text-center">
        
        {/* Intro Pill Tag */}
        <motion.span 
          initial="hidden" 
          animate="visible" 
          variants={baseFade}
          className="text-[10px] md:text-xs font-mono font-medium tracking-[0.3em] text-[#F3A92C] uppercase mb-6"
        >
          ODG Trades · Premium Forex Hub
        </motion.span>

        {/* Heading */}
        <motion.h1 
          initial="hidden" 
          animate="visible" 
          variants={baseFade}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 leading-[1.2]"
        >
          The new standard in<br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Forex trading.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial="hidden" 
          animate="visible" 
          variants={baseFade}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-sm md:text-base max-w-sm mx-auto mb-10 leading-relaxed font-light"
        >
          Elite mentorship, institutional signals, and a network of dedicated funded traders. We are gearing up for launch.
        </motion.p>

        {/* Refined Sliding Digit Countdown */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={baseFade}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center gap-6 md:gap-8 text-gray-500 tracking-wider mb-12 py-3.5 px-8 border-y border-white/5 bg-[#050505]/40 backdrop-blur-sm"
        >
          <AnimatedUnit value={timeLeft.days} label="days" />
          <span className="text-gray-800 select-none self-start mt-1">•</span>
          <AnimatedUnit value={timeLeft.hours} label="hours" />
          <span className="text-gray-800 select-none self-start mt-1">•</span>
          <AnimatedUnit value={timeLeft.minutes} label="mins" />
          <span className="text-gray-800 select-none self-start mt-1">•</span>
          <AnimatedUnit value={timeLeft.seconds} label="secs" />
        </motion.div>

        {/* Underlined Waitlist Form with Animated Glow underline */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={baseFade}
          transition={{ delay: 0.4 }}
          className="w-full max-w-sm mb-12"
        >
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form 
                key="form"
                onSubmit={handleSubscribe}
                className="relative flex items-center justify-between border-b border-white/10 py-2.5 px-0.5"
              >
                <input 
                  id="waitlist-email"
                  type="email"
                  placeholder="Join the waitlist"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  disabled={status === 'loading'}
                  className="bg-transparent text-white placeholder-gray-600 text-sm focus:outline-none w-full pr-4 font-light tracking-wide"
                  required
                />
                <button 
                  id="join-button"
                  type="submit"
                  disabled={status === 'loading'}
                  className="text-white hover:text-[#F3A92C] font-semibold text-xs transition-colors uppercase tracking-[0.15em] whitespace-nowrap shrink-0 flex items-center gap-1.5 group"
                >
                  {status === 'loading' ? (
                    <span className="w-3.5 h-3.5 border border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <motion.span
                        animate={isFocused ? { x: [0, 3, 0] } : {}}
                        transition={{ repeat: isFocused ? Infinity : 0, duration: 1.2, ease: "easeInOut" }}
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.span>
                    </>
                  )}
                </button>

                {/* Animated Gold Focus Line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isFocused ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F3A92C] to-transparent origin-center shadow-[0_1px_8px_rgba(243,169,44,0.3)]"
                />
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-2"
              >
                <p className="text-sm font-semibold text-[#F3A92C] tracking-wide">You have been subscribed.</p>
                <p className="text-xs text-gray-500 mt-1">We'll alert you as soon as we launch.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Validation Error */}
          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-red-400 text-xs mt-3 justify-center"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Minimalist row of tags */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={baseFade}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-600 font-light font-sans select-none"
        >
          <span>Signals</span>
          <span className="text-gray-800">•</span>
          <span>Mentorship</span>
          <span className="text-gray-800">•</span>
          <span>Community</span>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-4xl border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-gray-600 font-mono tracking-wider text-center md:text-left select-none">
          &copy; {new Date().getFullYear()} ODG TRADES. ALL RIGHTS RESERVED.
        </p>
        
        {/* Minimalist social links */}
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.15em] text-gray-600 select-none">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3A92C] transition-colors">
            TWITTER
          </a>
          <span className="text-gray-800">/</span>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3A92C] transition-colors">
            TELEGRAM
          </a>
          <span className="text-gray-800">/</span>
          <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3A92C] transition-colors">
            DISCORD
          </a>
        </div>
      </footer>

    </div>
  );
}
