import HeroSection from "@/features/homepage/components/HeroSection";
import { generateSEOMetadata } from "@/lib/seo";
import SubHeroSection from "@/features/homepage/components/SubHeroSection";
;


export const metadata = generateSEOMetadata({
  title: "Việt Nam | Tư Tưởng Hồ Chí Minh",
  description: "Nền tảng giáo dục về XÂY DỰNG VĂN HÓA, ĐẠO ĐỨC, CON NGƯỜI VIỆT NAM THEO TƯ TƯỞNG HỒ CHÍ MINH. Khám phá quan điểm, mục tiêu, nhiệm vụ và giải pháp phát triển bền vững, gìn giữ bản sắc dân tộc.",
  keywords: ["văn hóa", "đạo đức", "con người", "tư tưởng hồ chí minh", "bản sắc dân tộc", "phát triển bền vững"],
  image: {
    url: "/vn.png",
    width: 1200,
    height: 630,
    alt: "Tư Tưởng Hồ Chí Minh Việt Nam"
  }
});

export default function Homepage() {
  return (
    <div className="flex flex-col ">
      <main>
        <HeroSection/>
        <SubHeroSection/>
      </main>
    </div>
  );
}
