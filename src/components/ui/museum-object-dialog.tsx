'use client';

import Dialog from './dialog';

interface MuseumObjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  objectName: string;
}

const objectInfo: { 
    [key: string]: { 
      title: string; 
      description: string; 
      image?: string; 
      relation?: string; 
    } 
  } = {
    bacho: {
      title: "Bác Hồ",
      description: "Chủ tịch Hồ Chí Minh – người đặt nền tảng cho xây dựng văn hóa, đạo đức và con người Việt Nam: giản dị, vì nước vì dân, nêu gương về cần – kiệm – liêm – chính.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaFEAnGdVscTQw-VupM2zvDNRHSMl69X6sw&s",
      relation: "Tư tưởng Hồ Chí Minh là cơ sở định hướng xây dựng hệ giá trị quốc gia, chuẩn mực đạo đức cách mạng và bồi dưỡng con người Việt Nam thời kỳ mới."
    },
    aonau: {
      title: "Áo Ka-ki Nâu",
      description: "Chiếc áo ka-ki nâu giản dị gắn liền với hình ảnh Bác Hồ – biểu tượng của phong cách sống mực thước, vì dân phục vụ, đề cao đức tính khiêm nhường.",
      image: "https://capnuoctrungan.vn/Images/Uploadimages/13_1(1).jpg",
      relation: "Góp phần giáo dục đạo đức cách mạng: sống giản dị, trong sạch, chống chủ nghĩa cá nhân – nội dung cốt lõi để xây dựng con người mới."
    },
    tuyenngon: {
      title: "Tuyên Ngôn Độc Lập",
      description: "Văn kiện lịch sử do Chủ tịch Hồ Chí Minh đọc ngày 2/9/1945, khai sinh nước Việt Nam Dân chủ Cộng hòa, khẳng định giá trị tự do, bình đẳng, nhân phẩm con người.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zIjwMnN0p_Hfmr7PRnik6DZz-0IQ12Mfvg&s",
      relation: "Tạo nền tảng tinh thần – pháp lý cho việc xây dựng văn hóa dân tộc, tôn trọng con người và phát huy giá trị nhân văn Việt Nam."
    },
    aodai: {
      title: "Áo Dài",
      description: "Áo dài – biểu tượng bản sắc Việt, hài hòa truyền thống và hiện đại, tôn vinh vẻ đẹp kín đáo, thanh lịch của con người Việt Nam.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjI_4V2S2QuvFmstxT2lbsFnycnKIeXyqhQ&s",
      relation: "Khẳng định yêu cầu xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; nuôi dưỡng thẩm mỹ và nhân cách."
    },
    anh3: {
      title: "Trống Đồng – Trống Chiêng",
      description: "Di sản âm nhạc – nghi lễ cộng đồng, kết nối quá khứ với hiện tại, biểu trưng cho tinh thần cố kết và ý chí vươn lên của dân tộc.",
      image: "https://vcdn1-dulich.vnecdn.net/2021/04/19/trongdongngoclu-2851-1618820026.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=ewiiHrtqp4G-TX3YzDgAdw",
      relation: "Bồi đắp sức mạnh nội sinh của văn hóa; nuôi dưỡng lòng tự hào, ý thức cộng đồng – nền tảng xây dựng con người Việt Nam."
    },
    Cone: {
      title: "Nón Lá",
      description: "Nón lá – vật dụng bình dị gắn bó với người Việt, phản ánh lối sống cần cù, nhân hậu và vẻ đẹp mộc mạc của văn hóa Việt.",
      image: "https://baotanglichsu.vn/DataFiles/News/Tintuc_cgs_vn_20167318h25m47s.jpg",
      relation: "Gợi nhắc phẩm chất lao động, tiết kiệm, giàu tình nghĩa – giá trị đạo đức cốt lõi trong xây dựng con người."
    },
    anh1: {
      title: "Tranh Cổ Động 1950",
      description: "Tranh cổ động 1950 kêu gọi đoàn kết, hy sinh vì Tổ quốc – truyền cảm hứng về lý tưởng sống đẹp và trách nhiệm công dân.",
      image: "https://tuyengiao.hungyen.dcs.vn/images/userfiles/images/tin-tuc/17(4).jpg",
      relation: "Công cụ giáo dục văn hóa – đạo đức thời chiến; bồi dưỡng lòng yêu nước, tinh thần cộng đồng và ý chí vươn lên."
    },
    anh2: {
      title: "Phiếu Cấp Thị Cơ Động 1981",
      description: "Tư liệu thời bao cấp (1981) phản ánh nỗ lực đảm bảo an sinh trong điều kiện còn khó khăn; nhấn mạnh tính cộng đồng, sẻ chia.",
      image: "https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/102023/ghep_20231020181937.jpg",
      relation: "Gợi mở bài học về liêm chính, tiết kiệm, chống lãng phí; đặt con người làm trung tâm chính sách xã hội."
    },
    CoffeeTable: {
      title: "Ẩm Thực Việt",
      description: "Những món ăn quen thuộc phản ánh nếp sống gia đình, sự gắn kết cộng đồng và bản sắc văn hóa Việt qua thời gian.",
      image: "https://static.tuoitre.vn/tto/i/s626/2017/06/11/7e6c8e28.jpg",
      relation: "Ẩm thực là phương tiện gìn giữ bản sắc; nuôi dưỡng lối sống lành mạnh, tình nghĩa – yếu tố hình thành nhân cách con người Việt."
    }
  };
  
  

export default function MuseumObjectDialog({ isOpen, onClose, objectName }: MuseumObjectDialogProps) {
  const info = objectInfo[objectName] || {
    title: objectName,
    description: "Thông tin về đối tượng này đang được cập nhật."
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={info.title}>
      <div className="space-y-4">
        {info.image && (
          <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={info.image} 
              alt={info.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-gray-500">Hình ảnh: ${info.title}</span></div>`;
                }
              }}
            />
          </div>
        )}
        <p className="text-gray-700 leading-relaxed">
          {info.description}
        </p>
        
        {info.relation && (
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Liên hệ với bài học:</h4>
            <p className="text-blue-700 leading-relaxed text-sm">
              {info.relation}
            </p>
          </div>
        )}
      </div>
    </Dialog>
  );
}
