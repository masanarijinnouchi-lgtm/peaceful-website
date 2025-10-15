"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { name: "Vision", href: "/vision" },
  { name: "Product", href: "/product" },
  { name: "Giga-Hospital", href: "/giga-hospital" },
  { name: "Company", href: "/company" },
  { name: "News", href: "/news" },
]

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-neon-blue"
        >
          peaceful
        </Link>

        {/* Navigation Menu */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
                {hoveredItem === item.name && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-neon-blue shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
