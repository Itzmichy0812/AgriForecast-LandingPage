export interface Scenario {
  id: string;
  region: string;
  crop: string;
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
    category: string;
    currentStock: number;
    neededStock: number;
    suggestedOrder: number;
    urgency: 'high' | 'medium' | 'low';
    reason: string;
  }[];
  farmerAdvisory: {
    groupName: string;
    farmerCount: number;
    tip: string;
    product: string;
  }[];
}

export const PRODUCT_META = {
  name: 'AgriForecast',
  tagline: 'Phần mềm thông minh dự báo nhu cầu & hỗ trợ nhập hàng cho Đại lý Vật tư Nông nghiệp',
  summary: 'Giúp chủ đại lý biết chính xác nên nhập mặt hàng nào, nhập bao nhiêu thùng và vào thời điểm nào dựa trên thời tiết nông vụ 14 ngày tới và lịch sử canh tác của bà con địa phương.',
  hotline: '1900 6828',
  zalo: '0988 123 456',
  email: 'lienhe@agriforecast.vn',
  address: 'Tầng 6, Tòa nhà Nông Nghiệp Xanh, TP. Buôn Ma Thuột & Chi nhánh TP. Hồ Chí Minh',
};

export const SCENARIOS: Scenario[] = [
  {
    id: 'tay-nguyen',
    region: 'Tây Nguyên (Đắk Lắk, Gia Lai, Lâm Đồng)',
    crop: 'Sầu riêng, Cà phê & Hồ tiêu',
    weatherCondition: 'Đợt mưa dầm liên tục 7-10 ngày, độ ẩm đất và không khí trên 90%',
    weatherDetails: {
      temp: '22°C - 26°C',
      humidity: '94% (Rất ẩm)',
      rainfall: '190mm / tuần',
      warning: 'Nguy cơ cao bùng phát nấm xì mủ, thối rễ sầu riêng và nấm hồng cà phê',
    },
    forecastTrends: [
      { day: 'Ngày 1', baselineDemand: 20, weatherAdjustedDemand: 28, currentInventory: 70 },
      { day: 'Ngày 3', baselineDemand: 24, weatherAdjustedDemand: 52, currentInventory: 50 },
      { day: 'Ngày 5', baselineDemand: 26, weatherAdjustedDemand: 85, currentInventory: 28 },
      { day: 'Ngày 7', baselineDemand: 28, weatherAdjustedDemand: 110, currentInventory: 12 },
      { day: 'Ngày 10', baselineDemand: 25, weatherAdjustedDemand: 90, currentInventory: 95 },
      { day: 'Ngày 12', baselineDemand: 22, weatherAdjustedDemand: 65, currentInventory: 75 },
      { day: 'Ngày 14', baselineDemand: 20, weatherAdjustedDemand: 40, currentInventory: 60 },
    ],
    recommendations: [
      {
        type: 'order',
        productName: 'Thuốc trừ nấm xì mủ Metalaxyl + Mancozeb',
        category: 'Thuốc trừ bệnh',
        currentStock: 18,
        neededStock: 120,
        suggestedOrder: 150,
        urgency: 'high',
        reason: 'Độ ẩm lá cao liên tục kích hoạt nấm Phytophthora. Dự kiến bà con sẽ đổ xô mua trong 3-5 ngày tới. Đại lý cần nhập ngay trước khi nhà phân phối cháy hàng.',
      },
      {
        type: 'order',
        productName: 'Fosetyl-Aluminium quét gốc chống thối rễ',
        category: 'Thuốc trừ bệnh',
        currentStock: 15,
        neededStock: 70,
        suggestedOrder: 80,
        urgency: 'high',
        reason: 'Nhu cầu quét gốc sầu riêng phòng bệnh trước đợt mưa lớn tăng vọt.',
      },
      {
        type: 'pause',
        productName: 'Phân bón đạm Urê hạt trong',
        category: 'Phân bón gốc',
        currentStock: 180,
        neededStock: 40,
        suggestedOrder: 0,
        urgency: 'medium',
        reason: 'Mưa dầm kéo dài khiến đất thừa ẩm, bón đạm gây thối rễ non và rụng trái. Bà con sẽ ngừng bón đạm, đại lý tạm dừng nhập để không đọng vốn.',
      },
      {
        type: 'pause',
        productName: 'Thuốc diệt cỏ không chọn lọc',
        category: 'Thuốc trừ cỏ',
        currentStock: 95,
        neededStock: 30,
        suggestedOrder: 0,
        urgency: 'low',
        reason: 'Trời mưa to làm trôi thuốc, nông dân không phun cỏ trong 10 ngày tới.',
      },
    ],
    farmerAdvisory: [
      {
        groupName: '48 vườn Sầu riêng kinh doanh (Vùng Krông Pắk & Cư M’gar)',
        farmerCount: 48,
        tip: 'Khơi thông mương rãnh thoát nước ngay, quét vôi hoặc Metalaxyl quanh gốc để ngừa xì mủ.',
        product: 'Metalaxyl phòng trừ xì mủ thân',
      },
      {
        groupName: '65 nhà vườn Cà phê đang vào hạt (Buôn Ma Thuột)',
        farmerCount: 65,
        tip: 'Ngưng bón phân hạt qua đất, bổ sung vi lượng Canxi-Bo qua lá giúp cuống dai chống rụng quả non.',
        product: 'Phân bón lá Canxi-Bo chống rụng trái',
      },
    ],
  },
  {
    id: 'dong-bang-song-cuu-long',
    region: 'Đồng Bằng Sông Cửu Long (An Giang, Đồng Tháp, Tiền Giang)',
    crop: 'Lúa vụ Đông Xuân & Cây ăn trái (Xoài, Mít, Sầu riêng)',
    weatherCondition: 'Nắng ấm xen kẽ mưa rào bất chợt, sương mù dày ban sáng',
    weatherDetails: {
      temp: '26°C - 32°C',
      humidity: '88% (Sương ẩm)',
      rainfall: '65mm / tuần',
      warning: 'Cảnh báo dịch đạo ôn lá và rầy nâu lứa mới nở rộ',
    },
    forecastTrends: [
      { day: 'Ngày 1', baselineDemand: 30, weatherAdjustedDemand: 35, currentInventory: 110 },
      { day: 'Ngày 3', baselineDemand: 32, weatherAdjustedDemand: 60, currentInventory: 75 },
      { day: 'Ngày 5', baselineDemand: 35, weatherAdjustedDemand: 95, currentInventory: 35 },
      { day: 'Ngày 7', baselineDemand: 38, weatherAdjustedDemand: 130, currentInventory: 20 },
      { day: 'Ngày 10', baselineDemand: 34, weatherAdjustedDemand: 105, currentInventory: 100 },
      { day: 'Ngày 12', baselineDemand: 30, weatherAdjustedDemand: 70, currentInventory: 80 },
      { day: 'Ngày 14', baselineDemand: 28, weatherAdjustedDemand: 45, currentInventory: 65 },
    ],
    recommendations: [
      {
        type: 'order',
        productName: 'Tricyclazole đặc trị đạo ôn lá & cổ bông',
        category: 'Thuốc trừ bệnh',
        currentStock: 25,
        neededStock: 140,
        suggestedOrder: 160,
        urgency: 'high',
        reason: 'Sương mù sáng sớm kết hợp chênh lệch nhiệt độ ngày đêm làm vết chấm kim đạo ôn lan rất nhanh.',
      },
      {
        type: 'order',
        productName: 'Thuốc trừ rầy Pymetrozine lưu dẫn kéo dài',
        category: 'Thuốc trừ sâu',
        currentStock: 30,
        neededStock: 100,
        suggestedOrder: 110,
        urgency: 'high',
        reason: 'Bẫy đèn ghi nhận rầy vào đèn tăng gấp 3 lần. Nông dân sắp xịt đồng loạt.',
      },
      {
        type: 'pause',
        productName: 'Phân bón NPK bón đón đòng tỷ lệ đạm cao',
        category: 'Phân bón',
        currentStock: 220,
        neededStock: 60,
        suggestedOrder: 0,
        urgency: 'medium',
        reason: 'Đang có nguy cơ đạo ôn phát dịch, khuyến cáo bà con hãm đạm để lúa không bị lốp.',
      },
      {
        type: 'pause',
        productName: 'Thuốc diệt ốc bươu vàng',
        category: 'Thuốc trừ ốc',
        currentStock: 80,
        neededStock: 20,
        suggestedOrder: 0,
        urgency: 'low',
        reason: 'Lúa đã qua giai đoạn đẻ nhánh rộ, ốc không còn gây hại nhiều, nhu cầu giảm.',
      },
    ],
    farmerAdvisory: [
      {
        groupName: '82 hộ làm lúa giai đoạn làm đòng (Huyện Thoại Sơn)',
        farmerCount: 82,
        tip: 'Thăm đồng sáng sớm kiểm tra vết chấm kim trên lá lúa, phun phòng đạo ôn ngay khi trời ráo sương.',
        product: 'Tricyclazole trị đạo ôn',
      },
      {
        groupName: '34 nhà vườn mít Thái & sầu riêng (Cái Bè)',
        farmerCount: 34,
        tip: 'Phun phòng trừ thán thư bông và xịt rầy bông trước khi hoa nở rộ.',
        product: 'Hexaconazole ngừa thán thư',
      },
    ],
  },
  {
    id: 'mien-bac',
    region: 'Đồng Bằng Sông Hồng & Trung Du (Bắc Giang, Hải Dương, Sơn La)',
    crop: 'Cây ăn quả (Vải thiều, Nhãn, Mận) & Rau màu vụ Đông',
    weatherCondition: 'Không khí lạnh tăng cường, trời rét khô, đêm buốt sương muối',
    weatherDetails: {
      temp: '13°C - 18°C',
      humidity: '72% (Rét hanh)',
      rainfall: '15mm / tuần',
      warning: 'Cây ngừng sinh trưởng chậm, sương muối gây cháy chóp lá và thui mầm hoa',
    },
    forecastTrends: [
      { day: 'Ngày 1', baselineDemand: 15, weatherAdjustedDemand: 20, currentInventory: 55 },
      { day: 'Ngày 3', baselineDemand: 18, weatherAdjustedDemand: 38, currentInventory: 40 },
      { day: 'Ngày 5', baselineDemand: 20, weatherAdjustedDemand: 55, currentInventory: 22 },
      { day: 'Ngày 7', baselineDemand: 22, weatherAdjustedDemand: 68, currentInventory: 10 },
      { day: 'Ngày 10', baselineDemand: 20, weatherAdjustedDemand: 50, currentInventory: 70 },
      { day: 'Ngày 12', baselineDemand: 18, weatherAdjustedDemand: 35, currentInventory: 55 },
      { day: 'Ngày 14', baselineDemand: 16, weatherAdjustedDemand: 25, currentInventory: 45 },
    ],
    recommendations: [
      {
        type: 'order',
        productName: 'Chế phẩm Axit Amin & Rong biển kích kháng chống rét',
        category: 'Dinh dưỡng cây trồng',
        currentStock: 12,
        neededStock: 50,
        suggestedOrder: 60,
        urgency: 'high',
        reason: 'Rét hại kéo dài làm cây ngừng quang hợp, nông dân tìm mua phân bón qua lá chống sốc nhiệt.',
      },
      {
        type: 'order',
        productName: 'Thuốc phòng trừ bọ trĩ và rệp sáp',
        category: 'Thuốc trừ sâu',
        currentStock: 15,
        neededStock: 45,
        suggestedOrder: 50,
        urgency: 'medium',
        reason: 'Trời hanh khô làm rệp và bọ trĩ sinh sôi mạnh ở các đọt non rau màu.',
      },
      {
        type: 'pause',
        productName: 'Phân lân nung chảy & phân vô cơ hạt lớn',
        category: 'Phân bón',
        currentStock: 140,
        neededStock: 30,
        suggestedOrder: 0,
        urgency: 'medium',
        reason: 'Nhiệt độ đất dưới 15°C rễ không hút được phân khoáng, nông dân không mua bón gốc.',
      },
      {
        type: 'pause',
        productName: 'Thuốc diệt nấm gốc đồng (Booc-đô)',
        category: 'Thuốc BVTV',
        currentStock: 60,
        neededStock: 20,
        suggestedOrder: 0,
        urgency: 'low',
        reason: 'Trời khô lạnh ít phát sinh nấm ướt, đại lý tạm ngưng nhập thêm.',
      },
    ],
    farmerAdvisory: [
      {
        groupName: '55 nhà vườn vải thiều Lục Ngạn',
        farmerCount: 55,
        tip: 'Phun sương nước rửa muối sáng sớm khi có sương muối, bổ sung Amino Acid giúp cây giữ ấm mầm hoa.',
        product: 'Amino sinh học chống sốc nhiệt',
      },
      {
        groupName: '40 hộ trồng su hào, bắp cải (Gia Lộc - Hải Dương)',
        farmerCount: 40,
        tip: 'Tưới nước ẩm gốc vào buổi trưa, phun phòng rệp muội định kỳ 7 ngày/lần.',
        product: 'Thuốc trừ rệp sinh học',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Anh Trần Văn Hùng',
    role: 'Chủ Đại lý Vật tư Nông nghiệp Hùng Thơm',
    location: 'Krông Pắk, Đắk Lắk (Chuyên Sầu riêng & Cà phê)',
    quote: 'Trước đây vụ nào tôi cũng ôm cả trăm thùng thuốc nấm, có năm thời tiết khô hạn thuốc bán không hết, để sang năm sau gần hết hạn phải nhờ công ty đổi trả rất chật vật. Từ ngày dùng AgriForecast, phần mềm báo trước thời tiết ẩm mưa nên tôi nhập đúng loại vừa đủ. Năm vừa rồi tôi tiết kiệm được hơn 180 triệu tiền vốn đọng, lại không bao giờ bị hụt thuốc khi bà con cần gấp.',
    badge: 'Đã dùng 14 tháng',
    stats: 'Giảm 75% tồn kho cũ, tăng 32% doanh thu',
  },
  {
    name: 'Chị Nguyễn Thị Bích Loan',
    role: 'Chủ Cửa hàng VTNN Nông Tín',
    location: 'Cái Bè, Tiền Giang (Chuyên Lúa & Vườn Cây Ăn Trái)',
    quote: 'Tôi lớn tuổi, không rành máy tính nhưng phần mềm rất dễ xài, cài trên điện thoại mở lên là thấy ngay hôm nay nên gọi hãng giao món gì, món nào nên từ chối. Thích nhất là tính năng nhắc lịch bà con: phần mềm báo vùng nào sắp có rầy là tôi nhắn Zalo nhắc bà con tới lấy thuốc, khách khen mình chu đáo nên gắn bó lắm.',
    badge: 'Đã dùng 9 tháng',
    stats: 'Tiết kiệm 2 giờ đặt hàng mỗi ngày',
  },
  {
    name: 'Anh Lê Hoàng Nam',
    role: 'Quản lý Hệ thống 3 Cửa hàng VTNN Việt Nông',
    location: 'Thoại Sơn & Tri Tôn, An Giang',
    quote: 'Điều tôi an tâm nhất là thông tin khách hàng và doanh số đại lý được bảo mật hoàn toàn. Phần mềm chỉ phân tích xu hướng thời tiết để báo số lượng nhập. Quản lý kho nhàn hơn hẳn, không sợ nhân viên đặt nhầm hay tồn ứ thuốc hết date.',
    badge: 'Đã dùng 18 tháng',
    stats: 'Tối ưu dòng tiền luân chuyển 3 cửa hàng',
  },
];

export const FAQS = [
  {
    q: 'Phần mềm này có khó sử dụng không? Tôi không rành công nghệ có dùng được không?',
    a: 'Rất dễ sử dụng! AgriForecast được thiết kế riêng cho các chủ đại lý và nhân viên bán hàng nông nghiệp. Giao diện hoàn toàn bằng tiếng Việt, chữ to rõ ràng, hoạt động mượt mà trên cả điện thoại di động (Zalo, web) và máy tính bàn. Đội ngũ kỹ thuật của chúng tôi sẽ hướng dẫn trực tiếp 1-kèm-1 qua điện thoại hoặc Zalo, chỉ sau 15 phút là quý đại lý đã nắm vững.',
  },
  {
    q: 'Dữ liệu khách hàng và giá nhập hàng của đại lý tôi có bị lộ ra ngoài không?',
    a: 'Chúng tôi cam kết bảo mật 100%! Toàn bộ danh sách bà con nông dân, số điện thoại, sổ nợ và giá nhập của đại lý được mã hóa an toàn. Hệ thống tuyệt đối không chia sẻ, không bán dữ liệu cho bất kỳ bên thứ ba hay đại lý đối thủ nào. Quyền sở hữu dữ liệu thuộc về duy nhất đại lý.',
  },
  {
    q: 'Cơ sở nào để phần mềm dự báo chính xác nhu cầu nông dân sắp mua gì?',
    a: 'Hệ thống tự động kết nối dữ liệu dự báo thời tiết 14 ngày tới (nhiệt độ, lượng mưa, độ ẩm không khí, sương mù) kết hợp với chu kỳ sinh trưởng của cây trồng và quy luật bùng phát sâu bệnh tại chính địa phương của bạn. Khi các điều kiện bùng phát dịch nấm hoặc rầy xuất hiện, hệ thống sẽ báo trước cho bạn 3-5 ngày để nhập hàng kịp thời.',
  },
  {
    q: 'Tôi có được dùng thử miễn phí trước khi quyết định mua không?',
    a: 'Có! Chúng tôi tặng bạn 14 ngày trải nghiệm đầy đủ mọi tính năng hoàn toàn MIỄN PHÍ. Không cần thẻ tín dụng, không mất bất kỳ chi phí nào. Đội ngũ kỹ thuật sẽ hỗ trợ cài đặt dữ liệu mẫu của vùng bạn để bạn kiểm chứng hiệu quả ngay.',
  },
  {
    q: 'Đại lý của tôi đang dùng sổ tay hoặc phần mềm bán hàng khác thì có chuyển qua được không?',
    a: 'Hoàn toàn được! Bạn có thể chụp ảnh sổ sách hoặc tải file Excel lên, đội ngũ hỗ trợ sẽ giúp bạn nhập kho ban đầu chỉ trong 30 phút. AgriForecast cũng có thể chạy song song độc lập như một trợ lý thông minh nhắc nhập hàng mà không ảnh hưởng tới cách ghi chép cũ của bạn.',
  },
];
