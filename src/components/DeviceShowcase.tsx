import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, Tv, Laptop, Tablet } from 'lucide-react';

const devices = [
  { id: 'android', icon: Smartphone, label: 'Android', type: 'mobile' },
  { id: 'androidtv', icon: Tv, label: 'Android TV', type: 'tv' },
  { id: 'smarttv', icon: Monitor, label: 'Smart TV', type: 'tv' },
  { id: 'laptop', icon: Laptop, label: 'Laptop', type: 'laptop' },
  { id: 'tablet', icon: Tablet, label: 'Tablet', type: 'tablet' },
  { id: 'iphone', icon: Smartphone, label: 'iPhone', type: 'mobile' },
];

export default function DeviceShowcase() {
  const [activeDevice, setActiveDevice] = useState(devices[0]);

  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-[2rem] font-bold font-poppins text-white mb-2">Watch on Your Favorite Devices</h2>
          <p className="text-gray-400 text-[15px] font-bengali">যে কোনো ডিভাইসে উপভোগ করুন NEST TV</p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start">
          
          {/* Device Selector (Horizontal Boxes) */}
          <div className="w-full xl:w-[45%]">
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {devices.map((device) => (
                 <button
                   key={device.id}
                   onClick={() => setActiveDevice(device)}
                   className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                     activeDevice.id === device.id 
                     ? 'bg-white/[0.05] border-primary shadow-[0_0_20px_rgba(0,229,255,0.15)] ring-1 ring-primary/50' 
                     : 'bg-[#0c1226] border-white/10 hover:border-white/20'
                   }`}
                 >
                   <device.icon strokeWidth={1.5} className={`w-10 h-10 mb-4 transition-colors ${activeDevice.id === device.id ? 'text-primary' : 'text-gray-400'}`} />
                   <span className={`text-[15px] font-medium transition-colors ${activeDevice.id === device.id ? 'text-white font-bold' : 'text-gray-400'}`}>{device.label}</span>
                 </button>
               ))}
             </div>
          </div>

          {/* Device Mockup */}
          <div className="w-full xl:w-[55%] flex justify-center items-center h-full min-h-[400px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeDevice.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex items-center justify-center w-full"
                >
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[80px] rounded-full scale-90 -z-10" />
                   
                   {/* Unified Device Mockup Wrapper */}
                   <div className={`relative shadow-2xl overflow-hidden bg-black ${
                      activeDevice.type === 'mobile' ? 'w-[260px] h-[550px] rounded-[40px] border-[10px] border-gray-800' :
                      activeDevice.type === 'tablet' ? 'w-[500px] h-[360px] rounded-3xl border-[14px] border-gray-800' :
                      'w-full max-w-[700px] aspect-video rounded-xl border-[4px] border-gray-800 border-b-[20px]'
                   }`}>
                      {/* Inner Screen image to mock UI */}
                      <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Screen" className="w-full h-full object-cover opacity-80" />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent mix-blend-multiply" />
                      
                      {/* Fake UI Overlay */}
                      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-auto">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1px]"><div className="w-full h-full bg-black rounded-full" /></div>
                          <span className="font-bold text-white text-xs">NEST TV</span>
                        </div>
                        <div className="mt-auto">
                          <h4 className="text-white font-bold text-xl sm:text-2xl mb-2 tracking-tight">PUSHPA: THE RULE</h4>
                          <div className="flex gap-2">
                             <div className="w-16 sm:w-20 h-24 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm" />
                             <div className="w-16 sm:w-20 h-24 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm" />
                             <div className="w-16 sm:w-20 h-24 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm" />
                          </div>
                        </div>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
