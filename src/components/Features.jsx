import { Code, Database, LayoutDashboard, Zap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant previews',
    desc: 'See your changes live with hot reloading and a fast dev server.',
  },
  {
    icon: Code,
    title: 'Smart generation',
    desc: 'Generate clean, production-ready code for frontend and backend.',
  },
  {
    icon: Database,
    title: 'Built-in database',
    desc: 'MongoDB is ready to go for persistent data and real-world apps.',
  },
  {
    icon: LayoutDashboard,
    title: 'Beautiful UI',
    desc: 'Tailwind + component patterns for polished, responsive interfaces.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need</h2>
          <p className="mt-3 text-gray-600">A powerful toolkit to plan, build, and launch modern applications faster.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-lg bg-gray-100 p-2 text-gray-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
