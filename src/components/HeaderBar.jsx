import React from 'react';
import { Settings, Phone } from 'lucide-react';

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white font-bold">R</div>
          <div className="leading-tight">
            <h1 className="text-lg font-semibold tracking-tight">RCC Fees — by Suppy</h1>
            <p className="text-xs text-gray-500">Track plans, payments, and reminders</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+910000000000"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-gray-200 hover:bg-gray-50"
            aria-label="Contact"
          >
            <Phone className="h-4 w-4" /> Contact
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-gray-200 hover:bg-gray-50"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
