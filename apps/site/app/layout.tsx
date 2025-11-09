import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/config'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'

export const metadata: Metadata = {
  title: `${SITE.name} - ${SITE.tagline}`,
  description: 'Kroatische Spezialitäten in Hamburg. Seit über 25 Jahren Ihr Partner für Balkan-Feinkost, Weine und Delikatessen. Filiale in der Hammerbrookstraße, B2B-Lieferung für Gastronomie.',
  keywords: ['Kroatische Lebensmittel', 'Balkan Feinkost', 'Hamburg', 'Kroatischer Wein', 'Adria GPS'],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} - ${SITE.tagline}`,
    description: 'Kroatische Spezialitäten in Hamburg. Seit über 25 Jahren.',
    type: 'website',
    locale: 'de_DE',
    siteName: SITE.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
