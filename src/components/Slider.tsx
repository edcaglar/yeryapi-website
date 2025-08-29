"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Zemin Etüdü Çalışmaları",
    description: "Bilimsel yöntemlerle zemin analizi ve raporlama hizmetleri",
    image: "/slider/manzara.jpeg",
  },
  {
    id: 2,
    title: "Sondaj Makineleri",
    description: "Modern sondaj ekipmanları ile hassas çalışma",
    image: "/slider/araba-manzara.jpeg",
  },
  {
    id: 3,
    title: "Jeofizik Ölçüm Sahası",
    description: "Yeraltı yapısının detaylı analizi ve haritalandırması",
    image: "/slider/araba.jpeg",
  },
  {
    id: 4,
    title: "Maden Araştırma",
    description: "Rezerv tespiti ve jeolojik değerlendirme çalışmaları",
    image: "/slider/direk.jpeg",
  },
  {
    id: 5,
    title: "Su Arama Sondajı",
    description: "Yeraltı suyu tespiti ve kuyu açma hizmetleri",
    image: "/slider/makine.jpeg",
  },
  {
    id: 6,
    image: "/slider/su-drill.png",
  },
  {
    id: 7,
    image: "/slider/olcum.jpeg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-6xl mx-auto">
          {/* Slider container */}
          <div className="relative overflow-hidden rounded-lg bg-background border border-border">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[28rem] lg:h-[36rem] group cursor-pointer">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title || "Slide image"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover overlay with text at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-gray-200 text-lg">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background z-10"
              onClick={prevSlide}
              aria-label="Önceki slayt"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background z-10"
              onClick={nextSlide}
              aria-label="Sonraki slayt"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-orange-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slayt ${index + 1}'e git`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
