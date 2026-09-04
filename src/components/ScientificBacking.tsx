import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Database, 
  ExternalLink, 
  CheckCircle2, 
  Calculator, 
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';
import { RESEARCH_PAPERS, DATA_SOURCES } from '../data/thesisData';

export const ScientificBacking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'papers' | 'sources' | 'math'>('papers');

  return (
    <section id="scientific" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>NỀN TẢNG KHOA HỌC & CƠ SỞ HỌC THUẬT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Cơ Sở Nghiên Cứu & Nguồn Dữ Liệu Đối Chiếu
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Đề tài được xây dựng trên cơ sở các công trình nghiên cứu quốc tế uy tín (IEEE Access, Sensors, Nature) kết hợp chặt chẽ với dữ liệu nông nghiệp thực nghiệm tại Việt Nam (WASI, DRIS ĐBSCL).
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('papers')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'papers'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Công trình Khoa học Tham khảo ({RESEARCH_PAPERS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sources')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'sources'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-4 h-4 text-blue-600" />
              <span>Nguồn Dữ liệu Thu thập ({DATA_SOURCES.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('math')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'math'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4 text-purple-600" />
              <span>Mô hình Toán & Quản trị Tồn kho</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Research Papers */}
        {activeTab === 'papers' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {paper.tag}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {paper.source} • {paper.year}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Tác giả: {paper.authors}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Đóng góp nghiên cứu:</strong> {paper.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-emerald-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl border-t border-emerald-100">
                  <p className="text-xs text-emerald-900 leading-snug">
                    <strong>Ứng dụng vào đề tài:</strong> {paper.appliedInSystem}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Data Sources Table */}
        {activeTab === 'sources' && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                Danh mục Các Nguồn Dữ Liệu Tích Hợp Hệ Thống
              </span>
              <span className="text-xs text-slate-400">
                Chuẩn hóa ETL & Schema tập trung
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Nguồn Dữ Liệu</th>
                    <th className="p-4">Phân loại</th>
                    <th className="p-4">Phương thức tích hợp</th>
                    <th className="p-4">Vai trò trong Hệ thống</th>
                    <th className="p-4 text-center">Liên kết</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {DATA_SOURCES.map((src, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-bold text-slate-900">
                        {src.name}
                        <span className="block text-[11px] font-normal text-slate-500">
                          {src.provider}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium text-[11px]">
                          {src.category}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-[11px] text-slate-700">
                        {src.apiType}
                      </td>
                      <td className="p-4 text-slate-600 leading-relaxed max-w-sm">
                        {src.role}
                      </td>
                      <td className="p-4 text-center">
                        {src.link && (
                          <a
                            href={src.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold text-xs"
                          >
                            <span>Truy cập</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Mathematical Formulation */}
        {activeTab === 'math' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Model 1: Weather-Enhanced Time-Series (ARIMAX / ML) */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                M1
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Dự báo Chuỗi Thời Gian Ngoại Sinh (ARIMAX / Gradient Boosting)
              </h3>
              <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto">
                <code>Y_t = c + Σ α_i Y_(t-i) + Σ β_j X_(weather, t-j) + ε_t</code>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Biến ngoại sinh <code>X_weather</code> bao gồm: Lượng mưa tích lũy 7 ngày, độ ẩm không khí trung bình và độ ẩm bề mặt lá. Khi độ ẩm vượt ngưỡng bùng phát nấm bệnh, hệ số β kích hoạt nhu cầu dự báo tăng vọt.
              </p>
            </div>

            {/* Model 2: Dynamic Reorder Point (ROP) */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                M2
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Điểm Đặt Hàng Lại Động (Dynamic Reorder Point - ROP)
              </h3>
              <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto">
                <code>ROP = (d_forecast × LeadTime) + SafetyStock</code>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thay vì dùng nhu cầu trung bình cố định (<code>d</code>), hệ thống sử dụng nhu cầu dự báo theo thời tiết (<code>d_forecast</code>). Khi thời tiết biến động, ROP tự động nâng cao để kịp thời đặt hàng từ nhà sản xuất trước khi hết kho.
              </p>
            </div>

            {/* Model 3: Safety Stock with Volatility */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                M3
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Mức Tồn Kho An Toàn Chống Rủi Ro (Safety Stock - SS)
              </h3>
              <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto">
                <code>SS = Z × √(L × σ_d² + d² × σ_L²)</code>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tính toán độ lệch chuẩn của nhu cầu <code>σ_d</code> trong điều kiện thiên tai và độ bất định của thời gian vận chuyển <code>σ_L</code> (ví dụ: mưa bão gây chậm giao hàng) với độ tin cậy Z = 95% (Z = 1.65).
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
