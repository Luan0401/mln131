export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfaf7] via-white to-[#faf7f4] py-18">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="font-primary text-3xl md:text-4xl text-black mb-2 tracking-tight">Gốc người Việt</h1>
          <div className="mx-auto h-0.5 w-24 bg-red-900" />
          <p className="font-sub text-black/70 mt-3 text-sm">Bài hát do AI tạo — Thể loại: rap nhẹ – hiphop truyền cảm hứng</p>
        </div>

        <div className="bg-black/10 backdrop-blur-md border border-black rounded-none p-6 md:p-8">
          <div className="prose prose-sm max-w-none">
            <h2 className="font-primary text-xl text-black mb-3">Lyrics</h2>
            <div className="h-0.5 w-16 bg-red-900 mb-6" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Verse 1</h3>
              <p className="text-black/80 whitespace-pre-line">
                {`Người dạy ta sống có tình, có nghĩa,
Đạo đức là gốc, không phải chuyện đùa đâu nha.
Cần, kiệm, liêm, chính – năm chữ ghi sâu,
Giữa dòng đời đổi thay, vẫn sáng như sao.`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Hook</h3>
              <p className="text-black/80 whitespace-pre-line">
                {`Dựng xây tương lai – từ tâm hồn ta,
Giữ vững văn hóa – chẳng phai phôi pha.
Hồ Chí Minh dạy: “Người là gốc của nước”,
Giữ đạo, giữ tâm – dân tộc mãi trường tồn.`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Verse 2</h3>
              <p className="text-black/80 whitespace-pre-line">
                {`Thế hệ trẻ bước đi trên đường mới,
Văn hóa Việt – tinh hoa chẳng thể vơi.
Giữa công nghệ, giữa dòng thông tin,
Hãy sống đẹp, sống xanh, sống thật hiền.`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Bridge (Cao trào)</h3>
              <p className="text-black/80 whitespace-pre-line">
                {`Không quên cội nguồn, yêu quê hương đất mẹ,
Một tấm lòng son, chẳng đổi theo thời gian.
Học theo Bác, ta xây đời bền vững,
Đạo đức sáng soi, văn hóa vươn ngang tầm!`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section>
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Outro</h3>
              <p className="text-black/80 whitespace-pre-line">
                {`Từ Bắc vô Nam, cùng nhau dựng nước,
Người Việt ta, mang trái tim nồng nàn.
Theo lời Bác, ta bước đi vững vàng,
Xây văn hóa, dựng đạo đức – hiên ngang!`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section>
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Kết (Outro)</h3>
              <p className="font-serif text-black/80 whitespace-pre-line">
                {`Nhân dân là gốc, niềm tin sáng soi,
Xây dựng đất nước, rạng rỡ mai sau.
Dân chủ xã hội chủ nghĩa – mục tiêu,
Việt Nam tươi đẹp, vững bước ngàn năm!`}
              </p>
            </section>
          </div>

          <div className="mt-6 text-[12px] font-sub text-black/60">
            Nguồn: Bài hát được tạo bằng AI. Trình phát nhạc nằm ở góc trái dưới cùng màn hình.
          </div>
        </div>
      </div>
    </div>
  );
}


