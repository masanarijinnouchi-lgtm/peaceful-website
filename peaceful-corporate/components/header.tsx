"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Vision", href: "/vision" },
  { name: "Product", href: "/product" },
  { name: "Giga-Hospital", href: "/giga-hospital" },
  { name: "Company", href: "/company" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "https://forms.gle/nFwkK24V1MNS1EL18", external: true },
]

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-neon-blue relative z-50"
        >
          peaceful
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden relative z-50 text-foreground hover:text-neon-blue transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.name}
                {hoveredItem === item.name && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-neon-blue shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-2xl font-bold tracking-tight text-foreground/80 transition-colors hover:text-neon-blue"
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
