import type { MetaFunction } from '@remix-run/node';

import { useTheme } from '~/hooks/useTheme';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Piano Marketplace</h1>
        <div className="flex gap-4">
          <Link to="/pianos" className="text-gray-600 hover:text-gray-900">Browse Pianos</Link>
          <Link to="/sell" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Sell a Piano
          </Link>
        </div>
      </nav>
    </header>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Find Your Perfect Piano
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Browse our collection of quality second-hand pianos
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Featured Categories */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold">Grand Pianos</h3>
          <p className="mt-2 text-gray-600">Discover premium grand pianos</p>
          <Link to="/pianos/grand" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
            Browse →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold">Upright Pianos</h3>
          <p className="mt-2 text-gray-600">Perfect for homes and studios</p>
          <Link to="/pianos/upright" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
            Browse →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold">Digital Pianos</h3>
          <p className="mt-2 text-gray-600">Modern digital alternatives</p>
          <Link to="/pianos/digital" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
            Browse →
          </Link>
        </div>
      </div>
    </main>
  </div>
  );
}
