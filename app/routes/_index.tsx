import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { Sidebar } from '~/components/Sidebar';
import { Header } from '~/components/header';
import { PianoCard } from '~/components/piano-card';
import { pianos } from '~/data/piano';

export interface FilterState {
  condition: string | null;
  location: string | null;
  priceRange: number[] | null;
  yearRange: number[] | null;
}

export default function Index() {
  const [filters, setFilters] = useState<FilterState>({
    condition: null,
    location: null,
    priceRange: null,
    yearRange: null,
  });

  const locations = useMemo(
    () => Array.from(new Set(pianos.map((piano) => piano.location))).sort(),
    []
  );

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number[] | null
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === 'all' ? null : value,
    }));
  };

  const filteredPianos = useMemo(() => {
    return pianos.filter((piano) => {
      if (filters.condition && piano.condition !== filters.condition) {
        return false;
      }

      if (filters.location && piano.location !== filters.location) {
        return false;
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (piano.price < min || piano.price > max) {
          return false;
        }
      }

      if (filters.yearRange) {
        const [min, max] = filters.yearRange;
        if (piano.year < min || piano.year > max) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />

      <main className="container mx-auto px-4 pb-16 pt-24">
        <h1 className="mb-8 text-3xl font-bold">Browse</h1>

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
                {filteredPianos.map((piano, index) => (
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

            {filteredPianos.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  No pianos found matching your filters.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
