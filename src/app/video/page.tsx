export default function VideoPage() {
  const videos = [
    {
        id: 'eEq4d6gibyM',
        title: 'Tư tưởng Hồ Chí Minh về văn hóa, đạo đức và xây dựng con người mới',
      },
      {
        id: 'o2Oe7gFkIOY',
        title: 'Tư tưởng Hồ Chí Minh về xây dựng Văn hóa và Con người',
      },
      {
        id: 'WQ0jE1rtai4',
        title: 'Chủ tịch Hồ Chí Minh: "Xây dựng văn hóa con người là nền móng để xây dựng văn hóa quốc gia" | VTV24',
      },
    {
      id: 'XKo1t1mt7Is',
      title: '5 điểm lớn trong tư tưởng Hồ Chí Minh về xây dựng nền văn hóa dân tộc',
    },
    {
      id: 'XW4XjPYwzEU',
      title: 'TP.HCM: LAN TỎA CÁC GIÁ TRỊ TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH TRONG ĐỜI SỐNG',
    },
    {
      id: '8E940gAAxpo',
      title: 'Tư tưởng Hồ Chí Minh về văn hoá',
    },
 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfaf7] via-white to-[#faf7f4] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-primary text-3xl md:text-4xl text-black mb-2 tracking-tight">XÂY DỰNG VĂN HÓA, ĐẠO ĐỨC, CON NGƯỜI <br />
            <span className="text-red-900">THEO TƯ TƯỞNG HỒ CHÍ MINH</span>
          </h1>
          <div className="mx-auto h-0.5 w-24 bg-red-900" />
          <p className="font-sub text-black/70 mt-3">Tổng hợp video tư liệu theo chủ đề</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="bg-white/90 backdrop-blur-md border border-black rounded-none p-0">
              <div className="h-1 w-full bg-red-900" />
              <div className="relative w-full pt-[56.25%] overflow-hidden rounded-none">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-3 py-3 border-t border-black/80">
                <div className="text-sm font-sub text-black/80 line-clamp-2">
                {v.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


