import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { ThemeProvider } from '~/components/theme-provider';

import './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  },
];

function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (typeof window === 'undefined') return;
            
            const theme = window.localStorage.getItem('theme') || 
              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            
            document.documentElement.classList.add(theme);
          })();
        `,
      }}
    />
  );
}

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ThemeScript />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
