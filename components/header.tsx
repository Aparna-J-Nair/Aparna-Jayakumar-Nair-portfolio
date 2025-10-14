"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Name and Photo */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
              <Image src="/appz.jpg" alt="Aparna Jayakumar Nair" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-balance">Aparna Jayakumar Nair</h1>
              <p className="text-sm text-muted-foreground">AI/ML Engineer</p>
            </div>
          </Link>

          {/* Right side - Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild className={`hover:text-primary ${isActive("/") ? "text-primary" : ""}`}>
              <Link href="/">About</Link>
            </Button>
            <Button variant="ghost" asChild className={`hover:text-primary ${isActive("/work") ? "text-primary" : ""}`}>
              <Link href="/work">Work</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={`hover:text-primary ${isActive("/projects") ? "text-primary" : ""}`}
            >
              <Link href="/projects">Projects</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-2 pb-4">
            <Button
              variant="ghost"
              asChild
              className={`w-full justify-start hover:text-primary ${isActive("/") ? "text-primary" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/">About</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={`w-full justify-start hover:text-primary ${isActive("/work") ? "text-primary" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/work">Work</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={`w-full justify-start hover:text-primary ${isActive("/projects") ? "text-primary" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/projects">Projects</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
