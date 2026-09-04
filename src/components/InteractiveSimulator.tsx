import React, { useState, useMemo } from 'react';
import { 
  CloudRain, 
  SunMedium, 
  Snowflake, 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { SCENARIOS } from '../data/productData';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export const InteractiveSimulator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('tay-nguyen-sau-rieng');
  const [filterType, setFilterType] = useState<'all' | 'order' | 'pause'>('all');

  const currentScenario = useMemo(() => {
    return SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];
  }, [selectedScenarioId]);

  const filteredRecs = currentScenario.recommendations.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  return (
    <section id="simulator" className="relative py-16 sm:py-24 bg-white border-b border-stone-200/80 overflow-hidden">
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-[#1A3E26]/5 pointer-events-none blur-[90px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#D95B1E]/5 pointer-events-none blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Headline <8 words, Sub-headline 1 sentence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EC] text-[#1A3E26] text-xs font-semibold border border-[#D1E3D3]">
            <Sparkles className="w-3.5 h-3.5 text-[#D95B1E]" />
            <span>MÔ PHỎNG 14 NGÀY</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3E26] tracking-tight leading-tight">
            Dự Báo Nhu Cầu 14 Ngày
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Theo dõi sức mua thuốc và phân bón tăng vọt khi thời tiết xấu xuất hiện.
          </p>
        </motion.div>

        {/* 3 Region Visual Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {SCENARIOS.map((sc) => {
            const isSelected = sc.id === selectedScenarioId;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#F4F8F5] border-[#1A3E26] ring-2 ring-[#1A3E26]/20 shadow-xs'
                    : 'bg-white border-stone-200/80 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-[#1A3E26]">
                    {sc.region.split('(')[0]}
                  </span>
                  {sc.id.includes('tay-nguyen') && <CloudRain className="w-4 h-4 text-[#1A3E26]" />}
                  {sc.id.includes('song-cuu-long') && <SunMedium className="w-4 h-4 text-[#D95B1E]" />}
                  {sc.id.includes('mien-bac') && <Snowflake className="w-4 h-4 text-sky-600" />}
                </div>
                <h3 className="font-heading text-sm font-bold text-stone-900 leading-snug">
                  {sc.crop}
                </h3>
                <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                  {sc.weatherCondition}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Visual Layout: Minimalist Chart on Left, Clean Action Cards on Right */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (7 cols): Minimalist Trend Visualizer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#FBFBF9] p-5 sm:p-6 rounded-2xl border border-stone-200/90 saas-card space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-stone-200/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D95B1E] animate-pulse" />
                <span className="font-heading font-bold text-sm text-stone-900">
                  Biểu Đồ Sức Mua Dự Kiến (Thùng)
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1 text-stone-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-stone-400" /> Ngày thường
                </span>
                <span className="flex items-center gap-1 text-[#D95B1E] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#D95B1E]" /> Khi mưa dịch
                </span>
              </div>
            </div>

            {/* Minimalist Visual Chart */}
            <div className="h-56 sm:h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentScenario.forecastTrends} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D95B1E" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#D95B1E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                  <XAxis dataKey="day" stroke="#6B7280" fontSize={11} tickLine={false} />
                  <YAxis stroke="#6B7280" fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      borderRadius: '12px', 
                      border: '1px solid #E5E7EB',
                      fontSize: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="weatherAdjustedDemand" 
                    name="Nhu cầu tăng khi mưa" 
                    stroke="#D95B1E" 
                    strokeWidth={2.5}
                    fillOpacity={1} 
                    fill="url(#colorDemand)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="baselineDemand" 
                    name="Nhu cầu bình thường" 
                    stroke="#9CA3AF" 
                    strokeWidth={2} 
                    strokeDasharray="4 4"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* 2 Key Milestones Only */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs">
                <span className="text-stone-500 block text-[11px]">Đỉnh điểm bùng dịch:</span>
                <strong className="text-[#D95B1E] font-bold text-sm block">Ngày 5 - Ngày 7</strong>
                <span className="text-[10px] text-stone-400">Nhu cầu tăng gấp 4 lần</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs">
                <span className="text-stone-500 block text-[11px]">Thời điểm đặt an toàn:</span>
                <strong className="text-[#1A3E26] font-bold text-sm block">Trước Ngày 3</strong>
                <span className="text-[10px] text-stone-400">Kịp gom hàng chiết khấu tốt</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Automated Recommendation Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-3"
          >
            {/* Quick Filter */}
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Gợi Ý Đặt Hàng Theo Xã:
              </span>
              <div className="flex gap-1 p-0.5 bg-stone-100 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  className={`px-2 py-0.5 rounded font-bold cursor-pointer transition-all ${
                    filterType === 'all' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500'
                  }`}
                >
                  Tất cả
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('order')}
                  className={`px-2 py-0.5 rounded font-bold cursor-pointer transition-all ${
                    filterType === 'order' ? 'bg-[#1A3E26] text-white shadow-2xs' : 'text-stone-500'
                  }`}
                >
                  Nên nhập
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('pause')}
                  className={`px-2 py-0.5 rounded font-bold cursor-pointer transition-all ${
                    filterType === 'pause' ? 'bg-[#D95B1E] text-white shadow-2xs' : 'text-stone-500'
                  }`}
                >
                  Tạm dừng
                </button>
              </div>
            </div>

            {/* Recommendation List */}
            <div className="space-y-2.5">
              {filteredRecs.map((rec, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all saas-card ${
                    rec.type === 'order'
                      ? 'bg-white border-stone-200'
                      : 'bg-[#FFFDFB] border-amber-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-extrabold flex items-center gap-1 ${
                      rec.type === 'order' ? 'text-[#1A3E26]' : 'text-[#D95B1E]'
                    }`}>
                      {rec.type === 'order' ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          NÊN NHẬP NGAY:
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-3.5 h-3.5" />
                          TẠM DỪNG NHẬP:
                        </>
                      )}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      rec.type === 'order'
                        ? 'bg-[#EBF3EC] text-[#1A3E26] border border-[#D1E3D3]'
                        : 'bg-amber-100/70 text-[#D95B1E] border border-amber-200'
                    }`}>
                      {rec.type === 'order' ? `+${rec.suggestedOrder} Thùng` : '0 Bao'}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-stone-900 leading-snug">
                    {rec.productName}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                    {rec.reason}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <a
              href="#register-demo"
              className="w-full py-3 px-4 rounded-xl bg-[#1A3E26] hover:bg-[#122D1B] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[42px]"
            >
              <span>Xem Dữ Liệu Thời Tiết Cho Đại Lý Của Bạn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
