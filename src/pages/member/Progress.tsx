import React from 'react';
import NavBar from '../../components/NavBar';

const mockProgress = [
  { id: 1, label: 'Profiel ingevuld', value: 100 },
  { id: 2, label: 'Documenten geüpload', value: 60 },
  { id: 3, label: 'Taken voltooid', value: 75 },
  { id: 4, label: 'Referrals uitgenodigd', value: 20 },
];

const MemberProgress: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 p-6 max-w-xl mx-auto mt-14">
      <h1 className="text-2xl font-bold mb-4">Voortgang</h1>
      <ul className="space-y-6">
        {mockProgress.map(progress => (
          <li key={progress.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{progress.label}</span>
              <span className="text-sm text-gray-500">{progress.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-investbot-purple h-3 rounded-full transition-all"
                style={{ width: `${progress.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default MemberProgress;
