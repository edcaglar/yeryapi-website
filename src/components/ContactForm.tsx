"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO Form endpointi ekle
      const response = await fetch("https://formspree.io/f/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Yer Yapı Sondaj & Jeofizik - Yeni İletişim Formu",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log(error);
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
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Adınız ve soyadınız"
              className="bg-background border-border focus:border-orange-primary"
            />
          </div>

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
              placeholder="ornek@email.com"
              className="bg-background border-border focus:border-orange-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Mesaj *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Projeniz hakkında detayları paylaşın..."
              rows={5}
              className="bg-background border-border focus:border-orange-primary resize-none"
            />
          </div>

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
                Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya
                telefon ile iletişime geçin.
              </span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-primary text-orange-primary-foreground hover:bg-orange-hover disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-orange-primary-foreground border-t-transparent rounded-full animate-spin"></div>
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
