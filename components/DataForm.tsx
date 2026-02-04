
import React, { useState } from 'react';

const MONETAG_LINK = "https://otieu.com/4/10218707";

const DataForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Sri Lankan Phone Validation (07XXXXXXXX)
    const slPhoneRegex = /^(07[01245678]\d{7})$/;
    
    if (!phoneNumber) {
      setError('කරුණාකර දුරකථන අංකය ඇතුළත් කරන්න');
      return;
    }

    if (!slPhoneRegex.test(phoneNumber.replace(/\s/g, ''))) {
      setError('වලංගු දුරකථන අංකයක් ඇතුළත් කරන්න (Ex: 07X XXX XXXX)');
      return;
    }

    setError('');
    
    // Open the monetization link in a new tab as requested
    window.open(MONETAG_LINK, '_blank');
    
    // UI Feedback (optional)
    alert("ඔබේ දත්ත දීමනාව සැකසෙමින් පවතී. කරුණාකර විවෘත වූ පිටුවෙහි රැඳී සිටින්න.");
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <form onSubmit={handleClaim} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">
            Phone Number (දුරකථන අංකය)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="07X XXX XXXX"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              if(error) setError('');
            }}
            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all outline-none text-lg ${
              error ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#8d153a] focus:ring-4 focus:ring-[#8d153a]/10'
            }`}
          />
          {error && <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#8d153a] hover:bg-[#7a1232] text-white font-bold text-xl rounded-2xl shadow-xl shadow-[#8d153a]/20 transform active:scale-95 transition-all flex items-center justify-center gap-2 group"
        >
          <span>3GB Data ලබාගන්න</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </form>
      
      <p className="text-center text-xs text-gray-500 italic">
        * No verification required. Immediate activation.
      </p>
    </div>
  );
};

export default DataForm;
