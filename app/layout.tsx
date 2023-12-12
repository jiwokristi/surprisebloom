import type { Metadata } from 'next'

import { RootNav } from '@/app/components/navigation/RootNav'
import { Footer } from '@/app/components/Footer'

import './general-sans.css'
import './zodiak.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Surprise Bloom',
  description:
    'Discover joy in every moment with SurpriseBloom. From unique plant bouquets to personalized packages, each surprise is a testament to the art of gifting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div id="portal"></div>
        <RootNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
