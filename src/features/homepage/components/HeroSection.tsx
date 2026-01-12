import { Suspense } from 'react';
import HeroSectionClient from './HeroSectionClient';

const featuredItems = [
  {
    image: "/vn2.jpg",
    title: "XÂY DỰNG & PHÁT TRIỂN VĂN HÓA, CON NGƯỜI",   
    subtitle: "Vì hạnh phúc nhân dân"
  },
  {
    image: "/vn3.jpg",
    title: "XÂY DỰNG ĐẠO ĐỨC CÁCH MẠNG",
    subtitle: "Gương mẫu, liêm khiết"
  }
];

const heroSEOContent = {
  heading: "Tư-Tưởng HCM",
  description: "Phần IV – XÂY DỰNG VĂN HÓA, ĐẠO ĐỨC, CON NGƯỜI VIỆT NAM HIỆN NAY THEO TƯ TƯỞNG HỒ CHÍ MINH",
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
