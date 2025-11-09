import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">Vibe Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Sign in</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white shadow hover:bg-gray-800 active:scale-[0.99] transition">
              Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-3">
            <a href="#features" className="block text-gray-700">Features</a>
            <a href="#showcase" className="block text-gray-700">Showcase</a>
            <a href="#pricing" className="block text-gray-700">Pricing</a>
            <a href="#get-started" className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white shadow hover:bg-gray-800">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
