import React from 'react';
import NavBar from '../../components/NavBar';

const mockTasks = [
  { id: 1, title: 'Vul je profiel aan', description: 'Voeg je persoonlijke gegevens toe aan je profiel.' },
  { id: 2, title: 'Upload een document', description: 'Upload een belangrijk document voor je account.' },
  { id: 3, title: 'Voltooi je eerste taak', description: 'Rond je eerste taak af om punten te verdienen.' },
  { id: 4, title: 'Nodig een vriend uit', description: 'Nodig iemand uit voor InvestbotIQ en ontvang een beloning.' },
];

const MemberTasks: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 p-6 mt-14">
      <h1 className="text-2xl font-bold mb-2">Member Tasks</h1>
      <ul className="space-y-4">
        {mockTasks.map(task => (
          <li key={task.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="font-semibold text-lg">{task.title}</div>
            <div className="text-gray-600">{task.description}</div>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default MemberTasks;
