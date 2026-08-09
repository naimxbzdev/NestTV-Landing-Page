import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Mail, Phone, MessageCircle, Send } from 'lucide-react';

const faqs = [
  { q: 'এই অ্যাপটি কি সম্পূর্ণ ফ্রি?', a: 'আমাদের একটি বেসিক ফ্রি প্ল্যান রয়েছে, তবে প্রিমিয়াম কন্টেন্ট উপভোগ করতে সাবস্ক্রিপশন প্রয়োজন।' },
  { q: 'একই অ্যাকাউন্ট কয়টি ডিভাইসে চালানো যাবে?', a: 'আপনার সাবস্ক্রিপশন প্ল্যানের ওপর নির্ভর করে ১ থেকে ৪টি ডিভাইসে চালানো যাবে।' },
  { q: 'ইন্টারনেট ছাড়াই কি মুভি বা সিরিজ দেখা সম্ভব?', a: 'হ্যাঁ, আপনি আমাদের অ্যাপ থেকে কন্টেন্ট ডাউনলোড করে অফলাইনে দেখতে পারবেন।' },
  { q: 'স্লো ইন্টারনেটে ভিডিও দেখা যাবে?', a: 'হ্যাঁ, আমাদের অ্যাডাপ্টিভ বিটরেট স্ট্রিমিং প্রযুক্তির কারণে স্লো ইন্টারনেটেও বাফার ছাড়া ভিডিও দেখা সম্ভব।' },
  { q: 'লাইভ খেলাধুলা (যেমন: বিশ্বকাপ) কীভাবে দেখবো?', a: 'আমাদের স্পোর্টস ক্যাটাগরিতে সব ধরনের লাইভ খেলা সম্প্রচার করা হয়।' },
  { q: 'যদি কোনো মুভি বা সিরিজ না পাই, তাহলে কী করবো?', a: 'আপনি আমাদের সাপোর্ট টিমের কাছে রিকোয়েস্ট করতে পারেন, আমরা দ্রুত সেটি অ্যাড করার চেষ্টা করবো।' }
];

export default function FAQContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-t from-[#0a0f25]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold font-poppins text-white mb-8">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden border border-white/5">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-gray-200">{faq.q}</span>
                    {openFaq === i ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 text-gray-500 shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 text-sm text-gray-400 border-t border-white/5 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold font-poppins text-white mb-8">আমাদের সাথে যোগাযোগ করুন</h2>
            <div className="grid sm:grid-cols-2 gap-6 h-[calc(100%-4rem)]">
              
              {/* Contact Info */}
              <div className="glass p-6 rounded-2xl flex flex-col justify-center">
                 <h3 className="text-sm font-semibold text-gray-400 mb-6">ডেভেলপার ইনফো</h3>
                 
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Mail className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-xs text-gray-500">Email</p>
                         <p className="text-sm font-medium text-white">mpatoar1@asu.edu</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                          <Phone className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-xs text-gray-500">Phone</p>
                         <p className="text-sm font-medium text-white">01771018390</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                          <MessageCircle className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-xs text-gray-500">WhatsApp</p>
                         <p className="text-sm font-medium text-white">01771018390</p>
                       </div>
                    </div>
                 </div>
                 
                 <button onClick={() => window.open('https://github.com', '_blank')} className="mt-8 w-full py-2.5 rounded-lg border border-white/10 text-sm text-gray-300 hover:bg-white/5 transition-colors">
                   ডেভেলপার প্রোফাইল ভিজিট করুন
                 </button>
              </div>

              {/* Contact Form */}
              <div className="glass p-6 rounded-2xl flex flex-col justify-between">
                 <h3 className="text-lg font-bold text-white mb-6">মেসেজ বক্স</h3>
                 
                 <form className="space-y-4 flex-1 flex flex-col" onSubmit={(e) => { e.preventDefault(); alert("ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।"); }}>
                    <input required type="text" placeholder="আপনার নাম" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" />
                    <input required type="email" placeholder="আপনার ইমেইল" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" />
                    <textarea required placeholder="আপনার মেসেজ লিখুন..." className="w-full flex-1 min-h-[120px] bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"></textarea>
                    
                    <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-black font-bold text-sm hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                       মেসেজ পাঠান <Send className="w-4 h-4" />
                    </button>
                 </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
