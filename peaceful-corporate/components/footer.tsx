import Link from "next/link"

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-neon-blue/20 bg-background px-8 py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

                {/* Logo & Address */}
                <div className="text-center md:text-left">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-neon-blue">
                        peaceful
                    </Link>
                    <address className="mt-4 not-italic text-sm text-foreground/60">
                        株式会社peaceful<br />
                        東京都練馬区
                    </address>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-8 md:justify-end">
                    <Link href="/vision" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Vision
                    </Link>
                    <Link href="/product" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Product
                    </Link>
                    <Link href="/giga-hospital" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Giga-Hospital
                    </Link>
                    <Link href="/company" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Company
                    </Link>
                    <Link href="/news" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        News
                    </Link>
                </nav>
            </div>

            <div className="mt-12 text-center text-xs text-foreground/40">
                &copy; {new Date().getFullYear()} peaceful Inc. All rights reserved.
            </div>
        </footer>
    )
}
