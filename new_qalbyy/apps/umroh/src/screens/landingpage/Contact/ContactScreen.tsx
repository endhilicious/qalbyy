"use client"

import React, { useState } from 'react'
import { OFFICE_LOCATIONS, CONTACT_INFO } from '#/constants/landingpage'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import Breadcrumbs from '#/components/Breadcrumbs'
import useBreadcrumbs from '#/hooks/useBreadcrumbs'

const ContactScreen = () => {
  const breadcrumbs = useBreadcrumbs([
    { label: 'Beranda', href: '/' },
    { label: 'Hubungi Kami', href: '/contact', isCurrentPage: true }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
            <div className="space-y-3">
              {/* Breadcrumbs */}
              <Breadcrumbs items={breadcrumbs} className="mb-2" />
              
              {/* Page Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Hubungi Kami
                </h1>
                <p className="text-gray-600 mt-2">
                  Tim customer service kami siap membantu Anda
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Konsultasi Gratis
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Layanan yang Diminati *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    >
                      <option value="">Pilih layanan</option>
                      <option value="umroh-nobar">Umroh Plus Nobar Timnas</option>
                      <option value="umroh-private">Umroh Private Custom</option>
                      <option value="haji-furoda">Haji Furoda 2025</option>
                      <option value="haji-plus-syariah">Haji Plus Pembiayaan Syariah</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                      placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Konsultasi
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    Hubungi Langsung
                  </h2>
                  <div className="space-y-4">
                    <Link
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-700 transition-colors">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">WhatsApp</div>
                        <div className="text-green-600">{CONTACT_INFO.whatsapp}</div>
                      </div>
                    </Link>
                    <Link
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Telepon</div>
                        <div className="text-blue-600">{CONTACT_INFO.phone}</div>
                      </div>
                    </Link>
                    <Link
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">{CONTACT_INFO.email}</div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    Jam Operasional
                  </h3>
                  <div className="text-gray-600">
                    <p className="font-medium">Senin - Jumat</p>
                    <p className="mb-2">08:00 - 17:00 WIB</p>
                    <p className="font-medium">Sabtu</p>
                    <p className="mb-2">08:00 - 15:00 WIB</p>
                    <p className="font-medium">Minggu</p>
                    <p>Tutup</p>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" />
                    Kantor Kami
                  </h3>
                  <div className="space-y-6">
                    {OFFICE_LOCATIONS.map((office) => (
                      <div key={office.id} className="border-l-4 border-green-200 pl-4">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{office.city}</h4>
                          {office.isMain && (
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              Kantor Pusat
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                        <p className="text-green-600 text-sm">{office.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ContactScreen
