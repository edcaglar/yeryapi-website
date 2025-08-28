"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-foreground">
              <span className="text-orange-primary">Yer Yapı</span>{" "}
              <span className="text-foreground">Sondaj & Jeofizik</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-orange-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link
              href="/iletisim"
              className="text-sm font-medium text-foreground hover:text-orange-primary transition-colors"
            >
              İletişim
            </Link>
            <Button asChild className="bg-orange-primary text-orange-primary-foreground hover:bg-orange-hover">
              <Link href="tel:+904526660045">Hemen Ara</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/40">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-orange-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/iletisim"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-orange-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-orange-primary text-orange-primary-foreground hover:bg-orange-hover"
                >
                  <Link href="tel:+904526660045">Hemen Ara</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
