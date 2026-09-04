import React from 'react';
import { 
  GitMerge, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Calendar, 
  FileCheck, 
  Cpu, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { PHASE_TASKS } from '../data/thesisData';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <GitMerge className="w-3.5 h-3.5" />
            <span>KẾ HOẠCH THỰC HIỆN ĐỒ ÁN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Lộ Trình Triển Khai 2 Giai Đoạn
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quy trình nghiên cứu và phát triển hệ thống được phân chia mạch lạc theo đúng khung đề cương đồ án tốt nghiệp ngành Công nghệ Thông tin.
          </p>
        </div>

        {/* 2 Phases Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {PHASE_TASKS.map((phase) => {
            const isPhase1 = phase.phase === 1;
            return (
              <div
                key={phase.phase}
                className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                  isPhase1
                    ? 'bg-emerald-50/30 border-emerald-300 ring-1 ring-emerald-500/20 shadow-sm'
                    : 'bg-slate-50/60 border-slate-200 shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-700 text-white uppercase tracking-wider">
                      GIAI ĐOẠN 0{phase.phase}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      isPhase1 
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                        : 'bg-blue-100 text-blue-800 border-blue-200'
                    }`}>
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Space_Grotesk']">
                    {phase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Nhiệm vụ trọng tâm & Sản phẩm bàn giao:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPhase1 ? 'text-emerald-600' : 'text-blue-600'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Trọng tâm kỹ thuật:</span>
                  <strong className="text-slate-800">
                    {isPhase1 ? 'Schema & Nghiên cứu lý thuyết' : 'Mô hình ML/DL & Dashboard DSS'}
                  </strong>
                </div>
              </div>
            );
          })}

        </div>

        {/* Evaluation Criteria Box from Phase 2 tasks */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <span>Tiêu Chí Đánh Giá Nghiệm Thu Hệ Thống (Validation Metrics)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Sai số dự báo (Forecast Accuracy)</strong>
              Đánh giá qua backtesting trên dữ liệu lịch sử bằng các chỉ số MAE, RMSE và MAPE.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Hiệu quả tồn kho (Inventory Rationality)</strong>
              Mức độ giảm tồn kho dư thừa, hạn chế thuốc BVTV quá hạn và tỉ lệ đáp ứng đơn hàng mùa dịch.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Tính riêng tư dữ liệu (Privacy Guarantees)</strong>
              Đảm bảo không rò rỉ định danh nhạy cảm của nông hộ khi thực hiện khuyến nghị cá nhân hóa.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">4. Khả năng tổng quát hóa (Generalizability)</strong>
              Thích ứng linh hoạt giữa các vùng miền: Tây Nguyên, ĐBSCL và Vùng núi phía Bắc.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">5. Khả năng mở rộng (Scalability)</strong>
              Hiệu năng ổn định khi số lượng SKU sản phẩm, số đại lý và lượt giao dịch tăng trưởng lớn.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">6. Đóng gói độc lập (Deployment Package)</strong>
              Hệ thống độc lập gồm CSDL, Data Pipeline, Engine tối ưu tồn kho và Dashboard trực quan.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
