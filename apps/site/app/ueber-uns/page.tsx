import { Metadata } from 'next'
import { Award, Heart, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns - Adria GPS GmbH',
  description: 'Seit über 25 Jahren Ihr Partner für kroatische Spezialitäten in Hamburg. Erfahren Sie mehr über unsere Geschichte.',
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Über uns</h1>
        <p className="text-xl text-gray-600 mb-12">
          Ihre Adresse für kroatische Spezialitäten in Hamburg
        </p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unsere Geschichte</h2>
            <p className="text-gray-700">
              Seit über 25 Jahren sind wir Ihr zuverlässiger Partner für kroatische Spezialitäten, 
              Weine und Delikatessen in Hamburg. Was als kleiner Familienbetrieb begann, hat sich 
              zu einer festen Größe in der Hamburger Feinkostlandschaft entwickelt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Award className="text-red-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Qualität</h3>
              <p className="text-gray-600 text-sm">
                Ausgewählte Produkte direkt aus Kroatien
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Leidenschaft</h3>
              <p className="text-gray-600 text-sm">
                Mit Herz und Hingabe für kroatische Kultur
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Users className="text-red-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Service</h3>
              <p className="text-gray-600 text-sm">
                Persönliche Beratung und erstklassiger Service
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Was uns auszeichnet</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span className="text-gray-700">
                <strong>Authentische Produkte:</strong> Wir importieren unsere Waren direkt aus Kroatien
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span className="text-gray-700">
                <strong>Langjährige Erfahrung:</strong> Über 25 Jahre Expertise in Balkan-Feinkost
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span className="text-gray-700">
                <strong>Persönlicher Service:</strong> Kompetente Beratung in unserer Filiale
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span className="text-gray-700">
                <strong>B2B-Belieferung:</strong> Professionelle Lösungen für Gastronomie und Handel
              </span>
            </li>
          </ul>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Besuchen Sie uns</h2>
            <p className="text-gray-700">
              Erleben Sie kroatische Gastfreundschaft in unserer Filiale in der Hammerbrookstraße. 
              Unser Team berät Sie gerne und hilft Ihnen, die passenden Produkte für Ihre Bedürfnisse 
              zu finden.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
