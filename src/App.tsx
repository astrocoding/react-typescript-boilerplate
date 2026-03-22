import { useState } from 'react'

type Feature = {
  title: string
  description: string
}

type LinkItem = {
  label: string
  href: string
}

const features: Feature[] = [
  {
    title: 'Typed by default',
    description:
      'React 19 + TypeScript strict mode aktif agar bug ketangkap lebih cepat.',
  },
  {
    title: 'UI scalable',
    description:
      'Tailwind CSS v4 local install dengan pola utility-first yang rapi.',
  },
  {
    title: 'Production ready',
    description:
      'Vite modern bundling, lint bawaan, dan struktur folder siap dikembangkan.',
  },
]

const links: LinkItem[] = [
  { label: 'React Docs', href: 'https://react.dev/' },
  { label: 'Tailwind Docs', href: 'https://tailwindcss.com/docs' },
  { label: 'Vite Docs', href: 'https://vite.dev/guide/' },
]

const commands = ['npm install', 'npm run dev', 'npm run build']

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/60 backdrop-blur-sm sm:p-8">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-5">
          <span className="w-fit rounded-full border border-brand-300/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-200">
            React + TypeScript + Tailwind v4
          </span>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Modern boilerplate yang clean, konsisten, dan gampang dirawat
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Struktur ini sengaja ringkas: satu entry global style, utility
              class yang jelas, dan komponen yang gampang dipisah jadi module
              reusable saat aplikasi makin besar.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
              onClick={() => setCount((value) => value + 1)}
            >
              Count: {count}
            </button>
            <code className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-200">
              Edit <span className="text-brand-200">src/App.tsx</span> untuk
              mulai.
            </code>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
          >
            <h2 className="text-base font-semibold text-white">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {feature.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h2 className="text-base font-semibold text-white">
            Quick Start Command
          </h2>
          <ol className="mt-3 space-y-2">
            {commands.map((command) => (
              <li
                key={command}
                className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 font-mono text-xs text-brand-100"
              >
                {command}
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h2 className="text-base font-semibold text-white">Reference</h2>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="inline-flex w-full items-center justify-between rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 transition hover:border-brand-300/50 hover:text-brand-100"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">Open</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
