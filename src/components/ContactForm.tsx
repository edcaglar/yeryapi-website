"use client";

import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import {
  contactSchema,
  type ContactPayload,
} from "@/app/schemas/contactSchema";

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactPayload>({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Zod alan şemaları (tek alan doğrulamada kullanacağız)
  const fieldSchema = useMemo(
    () => ({
      name: contactSchema.shape.name,
      email: contactSchema.shape.email,
      message: contactSchema.shape.message,
    }),
    []
  );

  const validateField = useCallback(
    (name: keyof ContactPayload, value: string) => {
      const schema = fieldSchema[name];
      const parsed = schema.safeParse(value);
      setFieldErrors((prev) => ({
        ...prev,
        [name]: parsed.success
          ? undefined
          : parsed.error.issues[0]?.message ?? "Geçersiz değer",
      }));
      return parsed.success;
    },
    [fieldSchema]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as {
      name: keyof ContactPayload;
      value: string;
    };
    setFormData((prev) => ({ ...prev, [name]: value }));
    // İstersen bunu blur’da da yapabilirsin; şu an yazarken de kontrol ediyoruz:
    validateField(name, value);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as {
      name: keyof ContactPayload;
      value: string;
    };
    validateField(name, value);
  };

  const hasErrors = Object.values(fieldErrors).some(Boolean);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setIsSubmitting(true);

    // 1) Client-side toplu doğrulama
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const errs: FieldErrors = {};
      for (const i of parsed.error.issues) {
        const key = i.path.join(".") as keyof ContactPayload;
        errs[key] = i.message;
      }
      setFieldErrors(errs);
      setIsSubmitting(false);
      return;
    } else {
      setFieldErrors({});
    }

    // 2) Server'a gönder
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const json = await res.json().catch(() => null);
        if (json?.errors) setFieldErrors(json.errors as FieldErrors);
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">
          İletişim <span className="text-orange-primary">Formu</span>
        </CardTitle>
        <p className="text-muted-foreground">
          Projeleriniz hakkında detaylı bilgi almak için formu doldurun, size en
          kısa sürede dönüş yapalım.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Ad Soyad *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              placeholder="Adınız ve soyadınız"
              className={`bg-background border-border focus:border-orange-primary ${
                fieldErrors.name ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-red-500 text-sm">
                {fieldErrors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              E-posta *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              placeholder="ornek@email.com"
              className={`bg-background border-border focus:border-orange-primary ${
                fieldErrors.email ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-red-500 text-sm">
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Mesaj *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={
                fieldErrors.message ? "message-error" : undefined
              }
              placeholder="Projeniz hakkında detayları paylaşın..."
              className={`bg-background border-border focus:border-orange-primary resize-none ${
                fieldErrors.message ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-red-500 text-sm">
                {fieldErrors.message}
              </p>
            )}
          </div>

          {/* Submit feedback */}
          {submitStatus === "success" && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <CheckCircle className="h-5 w-5" />
              <span>
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş
                yapacağız.
              </span>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <span>
                Mesaj gönderilirken bir hata oluştu. Lütfen bilgileri kontrol
                edip tekrar deneyin.
              </span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || hasErrors}
            className="w-full bg-orange-primary text-orange-primary-foreground hover:bg-orange-hover disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-orange-primary-foreground border-t-transparent rounded-full animate-spin" />
                <span>Gönderiliyor...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Mesaj Gönder</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
