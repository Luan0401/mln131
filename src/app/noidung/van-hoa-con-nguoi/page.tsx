import { Metadata } from 'next';
import Link from 'next/link';
import {
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  FadeUp,
} from '../../../components/animation/AnimatedWrapper';
import Magnet from '../../../components/Magnet';

export const metadata: Metadata = {
  title: 'Xây Dựng Văn Hóa & Con Người | Định Hướng Phát Triển',
  description: 'Quan điểm, mục tiêu, nhiệm vụ và giải pháp xây dựng văn hóa, con người Việt Nam theo định hướng Đảng.',
  keywords: ['văn hóa', 'con người', 'phát triển', 'đảng', 'giải pháp', 'mục tiêu'],
};

export default function VanHoaConNguoiPage() {
  return (
    <ClientAnimatedSection className="min-h-screen bg-gradient-to-br from-[#f8f7f3] to-white py-16">
      <MotionDiv
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <MotionH2 className="font-metal text-4xl md:text-5xl text-black mb-6">
            <span className="text-black font-primary">XÂY DỰNG & PHÁT TRIỂN</span>
            <span className="text-red-900 font-primary"> VĂN HÓA, CON NGƯỜI</span>
          </MotionH2>
          <MotionP className="font-serif text-lg text-black/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Văn hóa là nền tảng tinh thần, mục tiêu và động lực; con người là trung tâm của phát triển bền vững.
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
            <span className="text-black/60">Đạo đức, Văn hóa & Con người</span>
          </div>
        </FadeUp>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12 font-gothic">
          {/* 1. Xây dựng và phát triển văn hóa, con người */}
          <FadeUp delay={0} once={true}>
            <MotionDiv className="mb-8">
              <MotionH2 className="text-2xl font-bold text-[#81181a] mb-6 text-center">
                1. Xây dựng và phát triển đạo đức, văn hóa, con người
              </MotionH2>
            </MotionDiv>
          </FadeUp>

          {/* 1.1. Quan điểm, mục tiêu về Văn hóa */}
          <FadeUp delay={0.1} once>
            <MotionDiv className="relative bg-gradient-to-br from-[#fffaf7] to-[#fdfdfd] border border-[#d9b7b7]/40 rounded-2xl p-10 shadow-[0_8px_20px_rgba(129,24,26,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_25px_rgba(129,24,26,0.15)]">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#81181a] rounded-l-lg " />

              <MotionH2 className="text-2xl font-semibold text-[#81181a] mb-6 flex items-center gap-3">
                <span className="inline-block w-2 h-2 bg-[#81181a] rounded-full" />
                1.1. Quan điểm, mục tiêu về Văn hóa
              </MotionH2>

              <MotionP className="text-black/80 mb-6 leading-relaxed italic text-lg">
                <span className="font-bold text-[#81181a]">Văn hóa</span> là nền tảng tinh thần vững chắc của xã hội, vừa là mục tiêu, vừa là động lực cho phát triển kinh tế - xã hội.
              </MotionP>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {/* Card 1 */}
                <Magnet wrapperClassName="w-full h-full" innerClassName="w-full h-full">
                  <div className="flex flex-col justify-between h-full bg-white/60 border border-[#81181a]/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-[#81181a] mb-3">
                        Mục tiêu
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, kế thừa
                        truyền thống tốt đẹp và tiếp thu tinh hoa nhân loại.
                      </p>
                    </div>
                  </div>
                </Magnet>

                {/* Card 2 */}
                <Magnet wrapperClassName="w-full h-full" innerClassName="w-full h-full">
                  <div className="flex flex-col justify-between h-full bg-white/60 border border-[#81181a]/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-[#81181a] mb-3">
                        Yêu cầu
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        Văn hóa phải thấm sâu vào mọi lĩnh vực đời sống (chính trị, kinh tế, cộng đồng)
                        để hướng tới xã hội dân chủ, công bằng, văn minh.
                      </p>
                    </div>
                  </div>
                </Magnet>

                {/* Card 3 */}
                <Magnet wrapperClassName="w-full h-full" innerClassName="w-full h-full">
                  <div className="flex flex-col justify-between h-full bg-white/60 border border-[#81181a]/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-[#81181a] mb-3">
                        Trọng tâm
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        Xây dựng môi trường văn hóa lành mạnh, đấu tranh loại bỏ cái xấu, phản văn hóa,
                        phù hợp với phát triển kinh tế thị trường và hội nhập quốc tế.
                      </p>
                    </div>
                  </div>
                </Magnet>
              </div>

            </MotionDiv>
          </FadeUp>

          {/* 1.2. Quan điểm, mục tiêu về Con người */}
          <FadeUp delay={0.1} once>
            <MotionDiv className="relative bg-gradient-to-br from-[#fffaf7] to-[#fdfdfd] border border-[#d9b7b7]/40 rounded-2xl p-10 shadow-[0_8px_20px_rgba(129,24,26,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_25px_rgba(129,24,26,0.15)] font-gothic ">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#81181a] rounded-l-lg" />

              <MotionH2 className="text-2xl font-semibold text-[#81181a] mb-6 flex items-center gap-3">
                <span className="inline-block w-2 h-2 bg-[#81181a] rounded-full" />
                1.2. Quan điểm, mục tiêu về Con người
              </MotionH2>

              <MotionP className="text-black/80 mb-6 leading-relaxed italic text-lg">
                <span className="font-bold text-[#81181a]">Con người</span> là trung tâm của sự phát triển, là chủ thể sáng tạo và là mục tiêu của mọi chính sách, chiến lược phát triển đất nước
              </MotionP>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {/* Mục tiêu */}
                <Magnet wrapperClassName="w-full" innerClassName="w-full h-full">
                  <div className="flex flex-col justify-between h-full bg-white/60 border border-[#81181a]/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="font-gothic text-lg font-semibold text-[#81181a] mb-3">
                        Mục tiêu
                      </h3>
                      <p className="text-black/70 leading-relaxed font-gothic ">
                        Xây dựng con người Việt Nam phát triển toàn diện — yêu nước, tự cường,
                        có đạo đức, trí tuệ, sáng tạo, thể chất và thẩm mỹ cao.
                      </p>
                    </div>
                  </div>
                </Magnet>

                {/* Giá trị cốt lõi */}
                <Magnet wrapperClassName="w-full" innerClassName="w-full h-full">
                  <div className="flex flex-col justify-between h-full bg-white/60 border border-[#81181a]/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="font-gothic text-lg font-semibold text-[#81181a] mb-3">
                        Giá trị cốt lõi
                      </h3>
                      <p className="text-black/70 leading-relaxed font-gothic">
                        Hướng tới <span className="italic">Chân - Thiện - Mỹ</span>, thấm nhuần
                        tinh thần dân tộc, nhân văn, dân chủ, khoa học.
                      </p>
                    </div>
                  </div>
                </Magnet>

                {/* Giải pháp */}
                <Magnet wrapperClassName="w-full" innerClassName="w-full h-full">
                  <div className="flex flex-col justify-between h-full bg-white/60 border border-[#81181a]/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="font-gothic text-lg font-semibold text-[#81181a] mb-3">
                        Giải pháp
                      </h3>
                      <p className="text-black/70 leading-relaxed font-gothic">
                        Thực hiện đồng bộ qua giáo dục, đào tạo và môi trường văn hóa lành mạnh,
                        giúp con người Việt Nam vươn lên, đoàn kết, xây dựng CNXH.
                      </p>
                    </div>
                  </div>
                </Magnet>
              </div>

            </MotionDiv>
          </FadeUp>

          {/* 1.3. Nhiệm vụ và giải pháp xây dựng Văn hóa, Con người (Đại hội XII) */}
          <FadeUp delay={0.3} once={true}>
            <MotionDiv className="relative bg-[#fff9f9] backdrop-blur-lg border border-[#81181a]/30 rounded-xl p-8 shadow-[0_8px_30px_rgba(129,24,26,0.15)] transition-shadow duration-300">
              <div className="absolute -top-3 left-6 bg-[#81181a] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Đại hội XII
              </div>

              <MotionH2 className="text-2xl font-bold text-[#81181a] mb-6 tracking-wide">
                1.3. Nhiệm vụ và giải pháp xây dựng Văn hóa, Con người
              </MotionH2>

              <ul className="list-disc ml-6 space-y-3 text-black/80 leading-relaxed">
                <li>
                  <span className="font-bold text-[#81181a]">
                    Nhiệm vụ trung tâm:
                  </span>{" "}
                  <span className="italic font-medium">
                    Xây dựng con người Việt Nam toàn diện theo các giá trị
                    <span className="text-[#81181a] font-semibold"> Chân - Thiện - Mỹ </span>
                    và tinh thần dân tộc, nhân văn, dân chủ, khoa học.
                  </span>
                </li>

                <li>
                  <span className="font-bold text-[#81181a]">Môi trường văn hóa:</span>{" "}
                  Tạo môi trường sống lành mạnh, đấu tranh chống cái xấu, hủ tục, tệ nạn xã hội, phát triển gia đình Việt Nam ấm no, tiến bộ, hạnh phúc, văn minh.
                </li>

                <li>
                  <span className="font-bold text-[#81181a]">Văn hóa trong chính trị và kinh tế:</span>{" "}
                  Xây dựng văn hóa trong Đảng, Nhà nước và tổ chức xã hội để hệ thống chính trị trong sạch, vững mạnh.
                </li>

                <li>
                  <span className="font-bold text-[#81181a]">Phát triển công nghiệp văn hóa:</span>{" "}
                  Nâng cao thiết chế văn hóa, quản lý xuất bản tốt, phát triển thị trường và sản phẩm văn hóa, đồng thời hội nhập quốc tế để tiếp thu tinh hoa nhân loại.
                </li>
              </ul>
            </MotionDiv>
          </FadeUp>
        </div>

        {/* Navigation */}
        <FadeUp delay={0.8} className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-lg p-8">
            <MotionH2 className="text-xl font-bold text-black mb-6">
              Khám phá thêm
            </MotionH2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/noidung/van-hoa-con-nguoi"
                className="px-6 py-3 bg-red-900 text-white text-sm uppercase tracking-widest hover:bg-red-800 transition-colors duration-200"
              >
                Văn hóa con người
              </Link>
              <Link
                href="/noidung/dao-duc-cach-mang"
                className="px-6 py-3 border-2 border-red-900 text-red-900 text-sm uppercase tracking-widest hover:bg-red-900 hover:text-white transition-colors duration-200"
              >
                Đạo đức cách mạng
              </Link>
              <Link
                href="/noidung"
                className="px-6 py-3 border-2 border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
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
