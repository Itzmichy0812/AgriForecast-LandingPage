import React from 'react';
import { 
  AlertOctagon, 
  CloudLightning, 
  PackageX, 
  AlertTriangle,
  ArrowUpRight,
  TrendingDown,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative py-16 sm:py-24 overflow-hidden bg-[#FBFBF9] border-b border-stone-200/80">
      
      {/* Background Image with 90% Muted Gradient Overlay (Modern Agriculture Landscape) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      {/* Soft Ivory Gradient Wash on Top */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FBFBF9] via-[#FBFBF9]/95 to-[#FBFBF9] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#D95B1E]/6 pointer-events-none blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Headline <8 words, Sub-headline 1 sentence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#D95B1E] text-xs font-semibold">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>RỦI RO ĐẠI LÝ TRUYỀN THỐNG</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3E26] tracking-tight leading-tight">
            3 Rủi Ro Chôn Vốn Ở Đại Lý
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Nhập hàng theo cảm tính dễ dẫn đến đọng vốn lớn và hụt hàng khi dịch bệnh ập đến.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Bento 1 (Large 8-cols): Inventory Expiry Trap Visualizer */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 saas-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
                    <PackageX className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold text-[#D95B1E] uppercase tracking-wider block">
                      RỦI RO 01
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-stone-900">
                      Chôn Vốn Vì Thuốc Cận Date
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  Thiệt hại 80 - 200 Triệu
                </span>
              </div>

              {/* Short bullet pills (max 6-8 words) */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium">
                  • Nhập số lượng lớn lấy chiết khấu
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium">
                  • Mưa kéo dài làm thuốc tồn kho
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium">
                  • Hết hạn 24 tháng không thể trả
                </span>
              </div>

              {/* Simulated Visual Risk Box */}
              <div className="rounded-xl bg-[#FBFBF9] border border-stone-200/90 p-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs pb-1.5 border-b border-stone-200/60">
                  <span className="font-bold text-stone-700 flex items-center gap-1.5 text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    Cảnh báo hàng cận hạn tại kho:
                  </span>
                  <span className="text-stone-400 text-[10px]">Thời gian thực</span>
                </div>

                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-2 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-900 text-xs sm:text-sm">Thuốc Trừ Cỏ Chọn Lọc Ngô</span>
                      <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-1.5 py-0.5 rounded">Hạn còn 3 tháng</span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">Tồn 42 thùng • Vốn kẹt: 68.000.000 VNĐ</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 shrink-0">Nguy cơ huỷ bỏ</span>
                </div>

                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-2 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-900 text-xs sm:text-sm">Phân Kích Đọt Sầu Riêng</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">Hạn còn 5 tháng</span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">Tồn 65 can • Vốn kẹt: 54.000.000 VNĐ</p>
                  </div>
                  <span className="text-xs font-bold text-amber-700 shrink-0">Tiêu thụ chậm 70%</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100">
              <span>Được ngăn chặn nhờ thuật toán dự báo 14 ngày</span>
              <a href="#simulator" className="text-[#1A3E26] font-bold hover:underline inline-flex items-center gap-1">
                Xem cách xử lý <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Bento 2 (4-cols): Stockout Loss */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 saas-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-white"
          >
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D95B1E] flex items-center justify-center font-bold">
                <CloudLightning className="w-4 h-4" />
              </div>

              <span className="text-[11px] font-extrabold text-[#D95B1E] uppercase tracking-wider block">
                RỦI RO 02
              </span>

              <h3 className="font-heading text-base sm:text-lg font-bold text-stone-900 leading-snug">
                Cháy Hàng Mùa Dịch
              </h3>

              {/* Big Metric Box */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-center space-y-0.5">
                <span className="text-[11px] text-stone-600 font-semibold uppercase">Mất doanh số vụ</span>
                <div className="font-heading text-3xl sm:text-4xl font-black text-[#D95B1E]">
                  30% – 40%
                </div>
                <p className="text-[10px] text-stone-500">Khi bùng phát nấm hoặc rầy</p>
              </div>

              <div className="space-y-1.5 text-xs text-stone-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D95B1E]" />
                  <span>Kho hết thuốc đúng lúc dịch rộ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D95B1E]" />
                  <span>Công ty cấp 1 quá tải giao chậm</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D95B1E]" />
                  <span>Nông dân chuyển sang mua đại lý khác</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs font-bold text-[#D95B1E] border-t border-stone-100 flex items-center justify-between">
              <span>Mất khách ruột</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Bento 3 (Full width 12-cols or 3rd card): Passive Waiting */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-12 saas-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white"
          >
            <div className="space-y-2 text-left">
              <span className="text-[11px] font-extrabold text-[#1A3E26] uppercase tracking-wider block">
                RỦI RO 03 • BÁN HÀNG THỤ ĐỘNG
              </span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-stone-900">
                Ngồi Đợi Khách Đến Mới Tư Vấn
              </h3>
              <p className="text-xs text-stone-500 max-w-xl">
                Không chủ động nhắn tin cảnh báo thời tiết khiến đại lý bỏ lỡ 80% cơ hội bán phòng bệnh sớm.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="text-xs font-bold text-stone-700 block">Giải pháp:</span>
                <span className="text-xs text-[#1A3E26] font-extrabold">Zalo nhắc lịch 1 chạm</span>
              </div>
              <a
                href="#advisory"
                className="px-4 py-2.5 rounded-xl bg-[#1A3E26] hover:bg-[#122D1B] text-white text-xs font-bold transition-all shadow-xs"
              >
                Xem tin nhắn mẫu
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
