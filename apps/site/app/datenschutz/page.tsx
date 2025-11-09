import { SITE } from '@/lib/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Datenschutz - ${SITE.name}`,
  description: 'Datenschutzerklärung von Adria GPS GmbH',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
            Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
            denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
            Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser 
            Datenschutzerklärung entnehmen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Hosting</h2>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
            erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. 
            um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, 
            Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            <strong>{SITE.name}</strong><br />
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.city}<br />
            Telefon: {SITE.phone}<br />
            E-Mail: {SITE.email}
          </p>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam 
            mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. 
            Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht auf Berichtigung oder 
            Löschung dieser Daten.
          </p>

          <p className="mt-8 text-sm text-gray-600">
            <em>Stand: November 2024</em>
          </p>
        </div>
      </div>
    </div>
  )
}
