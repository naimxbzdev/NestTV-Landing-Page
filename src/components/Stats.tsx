import { Users, Tv, Film, PlaySquare, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, value: '10K+', label: 'Happy Users', color: '#00E5FF', bg: 'rgba(0,229,255,0.1)' },
  { icon: Tv, value: '500+', label: 'Live Channels', color: '#7B61FF', bg: 'rgba(123,97,255,0.1)' },
  { icon: Film, value: '8000+', label: 'Movies', color: '#A855F7', bg: 'rgba(168,85,247,0.1)' },
  { icon: PlaySquare, value: '1200+', label: 'Web Series', color: '#D946EF', bg: 'rgba(217,70,239,0.1)' },
  { icon: Activity, value: '99.99%', label: 'Server Uptime', color: '#14F195', bg: 'rgba(20,241,149,0.1)' },
];

export default function Stats() {
  return (
    <section className="py-8 border-y border-white/5 bg-[#050816]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 flex-1 min-w-[180px] justify-center md:justify-start"
            >
              <div 
                className="w-[3.5rem] h-[3.5rem] rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                style={{ backgroundColor: stat.bg }}
              >
                <stat.icon size={28} color={stat.color} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white leading-tight">{stat.value}</h4>
                <p className="text-[13px] text-gray-400 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
