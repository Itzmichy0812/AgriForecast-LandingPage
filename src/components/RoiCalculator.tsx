import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  PiggyBank, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export const RoiCalculator: React.FC = () => {
  const [annualRevenue, setAnnualRevenue] = useState<number>(3000); // 3 tỷ VNĐ
  const [agroChemRatio, setAgroChemRatio] = useState<number>(45); // 45% thuốc BVTV

  const calculations = useMemo(() => {
    const expiredStockSaved = Math.round(annualRevenue * (agroChemRatio / 100) * 0.045);
    const revenueGained = Math.round(annualRevenue * 0.055);
    const totalBenefit = expiredStockSaved + revenueGained;
    return {
      expiredStockSaved,
      revenueGained,
      totalBenefit,
    };
  }, [annualRevenue, agroChemRatio]);

  return (
    <section id="roi" className="relative py-16 sm:py-24 bg-[#FBFBF9] border-b border-stone-200/80 overflow-hidden">
      
      {/* Background Agriculture Image with 90% Muted Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FBFBF9] via-[#FBFBF9]/95 to-[#FBFBF9] pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#1A3E26]/6 pointer-events-none blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Headline <8 words, Subheadline 1 sentence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#D95B1E] text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>ƯỚC TÍNH LỢI ÍCH TÀI CHÍNH</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3E26] tracking-tight leading-tight">
            Tiết Kiệm Bao Nhiêu Mỗi Vụ?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Kéo thanh trượt bên dưới để xem số vốn giữ lại được và doanh số tăng thêm.
          </p>
        </motion.div>

        {/* Minimalist Visual ROI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Sliders (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 saas-card flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                THÔNG SỐ ĐẠI LÝ CỦA BẠN:
              </span>

              {/* Slider 1: Annual Revenue */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                  <span className="text-stone-700">Doanh thu bán ra mỗi năm:</span>
                  <span className="text-base sm:text-lg font-bold text-[#1A3E26] bg-[#EBF3EC] px-3 py-0.5 rounded-lg border border-[#D1E3D3]">
                    {(annualRevenue / 1000).toFixed(1)} Tỷ VNĐ
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={10000}
                  step={250}
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>500 Triệu</span>
                  <span>5 Tỷ</span>
                  <span>10 Tỷ VNĐ</span>
                </div>
              </div>

              {/* Slider 2: AgroChem Ratio */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                  <span className="text-stone-700">Tỷ trọng thuốc BVTV trong kho:</span>
                  <span className="text-base sm:text-lg font-bold text-[#D95B1E] bg-amber-50 px-3 py-0.5 rounded-lg border border-amber-200">
                    {agroChemRatio}%
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={80}
                  step={5}
                  value={agroChemRatio}
                  onChange={(e) => setAgroChemRatio(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>15% (Chủ yếu phân)</span>
                  <span>45% (Cân bằng)</span>
                  <span>80% (Chuyên thuốc)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" /> Áp dụng thuật toán dự báo 14 ngày
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" /> Đảm bảo tỷ lệ xoay vòng vốn
                </span>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 border-t border-stone-100 pt-3">
              *Số liệu ước tính dựa trên mức trung bình thực tế từ 120+ đại lý VTNN đang sử dụng.
            </p>
          </motion.div>

          {/* Right Column: Key Milestone Output Cards (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 bg-[#1A3E26] text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between space-y-6"
          >
            <div>
              <span className="text-[11px] font-extrabold text-emerald-300 uppercase tracking-wider block">
                TỔNG LỢI ÍCH DÒNG TIỀN MỖI VỤ
              </span>
              
              {/* Grand Total Number */}
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                  +{calculations.totalBenefit}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-200">
                  Triệu VNĐ/năm
                </span>
              </div>
            </div>

            {/* 2 Visual Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                  <PiggyBank className="w-4 h-4" />
                  <span>Tránh đọng hàng date:</span>
                </div>
                <div className="font-heading text-2xl font-bold text-white">
                  +{calculations.expiredStockSaved} Triệu
                </div>
                <p className="text-[10px] text-stone-300">
                  Không phải bán lỗ hay thu hồi
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Tăng doanh số mùa dịch:</span>
                </div>
                <div className="font-heading text-2xl font-bold text-white">
                  +{calculations.revenueGained} Triệu
                </div>
                <p className="text-[10px] text-stone-300">
                  Nhờ có sẵn hàng bán ngay
                </p>
              </div>
            </div>

            {/* CTA in Card */}
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-stone-300">
                Đăng ký kích hoạt cho vụ mùa sắp tới
              </span>
              <a
                href="#register-demo"
                className="px-5 py-2.5 rounded-xl bg-[#D95B1E] hover:bg-[#BE4A13] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md min-h-[42px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Nhận Đánh Giá Kho Miễn Phí</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
