"use client"

import React from 'react'
import { UMROH_PACKAGES } from '#/constants/landingpage'
import Link from 'next/link'
import { Star, Check, Calendar, Users, Plane, Home, Clock } from 'lucide-react'
import Image from 'next/image'
import Breadcrumbs from '#/components/Breadcrumbs'
import useBreadcrumbs from '#/hooks/useBreadcrumbs'

const UmrohScreen = () => {
  const breadcrumbs = useBreadcrumbs([
    { label: 'Beranda', href: '/' },
    { label: 'Paket Umroh', href: '/umroh', isCurrentPage: true }
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
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
                  Paket Umroh
                </h1>
                <p className="text-gray-600 mt-2">
                  Pilih paket umroh terbaik untuk perjalanan ibadah Anda
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {UMROH_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  {/* Package Image */}
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                    {pkg.isSpecial && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {pkg.specialBadge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Package Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Package Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Plane className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-sm">Penerbangan</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-2xl md:text-3xl font-bold text-green-600">
                        {formatPrice(pkg.price.from)}
                      </div>
                      <div className="text-sm text-gray-500">
                        Mulai dari
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Fasilitas Termasuk:
                      </h4>
                      <div className="space-y-2">
                        {pkg.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {pkg.features.length > 4 && (
                          <div className="text-sm text-green-600 font-medium">
                            +{pkg.features.length - 4} fasilitas lainnya
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link
                        href={`/contact?package=${pkg.id}`}
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                      >
                        Konsultasi Sekarang
                      </Link>
                      <Link
                        href="https://wa.me/6281113567777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-colors"
                      >
                        Chat WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                Mengapa Memilih Paket Umroh Kami?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jadwal Pasti</h3>
                  <p className="text-sm text-gray-600">
                    Jaminan kepastian tanggal berangkat dengan booking jauh hari
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bimbingan Profesional</h3>
                  <p className="text-sm text-gray-600">
                    Muthowif berpengalaman yang akan memandu ibadah Anda
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hotel Terbaik</h3>
                  <p className="text-sm text-gray-600">
                    Akomodasi bintang 4-5 dekat dengan Masjidil Haram dan Nabawi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default UmrohScreen
