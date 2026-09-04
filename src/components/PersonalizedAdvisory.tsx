import React, { useState } from 'react';
import { 
  MessageSquare, 
  CheckCircle2, 
  Copy, 
  Check,
  Sprout,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

export const PersonalizedAdvisory: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const groups = [
    {
      name: '48 Vườn Sầu Riêng (Krông Pắk)',
      crop: 'Sầu riêng Monthong & Ri6',
      situation: 'Mưa dầm 7-10 ngày, ẩm độ >90%',
      smsTemplate: 'Chào anh/chị, dự báo vùng mình mấy ngày tới mưa dầm dề. Anh/chị nhớ khơi rãnh thoát nước và quét thuốc phòng nấm xì mủ quanh gốc sớm nhé. Cửa hàng em đã về sẵn thuốc Ridomil và Metalaxyl chính hãng, anh/chị ghé lấy sớm trước khi mưa lớn nhé!',
      products: ['Metalaxyl trị xì mủ', 'Fosetyl quét gốc', 'Canxi-Bo chống rụng'],
    },
    {
      name: '62 Vườn Cà Phê (Cư M’gar)',
      crop: 'Cà phê vối Robusta',
      situation: 'Mưa đầu mùa sau chuỗi ngày khô hạn',
      smsTemplate: 'Chào anh/chị, trời bắt đầu có mưa đầu mùa rồi. Thời điểm này anh/chị chia phân bón làm 2 đợt nhỏ tránh sốc rễ và xịt thêm Bo-Canxi chống rụng trái non nhé. Phân đợt này bên em có quà tặng công ty, anh/chị ghé ủng hộ em nha!',
      products: ['NPK 16-8-16', 'Kẽm-Bo chống rụng', 'Hữu cơ vi sinh'],
    },
    {
      name: '82 Hộ Lúa (Thoại Sơn)',
      crop: 'Đài Thơm 8 & OM18',
      situation: 'Sáng sương mù, trưa nắng gắt',
      smsTemplate: 'Bà con mình ơi, sáng sớm sương mù nhiều là đạo ôn lá lan rất lẹ. Bà con thăm đồng sớm kiểm tra vết chấm kim để xịt ngừa ngay khi ráo sương nhé. Cửa hàng đã chuẩn bị sẵn thuốc đặc trị đạo ôn chính hãng cho bà con ạ.',
      products: ['Tricyclazole đạo ôn', 'Pymetrozine ngừa rầy', 'Kích kháng đòng'],
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(groups[activeGroup].smsTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="advisory" className="relative py-16 sm:py-24 bg-[#FBFBF9] border-b border-stone-200/80 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-[#1A3E26]/5 pointer-events-none blur-[90px]" />

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
            <MessageSquare className="w-3.5 h-3.5 text-[#1A3E26]" />
            <span>CHĂM SÓC KHÁCH HÀNG TỰ ĐỘNG</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3E26] tracking-tight leading-tight">
            Nhắc Lịch Nhà Vườn Tự Động
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Gửi tin nhắn Zalo mẫu trước đợt thời tiết xấu để nông dân chủ động mua thuốc phòng bệnh.
          </p>
        </motion.div>

        {/* Group Selector and Interactive Message Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 3 Crisp Group Selector Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-2.5"
          >
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">
              Chọn nhóm nhà vườn:
            </span>

            {groups.map((group, idx) => {
              const isSelected = activeGroup === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveGroup(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer saas-card ${
                    isSelected
                      ? 'bg-white border-[#1A3E26] ring-2 ring-[#1A3E26]/20'
                      : 'bg-[#F4F8F5] border-stone-200/80 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                      {group.crop}
                    </span>
                    <Sprout className="w-4 h-4 text-[#1A3E26]" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-stone-900">
                    {group.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Thời tiết: {group.situation}
                  </p>
                </button>
              );
            })}

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-stone-700">
              <strong className="text-[#D95B1E]">💡 Hiệu quả:</strong> Nhắn đúng lúc thời tiết xấu giúp 90% nhà vườn quay lại mua hàng.
            </div>
          </motion.div>

          {/* Right: Message Preview & 1-Click Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 bg-white p-6 rounded-2xl border border-stone-200/90 saas-card space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <span className="text-[10px] font-extrabold text-[#1A3E26] uppercase tracking-wider block">
                  TIN NHẮN SOẠN SẴN GỬI ZALO
                </span>
                <h3 className="font-heading text-sm sm:text-base font-bold text-stone-900">
                  {groups[activeGroup].name}
                </h3>
              </div>
              <span className="text-[11px] bg-[#EBF3EC] text-[#1A3E26] font-bold px-2.5 py-0.5 rounded-full border border-[#D1E3D3]">
                Gửi trước mưa 2 ngày
              </span>
            </div>

            {/* Zalo Message Bubble */}
            <div className="p-4 rounded-xl bg-[#F4F8F5] border border-[#D1E3D3] text-xs sm:text-sm text-stone-800 leading-relaxed italic">
              &ldquo;{groups[activeGroup].smsTemplate}&rdquo;
            </div>

            {/* Suggested Products List (Clean Pills) */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-bold text-stone-600 block">
                Mặt hàng nên sẵn sàng tại quầy:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {groups[activeGroup].products.map((p, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 text-xs font-medium text-stone-800"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#1A3E26]" />
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* 1-Click Copy Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="px-5 py-3 rounded-xl bg-[#D95B1E] hover:bg-[#BE4A13] active:bg-[#A9400F] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-amber-200" />
                    <span>ĐÃ SAO CHÉP THÀNH CÔNG!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao chép tin nhắn Zalo</span>
                  </>
                )}
              </button>

              <span className="text-[11px] text-stone-400 text-center sm:text-left">
                Chỉ cần dán vào nhóm Zalo nhà vườn của bạn
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
