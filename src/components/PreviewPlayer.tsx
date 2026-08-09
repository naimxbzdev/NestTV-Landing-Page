import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, Tv, Tag, Settings } from 'lucide-react';
import AdBanner from './AdBanner';

const content = [
  {
    id: 1,
    title: 'FIFA WORLD CUP 2026',
    poster: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bg: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Live Sports',
    channel: 'SONY SPORTS 1',
    quality: '4K Ultra HD',
    desc: 'লাইভ দেখুন ফিফা বিশ্বকাপ ২০২৬ এর রুদ্ধশ্বাস সব ম্যাচ। ফুটবল উন্মাদনায় মেতে উঠুন এইচডি কোয়ালিটিতে।',
    tags: ['Sports', 'Live', '2h 30m'],
    isLive: true
  },
  {
    id: 2,
    title: 'THE DARK KNIGHT',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bg: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Action Movie',
    channel: 'HBO MAX',
    quality: '1080p HD',
    desc: 'ব্যাটম্যান এবং জোকারের মধ্যে একটি মহাকাব্যিক লড়াই। গথাম শহরের অপরাধ দমনে ব্যাটম্যানের সংগ্রাম।',
    tags: ['Action', 'Thriller', '2h 32m'],
    isLive: false
  },
  {
    id: 3,
    title: 'PUSHPA: THE RULE',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bg: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Blockbuster',
    channel: 'STAR GOLD',
    quality: '4K Ultra HD',
    desc: 'পুষ্পার রাজত্ব শুরু। দক্ষিণ ভারতের সবচেয়ে প্রতীক্ষিত অ্যাকশন মুভি এখন আপনার স্ক্রিনে।',
    tags: ['Action', 'Drama', '3h 10m'],
    isLive: false
  },
  {
    id: 4,
    title: 'GAME OF THRONES',
    poster: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bg: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Web Series',
    channel: 'HBO MAX',
    quality: '4K HDR',
    desc: 'উইন্টার ইজ কামিং। সাত রাজ্যের সিংহাসন দখলের লড়াই। দেখুন সব সিজন একসাথে।',
    tags: ['Fantasy', 'Drama', '8 Seasons'],
    isLive: false
  }
];

export default function PreviewPlayer() {
  const [active, setActive] = useState(content[0]);

  return (
    <section className="py-20 relative bg-[#050816]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold font-poppins text-white mb-2">Interactive Preview Player</h2>
          <p className="text-gray-400 font-bengali">যে কোনো কন্টেন্ট হোভার করুন এবং প্রিভিউ দেখুন</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[550px]">
          {/* Left: Posters List */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible lg:w-[220px] shrink-0 pb-4 lg:pb-0 scrollbar-hide">
            {content.map((item) => (
              <div 
                key={item.id}
                onMouseEnter={() => setActive(item)}
                onClick={() => setActive(item)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shrink-0 w-32 lg:w-full lg:h-[125px] border-2 ${active.id === item.id ? 'border-primary shadow-[0_0_20px_rgba(0,229,255,0.4)]' : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/20'}`}
              >
                <img src={item.poster} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                  <h4 className="text-white font-bold text-sm leading-tight line-clamp-2">{item.title}</h4>
                </div>
                {item.isLive && (
                   <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-red-600 px-2 py-0.5 rounded-full text-[9px] font-bold text-white tracking-widest shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
                   </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Large Preview */}
          <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f25] shadow-2xl">
            <AnimatePresence mode='wait'>
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <img src={active.bg} alt={active.title} className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-transparent to-[#050816]/50" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end lg:flex-row lg:items-end lg:justify-between z-10">
               
               {/* Info */}
               <div className="max-w-xl">
                 <AnimatePresence mode='wait'>
                    <motion.div
                      key={`info-${active.id}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {active.isLive && (
                        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded shadow-lg text-xs font-bold mb-4 tracking-wider">
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> LIVE NOW
                        </div>
                      )}
                      
                      <h3 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-3 tracking-tight">
                        {active.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-[13px] text-gray-300 mb-4 font-medium uppercase tracking-wide">
                        {active.tags.map((tag, i) => (
                           <span key={i} className="flex items-center gap-1">
                             {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-500 mr-2"/>}
                             {tag}
                           </span>
                        ))}
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md font-bengali">
                        {active.desc}
                      </p>

                      <div className="flex items-center gap-4">
                        <a href="#download" className="bg-transparent border border-white text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                          <Play className="w-4 h-4 fill-current" /> Watch Now
                        </a>
                        <button className="w-11 h-11 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                 </AnimatePresence>
               </div>

               {/* Meta Details List */}
               <div className="hidden lg:flex flex-col gap-5 mt-8 lg:mt-0 w-[240px] shrink-0">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Tag className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">Category</p>
                      <p className="text-sm font-semibold text-white">{active.category}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Tv className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">Channel</p>
                      <p className="text-sm font-semibold text-white">{active.channel}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">Quality</p>
                      <p className="text-sm font-semibold text-white">{active.quality}</p>
                    </div>
                 </div>
                 
                 <div className="pt-5 mt-2 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-3 font-medium">Sponsored</p>
                    <div className="flex gap-3">
                       <AdBanner type="300x250" className="scale-75 origin-top-left" />
                    </div>
                 </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
