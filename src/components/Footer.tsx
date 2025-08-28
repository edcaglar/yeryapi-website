import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-xl font-bold text-foreground">
              <span className="text-orange-primary">Yer Yapı</span>{" "}
              <span className="text-foreground">Sondaj & Jeofizik</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bilimsel Zemin Çözümleri, Güvenli Yapılar İçin
            </p>
            <p className="text-xs text-muted-foreground">
              YER YAPI SONDAJ JEOLOJİ JEOFİZİK İNŞAAT MÜHENDİSLİK MADEN
              ARAŞTIRMA SAN. TİC. LTD. ŞTİ
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">İletişim</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-orange-primary" />
                <span>Atatürk Bulvarı 190/5, Altınordu, Ordu 52100</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-orange-primary" />
                <Link
                  href="tel:+904526660045"
                  className="hover:text-orange-primary transition-colors"
                >
                  0452 666 00 45
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Hızlı Bağlantılar
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-muted-foreground hover:text-orange-primary transition-colors"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/iletisim"
                className="block text-sm text-muted-foreground hover:text-orange-primary transition-colors"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Yer Yapı Sondaj & Jeofizik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
