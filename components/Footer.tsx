
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center pb-12 pt-4 flex flex-col gap-2">
      <p className="text-xs text-gray-400 px-8 leading-relaxed">
        Disclaimer: This is a promotional offer for Sri Lanka Independence Day celebration. 
        Offer valid while stocks last. Terms and conditions apply.
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-gray-600">
          Sri Lanka Independence Day Special
        </p>
        <p className="text-[10px] text-gray-400">
          &copy; {new Date().getFullYear()} SL Data Rewards. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
