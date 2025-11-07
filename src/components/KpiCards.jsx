import React from 'react';
import { Users, CalendarClock, AlertTriangle, IndianRupee } from 'lucide-react';

const Card = ({ icon: Icon, label, value, sub }) => (
  <div className="flex-1 min-w-[150px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <div className="flex items-center gap-2 text-gray-500">
      <Icon className="h-4 w-4" />
      <span className="text-xs uppercase tracking-wide">{label}</span>
    </div>
    <div className="mt-2 flex items-baseline gap-2">
      <span className="text-2xl font-semibold">{value}</span>
      {sub && <span className="text-xs text-gray-500">{sub}</span>}
    </div>
  </div>
);

export default function KpiCards({ stats }) {
  const {
    totalStudents = 10,
    dueThisWeek = 4,
    overdue = 2,
    collectedThisMonth = 42000,
    outstanding = 18000,
  } = stats || {};

  const formatINR = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      <Card icon={Users} label="Students" value={totalStudents} />
      <Card icon={CalendarClock} label="Due this week" value={dueThisWeek} />
      <Card icon={AlertTriangle} label="Overdue" value={overdue} />
      <Card icon={IndianRupee} label="Collected" value={formatINR(collectedThisMonth)} />
      <Card icon={IndianRupee} label="Outstanding" value={formatINR(outstanding)} />
    </section>
  );
}
