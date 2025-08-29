import Image from "next/image";

const partners = [
  { name: "TCDD", logo: "/references/tcdd.png" },
  { name: "TEİAŞ", logo: "/references/teias.png" },
  {
    name: "İstanbul Altın Rafinerisi LTD. ŞTİ.",
    logo: "/references/istanbul-altin-rafinerisi.png",
  },
  {
    name: "MERSAN",
    logo: "/references/MERSAN.png",
  },
];

export default function LogosStrip() {
  return (
    <section className="py-12 bg-card border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Referanslarımız
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="relative w-28 h-20 opacity-60 hover:opacity-100 transition-opacity hover:grayscale-0">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  sizes="( max-width: 768px ) 50vw, ( max-width: 1200px ) 33vw, 25vw"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
