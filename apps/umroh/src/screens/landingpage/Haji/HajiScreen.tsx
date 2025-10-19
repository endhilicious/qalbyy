"use client"

import React from 'react'
import { HAJI_PACKAGES } from '#/constants/landingpage'
import Link from 'next/link'
import { Check, Clock, Users, Shield, FileText, CreditCard } from 'lucide-react'
import Image from 'next/image'
import Breadcrumbs from '#/components/Breadcrumbs'
import useBreadcrumbs from '#/hooks/useBreadcrumbs'

const HajiScreen = () => {
  const breadcrumbs = useBreadcrumbs([
    { label: 'Beranda', href: '/' },
    { label: 'Paket Haji', href: '/haji', isCurrentPage: true }
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const requirements = [
    'Usia minimal 18 tahun',
    'Fotocopy KTP (2 lembar)',
    'Fotocopy KK (2 lembar)',
    'Fotocopy Akta Lahir/Akta Nikah (2 lembar)',
    'Surat keterangan sehat dari Dokter',
    'Pas foto terbaru ukuran 3X4 dan 4X6 (masing-masing 2 lembar)',
    'Mengisi formulir pendaftaran'
  ]

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
                  Paket Haji
                </h1>
                <p className="text-gray-600 mt-2">
                  Program haji dengan pembiayaan syariah dan pelayanan terbaik
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {HAJI_PACKAGES.map((pkg) => (
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
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        <Users className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-sm">Bimbingan</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-2xl md:text-3xl font-bold text-green-600">
                        {formatPrice(pkg.price.from)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {pkg.id === 'haji-plus-syariah' ? 'DP' : 'Mulai dari'}
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
                        Daftar Sekarang
                      </Link>
                      <Link
                        href="https://wa.me/6281113567777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-colors"
                      >
                        Konsultasi WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements Section */}
            <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                Persyaratan Pendaftaran Haji
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-green-600" />
                    Dokumen yang Diperlukan
                  </h3>
                  <div className="space-y-2">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Keunggulan Program
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Pembiayaan syariah yang aman dan halal</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Bimbingan manasik haji lengkap</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Pemeriksaan kesehatan oleh dokter berpengalaman</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Support 24/7 selama perjalanan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financing Info */}
            <div className="mt-8 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 md:p-8 text-white">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Pembiayaan Syariah
                </h2>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  Daftar haji plus dengan DP hanya 10 juta rupiah. Tidak perlu menunggu dana setoran awal terkumpul. 
                  Proses mudah dengan pembiayaan syariah yang aman dan halal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact?package=haji-plus-syariah"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Daftar Pembiayaan Syariah
                  </Link>
                  <Link
                    href="https://wa.me/6281113567777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
                  >
                    Chat WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HajiScreen
