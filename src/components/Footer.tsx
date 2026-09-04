import React from 'react';
import { Sprout, PhoneCall, Mail, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCT_META } from '../data/productData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122D1B] text-stone-300 py-16 border-t border-[#1A3E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A3E26] border border-white/10 flex items-center justify-center text-white shadow-xs">
                <Sprout className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white">
                  {PRODUCT_META.name}
                </span>
                <p className="text-xs text-emerald-300/90 font-medium">
                  {PRODUCT_META.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Nền tảng công nghệ B2B chuyên biệt cho chủ đại lý, cửa hàng kinh doanh phân bón & thuốc BVTV tại Việt Nam. Giúp tối ưu hóa vốn lưu động và chủ động nguồn cung theo thời tiết 14 ngày.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Hệ thống bảo mật dữ liệu đại lý đạt chuẩn quốc tế</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-heading font-bold uppercase tracking-wider text-white text-xs block">
              Khám Phá Tính Năng
            </span>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  Rủi ro đọng vốn mùa vụ
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Hệ thống trợ thủ Bento Grid
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">
                  Mô phỏng thời tiết 14 ngày
                </a>
              </li>
              <li>
                <a href="#advisory" className="hover:text-white transition-colors">
                  Mẫu tin Zalo chăm sóc nhà vườn
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:text-white transition-colors">
                  Bảng tính giá trị kinh tế (ROI)
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Đánh giá từ chủ đại lý
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Support */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-heading font-bold uppercase tracking-wider text-white text-xs block">
              Trung Tâm Hỗ Trợ Đại Lý
            </span>
            <ul className="space-y-2.5 text-stone-300">
              <li className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#D95B1E] shrink-0 mt-0.5" />
                <span>
                  Hotline tư vấn (Miễn cước): <strong className="text-white font-bold">{PRODUCT_META.hotline}</strong>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D95B1E] shrink-0 mt-0.5" />
                <span>Email hỗ trợ: <strong className="text-white">{PRODUCT_META.email}</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D95B1E] shrink-0 mt-0.5" />
                <span>
                  Văn phòng: TP. Hồ Chí Minh • Buôn Ma Thuột (Đắk Lắk) • TP. Cần Thơ
                </span>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="#register-demo"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D95B1E] hover:bg-[#BE4A13] text-white font-bold text-xs transition-colors shadow-xs"
              >
                <span>Đăng ký tư vấn trực tiếp 1-1</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} {PRODUCT_META.name} B2B SaaS. Toàn quyền bảo lưu.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản dịch vụ
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
