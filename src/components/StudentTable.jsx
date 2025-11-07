import React, { useMemo, useState } from 'react';
import { Search, Filter, ChevronRight, Send, Download } from 'lucide-react';

const sampleStudents = [
  { id: 'S001', name: 'Aisha Khan', phone: '9876543210', plan: 'Everyday', fee: 3000, due: '2025-11-10', status: 'Active', dueStatus: 'Due' },
  { id: 'S002', name: 'Rohit Sharma', phone: '9876500000', plan: '4x Week', fee: 2500, due: '2025-11-08', status: 'Active', dueStatus: 'Due' },
  { id: 'S003', name: 'Neha Patel', phone: '9876511111', plan: '2x Week', fee: 2000, due: '2025-11-05', status: 'Active', dueStatus: 'Overdue' },
  { id: 'S004', name: 'Vikram Singh', phone: '9876522222', plan: 'Everyday', fee: 3000, due: '2025-11-14', status: 'Paused', dueStatus: 'Partial' },
];

const Badge = ({ children, color = 'gray' }) => {
  const colors = {
    gray: 'bg-gray-100 text-gray-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    blue: 'bg-blue-100 text-blue-700',
    amber: 'bg-amber-100 text-amber-800',
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[color]}`}>{children}</span>
  );
};

const formatDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });

export default function StudentTable() {
  const [query, setQuery] = useState('');
  const [filterPlan, setFilterPlan] = useState('all');
  const [filterDue, setFilterDue] = useState('all');

  const filtered = useMemo(() => {
    return sampleStudents.filter((s) => {
      const matchesQuery = [s.name, s.phone, s.plan].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesPlan = filterPlan === 'all' || s.plan === filterPlan;
      const matchesDue = filterDue === 'all' || s.dueStatus.toLowerCase() === filterDue;
      return matchesQuery && matchesPlan && matchesDue;
    });
  }, [query, filterPlan, filterDue]);

  const formatINR = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, phone, plan..."
              className="w-full rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select value={filterPlan} onChange={(e) => setFilterPlan(e.target.value)} className="rounded-md border border-gray-200 px-2 py-2 text-sm">
            <option value="all">All Plans</option>
            <option>Everyday</option>
            <option>4x Week</option>
            <option>2x Week</option>
          </select>
          <select value={filterDue} onChange={(e) => setFilterDue(e.target.value)} className="rounded-md border border-gray-200 px-2 py-2 text-sm">
            <option value="all">All Due Status</option>
            <option value="due">Due</option>
            <option value="overdue">Overdue</option>
            <option value="partial">Partial</option>
          </select>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
            <Send className="h-4 w-4" /> Send reminders
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto -mx-4 sm:mx-0">
        <table className="min-w-full text-sm">
          <thead className="text-left text-xs text-gray-500">
            <tr>
              <th className="px-4 py-2 font-medium">Student</th>
              <th className="px-4 py-2 font-medium">Phone</th>
              <th className="px-4 py-2 font-medium">Plan</th>
              <th className="px-4 py-2 font-medium">Monthly</th>
              <th className="px-4 py-2 font-medium">Next Due</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50/60">
                <td className="px-4 py-3">
                  <div className="font-medium leading-tight">{s.name}</div>
                  <div className="text-xs text-gray-500">ID {s.id}</div>
                </td>
                <td className="px-4 py-3">{s.phone}</td>
                <td className="px-4 py-3">{s.plan}</td>
                <td className="px-4 py-3">{formatINR(s.fee)}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2 py-0.5 text-xs">
                    {formatDate(s.due)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {s.dueStatus === 'Overdue' && <Badge color="red">Overdue</Badge>}
                  {s.dueStatus === 'Due' && <Badge color="blue">Due</Badge>}
                  {s.dueStatus === 'Partial' && <Badge color="amber">Partial</Badge>}
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="inline-flex items-center gap-1 rounded-md bg-green-600 text-white px-2.5 py-1 text-xs hover:bg-green-700">
                    Collect <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
