import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

const AdminNotifications: React.FC = () => (
  <div className="space-y-8 px-4 md:px-12 lg:px-32 py-6">
    <h1 className="text-4xl font-extrabold text-investbot-purple mb-4">Notificaties</h1>
    <Card className="rounded-2xl shadow-lg border-0 bg-white/90 mb-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold text-investbot-purple">Notificatieoverzicht</CardTitle>
        <span className="inline-flex items-center gap-2 text-investbot-purple font-semibold"><Bell size={18} /> Nieuwe Notificatie</span>
      </CardHeader>
      <CardContent>
        <div className="text-gray-600 italic">Er zijn nog geen notificaties toegevoegd.</div>
      </CardContent>
    </Card>
  </div>
);

export default AdminNotifications;
