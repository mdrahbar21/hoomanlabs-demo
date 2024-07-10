import React from 'react';

const GradientOutlineText: React.FC<{ text: string; size: string; className?: string }> = ({ text, size, className = '' }) => (
  <svg className={`w-full h-auto ${className}`} viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="borderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F80759" />
        <stop offset="100%" stopColor="#920434" stopOpacity={0} />
      </linearGradient>
    </defs>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
          fontSize={size} fontWeight="bold" fill="none" stroke="url(#borderGradient)" 
          strokeWidth="1">
      {text}
    </text>
  </svg>
);

const AutomationStats: React.FC = () => {
  return (
    <div className="text-white p-4 sm:p-6 md:p-12 font-Gilroy md:h-screen">
      <div className="relative mb-8 sm:mb-16">
        <GradientOutlineText text="70%" size="100" className="z-0" />
        <div className="absolute top-auto left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center w-full">
          <h2 className="text-text-tertiary font-semibold mb-1 sm:mb-2 text-xl sm:text-xl md:text-5xl">Automated up to 70% of your daily customer calls</h2>
          <h2 className="text-text-tertiary text-xl sm:text-2xl md:text-5xl"></h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">
        <div className="text-center w-full sm:w-1/2">
          <div className="relative">
            <GradientOutlineText text="60%" size="80" className="h-16 sm:h-20 md:h-24 lg:h-40 z-0 " />
            <h3 className="text-text-tertiary font-semibold text-lg sm:text-xl md:text-3xl -mt-6 md:-mt-14">Cost Saving</h3>
          </div>
        </div>
        <div className="text-center w-full sm:w-1/2">
          <div className="relative">
            <GradientOutlineText text="100%" size="80" className="h-16 sm:h-20 md:h-24 lg:h-40 z-0" />
            <h3 className="font-semibold tracking-wider  text-lg sm:text-xl md:text-3xl -mt-6 md:-mt-14">Available</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationStats;
