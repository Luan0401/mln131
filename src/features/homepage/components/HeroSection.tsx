import { Suspense } from 'react';
import HeroSectionClient from './HeroSectionClient';

const featuredItems = [
  {
    image: "/d2.jpg",
    title: "SỰ RA ĐỜI CỦA ĐẢNG CỘNG SẢN VIỆT NAM",   
    subtitle: "Mốc son chói lọi, mở lối độc lập"
  },
  {
    image: "/d3.jpg",
    title: "NGỌN ĐUỐC CÁCH MẠNG VIỆT NAM",
    subtitle: "Người dẫn lối, rạng rỡ sự nghiệp Đảng."
  }
];

const heroSEOContent = {
  heading: "VIỆT NAM LỊCH SỬ ĐẢNG",
  description: "Điểm tựa lịch sử cho tầm nhìn thời đại.",
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
