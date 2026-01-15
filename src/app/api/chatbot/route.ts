import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ErrorWithMessage {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

// Extract error message helper
function getErrorMessage(error: unknown): string {
  if (isErrorWithMessage(error)) return error.message;
  return 'Unknown error occurred';
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    const apiKey = process.env.GEMINI_API_KEY || '';
    
    if (!apiKey) {
      return NextResponse.json({ 
        response: { 
          content: "Gemini API key is not configured.",
          role: "assistant"
        } 
      }, { status: 200 });
    }
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      // Short and focused system prompt (aligned with Văn hóa - Đạo đức - Con người)
      const systemPrompt = `Bạn là trợ lý học thuật về  Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa.
Trả lời ngắn gọn, chính xác, cân bằng và bằng tiếng Việt.
Chỉ trả lời các câu hỏi LIÊN QUAN đến chủ đề trên; nếu KHÔNG LIÊN QUAN, hãy từ chối lịch sự bằng câu: "Xin lỗi, câu hỏi này nằm ngoài phạm vi chủ đề. Vui lòng hỏi về: xây dựng & phát triển văn hóa, con người; xây dựng đạo đức cách mạng; hoặc quan điểm, chính sách và giải pháp theo Tư tưởng Hồ Chí Minh." và KHÔNG cung cấp nội dung ngoài phạm vi.
Ưu tiên ba trục chủ đề khi phù hợp: (1) Xây dựng & phát triển văn hóa, con người; (2) Xây dựng đạo đức cách mạng; (3) Quan điểm, chính sách và giải pháp thực thi theo Tư tưởng Hồ Chí Minh.`;

      const fullMessage = `${systemPrompt}\n\nNgười dùng hỏi: ${message}`;
      
      const result = await model.generateContent(fullMessage);
      const response = await result.response;
      const text = response.text();
      
      return NextResponse.json({ 
        response: { 
          content: text,
          role: "assistant"
        } 
      });
    } catch (error: unknown) {
      console.error('Gemini API error:', error);
      
      return NextResponse.json({ 
        response: { 
          content: `Error with Gemini AI service: ${getErrorMessage(error)}`,
          role: "assistant"
        } 
      }, { status: 200 });
    }
    
  } catch (error: unknown) {
    return NextResponse.json(
      { error: `Failed to process request: ${getErrorMessage(error)}` },
      { status: 500 }
    );
  }
}