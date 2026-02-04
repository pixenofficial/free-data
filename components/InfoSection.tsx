
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-sm font-bold text-gray-800">මෙය සීමිත කාලයකට පමණක් වලංගු වේ</p>
        <p className="text-[10px] text-gray-500">Hurry before it expires!</p>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm font-bold text-gray-800">100% Mobile Friendly</p>
        <p className="text-[10px] text-gray-500">Works on all devices</p>
      </div>
    </div>
  );
};

export default InfoSection;
