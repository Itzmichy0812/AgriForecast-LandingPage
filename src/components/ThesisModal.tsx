import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Copy, 
  Check, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  GraduationCap,
  Download
} from 'lucide-react';
import { THESIS_META, RESEARCH_PAPERS, PHASE_TASKS } from '../data/thesisData';

interface ThesisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThesisModal: React.FC<ThesisModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const textToCopy = `
TÊN ĐỀ TÀI:
Tiếng Việt: ${THESIS_META.titleVi}
English: ${THESIS_META.titleEn}

CHUYÊN NGÀNH: Công nghệ Thông tin
MÔ HÌNH HỆ THỐNG: ${THESIS_META.productName} (Dự kiến)

1. MỤC TIÊU TỔNG QUÁT:
Xây dựng hệ thống thông tin tích hợp dữ liệu thời tiết, dữ liệu mùa vụ và dữ liệu lịch sử khách hàng nhằm dự báo nhu cầu và hỗ trợ đại lý vật tư nông nghiệp ra quyết định nhập hàng hợp lý, kịp thời, giảm tồn kho dư thừa và thiếu hàng cục bộ.

2. CÁC TRỤ CỘT DỮ LIỆU CHÍNH:
- Dữ liệu thời tiết vi khí hậu: Nhiệt độ, lượng mưa, độ ẩm từ NASA POWER và Open-Meteo API.
- Dữ liệu mùa vụ & nông học: Cơ cấu cây trồng (Tây Nguyên, ĐBSCL, Miền Bắc) từ Tổng cục Thống kê và Cục Trồng trọt.
- Dữ liệu lịch sử khách hàng: Giao dịch đại lý và thói quen canh tác nông hộ, áp dụng cơ chế ẩn danh hóa (Cohort-level modeling & Differential Privacy).

3. CÔNG NGHỆ & MÔ HÌNH TOÁN:
- Dự báo chuỗi thời gian: ARIMAX, Gradient Boosting (XGBoost), Deep Learning kết hợp biến thời tiết.
- Quản trị tồn kho tối ưu: Điểm đặt hàng lại (Reorder Point - ROP), Mức tồn kho an toàn (Safety Stock - SS), Số lượng đặt hàng kinh tế (EOQ).
- Khuyến nghị 2 chiều: Nhập thêm khẩn cấp & Tạm dừng nhập tránh thuốc BVTV quá hạn.
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white uppercase tracking-wider">
                Đồ án Tốt nghiệp CNTT
              </span>
              <span className="text-xs text-slate-400">Hồ sơ Thuyết minh Đề tài</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold font-['Space_Grotesk'] leading-snug">
              {THESIS_META.titleVi}
            </h3>
            <p className="text-xs text-slate-400 italic">
              {THESIS_META.titleEn}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Sao chép tóm tắt đề cương"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Đã chép!' : 'Sao chép'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed divide-y divide-slate-100">
          
          {/* Section 1: Context & Core Problem */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>1. Bối Cảnh Thực Tiễn & Tính Cấp Thiết Của Đề Tài</span>
            </h4>
            <p>
              Đại lý vật tư nông nghiệp (phân bón, thuốc bảo vệ thực vật, hạt giống) đóng vai trò trung gian huyết mạch giữa các tập đoàn sản xuất và hàng triệu nông hộ trên khắp các vùng trọng điểm kinh tế như Tây Nguyên, Đồng bằng sông Cửu Long và Vùng núi phía Bắc.
            </p>
            <p>
              Tuy nhiên, các đại lý hiện tại vẫn chủ yếu quyết định nhập hàng dựa trên kinh nghiệm chủ quan và thói quen tích lũy qua các năm. Khi thời tiết biến đổi bất thường (mưa ẩm dầm dề kích thích nấm bệnh bùng phát, hoặc hạn mặn đột ngột), đại lý rơi vào 2 tình trạng nguy hiểm:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Đọng vốn & Hết hạn sử dụng:</strong> Nhập dư các mặt hàng ít tiêu thụ, thuốc bảo vệ thực vật hết hạn 18-24 tháng gây mất trắng vốn lưu động.</li>
              <li><strong>Thiếu hàng cục bộ đúng thời điểm:</strong> Cháy hàng đúng lúc bà con cần cứu cây, đánh mất doanh thu đỉnh vụ và giảm sút uy tín.</li>
            </ul>
          </div>

          {/* Section 2: Objectives */}
          <div className="space-y-3 pt-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>2. Mục Tiêu Cụ Thể Của Đồ Án</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Cơ sở dữ liệu tập trung</strong>
                Quản lý sản phẩm, tồn kho, hạn sử dụng thuốc BVTV và lịch sử nhập/xuất theo đại lý.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Tích hợp Weather API</strong>
                Tích hợp dữ liệu NASA POWER và Open-Meteo với lịch mùa vụ theo từng loại cây trồng.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Bảo vệ quyền riêng tư</strong>
                Áp dụng Cohort-level modeling và Differential Privacy cho dữ liệu khách hàng nông hộ.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Tối ưu hóa tồn kho ROP/SS</strong>
                Tính toán chuẩn xác Điểm đặt hàng lại (ROP), Tồn kho an toàn (SS) và Lượng đặt kinh tế (EOQ).
              </div>
            </div>
          </div>

          {/* Section 3: Phase 1 & 2 Tasks */}
          <div className="space-y-3 pt-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>3. Phân Công Nhiệm Vụ 2 Giai Đoạn (GĐ1 & GĐ2)</span>
            </h4>
            <div className="space-y-3">
              {PHASE_TASKS.map((p) => (
                <div key={p.phase} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold">{p.title}</strong>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-emerald-800 border border-slate-200">
                      {p.status}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                    {p.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Academic References */}
          <div className="space-y-3 pt-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>4. Danh Mục Tài Liệu Tham Khảo Nòng Cốt</span>
            </h4>
            <div className="space-y-2">
              {RESEARCH_PAPERS.map((paper, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-900">[{idx + 1}] {paper.authors} ({paper.year})</span>
                    <span className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-600">
                      {paper.source}
                    </span>
                  </div>
                  <p className="text-slate-700 mt-1 font-medium italic">{paper.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Tài liệu thuộc đồ án tốt nghiệp sinh viên Công nghệ Thông tin
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>

      </div>
    </div>
  );
};
