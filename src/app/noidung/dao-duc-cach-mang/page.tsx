
"use client"
import Link from 'next/link';
import Carousel, { type CarouselItem } from '../../../components/Carousel';
import {
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  FadeUp,
} from '../../../components/animation/AnimatedWrapper';

const firstCarousel: CarouselItem[] = [

  {
    id: 1,
    title: "Lấy Đạo đức Hồ Chí Minh làm cốt lõi và kim chỉ nam",
    description: "Đạo đức của Bác được ví như \"đại nhân, đại trí, đại dũng\", là một \"kim cương sáng\" và \"ngọn đèn pha\" chiếu rọi con người, giúp rèn luyện và phấn đấu để trở nên \"tốt\" hơn, đạt đến \"thiện mỹ\".",
    icon: <span className="carousel-icon">1</span>
  },
  {
    id: 2,
    title: "Nhân ái, khoan dung, nhân hậu",
    description: "Đạo đức Hồ Chí Minh được xây dựng trên 3 nền tảng. Người cho rằng, đối với các dân tộc, đối với mỗi cá nhân, mỗi người đều có vai trò và vị thế quan trọng như nhau. Đạo đức là yếu tố cơ bản để con người Việt Nam nhận ra các giá trị, vươn tới sự hoàn thiện, và hướng tới thiên đường minh triết.",
    icon: <span className="carousel-icon">2</span>
  },
  {
    id: 3,
    title: "Học tập tư tưởng đạo đức Hồ Chí Minh",
    description: "Không chỉ là học tập phẩm chất, mà còn là học tập khí phách anh hùng, ý chí độc lập tự cường, kiên trì mục tiêu lý tưởng và tinh thần sáng tạo, quyết thắng. Việc xây dựng đạo đức cách mạng hiện nay chính là tự giác, tích cực thực hiện trách nhiệm với tinh thần \"trung với nước, hiếu với dân\".",
    icon: <span className="carousel-icon">3</span>
  },

];

const secondCarousel: CarouselItem[] = [
  {
    id: 1,
    title: "Trung với nước, Hiếu với dân",
    description: "Cán bộ, đảng viên phải luôn lắng nghe ý kiến của quần chúng, của nhân dân, phải sẵn sàng làm bất cứ điều gì có lợi cho dân, và phải hết sức phục vụ nhân dân. Đồng thời, phải phải học dân, kính trọng dân, không bao giờ được đặt mình cao hơn dân, mà phải tâm niệm suốt đời là công bộc của nhân dân.",
    icon: <span className="carousel-icon">1</span>
  },
  {
    id: 2,
    title: "Cần, Kiệm, Liêm, Chính, Chí công vô tư",
    description: "Kiệm là một trong những đức tính phải luôn luôn trau dồi, là chìa khóa để cán bộ cách mạng luôn trong sạch và chính trực, không bị lòng ham muốn vật chất chi phối. Chí công vô tư: đặt lợi ích chung của tập thể, của Tổ quốc lên trên lợi ích cá nhân.",
    icon: <span className="carousel-icon" > 2</span >
  },
  {
    id: 3,
    title: "Tinh thần Trách nhiệm",
    description: "Ý thức trách nhiệm cá nhân là sự tự giác về các công việc phải làm, \"nhận rõ phải, trái, đúng sai\". Trách nhiệm không chỉ là công việc, mà còn là \"cái tinh thần cần phải có\" của mọi cán bộ, đảng viên, chiến sĩ. Trung thực là phẩm chất hàng đầu của đạo đức cách mạng, đi kèm với trách nhiệm.",
    icon: <span className="carousel-icon">3</span>
  },
];

const thirdCarousel: CarouselItem[] = [
  {
    id: 1,
    title: "Yêu cầu đối với Cán bộ, Đảng viên",
    description: "Cán bộ, đảng viên phải là tấm gương sáng về đạo đức, lối sống, thực hành kiệm, liêm, chính, chí công vô tư. Phải có ý thức trách nhiệm cao và luôn rèn luyện bản lĩnh vững vàng, có niềm tin vào mục tiêu, lý tưởng cách mạng.",
    icon: <span className="carousel-icon">1</span>
  },
  {
    id: 2,
    title: "Yêu cầu với Thanh niên, Sinh viên (1)",
    description: "Thanh niên và sinh viên được xác định là \"chủ tương lai\" của nước nhà, do đó việc giáo dục và rèn luyện đạo đức cho họ là vô cùng quan trọng. Thanh niên phải được giáo dục về lý tưởng cách mạng, đạo đức, lối sống và văn hóa để hình thành những phẩm chất tốt đẹp.",
    icon: <span className="carousel-icon" > 2</span >
  },
  {
    id: 3,
    title: "Yêu cầu với Thanh niên, Sinh viên (2)",
    description: "Thanh niên, sinh viên phải tiếp tục kế thừa sự nghiệp cách mạng, phải là người có bản lĩnh, trí thức, trong sạch, lành mạnh, dám đối mặt với những khó khăn, thách thức, và phải góp phần tích cực vào cuộc đấu tranh chống suy thoái về tư tưởng chính trị, đạo đức, lối sống đang diễn ra trong xã hội.",
    icon: <span className="carousel-icon">3</span>
  },
];

