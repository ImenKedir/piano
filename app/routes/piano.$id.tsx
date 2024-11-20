import { type LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';

import { Header } from '~/components/header';
import { pianos } from '~/data/piano';

export async function loader({ params }: LoaderFunctionArgs) {
  const piano = pianos.find((p) => p.id === params.id);

  if (!piano) {
    throw new Response('Piano not found', { status: 404 });
  }

  return { piano };
}

export default function PianoDetails() {
  const { piano } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main className="container mx-auto px-4 pb-16 pt-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Listings
          </Link>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <motion.img
                src={piano.image}
                alt={`${piano.brand} ${piano.model}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {piano.brand} {piano.model}
                </h1>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  ${piano.price.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-sm font-medium text-white ${
                    piano.condition === 'Excellent'
                      ? 'bg-green-600'
                      : piano.condition === 'Good'
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                  }`}
                >
                  {piano.condition}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Year: {piano.year}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {piano.location}
                </span>
              </div>

              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Description
                </h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {piano.description}
                </p>
              </div>

              <button
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 md:w-auto"
                onClick={() =>
                  alert("We don't get paid enough to add this functionality")
                }
              >
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
