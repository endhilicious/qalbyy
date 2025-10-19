"use client"

import React from 'react'
import { CERTIFICATIONS, STATISTICS } from '#/constants/landingpage'
import Link from 'next/link'
import { Award, Shield, Users, Star, CheckCircle, Globe, Building } from 'lucide-react'
import Breadcrumbs from '#/components/Breadcrumbs'
import useBreadcrumbs from '#/hooks/useBreadcrumbs'
import Image from 'next/image'

const AboutScreen = () => {
  const breadcrumbs = useBreadcrumbs([
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/about', isCurrentPage: true }
  ]);

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
                  Tentang Kami
                </h1>
                <p className="text-gray-600 mt-2">
                  Perjalanan ibadah terpercaya sejak 2003
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                    Terpercaya Melayani <span className="text-green-600">35,000+ Jamaah</span> Sejak 2003
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Kami adalah travel agent terpercaya yang telah melayani ribuan jamaah haji dan umroh 
                    dengan pelayanan terbaik, harga transparan, dan jadwal keberangkatan yang pasti. 
                    Komitmen kami adalah memberikan pengalaman ibadah yang berkesan dan bermakna.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/umroh"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                    >
                      Lihat Paket Umroh
                    </Link>
                    <Link
                      href="/haji"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-colors"
                    >
                      Paket Haji Syariah
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image
                      src="/umroh-mock-pic/gambar-11.jpg"
                      alt="About Us"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Pencapaian Kami
                </h2>
                <p className="text-green-100 text-lg">
                  Angka-angka yang membuktikan kepercayaan jamaah kepada kami
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {STATISTICS.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-green-100 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Sertifikasi & Legalitas
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami beroperasi dengan izin resmi dan sertifikasi internasional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {cert.description}
                  </p>
                  {cert.number && (
                    <p className="text-green-600 text-sm font-medium">
                      {cert.number}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nilai-Nilai Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Prinsip-prinsip yang kami pegang dalam melayani jamaah
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Aman & Terpercaya
                </h3>
                <p className="text-gray-600 text-sm">
                  Setiap perjalanan dilengkapi dengan asuransi dan perlindungan maksimal
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Pelayanan Prima
                </h3>
                <p className="text-gray-600 text-sm">
                  Tim profesional berpengalaman yang siap membantu 24/7
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Transparan
                </h3>
                <p className="text-gray-600 text-sm">
                  Harga jelas tanpa biaya tersembunyi, semua terinformasi dengan baik
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Berpengalaman
                </h3>
                <p className="text-gray-600 text-sm">
                  22+ tahun pengalaman melayani jamaah dari seluruh Indonesia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Misi Kami</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Menyediakan layanan perjalanan ibadah haji dan umroh yang berkualitas tinggi, 
                  aman, nyaman, dan terjangkau bagi seluruh umat Muslim di Indonesia. Kami berkomitmen 
                  untuk memberikan pengalaman spiritual yang berkesan dan bermakna.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Visi Kami</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi travel agent terdepan dan terpercaya di Indonesia dalam bidang perjalanan 
                  ibadah haji dan umroh, dengan standar pelayanan internasional dan inovasi berkelanjutan 
                  untuk memenuhi kebutuhan spiritual umat Muslim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Siap Bergabung dengan Ribuan Jamaah Lainnya?
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Percayakan perjalanan ibadah Anda kepada kami yang telah berpengalaman 22+ tahun
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-lg"
                >
                  Konsultasi Gratis
                </Link>
                <Link
                  href="https://wa.me/6281113567777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors text-lg"
                >
                  Chat WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AboutScreen
