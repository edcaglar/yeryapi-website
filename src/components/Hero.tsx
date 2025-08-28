import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-card">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,138,76,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-orange-primary">Yer Yapı</span>{" "}
              <span className="text-foreground">Sondaj & Jeofizik</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Bilimsel Zemin Çözümleri, Güvenli Yapılar İçin
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Jeoloji, jeofizik ve inşaat mühendisliği alanında uzman ekibimizle,
            zemin etüdü, sondaj, maden araştırma ve yeraltı suyu hizmetleri
            sunuyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-primary text-orange-primary-foreground hover:bg-orange-hover text-base px-8 py-3"
            >
              <Link href="#hizmetlerimiz" className="flex items-center gap-2">
                Hizmetlerimiz
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-orange-primary-foreground text-base px-8 py-3 bg-transparent"
            >
              <Link href="/iletisim" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                İletişim
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
