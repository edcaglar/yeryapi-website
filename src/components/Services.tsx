import { Drill, Mountain, Droplets, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Drill,
    title: "Zemin Etüdü ve Sondaj",
    description:
      "Temel sondajları, laboratuvar testleri ve detaylı raporlama hizmetleri ile yapılarınızın güvenli temellerini oluşturuyoruz.",
    features: ["Temel sondajları", "Laboratuvar testleri", "Zemin analiz raporları", "Taşıma gücü hesaplamaları"],
  },
  {
    icon: Mountain,
    title: "Maden Sondajı ve Araştırma",
    description: "Rezerv arama, numune alma ve jeolojik rapor hazırlama ile maden potansiyelinizi ortaya çıkarıyoruz.",
    features: [
      "Rezerv arama çalışmaları",
      "Numune alma ve analiz",
      "Jeolojik rapor hazırlama",
      "Maden potansiyeli değerlendirme",
    ],
  },
  {
    icon: Droplets,
    title: "Su Arama ve Sondaj",
    description: "Yeraltı suyu tespiti, içme ve sulama kuyuları açma hizmetleri ile su ihtiyaçlarınızı karşılıyoruz.",
    features: ["Yeraltı suyu tespiti", "İçme suyu kuyuları", "Sulama kuyuları", "Su kalite analizleri"],
  },
  {
    icon: Zap,
    title: "Jeofizik Çalışmalar",
    description:
      "Sismik, mikrotremör, ERT ve GPR yöntemleri ile yeraltı yapısının detaylı analizi ve haritalandırması.",
    features: ["Sismik araştırmalar", "Mikrotremör ölçümleri", "ERT (Elektrik Rezistivite)", "GPR (Yer Radarı)"],
  },
]

export default function Services() {
  return (
    <section id="hizmetlerimiz" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-orange-primary">Hizmetlerimiz</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jeoloji, jeofizik ve inşaat mühendisliği alanlarında sunduğumuz profesyonel hizmetler
          </p>
          <div className="w-24 h-1 bg-orange-primary mx-auto mt-4"></div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-orange-primary/30"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-orange-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-orange-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-orange-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Projeleriniz için detaylı bilgi almak ister misiniz?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+904526660045"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-primary text-orange-primary-foreground rounded-lg hover:bg-orange-hover transition-colors font-medium"
            >
              Hemen Arayın: 0452 666 00 45
            </a>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 border border-orange-primary text-orange-primary rounded-lg hover:bg-orange-primary hover:text-orange-primary-foreground transition-colors font-medium bg-transparent"
            >
              Detaylı Bilgi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
