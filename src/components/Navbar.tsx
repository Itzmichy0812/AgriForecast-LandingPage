import React, { useState, useEffect } from 'react';
import { Sprout, Menu, X, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { PRODUCT_META } from '../data/productData';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenSimulator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Rủi ro vụ mùa', href: '#problem' },
    { label: 'Giải pháp Bento', href: '#features' },
    { label: 'Mô phỏng 14 ngày', href: '#simulator' },
    { label: 'Chăm sóc Zalo', href: '#advisory' },
    { label: 'Tính ROI', href: '#roi' },
    { label: 'Đánh giá', href: '#testimonials' },
    { label: 'Hỏi đáp', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBFBF9]/90 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-[#FBFBF9]/75 backdrop-blur-sm border-b border-stone-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#1A3E26] flex items-center justify-center text-white shadow-xs group-hover:bg-[#122D1B] transition-colors">
              <Sprout className="w-5 h-5 text-[#86EFAC]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#1A3E26]">
                  {PRODUCT_META.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                  B2B SaaS VTNN
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden md:block truncate max-w-xs font-normal">
                Dự báo thời tiết & ra quyết định nhập kho
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-stone-600 hover:text-[#1A3E26] hover:bg-[#EBF3EC]/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PRODUCT_META.hotline.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs lg:text-sm font-medium text-stone-700 hover:text-[#1A3E26] hover:bg-stone-100 rounded-xl transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#D95B1E]" />
              <span>{PRODUCT_META.hotline}</span>
            </a>

            <button
              type="button"
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 px-4 lg:px-5 py-2.5 text-xs lg:text-sm font-bold text-white bg-[#D95B1E] hover:bg-[#BE4A13] active:bg-[#A9400F] rounded-xl shadow-[0_2px_10px_rgba(217,91,30,0.25)] hover:shadow-[0_4px_14px_rgba(217,91,30,0.35)] transition-all duration-200 cursor-pointer min-h-[42px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Dùng Thử 14 Ngày</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenRegister}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#D95B1E] hover:bg-[#BE4A13] rounded-lg shadow-xs min-h-[38px]"
            >
              Dùng thử
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-600 hover:text-[#1A3E26] hover:bg-stone-100 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-stone-200/80 space-y-1.5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-stone-200/60">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 text-sm font-medium text-stone-800 hover:bg-[#EBF3EC] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-[#D95B1E] hover:bg-[#BE4A13] rounded-xl flex items-center justify-center gap-2 min-h-[44px] shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Đăng ký dùng thử 14 ngày miễn phí</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
