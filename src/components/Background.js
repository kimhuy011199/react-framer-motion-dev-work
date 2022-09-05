import React from 'react';

const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0 block overflow-hidden">
      <div className="absolute left-[-25%] top-[17%] bottom-[15%] w-[150%] rotate-12 border-y border-white/5">
        <div className="absolute top-[-1.5px] right-[calc(50%+26rem)] mr-6 h-[2px] w-28 rounded-full bg-gradient-to-l from-blue-500"></div>
        <div className="absolute bottom-[-1.5px] right-[calc(50%+10rem)] h-[2px] w-28 rounded-full bg-gradient-to-l from-sky-400"></div>
      </div>
      <div className="absolute left-[-25%] top-[60%] h-px w-[150%] rotate-12 bg-white/5">
        <div className="absolute top-[-0.5px] left-[calc(50%+29rem)] h-[2px] w-28 rounded-full bg-gradient-to-l from-violet-400 xl:left-[calc(50%+31rem)]"></div>
      </div>
      <div className="absolute left-[calc(50%+26rem)] top-[-25%] h-[150%] w-px rotate-12 bg-white/5"></div>
      <div className="absolute right-[calc(50%+26rem)] top-[-25%] h-[150%] w-px rotate-12 bg-white/5"></div>
    </div>
  );
};

export default Background;
