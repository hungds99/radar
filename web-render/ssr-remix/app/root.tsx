import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import './index.css';
import Header from './components/ui/header';
import Sidebar from './components/ui/sidebar';
import Footer from './components/ui/footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main>
          <Sidebar />
          <div className='content'>{children}</div>
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
