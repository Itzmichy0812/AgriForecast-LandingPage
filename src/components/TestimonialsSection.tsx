import React from 'react';
import { Star, CheckCircle2, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/productData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 bg-[#FBFBF9] border-b border-stone-200/80 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-[#1A3E26]/5 pointer-events-none blur-[90px]" />

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
            <Store className="w-3.5 h-3.5 text-[#1A3E26]" />
            <span>NGƯỜI THẬT • VIỆC THẬT</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3E26] tracking-tight leading-tight">
            Chủ Đại Lý Nói Về AgriForecast
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Hiệu quả thực tế được kiểm chứng qua các mùa vụ tại Tây Nguyên và Miền Tây.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid with motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 saas-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* 5 Stars Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]">
                    {item.badge}
                  </span>
                </div>

                {/* Highlight Quote */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E26]" />
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs text-[#1A3E26] font-bold bg-[#F4F8F5] px-2 py-1 rounded-lg border border-[#D1E3D3]">
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-stone-200/90 saas-card grid grid-cols-2 lg:grid-cols-4 gap-4 text-center"
        >
          <div className="space-y-0.5">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#1A3E26] block">120+</span>
            <p className="text-xs text-stone-500 font-medium">Đại lý tin dùng</p>
          </div>
          <div className="space-y-0.5">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#1A3E26] block">98.5%</span>
            <p className="text-xs text-stone-500 font-medium">Gia hạn mỗi mùa</p>
          </div>
          <div className="space-y-0.5">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#D95B1E] block">18 Tỷ+</span>
            <p className="text-xs text-stone-500 font-medium">Vốn kho bảo vệ</p>
          </div>
          <div className="space-y-0.5">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#1A3E26] block">14 Ngày</span>
            <p className="text-xs text-stone-500 font-medium">Dùng thử miễn phí</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
