import Link from 'next/link'
import { CATEGORIES } from '@/lib/config'
import { ArrowRight } from 'lucide-react'

export default function SortimentTeaser() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unser Sortiment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältige Auswahl an kroatischen Spezialitäten
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/sortiment/${category.slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <div className="flex items-center justify-center text-red-600 font-medium group-hover:gap-2 transition-all">
                <span>Entdecken</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/sortiment"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            Alle Kategorien ansehen
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
