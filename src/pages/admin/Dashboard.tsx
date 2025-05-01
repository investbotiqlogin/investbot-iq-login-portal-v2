import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for charts
const userActivityData = [
  { name: 'Ma', active: 40, new: 5 },
  { name: 'Di', active: 35, new: 3 },
  { name: 'Wo', active: 42, new: 4 },
  { name: 'Do', active: 38, new: 6 },
  { name: 'Vr', active: 45, new: 7 },
  { name: 'Za', active: 20, new: 2 },
  { name: 'Zo', active: 15, new: 1 },
];

const userRolesData = [
  { name: 'Member', value: 45 },
  { name: 'Student', value: 20 },
  { name: 'Ouder', value: 15 },
  { name: 'Freelancer', value: 10 },
  { name: 'Ondernemer', value: 25 },
  { name: 'Affiliated', value: 5 },
];

const COLORS = ['#a786ff', '#cbb9f7', '#ede7fa', '#7E69AB', '#4F46E5', '#D6BCFA'];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Accentlijn bovenaan */}
      <div className="h-2 w-full bg-gradient-to-r from-[#ede7fa] via-[#a786ff] to-[#cbb9f7] rounded-t-xl mb-2" />
      <h1 className="text-4xl font-extrabold text-investbot-purple mb-2">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0 bg-white/90">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-investbot-purple">Actieve Gebruikers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-gray-900" data-component-name="AdminDashboard">50 / 200</div>
            <p className="text-xs text-green-500 flex items-center mt-1 font-medium">
              +15 deze maand
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0 bg-white/90">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-investbot-purple">Totale Cashflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-gray-900">€0,-</div>
            <p className="text-xs text-green-500 flex items-center mt-1 font-medium">
              +12% t.o.v. vorige maand
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0 bg-white/90">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-investbot-purple">Nieuwe Registraties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-gray-900">28</div>
            <p className="text-xs text-green-500 flex items-center mt-1 font-medium">
              +8 sinds vorige week
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0 bg-white/90">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-investbot-purple">Notificaties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-gray-900">3</div>
            <p className="text-xs text-amber-500 flex items-center mt-1 font-medium">
              Actie vereist
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="col-span-1 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#ede7fa] via-[#fff] to-[#cbb9f7]">
          <CardHeader>
            <CardTitle className="text-investbot-purple font-bold">Gebruikersactiviteit</CardTitle>
            <CardDescription className="text-gray-600">Actieve gebruikers en nieuwe registraties per dag</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ede7fa" />
                <XAxis dataKey="name" tick={{ fill: '#a786ff', fontWeight: 600 }} />
                <YAxis tick={{ fill: '#a786ff', fontWeight: 600 }} />
                <Tooltip />
                <Bar dataKey="active" name="Actieve gebruikers" fill="#a786ff" radius={[8, 8, 0, 0]} />
                <Bar dataKey="new" name="Nieuwe registraties" fill="#cbb9f7" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#ede7fa] via-[#fff] to-[#cbb9f7]">
          <CardHeader>
            <CardTitle className="text-investbot-purple font-bold">Gebruikersrollen</CardTitle>
            <CardDescription className="text-gray-600">Verdeling van gebruikers per rol</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userRolesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#a786ff"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userRolesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
