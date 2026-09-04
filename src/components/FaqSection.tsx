import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, PRODUCT_META } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-[#FBFBF9] border-b border-stone-200/80 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#1A3E26]/5 pointer-events-none blur-[90px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Headline <8 words, Subheadline 1 sentence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EC] border border-[#D1E3D3] text-[#1A3E26] text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#1A3E26]" />
            <span>GIẢI ĐÁP THẮC MẮC</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3E26] tracking-tight leading-tight">
            Giải Đáp Câu Hỏi Thường Gặp
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-lg mx-auto">
            Tất cả những gì bạn cần biết trước khi bắt đầu dùng thử 14 ngày.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-stone-200/90 overflow-hidden saas-card"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 min-h-[52px]"
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-stone-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#EBF3EC] text-[#1A3E26]' : 'bg-stone-100 text-stone-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-12 p-6 rounded-2xl bg-[#F4F8F5] border border-[#D1E3D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs"
        >
          <div className="space-y-0.5">
            <h4 className="font-heading text-sm sm:text-base font-bold text-stone-900">
              Bạn vẫn còn câu hỏi khác?
            </h4>
            <p className="text-xs text-stone-500">
              Kỹ thuật viên AgriForecast luôn sẵn sàng giải đáp trực tiếp qua Zalo hoặc Hotline.
            </p>
          </div>
          <a
            href={`tel:${PRODUCT_META.hotline.replace(/\s/g, '')}`}
            className="px-5 py-2.5 rounded-xl bg-[#1A3E26] hover:bg-[#122D1B] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 shadow-xs whitespace-nowrap min-h-[40px]"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
            <span>Gọi Hotline: {PRODUCT_META.hotline}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
