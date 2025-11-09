import Link from 'next/link'
import { Truck, Clock, FileText } from 'lucide-react'

export default function B2BTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                B2B-Lieferung für Gastronomie
              </h2>
              <p className="text-lg mb-6 text-red-50">
                Beliefern Sie Ihr Restaurant, Hotel oder Geschäft mit authentischen kroatischen Produkten. 
                Profitieren Sie von unserer langjährigen Erfahrung und zuverlässigen Lieferung.
              </p>
              <Link
                href="/b2b-lieferung"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Konditionen ansehen
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Truck className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Zuverlässige Lieferung</h3>
                  <p className="text-red-50 text-sm">Pünktliche Belieferung in ganz Hamburg und Umgebung</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Flexible Zeiten</h3>
                  <p className="text-red-50 text-sm">Liefertermine nach Ihren Wünschen</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <FileText className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Faire Konditionen</h3>
                  <p className="text-red-50 text-sm">Attraktive Preise für Gewerbetreibende</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
