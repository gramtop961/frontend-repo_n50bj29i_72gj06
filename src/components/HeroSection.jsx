import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[68vh] sm:min-h-[78vh] w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-900 text-zinc-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glows and gradient layers (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-20 -top-20 h-64 bg-gradient-to-b from-purple-600/20 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 -bottom-20 h-64 bg-gradient-to-t from-fuchsia-600/10 to-transparent blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto max-w-6xl px-4 pt-20 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live demo • Cyberpunk theme
        </span>
        <h1 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight tracking-tight">
          RCC Fees — by Suppy
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-prose">
          Track student plans, due dates, and collections with a sleek, anime-inspired, dark UI. Automated reminders, quick collection, and clean reports — all in one place.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <Rocket className="h-4 w-4" /> Add Student
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <Play className="h-4 w-4" /> View Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}
