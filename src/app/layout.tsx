import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WaveTop } from '@/components/Header/components/WaveTop';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cabrita's Studio",
  description: 'Site of games, movies and series',
  keywords: ['games', 'movies', 'series'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' className='bg-sky-200 text-slate-900'>
      <link rel='icon' href='/favicon.png' />
      <body className={inter.className}>
        <div className="min-h-screen">
            <Header />
          <div className='w-full flex  relative '>
            <WaveTop />
            {/* <WaveTop /> */}
          </div>

          <main className='px-4 pb-12 pt-8'>
          {children}
          </main>
         <Footer/>
        </div>
      </body>
    </html>
  );
}
