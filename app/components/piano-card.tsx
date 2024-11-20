import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

import type { Piano } from '~/data/piano';

interface PianoCardProps {
  piano: Piano;
  size?: 'small' | 'large';
}

export function PianoCard({ piano, size = 'small' }: PianoCardProps) {
  const isLarge = size === 'large';

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 ${
        isLarge ? 'md:col-span-2' : ''
      }`}
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={piano.image}
          alt={`${piano.brand} ${piano.model}`}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Gradient overlay - Using gray-600 for a more subtle effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-600/70 via-gray-600/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 w-full p-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            {piano.brand} {piano.model}
          </h3>
          <p className="text-sm text-gray-200">{piano.year}</p>
          <p className="text-lg font-bold text-white">
            ${piano.price.toLocaleString()}
          </p>
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-white ${
                piano.condition === 'Excellent'
                  ? 'bg-green-600'
                  : piano.condition === 'Good'
                    ? 'bg-yellow-600'
                    : 'bg-red-600'
              }`}
            >
              {piano.condition}
            </span>
            <span className="text-sm text-gray-200">{piano.location}</span>
          </div>
        </div>
      </div>

      {/* Centered Details Button - Only visible on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.2 }}
      >
        <Link
          to={`/piano/${piano.id}`}
          className="rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          View Details
        </Link>
      </motion.div>
    </div>
  );
}
