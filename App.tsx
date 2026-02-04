
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DataForm from './components/DataForm';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Decorative Top Accent */}
      <div className="w-full flag-accent"></div>
      
      <main className="w-full max-w-md md:max-w-2xl lg:max-w-4xl px-4 py-8 flex flex-col gap-8 items-center">
        <Header />
        
        <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <Hero />
          
          <div className="p-6 md:p-10 flex flex-col gap-8">
            <DataForm />
            <hr className="border-gray-100" />
            <InfoSection />
          </div>
        </div>

        <Footer />
      </main>

      {/* Decorative Bottom Accent for Mobile Feel */}
      <div className="fixed bottom-0 left-0 w-full flag-accent z-50"></div>
    </div>
  );
};

export default App;
