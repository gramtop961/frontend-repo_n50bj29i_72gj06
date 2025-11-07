import React from 'react';
import HeaderBar from './components/HeaderBar';
import KpiCards from './components/KpiCards';
import DashboardWidget from './components/DashboardWidget';
import StudentTable from './components/StudentTable';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <HeaderBar />
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section className="pt-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold">Dashboard</h2>
              <p className="text-sm text-gray-500">Mobile-first overview of students, dues, and collections</p>
            </div>
            <div className="hidden sm:block text-xs text-gray-500">Timezone: Asia/Kolkata • Currency: INR</div>
          </div>
          <div className="mt-4">
            <KpiCards />
          </div>
          <DashboardWidget />
          <StudentTable />
        </section>
      </main>
      <footer className="py-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} RCC Fees — by Suppy</footer>
    </div>
  );
}
