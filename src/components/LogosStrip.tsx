import Image from "next/image"

const partners = [
  { name: "Ordu Büyükşehir Belediyesi", logo: "/ordu-municipality-logo.png" },
  { name: "Ordu Üniversitesi", logo: "/ordu-university-logo.png" },
  { name: "Karadeniz Teknik Üniversitesi", logo: "/ktu-university-logo.png" },
  { name: "Özel Sektör Ortakları", logo: "/private-sector-partnership-logo.png" },
  { name: "İnşaat Firmaları", logo: "/construction-company-logo.png" },
  { name: "Maden Şirketleri", logo: "/mining-company-logo.png" },
]

export default function LogosStrip() {
  return (
    <section className="py-12 bg-card border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground">Güvenilir Referanslarımız</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="relative w-24 h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Belediyeler, üniversiteler ve özel sektörden 500+ başarılı proje
          </p>
        </div>
      </div>
    </section>
  )
}
