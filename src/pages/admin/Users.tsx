import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const AdminUsers: React.FC = () => (
  <div className="space-y-8 px-4 md:px-12 lg:px-32 py-6">
    <h1 className="text-4xl font-extrabold text-investbot-purple mb-4">Gebruikersbeheer</h1>
    <Card className="rounded-2xl shadow-lg border-0 bg-white/90 mb-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold text-investbot-purple">Gebruikersoverzicht</CardTitle>
        <Button variant="outline" className="gap-2">
          <Users size={18} /> Nieuwe Gebruiker
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-gray-600 italic">Er zijn nog geen gebruikers toegevoegd.</div>
      </CardContent>
    </Card>
  </div>
);

export default AdminUsers;
