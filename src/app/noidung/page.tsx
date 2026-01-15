'use client';

import Link from 'next/link';
import {
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  FadeUp,
} from '../../components/animation/AnimatedWrapper';
import CardSwap, { Card } from '../../components/CardSwap';
import FlowingMenu from '../../components/FlowingMenu';

const cardSwapStyles = `
  .card-swap-wrapper .card-swap-container {
    position: relative !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 10;
  }
  /* QUAN TRỌNG: Thiết lập nền đặc cho Card để không bị xuyên thấu */
  .card-swap-wrapper .card-swap-container .card {
    border: none !important;
    background: #ffffff !important; /* Đổi từ transparent sang trắng đặc */
    box-shadow: 8px 8px 0px 0px rgba(153,27,27,1) !important;
    overflow: hidden;
  }
  .menu__item { border-bottom: 2px solid #dc2626; }
  .menu__item:last-child { border-bottom: none; }
  .menu__item-link {
    color: black !important;
    font-size: 1.2rem !important;
    font-weight: 600 !important;
  }
  .menu__item-link:hover { color: #dc2626 !important; }
`;

// Cập nhật nội dung chuyên sâu cho các Card
const topics = [
  {
    id: 1,
    title: "Bản chất và Đặc trưng của Dân chủ XHCN",
    subtitle: "Nền dân chủ của đa số nhân dân lao động",
    description:
      "Dân chủ XHCN là hình thái dân chủ cao nhất trong lịch sử, nơi quyền lực thực sự thuộc về nhân dân dựa trên nền tảng kinh tế công hữu.",
    features: [
      "Bản chất chính trị: Quyền lực thuộc về nhân dân lao động",
      "Bản chất kinh tế: Dựa trên chế độ sở hữu xã hội",
      "Bản chất tư tưởng: Lấy hệ tư tưởng Mác-Lênin làm cốt lõi",
      "Là bước đệm tất yếu để tiến tới xã hội tự quản"
    ],
    color: "from-red-900 to-red-700",
    link: "/noidung/ban-chat-dan-chu"
  },
  {
    id: 2,
    title: "Lý luận về sự 'Tự tiêu vong'",
    subtitle: "Sự kết thúc của dân chủ với tư cách một hình thái nhà nước",
    description:
      "Trong lý luận Mác-Lênin, dân chủ là một phạm trù lịch sử gắn liền với nhà nước. Khi giai cấp biến mất, 'vỏ bọc' chính trị của dân chủ không còn cần thiết.",
    features: [
      "Dân chủ là hình thức nhà nước (phạm trù giai cấp)",
      "Khi CSCH đạt tới đỉnh cao: Đối kháng giai cấp bị triệt tiêu",
      "Nhà nước tự tiêu vong -> Dân chủ chính trị tiêu vong",
      "Sự chuyển hóa từ 'quản lý con người' sang 'quản lý vật phẩm'"
    ],
    color: "from-red-800 to-red-600",
    link: "/noidung/ly-thuyet-tieu-vong"
  },
  {
    id: 3,
    title: "Phản bác quan điểm 'Độc tài trá hình'",
    subtitle: "Tiêu vong không phải mất tự do, mà là tự do tuyệt đối",
    description:
      "Sự tiêu vong của dân chủ không phải là thiết lập độc tài, mà là sự chuyển hóa sang hình thái tự quản xã hội - nơi con người tự giác thực hiện các quy tắc chung.",
    features: [
      "Độc tài cần nhà nước cưỡng chế; CSCH không còn nhà nước",
      "Con người làm chủ xã hội mà không cần 'thước đo' quyền lực",
      "Thay thế cưỡng bách bằng tính tự giác đạo đức",
      "Tự do của mỗi người là điều kiện cho tự do của mọi người"
    ],
    color: "from-gray-900 to-red-900",
    link: "/noidung/phan-bac-doc-tai"
  }
];

const flowingMenuItems = [
  { link: "/noidung/van-hoa-con-nguoi", text: "Bản chất Dân chủ", image: "/vn.png" },
  { link: "/noidung/dao-duc-cach-mang", text: "Cơ sở Lý luận Tiêu vong", image: "/vn.png" },
  { link: "/noidung/tu-quan-vs-doc-tai", text: "Tự quản vs Độc tài", image: "/vn.png" }
];

