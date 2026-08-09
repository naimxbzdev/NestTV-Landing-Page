import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Server, RotateCw, Headphones, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import AdBanner from './AdBanner';

const reasons = [
  { icon: RotateCw, label: 'No Buffer' },
  { icon: Server, label: 'Fast Server' },
  { icon: Star, label: 'Premium Quality' },
  { icon: ShieldCheck, label: 'Secure Login' },
  { icon: Activity, label: 'Daily Update' },
  { icon: Headphones, label: '24/7 Support' },
];

const testimonials = [
  { text: 'দারুণ এক্সপেরিয়েন্স! এত স্মুথ স্ট্রিমিং আর কোথাও পাইনি। বাফারিং ছাড়া খেলা দেখতে দারুণ লাগে।', name: 'Sabbir Ahmed', location: 'Dhaka, Bangladesh', stars: 5 },
  { text: 'বেস্ট আইপিটিভি সার্ভিস! ছবির মান অসাধারণ আর চ্যানেল সিলেকশন অনেক ভালো।', name: 'Rakib Hasan', location: 'Chittagong, BD', stars: 5 },
];

export default function InfoGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        if(emblaApi.canScrollNext()) emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Server Status */}
          <div className="glass p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Server Status</h3>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Server Online
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-white font-bold">99.99%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Latency:</span>
                  <span className="text-white font-bold">12ms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fast Streaming</span>
                </div>
              </div>
            </div>
            
            {/* Fake Graph */}
            <div className="h-16 mt-6 relative flex items-end">
               <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M0,25 L10,20 L20,28 L30,15 L40,22 L50,10 L60,18 L70,5 L80,12 L90,2 L100,20" fill="none" stroke="#14F195" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                 <path d="M0,25 L10,20 L20,28 L30,15 L40,22 L50,10 L60,18 L70,5 L80,12 L90,2 L100,20 L100,30 L0,30 Z" fill="url(#grad)" stroke="none" />
                 <defs>
                   <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#14F195" stopOpacity="0.3" />
                     <stop offset="100%" stopColor="#14F195" stopOpacity="0" />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
          </div>

          {/* Why NEST TV */}
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold font-poppins text-white mb-6">কেন NEST TV সেরা?</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-y-6 gap-x-4 w-full">
               {reasons.map((r, i) => (
                 <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 ${i===0?'border-secondary/50 text-secondary':'text-gray-400'}`}>
                      <r.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-gray-400">{r.label}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="glass p-6 rounded-2xl flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6">User Testimonials</h3>
            <div className="flex-1 overflow-hidden" ref={emblaRef}>
               <div className="flex h-full">
                 {testimonials.map((t, i) => (
                   <div key={i} className="flex-[0_0_100%] min-w-0 flex flex-col justify-between">
                      <div className="relative mb-6">
                        <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif leading-none">"</span>
                        <p className="text-gray-300 text-sm leading-relaxed relative z-10">{t.text}</p>
                        <span className="absolute -bottom-6 -right-2 text-6xl text-primary/20 font-serif leading-none rotate-180">"</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                               <img src={`https://i.pravatar.cc/150?img=${i+11}`} alt={t.name} className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                               <p className="text-sm font-bold text-white">{t.name}</p>
                               <p className="text-xs text-gray-400">{t.location}</p>
                            </div>
                         </div>
                         <div className="flex">
                           {[...Array(t.stars)].map((_, idx) => (
                             <Star key={idx} className="w-3 h-3 text-yellow-400 fill-current" />
                           ))}
                         </div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="flex justify-center gap-1.5 mt-4">
              {[0,1,2,3].map(i => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i===0 ? 'bg-primary' : 'bg-gray-600'}`} />
              ))}
            </div>
          </div>

        </div>
        
        <div className="mt-8 flex justify-center w-full">
           <AdBanner type="300x250" />
        </div>
      </div>
    </section>
  );
}
