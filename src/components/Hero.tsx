import React, { useState } from 'react';
import { 
  CloudRain, 
  SunMedium, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle,
  PackageCheck,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  ChevronRight,
  Droplets,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_META } from '../data/productData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenDocClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenDocClick }) => {
  const [activeTeaser, setActiveTeaser] = useState<'rain' | 'cold'>('rain');

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FBFBF9] border-b border-stone-200/80">
      
      {/* Soft Ambient Mesh Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#1A3E26]/8 pointer-events-none blur-[100px]" />
      <div className="absolute top-20 right-10 w-[28rem] h-[28rem] rounded-full bg-[#D95B1E]/7 pointer-events-none blur-[120px]" />
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-emerald-500/5 pointer-events-none blur-[90px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A3E2608_1px,transparent_1px),linear-gradient(to_bottom,#1A3E2608_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual-First Headline & Core Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Ambient Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EC] border border-[#D1E3D3] text-[#1A3E26] text-xs font-semibold shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>B2B SAAS • QUẢN LÝ NHẬP KHO THEO THỜI TIẾT 14 NGÀY</span>
            </motion.div>

            {/* Headline (< 8 words) */}
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#1A3E26] tracking-tight leading-[1.12]">
                Hết Lo Đọng Vốn. <br className="hidden sm:inline" />
                <span className="text-[#D95B1E]">Sẵn Hàng Mùa Dịch.</span>
              </h1>
              
              {/* Single sentence subheadline */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
                Dự báo thời tiết nông vụ 14 ngày, tính sẵn số thùng cần đặt để bảo vệ dòng tiền đại lý.
              </p>
            </div>

            {/* Compact Visual Badges / Pills (max 6-8 words each) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-medium text-stone-800 shadow-2xs hover:border-[#1A3E26]/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" />
                Dự báo sớm 14 ngày
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-medium text-stone-800 shadow-2xs hover:border-[#1A3E26]/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" />
                Số thùng tính sẵn theo xã
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-medium text-stone-800 shadow-2xs hover:border-[#1A3E26]/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" />
                Nhắc lịch Zalo một chạm
              </span>
            </div>

            {/* Visual Metric Strip - High Contrast Numbers */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1">
              <div className="saas-card p-3.5 sm:p-4 rounded-2xl text-center sm:text-left">
                <span className="font-heading text-[#1A3E26] font-extrabold text-2xl sm:text-3xl block">
                  -85%
                </span>
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium block mt-0.5">
                  Tồn thuốc cận hạn
                </span>
              </div>

              <div className="saas-card p-3.5 sm:p-4 rounded-2xl text-center sm:text-left">
                <span className="font-heading text-[#1A3E26] font-extrabold text-2xl sm:text-3xl block">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium block mt-0.5">
                  Sẵn hàng mùa dịch
                </span>
              </div>

              <div className="saas-card p-3.5 sm:p-4 rounded-2xl bg-[#FFFBF8] border-amber-200/80 text-center sm:text-left">
                <span className="font-heading text-[#D95B1E] font-extrabold text-2xl sm:text-3xl block">
                  +25%
                </span>
                <span className="text-[11px] sm:text-xs text-stone-600 font-medium block mt-0.5">
                  Doanh số mỗi vụ
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#register-demo"
                className="px-6 py-3.5 rounded-xl bg-[#D95B1E] hover:bg-[#BE4A13] active:bg-[#A9400F] text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(217,91,30,0.28)] hover:shadow-[0_8px_24px_rgba(217,91,30,0.36)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>DÙNG THỬ 14 NGÀY MIỄN PHÍ</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                type="button"
                onClick={onExploreClick}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm border border-stone-200 shadow-2xs hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <span>Xem Mô Phỏng Nhập Kho</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1A3E26]" />
              </button>
            </div>

            {/* Micro reassurance pills */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-stone-500 pt-1">
              <span className="flex items-center gap-1 text-stone-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E26]" /> Không cần cài app
              </span>
              <span className="flex items-center gap-1 text-stone-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E26]" /> Giao diện Zalo quen thuộc
              </span>
              <span className="flex items-center gap-1 text-stone-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E26]" /> Bảo mật số liệu 100%
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Live App Mockup with Parallax Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Parallax Floating Badge 1: Top Right */}
            <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-md text-xs font-bold text-[#1A3E26] animate-soft-float">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Độ ẩm 94% • Cảnh báo nấm</span>
            </div>

            {/* Parallax Floating Badge 2: Bottom Left */}
            <div className="hidden sm:flex absolute -bottom-3 -left-4 z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A3E26] text-white shadow-lg text-xs font-semibold">
              <PackageCheck className="w-4 h-4 text-emerald-300" />
              <span>Gợi ý: +150 thùng Metalaxyl</span>
            </div>

            {/* Main Interactive Widget Container */}
            <div className="saas-card rounded-2xl p-5 sm:p-6 space-y-4 relative z-10 bg-white">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="font-heading font-bold text-stone-900 text-sm">
                    Trợ Lý Quyết Định Nhập Hàng
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                  Khí Tượng 14 Ngày
                </span>
              </div>

              {/* Scenario Toggle */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-100/70 rounded-xl border border-stone-200/60 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTeaser('rain')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTeaser === 'rain'
                      ? 'bg-white text-stone-900 shadow-2xs border border-stone-200 font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <CloudRain className="w-3.5 h-3.5 text-[#1A3E26]" />
                  <span>Mưa Dầm (Tây Nguyên)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTeaser('cold')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTeaser === 'cold'
                      ? 'bg-white text-stone-900 shadow-2xs border border-stone-200 font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <SunMedium className="w-3.5 h-3.5 text-[#D95B1E]" />
                  <span>Rét Hạn (Miền Bắc)</span>
                </button>
              </div>

              {/* Teaser Content */}
              {activeTeaser === 'rain' ? (
                <div className="space-y-3">
                  {/* Weather Alert Banner */}
                  <div className="p-3 rounded-xl bg-[#F0F5F1] border border-[#D1E3D3] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1A3E26] flex items-center gap-1.5">
                      <CloudRain className="w-4 h-4 text-[#1A3E26]" />
                      Mưa dầm 7-10 ngày tới
                    </span>
                    <span className="text-[#D95B1E] font-bold bg-white px-2 py-0.5 rounded text-[11px] border border-amber-200">
                      Nguy cơ nấm 88%
                    </span>
                  </div>

                  {/* Recommendation Actions */}
                  <div className="space-y-2">
                    {/* Urgently order */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-[#1A3E26]/40 transition-colors space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#1A3E26] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" />
                          NÊN NHẬP NGAY:
                        </span>
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                          +150 Thùng
                        </span>
                      </div>
                      <p className="text-xs font-bold text-stone-900">
                        Metalaxyl + Mancozeb (Trị xì mủ)
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Kho còn 18 gói. Đặt trước 3 ngày trước khi hãng cháy hàng.
                      </p>
                    </div>

                    {/* Pause order */}
                    <div className="p-3 rounded-xl bg-[#FFFBF8] border border-amber-200/70 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#D95B1E] flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-[#D95B1E]" />
                          TẠM DỪNG NHẬP:
                        </span>
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-amber-100/60 text-[#D95B1E] border border-amber-200">
                          0 Bao
                        </span>
                      </div>
                      <p className="text-xs font-bold text-stone-900">
                        Phân Đạm Urê & Thuốc Cỏ
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Mưa lớn trôi phân. Giữ an toàn 60 triệu tiền vốn lưu động.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#FFF9F5] border border-amber-200 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#D95B1E] flex items-center gap-1.5">
                      <SunMedium className="w-4 h-4 text-[#D95B1E]" />
                      Rét 13°C • Sương muối dày
                    </span>
                    <span className="text-[#1A3E26] font-bold bg-white px-2 py-0.5 rounded text-[11px] border border-stone-200">
                      Bảo vệ đọt cây
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#1A3E26] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" />
                          NÊN NHẬP NGAY:
                        </span>
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                          +90 Can
                        </span>
                      </div>
                      <p className="text-xs font-bold text-stone-900">
                        Amino Acid & Kích Kháng Rét
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Bà con cần xịt chống sốc lạnh, cháy bìa lá đào và vải thiều.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FFFBF8] border border-amber-200/70 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#D95B1E] flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-[#D95B1E]" />
                          TẠM DỪNG NHẬP:
                        </span>
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-amber-100/60 text-[#D95B1E] border border-amber-200">
                          0 Thùng
                        </span>
                      </div>
                      <p className="text-xs font-bold text-stone-900">
                        Thuốc trừ sâu rầy sinh học
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Trời rét sâu hại ẩn nấp, nông dân tạm ngưng phun phòng.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Micro Status */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span>Cập nhật khí tượng vệ tinh: 15 phút trước</span>
                <span className="font-semibold text-[#1A3E26]">Độ chính xác 96.4%</span>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
