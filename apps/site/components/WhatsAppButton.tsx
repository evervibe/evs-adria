'use client'

import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/config'

interface WhatsAppButtonProps {
  className?: string
  variant?: 'default' | 'card'
}

export default function WhatsAppButton({ className = '', variant = 'default' }: WhatsAppButtonProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hallo, ich interessiere mich für Ihr Sortiment.')
    window.open(`https://wa.me/${SITE.whatsapp.replace(/\+|\s/g, '')}?text=${text}`, '_blank')
  }

  if (variant === 'card') {
    return (
      <button
        onClick={handleWhatsApp}
        className={`bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors group text-left w-full ${className}`}
      >
        <div className="flex items-start gap-4">
          <div className="bg-green-600 p-3 rounded-lg">
            <MessageCircle className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
              WhatsApp
            </h2>
            <p className="text-gray-700">{SITE.whatsapp}</p>
            <p className="text-sm text-gray-600 mt-2">
              Schnelle Antworten
            </p>
          </div>
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={handleWhatsApp}
      className={`flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg ${className}`}
    >
      <MessageCircle size={20} />
      WhatsApp
    </button>
  )
}
