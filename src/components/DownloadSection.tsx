import { motion } from 'framer-motion';
import { Download, QrCode, HardDrive, Play } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import AdBanner from './AdBanner';

const mockScreens = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
];

export default function DownloadSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        if(emblaApi.canScrollNext()) {
            emblaApi.scrollNext();
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: App Screens Slider */}
          <div className="glass p-8 rounded-[2rem] h-full flex flex-col">
            <h3 className="text-2xl font-bold font-poppins text-white mb-2">App Screens Demo</h3>
            <p className="text-gray-400 text-sm mb-8">অ্যাপের ইন্টারফেস এক নজরে</p>
            
            <div className="relative flex-1 flex items-center">
               <div className="overflow-hidden w-full" ref={emblaRef}>
                 <div className="flex gap-4 cursor-grab active:cursor-grabbing">
                   {mockScreens.map((src, i) => (
                     <div key={i} className="flex-[0_0_45%] sm:flex-[0_0_35%] lg:flex-[0_0_45%] min-w-0">
                       <div className="w-full aspect-[9/19] rounded-[2rem] border-[6px] border-gray-800 bg-black overflow-hidden relative shadow-xl">
                          <img src={src} alt="App Screen" className="w-full h-full object-cover opacity-80" />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
               
               {/* Gradients to hide edges */}
               <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#050816]/80 to-transparent pointer-events-none" />
               <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#050816]/80 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Download Card */}
          <div className="glass p-8 rounded-[2rem] relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
             <div className="relative z-10">
                
                <h3 className="text-3xl font-bold font-poppins text-white mb-8">Download NEST TV App</h3>
                
                <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
                   <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-[2px]">
                      <div className="w-full h-full bg-[#0a0f25] rounded-2xl flex items-center justify-center">
                         <Play className="w-10 h-10 text-primary" fill="currentColor"/>
                      </div>
                   </div>
                   
                   <div className="flex-1 text-center sm:text-left">
                     <p className="text-xl font-bold text-white mb-1">v2.4.0 <span className="text-xs text-gray-400 font-normal bg-white/10 px-2 py-0.5 rounded ml-2">Latest</span></p>
                     <p className="text-sm text-gray-400 mb-1">Size: 25MB <span className="mx-2">|</span> Android 7+</p>
                     <p className="text-sm text-gray-400 mb-1">Last Update: July 15, 2026</p>
                     <p className="text-sm font-medium text-primary">Downloads: 150,000+</p>
                   </div>
                   
                   <div className="w-28 h-28 bg-white p-2 rounded-xl shrink-0 flex items-center justify-center">
                      <QrCode className="w-full h-full text-black" />
                   </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <button onClick={() => alert("ডাউনলোড শুরু হচ্ছে...")} className="col-span-1 sm:col-span-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" /> Download APK
                  </button>
                  <button onClick={() => alert("Google Drive এ রিডাইরেক্ট করা হচ্ছে...")} className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#34A853]" /> Google Drive
                  </button>
                  <button onClick={() => alert("MediaFire এ রিডাইরেক্ট করা হচ্ছে...")} className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#1299F3]" /> MediaFire
                  </button>
                </div>
                
                <div className="mt-6 w-full flex justify-center rounded-xl overflow-hidden">
                   <AdBanner type="320x50" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
