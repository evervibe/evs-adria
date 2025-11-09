'use client'

import { Phone, MessageCircle, Navigation } from 'lucide-react'
import { SITE } from '@/lib/config'

export default function MobileBottomBar() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hallo, ich interessiere mich für Ihr Sortiment.')
    window.open(`https://wa.me/${SITE.whatsapp.replace(/\+|\s/g, '')}?text=${text}`, '_blank')
  }

  const handleRoute = () => {
    window.open(SITE.mapLink, '_blank')
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-col items-center justify-center py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <Phone size={20} className="text-red-600 mb-1" />
          <span className="text-xs font-medium text-gray-700">Anrufen</span>
        </a>
        
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <MessageCircle size={20} className="text-green-600 mb-1" />
          <span className="text-xs font-medium text-gray-700">WhatsApp</span>
        </button>
        
        <button
          onClick={handleRoute}
          className="flex flex-col items-center justify-center py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <Navigation size={20} className="text-blue-600 mb-1" />
          <span className="text-xs font-medium text-gray-700">Route</span>
        </button>
      </div>
    </div>
  )
}
