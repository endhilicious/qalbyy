"use client"

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const FloatingActionButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false)
  const [isAutoAnimating, setIsAutoAnimating] = useState(false)

  const whatsappNumber = '6281113567777'
  const defaultMessage = 'Assalamu\'alaikum, saya tertarik dengan paket umroh/haji. Bisa konsultasi?'

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-animate WhatsApp text: 30s show, 5s hide cycle
  useEffect(() => {
    let showTimeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout
    let cycleInterval: NodeJS.Timeout

    const startAnimationCycle = () => {
      // Start showing after 10 seconds initially
      showTimeout = setTimeout(() => {
        if (!isWhatsAppHovered) {
          setIsAutoAnimating(true)
          
          // Hide after 30 seconds of showing
          hideTimeout = setTimeout(() => {
            setIsAutoAnimating(false)
            
            // Start the repeating cycle: show for 30s, hide for 5s
            cycleInterval = setInterval(() => {
              if (!isWhatsAppHovered) {
                setIsAutoAnimating(true)
                setTimeout(() => {
                  setIsAutoAnimating(false)
                }, 30000) // Show for 30 seconds
              }
            }, 35000) // Total cycle: 30s show + 5s hide = 35s
            
          }, 30000) // First show duration: 30 seconds
        }
      }, 10000) // Initial delay: 10 seconds
    }

    startAnimationCycle()

    return () => {
      clearTimeout(showTimeout)
      clearTimeout(hideTimeout)
      clearInterval(cycleInterval)
    }
  }, [isWhatsAppHovered])

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fade-in hover:animate-none flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => {
            setIsWhatsAppHovered(true)
            setIsAutoAnimating(false) // Stop auto animation on hover
          }}
          onMouseLeave={() => setIsWhatsAppHovered(false)}
          onTouchStart={() => {
            setIsWhatsAppHovered(true)
            setIsAutoAnimating(false) // Stop auto animation on touch
          }}
          onTouchEnd={() => setTimeout(() => setIsWhatsAppHovered(false), 2000)}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center animate-subtle-pulse hover:animate-none"
          aria-label="Chat WhatsApp"
        >
          {/* WhatsApp Logo SVG */}
          <svg 
            className="w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.707"/>
          </svg>
        </button>

        {/* Animated Text Label */}
        <div className={`
          absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg
          transition-all duration-300 ease-out
          ${(isWhatsAppHovered || isAutoAnimating)
            ? 'opacity-100 visible translate-x-0' 
            : 'opacity-0 invisible translate-x-2'
          }
        `}>
          <span>Hubungi Kami</span>
          {/* Arrow pointing to button */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default FloatingActionButtons
