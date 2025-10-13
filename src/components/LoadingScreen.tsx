import React from 'react';
import portfolioData from '../data/portfolio.json';


const LoadingScreen: React.FC = () => (
  <>
    <style>
      {`
        .crt-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10000;

          /* Bold grey scanlines: 2px dark grey every 4px */
          background: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 2px,
            rgba(80, 80, 80, 0.25) 2px,   /* medium grey */
            rgba(80, 80, 80, 0.25) 4px
          );

          /* Blocky noise for "pixel" texture (larger grain) */
          background-image: 
            repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 2px,
              rgba(80, 80, 80, 0.25) 2px,
              rgba(80, 80, 80, 0.25) 4px
            ),
            background-image: repeating-linear-gradient(...), url("/images/noise.svg");        
          }
      `}
    </style>

    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <img src="/images/xp-loading.png" alt="Logo" className="h-[15%]" draggable={false} />
      <div className="flex items-end">
        <span className="font-franklin text-5xl font-semibold text-[#eeeeee]">{portfolioData.loadingScreen.name}</span>
        <span className="font-franklin text-[#ff701d] text-3xl font-bold ml-2 mb-5">{portfolioData.loadingScreen.lastname}</span>
      </div>
      <div className="mt-20">
        <img
          src="/images/initial-loading.gif"
          alt="bar-loading"
          draggable={false}
          className="h-6"
        />
      </div>
    </div>

    <div className="crt-overlay" />
  </>
);

export default LoadingScreen;
