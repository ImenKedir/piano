import { motion } from 'framer-motion';

import type { FilterState } from '~/routes/_index';

interface SidebarProps {
  filters: FilterState;
  onFilterChange: (
    key: keyof FilterState,
    value: string | number[] | null
  ) => void;
  locations: string[];
}

export function Sidebar({ filters, onFilterChange, locations }: SidebarProps) {
  const priceRanges = [
    { label: 'Any', value: null },
    { label: 'Under $25,000', value: [0, 25000] },
    { label: '$25,000 - $50,000', value: [25000, 50000] },
    { label: '$50,000 - $100,000', value: [50000, 100000] },
    { label: 'Over $100,000', value: [100000, Infinity] },
  ];

  const yearRanges = [
    { label: 'Any', value: null },
    { label: 'Before 1980', value: [0, 1980] },
    { label: '1980 - 2000', value: [1980, 2000] },
    { label: '2000 - 2015', value: [2000, 2015] },
    { label: 'After 2015', value: [2015, Infinity] },
  ];

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 space-y-6 p-4"
    >
      <div>
        <h3 className="mb-3 text-sm font-semibold">Condition</h3>
        <select
          value={filters.condition || 'all'}
          onChange={(e) => onFilterChange('condition', e.target.value)}
          className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All Conditions</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold">Location</h3>
        <select
          value={filters.location || 'all'}
          onChange={(e) => onFilterChange('location', e.target.value)}
          className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                checked={
                  JSON.stringify(filters.priceRange) ===
                  JSON.stringify(range.value)
                }
                onChange={() => onFilterChange('priceRange', range.value)}
                className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500 dark:border-gray-700 dark:text-gray-100"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold">Year</h3>
        <div className="space-y-2">
          {yearRanges.map((range) => (
            <label key={range.label} className="flex items-center space-x-2">
              <input
                type="radio"
                name="year"
                checked={
                  JSON.stringify(filters.yearRange) ===
                  JSON.stringify(range.value)
                }
                onChange={() => onFilterChange('yearRange', range.value)}
                className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500 dark:border-gray-700 dark:text-gray-100"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          onFilterChange('condition', null);
          onFilterChange('location', null);
          onFilterChange('priceRange', null);
          onFilterChange('yearRange', null);
        }}
        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        Reset Filters
      </button>
    </motion.aside>
  );
}
