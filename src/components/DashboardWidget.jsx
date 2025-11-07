import React from 'react';
import { CalendarDays, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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

export default function DashboardWidget() {
  const dues = [
    { name: 'Aisha Khan', due: 'Today', amount: 3000, status: 'due' },
    { name: 'Rohit Sharma', due: 'Tomorrow', amount: 2500, status: 'due' },
    { name: 'Neha Patel', due: '2 days ago', amount: 2000, status: 'overdue' },
    { name: 'Vikram Singh', due: 'Next Tue', amount: 3000, status: 'partial' },
  ];

  const formatINR = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  const statusBadge = (status) => {
    if (status === 'overdue') return <Badge color="red">Overdue</Badge>;
    if (status === 'partial') return <Badge color="amber">Partial</Badge>;
    return <Badge color="blue">Due</Badge>;
  };

  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Upcoming & Overdue</h3>
          <CalendarDays className="h-4 w-4 text-gray-500" />
        </div>
        <ul className="mt-3 divide-y divide-gray-100">
          {dues.map((d, i) => (
            <li key={i} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium leading-tight">{d.name}</p>
                <p className="text-xs text-gray-500">{d.due}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{formatINR(d.amount)}</span>
                {statusBadge(d.status)}
                <button className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1 text-xs hover:bg-gray-50">
                  <Send className="h-3.5 w-3.5" />
                  Reminder
                </button>
                <button className="inline-flex items-center gap-1 rounded-md bg-green-600 text-white px-2.5 py-1 text-xs hover:bg-green-700">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Collect
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="font-semibold">Plans</h3>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-lg border border-gray-200 p-3">
            <p className="text-xs text-gray-500">Everyday</p>
            <p className="font-semibold">₹3,000/mo</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-3">
            <p className="text-xs text-gray-500">4x Week</p>
            <p className="font-semibold">₹2,500/mo</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-3">
            <p className="text-xs text-gray-500">2x Week</p>
            <p className="font-semibold">₹2,000/mo</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-gray-50 p-3 flex items-start gap-2 text-sm text-gray-700">
          <AlertCircle className="h-4 w-4 text-gray-500 mt-0.5" />
          Billing cycle is monthly. Due date follows the start date day; months without that day use last day.
        </div>
      </div>
    </section>
  );
}
