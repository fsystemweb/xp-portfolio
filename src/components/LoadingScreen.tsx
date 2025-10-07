import React from 'react';

const LoadingScreen: React.FC = () => (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
        <img
            src="/images/xp-loading.png"
            alt="Logo"
            className="h-[15%]"
            draggable={false}
        />
        <div className="flex items-end">
            <span className="font-franklin text-5xl font-semibold text-[#eeeeee]">James</span>
            <span className="font-franklin text-[#ff701d] text-3xl font-bold ml-2 mb-5">lewis</span>
        </div>
        <div className="mt-20">
            <img
                src="/images/initial-loading.gif"
                alt="bar-loading"
                draggable={false}
                className='h-6'
            />
        </div>
    </div>
);

export default LoadingScreen;
