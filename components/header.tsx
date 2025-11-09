'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header key="header" className="sticky top-0 left-0 z-50 backdrop-blur-md bg-neutral-950/85 border-b bg-neutral-950 text-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-4">
          <a href="/" className="hover:text-blue-600 transition-colors inline-block">
            <h1 className="text-xl font-semibold tracking-tight">Colby Foster</h1>
          </a>
          <div className="flex gap-1 opacity-80 hover:opacity-100 transition">
            <a
              className="hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ColbyFoster3"
            >
              <Github />
            </a>
            <a
              className="hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/colby-foster-60380b198/"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        

        <nav className="flex gap-6 text-sm font-medium" aria-label="Main Navigation">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');

            return (
              <Link
                key={`nav-item-${label}`}
                href={href}
                className="relative inline-block px-3 py-1 group"
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={`
                    absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    bg-neutral-900
                    w-20 h-10
                    pointer-events-none
                    transition-opacity duration-300
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
