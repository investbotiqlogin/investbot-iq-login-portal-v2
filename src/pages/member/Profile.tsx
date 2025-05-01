import React from 'react';
import NavBar from '../../components/NavBar';

const mockProfile = {
  name: 'Jan de Vries',
  email: 'jan.devries@email.nl',
  role: 'Member',
  joined: '2024-12-01',
};

const MemberProfile: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 p-6 max-w-lg mx-auto mt-14">
      <h1 className="text-2xl font-bold mb-4">Profiel</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <span className="font-semibold">Naam:</span> {mockProfile.name}
        </div>
        <div>
          <span className="font-semibold">E-mailadres:</span> {mockProfile.email}
        </div>
        <div>
          <span className="font-semibold">Rol:</span> {mockProfile.role}
        </div>
        <div>
          <span className="font-semibold">Lid sinds:</span> {mockProfile.joined}
        </div>
      </div>
    </main>
  </div>
);

export default MemberProfile;
