import React, { useState } from 'react';
import { 
  CloudSun, 
  PackageCheck, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Zap, 
  Clock, 
  Copy, 
  Check, 
  Radio, 
  ShieldCheck,
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_META } from '../data/productData';

export const ArchitectureSection: React.FC = () => {
  const [copiedZalo, setCopiedZalo] = useState(false);

  const sampleZaloMsg = 'Chào anh Nam, đợt này Đắk Lắk mình mưa dầm 5 ngày tới nên nấm xì mủ sầu riêng phát triển mạnh. Anh nhớ quét gốc Metalaxyl sớm nhé. Cửa hàng em đã về sẵn thuốc chính hãng, anh ghé lấy sớm nha!';

  const handleCopyZalo = () => {
    navigator.clipboard.writeText(sampleZaloMsg);
    setCopiedZalo(true);
    setTimeout(() => setCopiedZalo(false), 2000);
  };

  return (
    <section id="features" className="relative py-16 sm:py-24 bg-[#FBFBF9] border-b border-stone-200/80 overflow-hidden">
      
      {/* Soft Ambient Mesh Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#1A3E26]/6 pointer-events-none blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#D95B1E]/6 pointer-events-none blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Headline <8 words, Subheadline 1 sentence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EC] border border-[#D1E3D3] text-[#1A3E26] text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-[#D95B1E] fill-[#D95B1E]" />
            <span>TÍNH NĂNG CỐT LÕI</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3E26] tracking-tight leading-tight">
            3 Trợ Thủ Nhập Kho Thông Minh
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Giao diện điện thoại trực quan, mở app buổi sáng là nắm trọn việc cần làm.
          </p>
        </motion.div>

        {/* Bento Grid Visual-First Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Main Bento Hero Card (8 Cols): Smartphone/Dashboard UI Mockup */}
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
                  <div className="w-8 h-8 rounded-lg bg-[#EBF3EC] text-[#1A3E26] flex items-center justify-center font-bold">
                    <PackageCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold text-[#1A3E26] uppercase tracking-wider block">
                      TRỢ THỦ 01
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-stone-900">
                      Gợi Ý Số Thùng Cần Nhập Tự Động
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                  Mô Phỏng Mobile App
                </span>
              </div>

              {/* Visual Tags (max 6-8 words) */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#F4F8F5] text-[#1A3E26] text-xs font-semibold border border-[#D1E3D3]">
                  ✓ Tính theo diện tích xã
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F4F8F5] text-[#1A3E26] text-xs font-semibold border border-[#D1E3D3]">
                  ✓ Trừ hao hàng tồn hiện tại
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F4F8F5] text-[#1A3E26] text-xs font-semibold border border-[#D1E3D3]">
                  ✓ Đặt trước 3 ngày an toàn
                </span>
              </div>

              {/* Realistic Mobile Mockup */}
              <div className="rounded-2xl bg-[#F8FAF9] border border-stone-200/90 p-4 sm:p-5 space-y-3 shadow-inner">
                {/* Simulated App Header */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-200/60">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#1A3E26]" />
                    <span className="font-bold text-stone-900">AgriForecast • Đại lý Krông Pắk</span>
                  </div>
                  <span className="flex items-center gap-1 text-emerald-700 font-bold text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Trực tuyến
                  </span>
                </div>

                {/* Weather Alert Pill */}
                <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-xs shadow-2xs">
                  <span className="font-semibold text-stone-800 flex items-center gap-1.5">
                    <CloudSun className="w-4 h-4 text-[#D95B1E]" />
                    Dự báo 14 ngày: Mưa dầm 85% từ Thứ Năm
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-[#D95B1E] border border-amber-200">
                    Phòng nấm gấp
                  </span>
                </div>

                {/* Order card 1 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#1A3E26] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" />
                      NÊN NHẬP NGAY:
                    </span>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                      +120 Thùng
                    </span>
                  </div>
                  <div className="text-xs font-bold text-stone-900">
                    Metalaxyl 25% (Trị xì mủ, nứt thân sầu riêng)
                  </div>
                  <div className="text-[11px] text-stone-500 flex justify-between">
                    <span>Tồn kho: 14 thùng • Tốc độ bán: 35 thùng/ngày</span>
                    <span className="font-semibold text-[#1A3E26]">Giao: 2 ngày</span>
                  </div>
                </div>

                {/* Order card 2 */}
                <div className="p-3 rounded-xl bg-[#FFFBF8] border border-amber-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#D95B1E] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D95B1E]" />
                      TẠM HOÃN ĐỢT NÀY:
                    </span>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-amber-100/60 text-[#D95B1E] border border-amber-200">
                      0 Bao (Giữ vốn 75M)
                    </span>
                  </div>
                  <div className="text-xs font-bold text-stone-900">
                    Phân Đạm Urê & Thuốc Cỏ
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Mưa lớn trôi phân, nông dân dừng bón.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100">
              <span>Không sợ thiếu hàng khi nông dân đổ xô mua</span>
              <a href="#simulator" className="text-[#1A3E26] font-bold hover:underline inline-flex items-center gap-1">
                Xem mô phỏng <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 2 Stacked Bento Cards (4 cols each) */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            
            {/* Bento 2: Weather Radar */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="saas-card rounded-2xl p-6 bg-white space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#1A3E26] uppercase tracking-wider block">
                  TRỢ THỦ 02
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Radar 14 Ngày
                </span>
              </div>

              <h3 className="font-heading text-base font-bold text-stone-900">
                Dự Báo Khí Tượng Nông Vụ
              </h3>

              <div className="p-3.5 rounded-xl bg-[#FBFBF9] border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between font-medium">
                  <span className="text-stone-600">Độ ẩm trung bình:</span>
                  <strong className="text-[#1A3E26]">94% (Rất cao)</strong>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-200 overflow-hidden">
                  <div className="h-full bg-[#1A3E26] rounded-full w-[94%]" />
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-stone-600">Lượng mưa tuần:</span>
                  <strong className="text-[#D95B1E]">190mm</strong>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-200 overflow-hidden">
                  <div className="h-full bg-[#D95B1E] rounded-full w-[80%]" />
                </div>
              </div>

              <p className="text-xs text-stone-500">
                Cảnh báo trước 5-7 ngày để đại lý liên hệ nhà phân phối giữ giá sỉ tốt nhất.
              </p>
            </motion.div>

            {/* Bento 3: 1-Click Zalo Care */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="saas-card rounded-2xl p-6 bg-white space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#D95B1E] uppercase tracking-wider block">
                  TRỢ THỦ 03
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-[#D95B1E] border border-amber-200">
                  Zalo Chăm Sóc
                </span>
              </div>

              <h3 className="font-heading text-base font-bold text-stone-900">
                Nhắc Lịch Nhà Vườn 1 Chạm
              </h3>

              <div className="p-3 rounded-xl bg-[#F4F8F5] border border-[#D1E3D3] text-xs text-stone-700 italic line-clamp-3">
                &ldquo;{sampleZaloMsg}&rdquo;
              </div>

              <button
                type="button"
                onClick={handleCopyZalo}
                className="w-full py-2.5 px-3 rounded-xl bg-[#1A3E26] hover:bg-[#122D1B] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs min-h-[40px]"
              >
                {copiedZalo ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>ĐÃ SAO CHÉP!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép gửi Zalo</span>
                  </>
                )}
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
