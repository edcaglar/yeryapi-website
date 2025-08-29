import { contactSchema } from "@/app/schemas/contactSchema";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // İsteğe bağlı: basit rate-limit (IP başına) eklenebilir.
    const result = await resend.emails.send({
      from: "iletisim@yeryapigroup.com", // (domainin Resend’de verified olmalı)
      to: ["info@yeryapigroup.com"], // teslim alacağın adres
      subject: "Yer Yapı - Yeni İletişim Mesajı",
      replyTo: data.email, // yanıtlarken gönderene dönsün
      text: `Ad: ${data.name}\nE-posta: ${data.email}\nMesaj:\n${data.message}`,
    });

    if (result.error) {
      return NextResponse.json(
        { ok: false, error: result.error.message },
        { status: 500 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of err.issues) {
        const key = issue.path.join("."); // "name" | "email" | "message"
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return NextResponse.json(
        { ok: false, errors: fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: false, error: err ?? "Server error" },
      { status: 500 }
    );
  }
}
