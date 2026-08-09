import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

// Extend WindowEventMap for beforeinstallprompt
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>;
  prompt(): Promise<void>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Update UI notify the user they can install the PWA
      setShowPrompt(true);
    };

    const handleAppInstalled = () => {
      // Clear the deferredPrompt so it can be garbage collected
      setDeferredPrompt(null);
      // Hide the install button
      setShowPrompt(false);
      console.log('PWA was installed successfully');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // For debugging/demo purposes in the AI Studio environment, we can artificially show it 
    // if we want, but it's best to stick to standard PWA behavior.

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response to the install prompt: ${outcome}`);
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-8 sm:w-[380px] z-[100] glass p-4 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-4"
        >
          <button 
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-secondary p-[1px] shrink-0">
            <div className="w-full h-full bg-[#0a0f25] rounded-xl flex items-center justify-center">
              <span className="font-poppins font-bold text-xl text-white">N</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-0 pr-4">
            <h4 className="text-white font-bold text-sm truncate tracking-wide">Install NEST TV</h4>
            <p className="text-xs text-gray-400 truncate">Add to home screen for quick access</p>
          </div>
          
          <button 
            onClick={handleInstallClick}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-black font-bold text-xs hover:opacity-90 transition-opacity shrink-0 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            <Download className="w-3.5 h-3.5" /> Install
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