export default function PhatHuyDanChuXayDungNhaNuocPhapQuyenPage() {
  return (
    <ClientAnimatedSection className="min-h-screen bg-gradient-to-br from-[#f8f7f3] to-white py-16">
      <MotionDiv
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <FadeUp className="text-center mb-10">
          <MotionH2 className="font-metal text-4xl md:text-5xl text-black mb-6">
            <span className="text-black font-primary">ĐẠO ĐỨC CÁCH MẠNG</span><br />
            <span className="text-red-900 font-primary"> THEO TƯ TƯỞNG HỒ CHÍ MINH</span>
          </MotionH2>
          <MotionP className="font-serif text-lg text-black/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Xây dựng đạo đức cách mạng theo tư tưởng Hồ Chí Minh: lấy Cần, Kiệm, Liêm, Chính, Chí công vô tư làm cốt lõi; trung với nước, hiếu với dân; nêu gương và rèn luyện suốt đời.
          </MotionP>

          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm">
            <Link href="/" className="text-red-900 hover:text-red-800 transition-colors">
              Trang chủ
            </Link>
            <span className="text-black/40">/</span>
            <Link href="/noidung" className="text-red-900 hover:text-red-800 transition-colors">
              Nội dung
            </Link>
            <span className="text-black/40">/</span>
            <span className="text-black/60">Đạo đức cách mạng</span>
          </div>
        </FadeUp>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Section 3.1 and Carousel Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Column - Section 3.1 */}
            <FadeUp delay={0.2}>
              <MotionDiv className="bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-6 shadow-lg mt-8 min-h-[320px]">
                <MotionH2 className="font-gothic text-2xl font-bold text-[#81181a] mb-6">
                  2.1. Đạo đức Hồ Chí Minh – Nền tảng và Kim chỉ nam
                </MotionH2>

                <MotionP className="font-gothic text-black/70 mb-10 leading-relaxed">
                  Xây dựng đạo đức cách mạng là nhiệm vụ quan trọng trong giai đoạn hiện nay.
                  Đạo đức Hồ Chí Minh là nền tảng và kim chỉ nam cho việc rèn luyện, tu dưỡng con người mới xã hội chủ nghĩa.
                </MotionP>
              </MotionDiv>
            </FadeUp>

            {/* Right Column - Carousel */}
            <div className="flex flex-col justify-center">
              <FadeUp delay={0.4}>
                <div className="sticky top-0">
                  <div className="text-center mb-6">
                  </div>
                  <div className="flex justify-center">
                    <div style={{
                      borderRadius: '24px',
                      overflow: 'hidden'
                    }}>
                      <Carousel
                        items={firstCarousel}
                        baseWidth={550}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Section 3.2 and Carousel Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Column - Section 3.2 */}
            <FadeUp delay={0.6}>
              <MotionDiv className="bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-6 shadow-lg mt-8 min-h-[320px]">
                <MotionH2 className="font-gothic text-2xl font-bold text-[#81181a] mb-6">
                  2.2. Nội dung học tập và rèn luyện đạo đức cách mạng

                </MotionH2>

                <MotionP className="font-gothic text-black/70 mb-10 leading-relaxed">
                  Nội dung học tập đạo đức cách mạng theo tư tưởng Hồ Chí Minh là quá trình tu dưỡng, rèn luyện lâu dài, bền bỉ, bao gồm nhiều phẩm chất quan trọng, trong đó nổi bật là:
                </MotionP>
              </MotionDiv>
            </FadeUp>

            {/* Right Column - Section 3.2 Carousel */}
            <div className="flex flex-col justify-center">
              <FadeUp delay={0.8}>
                <div className="sticky top-0">
                  <div className="text-center mb-6">
                  </div>
                  <div className="flex justify-center">
                    <div style={{
                      borderRadius: '24px',
                      overflow: 'hidden'
                    }}>
                      <Carousel
                        items={secondCarousel}
                        baseWidth={550}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">

            {/* third section*/}
            <FadeUp delay={0.6}>
              <MotionDiv className="bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-6 shadow-lg mt-8 min-h-[320px]">
                <MotionH2 className="font-gothic text-2xl font-bold text-[#81181a] mb-6">
                  2.3. Yêu cầu đối với Cán bộ, Đảng viên và Thanh niên, Sinh viên
                </MotionH2>

                <MotionP className="font-gothic text-black/70 mb-10 leading-relaxed">
                  Việc xây dựng đạo đức cách mạng đòi hỏi sự nỗ lực rèn luyện của mọi tầng lớp nhân dân, đặc biệt là đội ngũ cán bộ, đảng viên và lực lượng thanh niên, sinh viên, những người gánh vác tương lai đất nước.
                </MotionP>
              </MotionDiv>
            </FadeUp>

            {/* Right Column - Section 3.2 Carousel */}
            <div className="flex flex-col justify-center">
              <FadeUp delay={0.8}>
                <div className="sticky top-0">
                  <div className="text-center mb-6">
                  </div>
                  <div className="flex justify-center">
                    <div style={{
                      borderRadius: '24px',
                      overflow: 'hidden'
                    }}>
                      <Carousel
                        items={thirdCarousel}
                        baseWidth={550}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>



        {/* Navigation */}
        <FadeUp delay={1.0} className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-lg p-8">
            <MotionH2 className="font-gothic text-xl font-bold text-black mb-6">
              Khám phá thêm
            </MotionH2>
            <div className="flex flex-wrap justify-center gap-4">
            <Link
                href="/noidung/van-hoa-con-nguoi"
                className="px-6 py-3 border-2 border-red-900 text-red-900 font-gothic text-sm uppercase tracking-widest hover:bg-red-900 hover:text-white transition-colors duration-200"
              >
                Văn hóa con người
              </Link>

              <Link
                href="/noidung/dao-duc-cach-mang"
                className="px-6 py-3 bg-red-900 text-white font-gothic text-sm uppercase tracking-widest hover:bg-red-800 transition-colors duration-200"
              >
                Đạo đức cách mạng
              </Link>
              <Link
                href="/noidung"
                className="px-6 py-3 border-2 border-black text-black font-gothic text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
              >
                Về trang chủ
              </Link>
            </div>
          </div>
        </FadeUp>
      </MotionDiv>
    </ClientAnimatedSection>
  );
}