import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AdminTasks: React.FC = () => (
  <div className="space-y-8 px-4 md:px-12 lg:px-32 py-6">
    <h1 className="text-4xl font-extrabold text-investbot-purple mb-4">Takenbeheer</h1>
    <Card className="rounded-2xl shadow-lg border-0 bg-white/90 mb-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold text-investbot-purple">Takenlijst</CardTitle>
        <Button variant="outline" className="gap-2">
          <Plus size={18} /> Nieuwe Taak
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-gray-600 italic">Er zijn nog geen taken toegevoegd.</div>
      </CardContent>
    </Card>
  </div>
);

export default AdminTasks;
