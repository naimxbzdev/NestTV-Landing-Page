import { useEffect, useRef } from 'react';

type AdType = '300x250' | '728x90' | '320x50';

const AD_CONFIG = {
  '300x250': { key: '70da6dbee8b97f787522a1bc1c225734', width: 300, height: 250 },
  '728x90': { key: 'ee8fb5a34c7fc5fbe80b09733e600d7e', width: 728, height: 90 },
  '320x50': { key: '6f51ab39b0de8c3ab26f74b514c257c0', width: 320, height: 50 },
};

export default function AdBanner({ type, className = '' }: { type: AdType, className?: string }) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const config = AD_CONFIG[type];

  useEffect(() => {
    if (!bannerRef.current) return;
    
    // Clear previous ad to prevent duplicates in React StrictMode
    bannerRef.current.innerHTML = '';

    const confScript = document.createElement('script');
    confScript.type = 'text/javascript';
    confScript.innerHTML = `
      atOptions = {
        'key' : '${config.key}',
        'format' : 'iframe',
        'height' : ${config.height},
        'width' : ${config.width},
        'params' : {}
      };
    `;

    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = `//www.highperformanceformat.com/${config.key}/invoke.js`;
    invokeScript.async = true;
    
    bannerRef.current.appendChild(confScript);
    bannerRef.current.appendChild(invokeScript);
  }, [type, config]);

  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      <div 
        ref={bannerRef} 
        className="ad-container relative rounded-2xl flex items-center justify-center overflow-hidden z-10 w-full h-full" 
        style={{ minWidth: config.width, minHeight: config.height }}
      >
      </div>
    </div>
  );
}

export function ResponsiveAdBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="hidden md:block">
        <AdBanner type="728x90" />
      </div>
      <div className="block md:hidden">
        <AdBanner type="320x50" />
      </div>
    </div>
  );
}
