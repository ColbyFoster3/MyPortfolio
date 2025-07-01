'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="border-b bg-neutral-950 text-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold ">Colby Foster</h1>

        <nav className="flex gap-6 text-sm font-medium" aria-label="Main Navigation">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');

            return (
              <Link
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
                    bg-neutral-800
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
