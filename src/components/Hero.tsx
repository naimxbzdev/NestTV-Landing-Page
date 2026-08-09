import { motion } from 'framer-motion';
import { Play, Download, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/50 bg-purple-500/10 mb-8 backdrop-blur-sm">
              <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Play className="w-3 h-3 text-purple-400 fill-current" />
              </div>
              <span className="text-sm font-bengali text-gray-200">বাংলাদেশের প্রিমিয়াম IPTV</span>
            </div>
            
            <h1 className="text-[4rem] sm:text-[5rem] lg:text-[5.5rem] font-bold font-bengali leading-[1.05] mb-6 tracking-tight">
              বিনোদন এবার <br />
              <span className="text-gradient">হাতের মুঠোয়</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-bengali">
              লাইভ টিভি, এক্সক্লুসিভ মুভি এবং ওয়েব সিরিজ স্ট্রিমিং করুন যেকোনো সময়, যেকোনো জায়গায়।
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-12">
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bengali">
                <CheckCircle2 className="w-5 h-5 text-gray-400" /> <span>৪কে আল্ট্রা এইচডি</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bengali">
                <CheckCircle2 className="w-5 h-5 text-gray-400" /> <span>বিজ্ঞাপনহীন</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bengali">
                <CheckCircle2 className="w-5 h-5 text-gray-400" /> <span>অফলাইন ডাউনলোড</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bengali">
                <CheckCircle2 className="w-5 h-5 text-gray-400" /> <span>মাল্টি-ডিভাইস সাপোর্ট</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#download" className="px-8 py-3.5 rounded-lg bg-primary text-black font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <Download className="w-5 h-5" /> Download APK
              </a>
              <a href="#live-tv" className="px-8 py-3.5 rounded-lg bg-[#A855F7] text-white font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Play className="w-5 h-5 fill-current" /> Watch Online
              </a>
              <a href="#faq-contact" className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.3)]">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#faq-contact" className="w-12 h-12 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,136,204,0.3)]">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - 3D Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[700px] flex items-center justify-center perspective-[1200px]"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent blur-[100px] rounded-full scale-90" />
            
            {/* The Phone Container */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[340px] sm:w-[380px] h-[750px] bg-black rounded-[45px] border-[12px] border-gray-900 shadow-2xl overflow-hidden transform rotate-y-[-15deg] rotate-x-[5deg]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 inset-x-0 flex justify-center z-50">
                 <div className="w-32 h-7 bg-black rounded-full flex items-center justify-between px-3">
                   <div className="w-2 h-2 rounded-full bg-green-900" />
                   <div className="w-12 h-3 rounded-full bg-gray-900" />
                 </div>
              </div>
              
              {/* Fake App UI Inside Phone */}
              <div className="w-full h-full bg-[#050816] flex flex-col pt-12 overflow-hidden">
                 {/* App Header */}
                 <div className="px-5 pb-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                        <path d="M12 8L32 20L12 32V8Z" fill="url(#paint0_linear)"/>
                        <path d="M16 12.5L28 20L16 27.5V12.5Z" fill="#050816"/>
                        <path d="M18 15.5L24 20L18 24.5V15.5Z" fill="#00E5FF"/>
                      </svg>
                      <span className="font-poppins font-bold text-lg">NEST TV</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1px]">
                         <img src="https://i.pravatar.cc/150?img=11" className="w-full h-full rounded-full" alt="User" />
                      </div>
                    </div>
                 </div>
                 
                 {/* Main Banner */}
                 <div className="px-4 mb-6">
                   <div className="w-full h-[220px] rounded-2xl relative overflow-hidden flex items-end p-4 border border-white/10">
                     <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="FIFA" className="absolute inset-0 w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                     <div className="relative z-10 w-full">
                       <h3 className="text-xl font-bold font-poppins mb-1 text-white">FIFA WORLD CUP 2026</h3>
                       <div className="flex items-center justify-between">
                         <span className="text-[10px] bg-red-600 text-white px-2 py-1 rounded font-bold flex items-center gap-1">
                           <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Watch Now
                         </span>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Live Channels */}
                 <div className="px-4 mb-6">
                    <h4 className="text-sm font-semibold mb-3">Live Channels</h4>
                    <div className="flex gap-3 overflow-hidden">
                       {['SONY', 'STAR', 'GTV', 'ATN'].map((c, i) => (
                         <div key={i} className="w-16 h-16 rounded-xl bg-[#0c1226] border border-white/5 flex items-center justify-center shrink-0">
                           <span className="text-[10px] font-bold text-gray-400">{c}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Trending Movies */}
                 <div className="px-4">
                    <h4 className="text-sm font-semibold mb-3">Trending Movies</h4>
                    <div className="flex gap-3 overflow-hidden">
                       {[
                         'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                         'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                         'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                       ].map((src, i) => (
                         <div key={i} className="w-[100px] h-[140px] rounded-xl bg-white/5 border border-white/10 overflow-hidden shrink-0 relative">
                            <img src={src} className="w-full h-full object-cover" alt="Movie" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-2">
                              <Play className="w-6 h-6 text-white/50" />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Floating Elements around phone */}
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -left-8 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(123,97,255,0.4)] z-20"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center">
                 <Play className="w-6 h-6 text-purple-400 fill-current" />
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 -right-12 w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)] z-20"
            >
               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center relative">
                 <div className="absolute inset-2 border-2 border-primary/50 rounded-full animate-ping" />
                 <span className="font-bold text-xs text-primary">LIVE</span>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
