import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';

import { ThemeToggle } from '~/components/theme-toggle';

export function Header() {
  const location = useLocation();
  const isListingRoute = location.pathname === '/sell';

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Nathan's Used Pianos
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to={isListingRoute ? '/' : '/sell'}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            {isListingRoute ? 'Browse Pianos' : 'List Your Piano'}
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
