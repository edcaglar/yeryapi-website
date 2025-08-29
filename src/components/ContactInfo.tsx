import Link from "next/link";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Main Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-foreground">
            İletişim <span className="text-orange-primary">Bilgileri</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-orange-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Adres</h3>
              <p className="text-muted-foreground">
                Atatürk Bulvarı 190/5, Altınordu
                <br />
                Ordu 52100, Türkiye
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="h-6 w-6 text-orange-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
              <Link
                href="tel:+904526660045"
                className="text-orange-primary hover:text-orange-hover transition-colors text-lg"
              >
                0452 666 00 45
              </Link>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-orange-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
              <Link
                href="mailto:info@yeryapigroup.com"
                className="text-orange-primary hover:text-orange-hover transition-colors"
              >
                info@yeryapigroup.com
              </Link>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Çalışma Saatleri
              </h3>
              <div className="text-muted-foreground space-y-1">
                <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 16:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
            <Button
              asChild
              className="bg-orange-primary text-orange-primary-foreground hover:bg-orange-hover"
            >
              <Link
                href="tel:+904526660045"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Hemen Ara
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-orange-primary-foreground bg-transparent"
            >
              <Link
                href="https://wa.me/905388822812?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
