import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "İletişim - Yer Yapı Sondaj & Jeofizik",
  description:
    "Yer Yapı Sondaj & Jeofizik ile iletişime geçin. Zemin etüdü, sondaj, jeofizik ve maden araştırma hizmetleri için bize ulaşın. Ordu merkezli hizmet.",
  keywords: "iletişim, zemin etüdü, sondaj, jeofizik, Ordu, telefon, adres",
  openGraph: {
    title: "İletişim - Yer Yapı Sondaj & Jeofizik",
    description:
      "Yer Yapı Sondaj & Jeofizik ile iletişime geçin. Zemin etüdü, sondaj, jeofizik ve maden araştırma hizmetleri için bize ulaşın.",
    url: "https://yeryapigroup.com/iletisim",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              <span className="text-orange-primary">İletişim</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projeleriniz için profesyonel destek almak üzere bizimle iletişime
              geçin. Size en uygun çözümü sunmak için buradayız.
            </p>
            <div className="w-24 h-1 bg-orange-primary mx-auto mt-4"></div>
          </div>

          {/* Contact content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <ContactInfo />
            </div>
          </div>

          {/* Google Maps */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Ofis <span className="text-orange-primary">Konumumuz</span>
            </h2>
            <GoogleMap />
          </div>

          {/* Additional info */}
          <div className="text-center bg-card rounded-lg p-8 border border-border/40">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <div className="text-2xl font-bold text-orange-primary mb-2">
                  15+
                </div>
                <div>Yıllık deneyim ile güvenilir hizmet</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-primary mb-2">
                  100+
                </div>
                <div>Başarıyla tamamlanmış proje</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-primary mb-2">
                  7/24
                </div>
                <div>Acil durumlar için destek</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
