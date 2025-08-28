import { Award, Users, Clock } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Kısa <span className="text-orange-primary">Hakkımızda</span>
            </h2>
            <div className="w-24 h-1 bg-orange-primary mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jeoloji, jeofizik ve inşaat mühendisliği alanlarında uzmanlaşmış
                ekibimizle, güvenli yapılar için bilimsel zemin çözümleri
                sunuyoruz.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Modern teknoloji ve deneyimli kadromuzla, zemin etüdü, sondaj
                çalışmaları, maden araştırma ve yeraltı suyu tespiti
                hizmetlerinde sektörün öncü firmalarından biriyiz. Her projede
                güvenlik ve bilimsel yaklaşımı ön planda tutarak,
                müşterilerimize en kaliteli hizmeti sunmayı hedefliyoruz.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-orange-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Yıl Deneyim
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-orange-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Tamamlanan Proje
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Clock className="h-8 w-8 text-orange-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">7/24</div>
                  <div className="text-sm text-muted-foreground">Destek</div>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src="/professional-engineering-team-with-geological-equi.png"
                  alt="Yer Yapı Sondaj & Jeofizik Ekibi"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
