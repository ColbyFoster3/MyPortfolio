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
    <header className="border-b bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold ">Colby Foster</h1>

        <nav className="flex gap-6 text-sm font-medium" aria-label="Main Navigation">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`border-b-2 pb-1 transition-colors duration-300 ${
                  isActive
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-black hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
