import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#050816]">
      <motion.div 
        animate={{ 
           scale: [1, 1.2, 1],
           opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" 
      />
      
      <motion.div 
        animate={{ 
           scale: [1, 1.5, 1],
           opacity: [0.2, 0.4, 0.2],
           x: [0, 100, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[150px]" 
      />

      <motion.div 
        animate={{ 
           scale: [1, 1.3, 1],
           opacity: [0.1, 0.3, 0.1],
           y: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[100px]" 
      />
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
}
