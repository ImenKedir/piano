import { useState } from 'react';

import { Header } from '~/components/header';
import type { Piano, PianoCondition } from '~/data/piano';

export default function Sell() {
  const [formData, setFormData] = useState<Partial<Piano>>({
    brand: '',
    model: '',
    year: 0,
    price: 0,
    condition: 'Excellent',
    description: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPiano: Partial<Piano> = {
      ...formData,
      id: Date.now().toString(),
      image: '/pianos/default-piano.jpg',
    };

    const storedPianos = JSON.parse(
      localStorage.getItem('listedPianos') || '[]'
    );
    localStorage.setItem(
      'listedPianos',
      JSON.stringify([...storedPianos, newPiano])
    );

    setFormData({
      brand: '',
      model: '',
      year: 0,
      price: 0,
      condition: 'Excellent',
      description: '',
      location: '',
    });

    alert('Piano listed successfully!');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />

      <main className="container mx-auto px-4 pb-16 pt-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-3xl font-bold">List Your Piano</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Brand</label>
                <input
                  type="text"
                  required
                  value={formData.brand}
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Model</label>
                <input
                  type="text"
                  required
                  value={formData.model}
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Year</label>
                <input
                  type="number"
                  required
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: Number(e.target.value) })
                  }
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Price ($)
                </label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: Number(e.target.value) })
                  }
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Condition
              </label>
              <select
                value={formData.condition}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    condition: e.target.value as PianoCondition,
                  })
                }
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Location</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              List Piano
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
