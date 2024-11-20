import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Sidebar } from '~/components/sidebar';
import { Header } from '~/components/header';
import { PianoCard } from '~/components/piano-card';
import { pianos } from '~/data/piano';

export interface FilterState {
  condition: string | null;
  location: string | null;
  priceRange: number[] | null;
  yearRange: number[] | null;
  search: string | null;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get('search')?.toLowerCase();
  const condition = url.searchParams.get('condition');
  const location = url.searchParams.get('location');
  const priceRange = url.searchParams.get('priceRange')
    ? JSON.parse(url.searchParams.get('priceRange')!)
    : null;
  const yearRange = url.searchParams.get('yearRange')
    ? JSON.parse(url.searchParams.get('yearRange')!)
    : null;

  const filteredPianos = pianos.filter((piano) => {
    if (search) {
      const pianoName = `${piano.brand} ${piano.model}`.toLowerCase();
      if (!pianoName.includes(search)) {
        return false;
      }
    }

    if (condition && piano.condition !== condition) {
      return false;
    }

    if (location && piano.location !== location) {
      return false;
    }

    if (priceRange) {
      const [min, max] = priceRange;
      if (piano.price < min || piano.price > max) {
        return false;
      }
    }

    if (yearRange) {
      const [min, max] = yearRange;
      if (piano.year < min || piano.year > max) {
        return false;
      }
    }

    return true;
  });

  const locations = Array.from(new Set(pianos.map((piano) => piano.location))).sort();

  return json({ pianos: filteredPianos, locations });
}

export default function Index() {
  const { pianos, locations } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: FilterState = {
    condition: searchParams.get('condition'),
    location: searchParams.get('location'),
    priceRange: searchParams.get('priceRange')
      ? JSON.parse(searchParams.get('priceRange')!)
      : null,
    yearRange: searchParams.get('yearRange')
      ? JSON.parse(searchParams.get('yearRange')!)
      : null,
    search: searchParams.get('search'),
  };

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number[] | null
  ) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (value === null || value === 'all') {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.set(key, JSON.stringify(value));
    } else {
      newParams.set(key, value);
    }
    
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />

      <main className="container mx-auto px-4 pb-16 pt-24">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">Browse</h1>
          <div className="relative w-full md:w-96">
            <input
              type="search"
              placeholder="Search pianos..."
              value={filters.search || ''}
              onChange={(e) => handleFilterChange('search', e.target.value || null)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 pl-10 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-300 dark:focus:ring-gray-300"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-8">
          <Sidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            locations={locations}
          />

          <div className="flex-1">
            <motion.div
              layout
              className="grid grid-cols-2 gap-6 md:grid-cols-3"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <AnimatePresence mode="popLayout">
                {pianos.map((piano, index) => (
                  <motion.div
                    key={piano.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      layout: { duration: 0.3 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 },
                    }}
                  >
                    <PianoCard
                      piano={piano}
                      size={index === 0 ? 'large' : 'small'}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {pianos.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  No pianos found matching your criteria.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
