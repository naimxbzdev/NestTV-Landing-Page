import { motion } from 'framer-motion';

const tickerItems = [
  { icon: '🔥', text: 'Now Streaming', type: 'label' },
  { icon: '🔴', text: 'LIVE: FIFA World Cup 2026', type: 'live' },
  { icon: '🏏', text: 'BAN vs IND Live Today', type: 'sports' },
  { icon: '🎬', text: 'New Bangla Movie: Priyotoma 2', type: 'movie' },
  { icon: '🔥', text: 'Hot Series: Money Heist S05', type: 'series' },
  { icon: '🥊', text: 'UFC 308 Live', type: 'sports' },
];

export default function Ticker() {
  return (
    <div className="w-full bg-[#0c1226] border-y border-white/[0.05] py-3.5 relative overflow-hidden shadow-lg">
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-10 pr-10"
        >
          {/* Double the items for seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-2.5 text-sm font-medium">
              <span className={item.type === 'label' ? 'text-primary' : 'text-gray-300'}>
                {item.icon}
              </span>
              <span className={item.type === 'label' ? 'text-white font-bold' : 'text-gray-300 hover:text-white transition-colors cursor-pointer font-semibold tracking-wide'}>
                {item.text}
              </span>
              {index !== tickerItems.length * 2 - 1 && (
                 <span className="text-gray-600 ml-10 flex items-center justify-center">
                   <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                     <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
