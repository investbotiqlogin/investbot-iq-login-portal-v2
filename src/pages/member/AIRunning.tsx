import OrbBackground from '../../components/OrbBackground';
import React from 'react';
import NavBar from '../../components/NavBar';

const MemberAIRunning: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 relative min-h-[70vh] flex flex-col items-center justify-center mt-14">
      <OrbBackground />
      <div className="relative z-10 w-full max-w-lg mx-auto bg-white/90 rounded-xl shadow-xl p-8 flex flex-col items-center">
        <div className="mb-6 animate-spin-slow">
          <div className="mx-auto mb-4 w-32 h-32 rounded-full bg-gradient-to-br from-investbot-purple via-investbot-indigo to-investbot-pink flex items-center justify-center animate-pulse-glow">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="45" cy="45" r="42" stroke="#8B5CF6" strokeWidth="6" opacity="0.35" />
              <circle cx="45" cy="45" r="30" stroke="#6366F1" strokeWidth="6" opacity="0.45" />
              <circle cx="45" cy="45" r="18" stroke="#EC4899" strokeWidth="6" opacity="0.7" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-investbot-purple to-investbot-indigo">
          IQ Bot
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          IQ Bot beheert automatisch jouw financiële groei.<br />
          Geen handmatige acties vereist.
        </p>
        <ul className="text-base text-gray-600 mb-8 space-y-2">
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Verwerkt jouw huidige tier
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
            Beheert cashflow van actieve spirits
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-500"></span>
            Volgende spirit activatie binnen 2 maanden
          </li>
        </ul>
        <div className="w-full">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">IQ Status</span>
            <span className="text-sm font-semibold text-green-600">Actief</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 animate-pulse-glow">
            <div className="bg-gradient-to-r from-investbot-purple to-investbot-pink h-4 rounded-full animate-progress-bar" style={{ width: '85%' }} />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MemberAIRunning;
