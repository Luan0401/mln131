'use client';

import Link from 'next/link';

export default function GamePage() {
  return (
    <div className="min-h-screen bg-[#fcfbf9]">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center min-h-[80vh]">
          
          {/* Cột trái - Nội dung lý luận */}
          <div className="space-y-6 lg:col-span-4 px-12">
            <div className="bg-white/80 backdrop-blur-md rounded-none shadow-[15px_15px_0px_0px_rgba(153,27,27,0.1)] p-8 border-2 border-red-900">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-primary uppercase tracking-tighter">
                  Không Gian <br /> <span className="text-red-900">Lý Luận Số</span>
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-600 font-sub mb-5 italic">
                  Sự vận động của Dân chủ & Nhà nước
                </h2>
              </div>
              
              <div className="space-y-6 text-base text-gray-700 leading-relaxed font-serif">
                <p className="border-l-4 border-red-900 pl-4">
                  Trải nghiệm tương tác 3D về lộ trình lịch sử: Từ sự ra đời của các nền dân chủ đến khi đạt tới hình thái <strong>"Tự quản xã hội"</strong> trong tương lai.
                </p>
                
                <div className="space-y-2">
                  <p className="font-bold text-red-900 uppercase text-sm tracking-widest">Trọng tâm khám phá:</p>
                  <ul className="list-none space-y-1 text-sm">
                    <li>• Bản chất thực chất của Dân chủ XHCN.</li>
                    <li>• Logic "Tiêu vong" của Nhà nước & Dân chủ.</li>
                    <li>• Phân biệt Tự quản xã hội và Độc tài.</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8">
                <Link 
                  href="/baotang"
                  className="inline-flex items-center px-8 py-4 bg-red-900 text-white text-sm uppercase tracking-widest font-bold hover:bg-black transition-all duration-300 shadow-xl"
                >
                  <svg 
                    className="w-5 h-5 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                  Bắt đầu hành trình lý luận
                </Link>
              </div>
            </div>
          </div>
           <div className="w-full lg:col-span-6 overflow-hidden ">
          <div className="sketchfab-embed-wrapper">
              <iframe
                title="Sketchfab Model"
                                src="https://sketchfab.com/models/617be5181a35411cbbfefa536af7e87f/embed?autospin=0&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"
                width="850"
                height="600"
                loading="lazy"
                allow="accelerometer; gyroscope; autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                style={{ border: "none" }}
                className="my-frame"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}