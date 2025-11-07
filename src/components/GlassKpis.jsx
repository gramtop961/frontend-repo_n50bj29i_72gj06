import React from 'react';
import { Users, CalendarClock, AlertTriangle, IndianRupee } from 'lucide-react';

const Glass = ({ children }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/30 backdrop-blur">
    {children}
  </div>
);

const Item = ({ icon: Icon, label, value, sub }) => (
  <Glass>
    <div className="flex items-center gap-2 text-zinc-300">
      <Icon className="h-4 w-4" />
      <span className="text-xs uppercase tracking-wide">{label}</span>
    </div>
    <div className="mt-2 flex items-baseline gap-2">
      <span className="text-2xl font-semibold text-white">{value}</span>
      {sub && <span className="text-xs text-zinc-400">{sub}</span>}
    </div>
  </Glass>
);

export default function GlassKpis() {
  const formatINR = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      <Item icon={Users} label="Students" value={42} />
      <Item icon={CalendarClock} label="Due this week" value={9} />
      <Item icon={AlertTriangle} label="Overdue" value={3} />
      <Item icon={IndianRupee} label="Collected" value={formatINR(75000)} />
      <Item icon={IndianRupee} label="Outstanding" value={formatINR(18000)} />
    </div>
  );
}
