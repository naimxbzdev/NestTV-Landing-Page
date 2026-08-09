import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'হোম', href: '#home' },
  { name: 'ফিচার', href: '#features' },
  { name: 'ডিভাইস', href: '#devices' },
  { name: 'লাইভ টিভি', href: '#live-tv' },
  { name: 'ডাউনলোড', href: '#download' },
  { name: 'প্রাইসিং', href: '#pricing' },
  { name: 'যোগাযোগ', href: '#faq-contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'BN' | 'EN'>('BN');
  const [theme, setTheme] = useState<'cyan' | 'purple' | 'green'>('cyan');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = (newTheme: 'cyan' | 'purple' | 'green') => {
    setTheme(newTheme);
    const root = document.documentElement;
    if (newTheme === 'cyan') {
      root.style.setProperty('--app-primary', '#00E5FF');
      root.style.setProperty('--app-secondary', '#7B61FF');
      root.style.setProperty('--app-accent', '#14F195');
    } else if (newTheme === 'purple') {
      root.style.setProperty('--app-primary', '#A855F7');
      root.style.setProperty('--app-secondary', '#00E5FF');
      root.style.setProperty('--app-accent', '#14F195');
    } else if (newTheme === 'green') {
      root.style.setProperty('--app-primary', '#14F195');
      root.style.setProperty('--app-secondary', '#7B61FF');
      root.style.setProperty('--app-accent', '#00E5FF');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent pt-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8L32 20L12 32V8Z" fill="url(#paint0_linear)"/>
              <path d="M16 12.5L28 20L16 27.5V12.5Z" fill="#050816"/>
              <path d="M18 15.5L24 20L18 24.5V15.5Z" fill="#00E5FF"/>
              <defs>
                <linearGradient id="paint0_linear" x1="12" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00E5FF" />
                  <stop offset="1" stopColor="#7B61FF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-poppins font-bold text-2xl tracking-wide text-white">NEST TV</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors text-[15px] font-bengali font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/[0.03] rounded-full px-3 py-1.5 border border-white/10">
              <button 
                onClick={() => setLang('BN')} 
                className={`transition-colors font-medium ${lang === 'BN' ? 'text-primary font-bold font-bengali' : 'hover:text-white'}`}
              >
                বাংলা
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => setLang('EN')} 
                className={`transition-colors font-medium ${lang === 'EN' ? 'text-primary font-bold' : 'hover:text-white'}`}
              >
                EN
              </button>
            </div>
            
            <div className="flex gap-2">
               <button onClick={() => changeTheme('cyan')} className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${theme === 'cyan' ? 'bg-[#00E5FF]/20 border-[#00E5FF]/50 scale-110' : 'bg-[#00E5FF]/10 border-white/10 hover:border-[#00E5FF]/30'}`}>
                 <div className={`w-3.5 h-3.5 rounded-full bg-[#00E5FF] ${theme === 'cyan' ? 'shadow-[0_0_10px_#00E5FF]' : ''}`} />
               </button>
               <button onClick={() => changeTheme('purple')} className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${theme === 'purple' ? 'bg-[#A855F7]/20 border-[#A855F7]/50 scale-110' : 'bg-[#A855F7]/10 border-white/10 hover:border-[#A855F7]/30'}`}>
                 <div className={`w-3.5 h-3.5 rounded-full bg-[#A855F7] ${theme === 'purple' ? 'shadow-[0_0_10px_#A855F7]' : ''}`} />
               </button>
               <button onClick={() => changeTheme('green')} className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${theme === 'green' ? 'bg-[#14F195]/20 border-[#14F195]/50 scale-110' : 'bg-[#14F195]/10 border-white/10 hover:border-[#14F195]/30'}`}>
                 <div className={`w-3.5 h-3.5 rounded-full bg-[#14F195] ${theme === 'green' ? 'shadow-[0_0_10px_#14F195]' : ''}`} />
               </button>
            </div>

            <div className="flex items-center gap-3">
              <a href="#live-tv" className="px-6 py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors text-sm">
                Watch Online
              </a>
              <a href="#download" className="px-6 py-2.5 rounded-full bg-primary text-black font-bold hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all text-sm">
                Download APK
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
