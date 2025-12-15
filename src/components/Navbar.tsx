'use client'

import React from 'react'
import Link from 'next/link'
import { Route } from 'next'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<string>("")

  const navigation = [
    { name: 'Beranda', href: '/' },
    { 
      name: 'Tentang', 
      href: '/tentang',
      dropdown: [
        { name: 'Visi & Misi', href: '/tentang/visi-misi' },
        // { name: 'Sejarah', href: '/tentang/sejarah' },
        { name: 'Struktur Organisasi', href: '/tentang/struktur' }
      ]
    },
    { 
      name: 'Program', 
      href: '/program',
      dropdown: [
        { name: 'Bakti Sosial', href: '/program/bakti-sosial' },
        { name: 'Kebersihan', href: '/program/kebersihan' },
        { name: 'Olahraga', href: '/program/olahraga' },
        // { name: 'UMKM', href: '/program/umkm' }
      ]
    },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Pengumuman', href: '/pengumuman' },
    { name: 'Galeri', href: '/galeri' },
    // { name: 'Kontak', href: '/kontak' }
  ]

  return (
    <nav className="backdrop-blur-md bg-white/30 border-white/20 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">KT</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900">Karang Taruna</span>
              <span className="block text-sm text-emerald-600 -mt-1">Dusun Sindangasih</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsDropdownOpen(item.name)}
                      onMouseLeave={() => setIsDropdownOpen('')}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {isDropdownOpen === item.name && (
                      <div 
                        onMouseEnter={() => setIsDropdownOpen(item.name)}
                        onMouseLeave={() => setIsDropdownOpen('')}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href as Route}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href as Route}
                    className="px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Gabung Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDropdownOpen(isDropdownOpen === item.name ? '' : item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen === item.name && (
                        <div className="pl-6 pr-3 py-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href as Route}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href as Route}
                      className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="px-3 py-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Gabung Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}