import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin-ext'],
})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={inter.className}>
        <body>
            <main>
                {children}
            </main>
        </body>
      </html>
    )
  }