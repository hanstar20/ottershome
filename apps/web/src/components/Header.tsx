'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '소개', href: '/about' },
    { name: '동물 친구들', href: '/animals' },
    { name: '체험 프로그램', href: '/programs' },
    { name: '이용 안내', href: '/info' },
    { name: '커뮤니티', href: '/community' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-brown">
          이웃집 수달
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg text-text-dark hover:text-primary-orange transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-dark focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg text-text-dark hover:text-primary-orange transition-colors" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
