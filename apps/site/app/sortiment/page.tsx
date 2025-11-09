import { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/config'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sortiment - Adria GPS GmbH',
  description: 'Entdecken Sie unser vollständiges Sortiment an kroatischen Spezialitäten',
}

export default function SortimentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Unser Sortiment</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Entdecken Sie unsere vielfältige Auswahl an authentischen kroatischen Spezialitäten, 
          Weinen und Delikatessen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/sortiment/${category.slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 text-center"
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {category.name}
              </h2>
              <div className="flex items-center justify-center text-red-600 font-medium group-hover:gap-2 transition-all">
                <span>Produkte ansehen</span>
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
