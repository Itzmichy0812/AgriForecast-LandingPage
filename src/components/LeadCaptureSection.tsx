import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Store, 
  MapPin, 
  User, 
  Clock, 
  Gift
} from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_META } from '../data/productData';

export const LeadCaptureSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');
  const [province, setProvince] = useState('');
  const [cropType, setCropType] = useState('Sầu riêng & Cây ăn quả');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="register-demo" className="relative py-16 sm:py-24 bg-white border-b border-stone-200/80 scroll-mt-10 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#1A3E26]/5 pointer-events-none blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Box */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#FBFBF9] border border-stone-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 saas-card"
        >
          
          {/* Left Column: Reassurance & Value Props */}
          <div className="lg:col-span-5 bg-[#1A3E26] text-white p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20">
                <Gift className="w-3.5 h-3.5 text-amber-300" />
                <span>ƯU ĐÃI ĐẦU VỤ MÙA MỚI</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Đăng Ký Dùng Thử 14 Ngày
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-normal">
                  Nhận ngay tài khoản chạy thử trên danh mục thuốc và thời tiết thực tế tại vùng của bạn.
                </p>
              </div>

              {/* 4 Crisp Reassurances */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span><strong>14 ngày miễn phí:</strong> Không mất phí duy trì.</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span><strong>Hỗ trợ cài 1-1:</strong> 10 phút là quen dùng ngay.</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span><strong>Không cần thẻ visa:</strong> Trải nghiệm trước an tâm.</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span><strong>Bảo mật 100%:</strong> Không chia sẻ số liệu đại lý.</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Hotline */}
            <div className="pt-4 border-t border-white/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <PhoneCall className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="text-[10px] text-emerald-100/70">Hotline hỗ trợ 24/7</p>
                  <p className="text-sm font-bold text-white">{PRODUCT_META.hotline}</p>
                </div>
              </div>
              <span className="text-[11px] text-emerald-200 bg-white/10 px-2.5 py-1 rounded-full font-medium">
                Hỗ trợ 15 phút
              </span>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EBF3EC] text-[#1A3E26] flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-heading text-xl font-bold text-stone-900">
                  Đăng Ký Thành Công!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Cảm ơn Quý khách <strong className="text-stone-900">{storeName || fullName}</strong> ({phone}). Chuyên viên sẽ liên hệ qua Zalo để cấp tài khoản ngay!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setPhone('');
                    setFullName('');
                  }}
                  className="text-xs font-bold text-[#1A3E26] hover:underline cursor-pointer pt-2"
                >
                  ← Gửi thêm thông tin đại lý khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="space-y-1">
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-stone-900">
                    Nhận Tài Khoản Trải Nghiệm 14 Ngày
                  </h4>
                  <p className="text-xs text-stone-500">
                    Điền nhanh trong 30 giây để nhận thông tin kích hoạt:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#1A3E26]" />
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ví dụ: Trần Văn Nam"
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-[#FBFBF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1A3E26]/20 focus:border-[#1A3E26] min-h-[40px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                      <PhoneCall className="w-3.5 h-3.5 text-[#D95B1E]" />
                      Số điện thoại / Zalo <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ví dụ: 0988 123 456"
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-[#FBFBF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1A3E26]/20 focus:border-[#1A3E26] min-h-[40px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                      <Store className="w-3.5 h-3.5 text-[#1A3E26]" />
                      Tên Đại lý VTNN
                    </label>
                    <input
                      type="text"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      placeholder="Ví dụ: Đại lý Hùng Thơm"
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-[#FBFBF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1A3E26]/20 focus:border-[#1A3E26] min-h-[40px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1A3E26]" />
                      Tỉnh / Thành phố
                    </label>
                    <input
                      type="text"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      placeholder="Ví dụ: Đắk Lắk, Tiền Giang..."
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-[#FBFBF9] text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1A3E26]/20 focus:border-[#1A3E26] min-h-[40px]"
                    />
                  </div>
                </div>

                {/* Crop buttons */}
                <div className="space-y-1 pt-0.5">
                  <label className="text-xs font-bold text-stone-700">
                    Cây trồng chủ lực khu vực:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
                    {['Sầu riêng & Cây ăn quả', 'Lúa & Hoa màu', 'Cà phê & Hồ tiêu', 'Rau màu các loại'].map((crop) => (
                      <button
                        key={crop}
                        type="button"
                        onClick={() => setCropType(crop)}
                        className={`px-2 py-1.5 rounded-lg text-center border transition-all text-[11px] font-semibold cursor-pointer min-h-[36px] flex items-center justify-center ${
                          cropType === crop
                            ? 'bg-[#EBF3EC] border-[#1A3E26] text-[#1A3E26] font-bold ring-1 ring-[#1A3E26]'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-5 rounded-xl bg-[#D95B1E] hover:bg-[#BE4A13] active:bg-[#A9400F] text-white font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(217,91,30,0.28)] transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    {loading ? (
                      <span>Đang xử lý...</span>
                    ) : (
                      <>
                        <span>KÍCH HOẠT DÙNG THỬ 14 NGÀY MIỄN PHÍ</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-stone-400 mt-1.5">
                    🔒 Bảo mật thông tin tuyệt đối. Không gọi điện quấy rầy.
                  </p>
                </div>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
