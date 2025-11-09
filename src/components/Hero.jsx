import Spline from '@splinetool/react-spline'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              New: AI-powered code generation
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Build full-stack apps in minutes, not months
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600">
              Design, code, and ship from one intelligent workspace. Generate backends, craft beautiful UIs, and preview instantly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white shadow hover:bg-gray-800">
                Start building
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#showcase" className="inline-flex items-center justify-center rounded-md border border-black/[0.08] bg-white px-5 py-3 text-gray-900 shadow-sm hover:bg-gray-50">
                See examples
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl border border-black/[0.08] bg-white/60 shadow overflow-hidden">
            <Spline scene="https://prod.spline.design/pf5M5eD8Qdp1aCq3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
