export interface Scenario {
  id: string;
  region: string;
  crop: string;
  soilCondition: string;
  weatherCondition: string;
  weatherDetails: {
    temp: string;
    humidity: string;
    rainfall: string;
    warning: string;
  };
  forecastTrends: {
    day: string;
    baselineDemand: number;
    weatherAdjustedDemand: number;
    currentInventory: number;
  }[];
  recommendations: {
    type: 'order' | 'pause';
    productName: string;
    category: 'Thuốc BVTV' | 'Phân bón' | 'Hạt giống & Chế phẩm';
    currentStock: number;
    safetyStock: number;
    reorderPoint: number;
    optimalQuantity: number;
    urgency: 'high' | 'medium' | 'low';
    reason: string;
  }[];
  farmerAdvisory: {
    cohortName: string;
    farmerCount: number;
    keyAdvice: string;
    recommendedProduct: string;
  }[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  source: string;
  year: number;
  tag: '🇻🇳 Trong nước' | '🌍 Quốc tế';
  summary: string;
  appliedInSystem: string;
}

export interface DataSource {
  name: string;
  category: 'Thời tiết' | 'Mùa vụ & Năng suất' | 'Thổ nhưỡng' | 'Thị trường & Giá';
  provider: string;
  apiType: string;
  isFree: boolean;
  role: string;
  link?: string;
}

export interface PhaseTask {
  phase: number;
  title: string;
  status: 'Hoàn thành' | 'Đang triển khai' | 'Kế hoạch GĐ2';
  description: string;
  deliverables: string[];
}
