import Link from "next/link"
import { Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function QuickContact() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-orange-primary/20 bg-gradient-to-br from-card to-background">
            <CardContent className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Hızlı <span className="text-orange-primary">İletişim</span>
                </h2>
                <p className="text-muted-foreground">Projeleriniz için hemen bizimle iletişime geçin</p>
              </div>

              {/* Contact info */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Telefon</div>
                    <Link
                      href="tel:+904526660045"
                      className="text-lg text-orange-primary hover:text-orange-hover transition-colors"
                    >
                      0452 666 00 45
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Adres</div>
                    <div className="text-muted-foreground">
                      Atatürk Bulvarı 190/5, Altınordu
                      <br />
                      Ordu 52100, Türkiye
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild className="bg-orange-primary text-orange-primary-foreground hover:bg-orange-hover">
                  <Link href="tel:+904526660045" className="flex items-center justify-center gap-2">
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
                    href="https://wa.me/904526660045"
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
      </div>
    </section>
  )
}
