
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-56 md:h-72 overflow-hidden">
      {/* Image Background */}
      <img 
        src="https://picsum.photos/id/111/1200/600" 
        alt="Sri Lanka Independence Day" 
        className="w-full h-full object-cover brightness-[0.4]"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-[#8d153a]/80 to-transparent">
        <div className="bg-yellow-400 text-[#8d153a] px-3 py-1 rounded-full text-xs font-bold mb-4 animate-bounce">
          LIMITED OFFER 🇱🇰
        </div>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
          ශ්‍රී ලංකා නිදහස් දිනයට <br />
          <span className="text-yellow-400">FREE 3GB Data!</span>
        </h2>
        <p className="text-gray-200 text-sm md:text-lg max-w-sm">
          ඔබගේ phone number එක ඇතුළත් කර FREE 3GB data ලබාගන්න
        </p>
      </div>
    </div>
  );
};

export default Hero;
