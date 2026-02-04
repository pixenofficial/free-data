
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-center items-center py-2 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#8d153a] rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">SL</span>
        </div>
        <h1 className="text-xl font-extrabold tracking-tight text-[#8d153a]">
          Independence Day Special
        </h1>
      </div>
    </header>
  );
};

export default Header;
