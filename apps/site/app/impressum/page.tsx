import { SITE } from '@/lib/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Impressum - ${SITE.name}`,
  description: 'Impressum und rechtliche Angaben von Adria GPS GmbH',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>{SITE.name}</strong><br />
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.city}<br />
            {SITE.address.country}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: <a href={`tel:${SITE.phone}`} className="text-red-600 hover:text-red-700">{SITE.phone}</a><br />
            E-Mail: <a href={`mailto:${SITE.email}`} className="text-red-600 hover:text-red-700">{SITE.email}</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <em>wird vom Kunden bereitgestellt</em>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            <em>Name wird vom Kunden bereitgestellt</em><br />
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.city}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a 
              href="https://ec.europa.eu/consumers/odr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
            >
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  )
}
