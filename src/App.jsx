import React from 'react';
import HeroSection from './components/HeroSection';
import DarkModeToggle from './components/DarkModeToggle';
import GlassKpis from './components/GlassKpis';
import StudentTable from './components/StudentTable';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
      {/* Floating top bar with theme toggle */}
      <div className="fixed left-0 right-0 top-0 z-30 flex items-center justify-end px-4 py-3">
        <DarkModeToggle />
      </div>

      {/* Anime-style hero with Spline */}
      <HeroSection />

      {/* KPI glass cards on dark gradient */}
      <section className="relative -mt-10 sm:-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <GlassKpis />
        </div>
      </section>

      {/* Students preview table (demo data) */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10">
        <div className="mb-3">
          <h2 className="text-xl font-semibold tracking-tight">Students</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Quick view of dues and actions. Full CRUD comes next.</p>
        </div>
        <StudentTable />
      </section>

      <footer className="border-t border-zinc-200/50 dark:border-white/10 py-8 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} RCC Fees — by Suppy
      </footer>
    </div>
  );
}
