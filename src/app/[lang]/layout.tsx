import type { Metadata } from 'next';
import { Playfair } from 'next/font/google';

import './globals.css';

const playfair = Playfair({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PSONetto Portfolio',
  description:
    "Explore Plinio Netto's dynamic web projects. A web developer passionate about crafting seamless digital experiences.",
  openGraph: {
    url: 'https://psonetto-portfolio.vercel.app',
    type: 'website',
    title: 'PSONetto Portfolio',
    siteName: 'PSONetto Portfolio',
    description:
      "Explore Plinio Netto's dynamic web projects. A web developer passionate about crafting seamless digital experiences.",
    images: 'blob:https://vercel.com/bf5f4173-cf8e-464c-94e1-0f6c0981586c',
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={params.lang}>
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
