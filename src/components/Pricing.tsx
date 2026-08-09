import { motion } from 'framer-motion';
import { CheckCircle2, Crown } from 'lucide-react';
import AdBanner from './AdBanner';

const plans = [
  {
    name: 'Free',
    price: '0',
    features: ['Live TV (SD)', 'Limited Movies', '1 Device', 'With Ads'],
    buttonText: 'Get Started',
    highlighted: false
  },
  {
    name: 'Premium',
    price: '299',
    tag: 'Popular',
    features: ['Live TV (HD/4K)', 'Movies & Series', '2 Devices', 'Ad Free'],
    buttonText: 'Get Premium',
    highlighted: true
  },
  {
    name: 'VIP',
    price: '499',
    features: ['All Premium Features', '4 Devices', 'Priority Support', 'All Sports & PPV'],
    buttonText: 'Go VIP',
    highlighted: false,
    vip: true
  }
];

export default function Pricing() {
  return (
    <section className="py-24 relative z-10 bg-[#050816]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
             <h2 className="text-3xl font-bold font-poppins text-white mb-2">Choose Your Plan</h2>
             <p className="text-gray-400 font-bengali mb-6">আপনার জন্য সেরা প্ল্যান নির্ধারণ করুন</p>
             
             <div className="hidden lg:block w-full overflow-hidden rounded-2xl h-[250px]">
                <AdBanner type="300x250" className="w-full h-full scale-[0.8] origin-top" />
             </div>
          </div>
          
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 ${
                  plan.highlighted 
                  ? 'bg-gradient-to-b from-[#1c1438] to-[#0c1226] border border-secondary shadow-[0_0_30px_rgba(123,97,255,0.2)]' 
                  : plan.vip ? 'bg-[#15120a] border border-yellow-500/30' : 'bg-[#0c1226] border border-white/10'
                }`}
              >
                {plan.tag && (
                  <div className="absolute -top-3 left-6 text-green-400 text-[11px] font-bold tracking-widest uppercase">
                    ({plan.tag})
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <div className="flex items-start gap-1">
                    <span className="text-xl font-bold text-white mt-1">৳</span>
                    <span className="text-4xl font-bold text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-400 text-sm mt-3">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className={`w-5 h-5 ${plan.highlighted ? 'text-[#14F195]' : plan.vip ? 'text-yellow-400' : 'text-[#14F195]'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => alert(`আপনি ${plan.name} প্ল্যানটি নির্বাচন করেছেন। পেমেন্ট গেটওয়ে অ্যাড করা হলে এটি কাজ করবে।`)}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.highlighted 
                  ? 'bg-[#A855F7] text-white hover:opacity-90 shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                  : plan.vip 
                  ? 'bg-yellow-600 text-white hover:bg-yellow-500 flex justify-between items-center px-6 shadow-[0_0_15px_rgba(202,138,4,0.3)]'
                  : 'bg-transparent text-white border border-white/20 hover:bg-white/10'
                }`}>
                  {plan.buttonText}
                  {plan.vip && <Crown className="w-5 h-5 fill-current" />}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