export default function NoiDungPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cardSwapStyles }} />
      <ClientAnimatedSection className="min-h-screen bg-[#fcfbf9] py-16">
        <MotionDiv
          className="container mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Cột trái: Nội dung dẫn nhập kiến tạo */}
            <FadeUp className="text-left px-8 lg:px-16">
              <MotionH2 className="mb-6">
                <span className="block text-black font-primary text-5xl uppercase">Giải mã sự</span>
                <span className="block text-red-900 font-primary text-6xl uppercase tracking-tighter">Tiêu vong</span>
              </MotionH2>
              
              <div className="space-y-6">
                <blockquote className="border-l-4 border-red-900 pl-4 italic text-red-900/80 font-serif text-lg">
                  "Dân chủ là một hình thái nhà nước, nó sẽ tiêu vong khi nhà nước tiêu vong."
                </blockquote>
                
                <MotionP className="font-serif text-lg text-black/80 leading-relaxed">
                  Liệu việc mất đi hình thái "Dân chủ" có đồng nghĩa với sự trỗi dậy của Độc tài? 
                  Chúng ta sẽ cùng phân tích lộ trình từ sự ra đời, phát triển của Dân chủ XHCN 
                  đến khi nó hoàn thành sứ mệnh lịch sử và nhường chỗ cho sự <strong>Tự quản tuyệt đối</strong> trong Cộng sản chủ nghĩa.
                </MotionP>
              </div>

              {/* Menu điều hướng dòng chảy */}
              <div className="h-80 mt-12 border-t border-black/10">
                <FlowingMenu items={flowingMenuItems} />
              </div>
            </FadeUp>

            {/* Cột phải: Card nội dung chi tiết */}
            <FadeUp delay={0.3} className="relative h-[600px] flex items-center justify-center">
              <div className="card-swap-wrapper w-full max-w-[500px]">
                <CardSwap
                  width={450}
                  height={550}
                  cardDistance={60}
                  verticalDistance={80}
                  delay={5000}
                  skewAmount={4}
                  onCardClick={(idx) => console.log(topics[idx].link)}
                >
                {topics.map((topic) => (
                  <Card
                    key={topic.id}
                    // Loại bỏ backdrop-blur vì nó gây tốn tài nguyên và dễ làm lộ nội dung bên dưới nếu opacity thấp
                    customClass="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(153,27,27,1)] cursor-pointer"
                  >
                    {/* Thêm lớp bg-white trực tiếp vào div con để đảm bảo tuyệt đối không xuyên thấu */}
                    <div className="h-full flex flex-col p-8 bg-white relative z-20">
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-primary text-4xl text-red-900 opacity-20">0{topic.id}</span>
                        <div className={`px-3 py-1 text-[10px] uppercase tracking-widest text-white bg-gradient-to-r ${topic.color}`}>
                          Lý luận chuyên sâu
                        </div>
                      </div>

                      <h2 className="font-primary text-2xl text-black mb-4 uppercase leading-tight">
                        {topic.title}
                      </h2>

                      <p className="font-serif text-sm text-red-900 mb-4 font-bold uppercase tracking-tighter">
                        {topic.subtitle}
                      </p>

                      {/* Tăng độ đậm của text mô tả để dễ đọc trên nền trắng */}
                      <p className="font-serif text-sm text-black mb-8 leading-relaxed">
                        {topic.description}
                      </p>

                      <div className="flex-1">
                        <ul className="space-y-3">
                          {topic.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center text-[11px] font-serif text-black font-medium uppercase">
                              <span className="w-1 h-1 bg-red-900 mr-2 rounded-full flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-black/10 flex justify-end">
                        <span className="font-primary text-red-900 flex items-center gap-2 text-sm font-bold">
                          Xem chi tiết <span className="text-xl">→</span>
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
                </CardSwap>
              </div>
            </FadeUp>
          </div>
        </MotionDiv>
      </ClientAnimatedSection>
    </>
  );
}