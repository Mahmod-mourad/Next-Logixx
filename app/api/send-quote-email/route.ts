import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Phone validation regex (allows for international formats)
const phoneRegex = /^\+?[\d\s-]{8,}$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, services, budget, description, timeline } = body

    // Validate required fields
    if (!name || !email || !phone || !projectType || !services || !budget || !description || !timeline) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      )
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "البريد الإلكتروني غير صالح" },
        { status: 400 }
      )
    }

    // Validate phone format
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "رقم الهاتف غير صالح" },
        { status: 400 }
      )
    }

    // Construct email content with better formatting
    const emailContent = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1a56db; text-align: center; margin-bottom: 30px;">طلب عرض سعر جديد</h2>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">بيانات العميل:</h3>
            <p style="margin: 10px 0;"><strong>الاسم:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>رقم الهاتف:</strong> ${phone}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">تفاصيل المشروع:</h3>
            <p style="margin: 10px 0;"><strong>نوع المشروع:</strong> ${projectType}</p>
            <p style="margin: 10px 0;"><strong>الخدمات المطلوبة:</strong> ${services}</p>
            <p style="margin: 10px 0;"><strong>الميزانية:</strong> ${budget}</p>
            <p style="margin: 10px 0;"><strong>الجدول الزمني:</strong> ${timeline}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px;">
            <h3 style="color: #374151; margin-bottom: 15px;">وصف المشروع:</h3>
            <p style="margin: 10px 0; white-space: pre-wrap;">${description}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              تم إرسال هذا البريد الإلكتروني تلقائياً من نموذج طلب عرض السعر في موقع Next Logix
            </p>
          </div>
        </div>
      </div>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["nextlogixx1@gmail.com"],
      subject: "طلب عرض سعر جديد",
      html: emailContent,
      replyTo: email
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json(
        { error: "حدث خطأ أثناء إرسال البريد الإلكتروني" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "تم إرسال طلبك بنجاح", data },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة الطلب" },
      { status: 500 }
    )
  }
} 