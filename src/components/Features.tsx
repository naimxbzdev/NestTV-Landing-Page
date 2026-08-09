import { motion } from 'framer-motion';
import { MonitorPlay, Ban, DownloadCloud, MonitorSmartphone, Zap, Headphones } from 'lucide-react';
import AdBanner from './AdBanner';

const features = [
  { icon: MonitorPlay, title: '৪কে আল্ট্রা এইচডি', desc: 'সর্বোচ্চ মানের রেজোলিউশনে স্ট্রিমিং করে উপভোগ করুন সেরা দৃশ্য।' },
  { icon: Ban, title: 'সম্পূর্ণ বিজ্ঞাপনহীন', desc: 'কোনো বিরক্তিকর বিজ্ঞাপন ছাড়াই একটানা কন্টেন্ট উপভোগ করুন।' },
  { icon: DownloadCloud, title: 'অফলাইন ডাউনলোড', desc: 'ইন্টারনেট ছাড়াই যেকোনো স্থানে অফলাইন কন্টেন্ট উপভোগ করুন।' },
  { icon: MonitorSmartphone, title: 'মাল্টি-ডিভাইস সাপোর্ট', desc: 'স্মার্ট টিভি, মোবাইল, ল্যাপটপ যেকোনো স্ক্রিনে স্ট্রিম করুন।' },
  { icon: Zap, title: 'ফাস্ট ও স্মুথ স্ট্রিমিং', desc: 'আমাদের উচ্চ ক্ষমতাসম্পন্ন সার্ভার দ্বারা ল্যাগ-ফ্রি স্ট্রিমিং।' },
  { icon: Headphones, title: '২৪/৭ কাস্টমার সাপোর্ট', desc: 'যেকোনো সমস্যার সমাধানে আমাদের এক্সপার্ট টিম সর্বদা প্রস্তুত।' },
];

export default function Features() {
  return (
    <section className="py-24 relative z-10 bg-[#050816]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-[2rem] font-bold font-bengali text-white mb-3">আমাদের প্রিমিয়াম ফিচারসমূহ</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 4).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer flex items-start gap-5"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <feature.icon className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-bengali text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-bengali pr-2">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
          
          <div className="glass-card rounded-2xl flex items-center justify-center overflow-hidden min-h-[150px]">
             <AdBanner type="300x250" className="scale-90 transform-origin-center mix-blend-screen" />
          </div>

          {features.slice(4).map((feature, index) => (
            <motion.div
              key={index + 5}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 5) * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer flex items-start gap-5"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <feature.icon className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-bengali text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-bengali pr-2">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
