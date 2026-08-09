import { Facebook, Youtube, Send, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02040a] pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <span className="font-poppins font-bold text-black">N</span>
              </div>
              <span className="font-space font-bold text-xl tracking-wider text-white">NEST TV</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              বাংলাদেশের সেরা প্রিমিয়াম IPTV স্ট্রিমিং প্ল্যাটফর্ম। লাইভ টিভি, মুভিজ, সিরিজ এবং স্পোর্টস উপভোগ করুন যেকোনো সময়, যেকোনো জায়গায়।
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#live-tv" className="text-sm text-gray-400 hover:text-primary transition-colors">Live TV</a></li>
              <li><a href="#features" className="text-sm text-gray-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#download" className="text-sm text-gray-400 hover:text-primary transition-colors">Download</a></li>
              <li><a href="#pricing" className="text-sm text-gray-400 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#faq-contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {['FAQ', 'How to Install', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-3">
               <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                 <Facebook className="w-5 h-5 fill-current" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                 <Youtube className="w-5 h-5 fill-current" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                 <Send className="w-5 h-5 fill-current" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                 <Instagram className="w-5 h-5" />
               </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
           <p>© 2026 NEST TV. All Right Reserved.</p>
           <p className="mt-2 md:mt-0">Made with <span className="text-red-500 animate-pulse">❤️</span> by Naim Xbz</p>
        </div>
      </div>
    </footer>
  );
}
