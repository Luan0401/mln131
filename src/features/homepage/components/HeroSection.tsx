import { Suspense } from 'react';
import HeroSectionClient from './HeroSectionClient';

const featuredItems = [
  {
    image: "/dcnt.jpg",
    title: "DÂN CHỦ NGUYÊN THỦY",   
    subtitle: "Ngay từ xã hội thị tộc/cộng đồng, đã có nhu cầu dân chủ: mọi người cùng bàn bạc trong cộng đồng. Đây là kiểu “dân chủ nguyên thủy/dân chủ quân sự” Nhưng nó gắn với xã hội còn đơn giản, trình độ sản xuất thấp."
  },
  {
    image: "/dccn.png",
    title: "DÂN CHỦ CHỦ NÔ",
    subtitle: "Khi chế độ tư hữu và giai cấp xuất hiện, dân chủ chuyển thành dân chủ chủ nô, “Dân” lúc này chủ yếu là chủ nô, còn nô lệ không được tính là dân. Dân chủ tồn tại nhưng chỉ cho thiểu số."
  },
  {
    image: "/dcpk.jpg",
    title: "DÂN CHỦ PHONG KIẾN",
    subtitle: "Khi xã hội phong kiến hình thành, quyền lực tập trung vào nhà nước phong kiến; quyền làm chủ của người dân rất hạn chế, Dân chủ không phát triển rộng, chủ yếu phục vụ quyền lực thống trị."
  },
  {
    image: "/dcts.jpg",
    title: "DÂN CHỦ TƯ SẢN",
    subtitle: "Đến giai đoạn tư sản, dân chủ phát triển “tiến bộ hơn” về hình thức: tự do, bình đẳng, dân chủ…Nhưng giáo trình nhấn mạnh: do nền tảng tư hữu tư bản, nên thực chất dân chủ tư sản vẫn là dân chủ của thiểu số, phục vụ lợi ích của giai cấp tư sản."
  },
  {
    image: "/dcxhcn.jpg",
    title: "DÂN CHỦ XÃ HỘI CHỦ NGHĨA",
    subtitle: "Sau Cách mạng Tháng Mười Nga (1917), mở ra thời đại mới, dân chủ XHCN ra đời: Lần đầu tiên đa số nhân dân lao động trở thành chủ thể quyền lực."
  }
];

const heroSEOContent = {
  heading: "CHỦ NGHĨA XÃ HỘI KHOA HỌC",
  description: "Chương 3: Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội. Chương 4: Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa",
  links: [
    { text: "Khám phá", url: "/game" },
    { text: "Học tập", url: "/noidung" }
  ]
};

const HeroSection = () => {
  return (
    <>
      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>{heroSEOContent.heading}</h1>
        <p>{heroSEOContent.description}</p>
        <ul>
          {featuredItems.map((item, index) => (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <Suspense fallback={<div className="w-full h-screen bg-[#f8f7f3]"></div>}>
        <HeroSectionClient 
          featuredItems={featuredItems} 
          heroSEOContent={heroSEOContent}
        />
      </Suspense>
    </>
  );
};

export default HeroSection;
