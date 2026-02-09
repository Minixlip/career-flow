'use client';

import { Toaster as Sonner, type ToasterProps } from 'sonner';

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      closeButton
      expand
      visibleToasts={4}
      offset={20}
      position="top-center"
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'group toast flex items-center gap-3 rounded-2xl border border-white/60 bg-primary-foreground/80 px-4 py-3 text-slate-700 shadow-[0_20px_45px_-22px_rgba(76,96,188,0.65)] backdrop-blur-md',
          title: 'text-sm font-semibold text-slate-700',
          description: 'text-sm text-slate-500',
          error:
            'border border-rose-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,236,242,0.92))] text-rose-700 shadow-[0_20px_45px_-22px_rgba(190,67,108,0.45)]',
          success:
            'border border-emerald-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(232,255,242,0.92))] text-emerald-700 shadow-[0_20px_45px_-22px_rgba(44,140,95,0.45)]',
          info:
            'border border-sky-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(232,245,255,0.92))] text-sky-700 shadow-[0_20px_45px_-22px_rgba(56,123,197,0.45)]',
          warning:
            'border border-amber-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,247,224,0.92))] text-amber-700 shadow-[0_20px_45px_-22px_rgba(184,129,33,0.45)]',
          icon: 'text-current',
          actionButton:
            'rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 px-4 py-2 text-xs font-medium text-white',
          cancelButton:
            'rounded-full border border-white/50 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600',
          closeButton:
            'border-white/40 bg-white/80 text-slate-500 hover:bg-white hover:text-slate-700',
        },
      }}
      {...props}
    />
  );
}
