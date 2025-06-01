import { NextResponse } from "next/server"
import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Phone validation regex (allows international format)
const phoneRegex = /^\+?[\d\s-]{10,}$/

export async function POST(request: Request) {
  try {
    console.log('Starting download email send process...')

    const { name, email, phone, company, projectType, services, budget, description, timeline } = await request.json()
    console.log('Received download form data:', { name, email, phone, company, projectType, services, budget, description, timeline })

    // Validate required fields
    if (!name || !email || !phone || !projectType || !services || !budget || !description || !timeline) {
      console.log("Missing required fields:", {
        name: !name,
        email: !email,
        phone: !phone,
        projectType: !projectType,
        services: !services,
        budget: !budget,
        description: !description,
        timeline: !timeline
      })
      return NextResponse.json(
        { error: "جميع الحقول المطلوبة يجب ملؤها" },
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

    // إعداد الإيميل
    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; text-align: center;">طلب تحميل جديد</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057;">بيانات العميل:</h3>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          ${company ? `<p><strong>اسم الشركة:</strong> ${company}</p>` : ''}
          
          <h3 style="color: #495057; margin-top: 20px;">تفاصيل المشروع:</h3>
          <p><strong>نوع المشروع:</strong> ${projectType}</p>
          <p><strong>الخدمات المطلوبة:</strong> ${services.join(', ')}</p>
          <p><strong>الميزانية:</strong> ${budget}</p>
          <p><strong>الجدول الزمني:</strong> ${timeline}</p>
          
          <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 4px;">
            <h4 style="color: #495057; margin-bottom: 10px;">وصف المشروع:</h4>
            <p style="white-space: pre-wrap;">${description}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #6c757d; font-size: 14px;">
            تم إرسال هذا الإيميل تلقائياً من نموذج التحميل في موقع Next Logix
          </p>
        </div>
      </div>
    `

    console.log('Sending download email...')

    // إرسال الإيميل
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['nextlogixx1@gmail.com'],
      subject: `طلب تحميل جديد من ${name}`,
      html: emailHtml,
      replyTo: email,
    })

    if (error) {
      console.error('Email send error:', error)
      return NextResponse.json(
        { 
          error: 'فشل في إرسال البريد الإلكتروني',
          details: error.message || 'خطأ غير معروف في إرسال البريد الإلكتروني'
        },
        { status: 500 }
      )
    }

    console.log('Download email sent successfully:', data)
    return NextResponse.json({
      success: true,
      message: 'تم إرسال طلبك بنجاح',
      emailId: data?.id || undefined
    })

  } catch (error) {
    console.error('Error in download email API:', error)
    return NextResponse.json(
      { 
        error: 'حدث خطأ أثناء إرسال الطلب',
        details: error instanceof Error ? error.message : 'خطأ غير معروف'
      },
      { status: 500 }
    )
  }
} 