import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

export function StaticSuccessStories() {
  return (
    <section className="py-24 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter">
          Sukcesy naszych klientów
        </h2>
      </div>

      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {/* SLIDE 1: Dedicante */}
            <CarouselItem className="pl-0 basis-full">
              <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                <div className="lg:w-1/2 relative bg-[#916AFF]/10 flex items-center justify-center p-8 md:p-16">
                  <div className="absolute inset-0 bg-linear-to-br from-[#916AFF]/20 via-transparent to-transparent" />
                  <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                    <Image
                      src="/assets/seo/woocommerce/dedicante.webp"
                      alt="Case Study"
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(145,106,255,0.3)] scale-110"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                  <div className="w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#916AFF] block font-bold">WSPARCIE SPRZEDAŻY</span>
                      <div className="relative w-10 h-10">
                        <Image src="/assets/seo/woocommerce/dedicante-badge.svg" alt="Badge" fill className="object-contain" />
                      </div>
                    </div>

                    <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Dedykowanie</h3>
                    <div className="h-1 w-20 bg-[#916AFF] mb-12 mx-auto lg:mx-0" />

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                          Tworzymy sklepy, które nie tylko pięknie wyglądają, ale przede wszystkim skutecznie sprzedają i budują lojalność klientów.
                        </p>
                        <div className="flex flex-col gap-2">
                          <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                          <div className="text-7xl md:text-9xl font-bold text-[#916AFF] tracking-tighter leading-none">428</div>
                          <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">ROAS</div>
                        </div>
                      </div>
                      <div className="relative w-full aspect-square flex items-center justify-center">
                        <Image
                          src="/assets/seo/woocommerce/dedicante-chart.svg"
                          alt="Chart"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* SLIDE 2: Golden Gift */}
            <CarouselItem className="pl-0 basis-full">
              <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                <div className="lg:w-1/2 relative bg-[#C7A566]/10 flex items-center justify-center p-8 md:p-16">
                  <div className="absolute inset-0 bg-linear-to-br from-[#C7A566]/20 via-transparent to-transparent" />
                  <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                    <Image
                      src="/assets/seo/woocommerce/goldengift.webp"
                      alt="Case Study"
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(199,165,102,0.3)] scale-110"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                  <div className="w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#C7A566] block font-bold">WSPARCIE SPRZEDAŻY</span>
                      <div className="relative w-10 h-10">
                        <Image src="/goldengift-badge.svg" alt="Badge" fill className="object-contain" />
                      </div>
                    </div>

                    <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Efektywnie</h3>
                    <div className="h-1 w-20 bg-[#C7A566] mb-12" />

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                          Nowoczesny design i optymalizacja ścieżki użytkownika przekładają się na realny wzrost konwersji i zainteresowania ofertą.
                        </p>
                        <div className="flex flex-col gap-2">
                          <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                          <div className="text-7xl md:text-9xl font-bold text-[#C7A566] tracking-tighter leading-none">670%</div>
                          <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Wzrostu konwersji</div>
                        </div>
                      </div>
                      <div className="relative w-full aspect-square flex items-center justify-center">
                        <Image
                          src="/goldengift-chart.svg"
                          alt="Chart"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* SLIDE 3: Ułańska Zagroda */}
            <CarouselItem className="pl-0 basis-full">
              <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                <div className="lg:w-1/2 relative bg-[#728B55]/10 flex items-center justify-center p-8 md:p-16">
                  <div className="absolute inset-0 bg-linear-to-br from-[#728B55]/20 via-transparent to-transparent" />
                  <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                    <Image
                      src="/assets/seo/woocommerce/ulanskazagroda.webp"
                      alt="Case Study"
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(114,139,85,0.3)] scale-110"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                  <div className="w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#728B55] block font-bold">WIĘCEJ GOŚCI</span>
                      <div className="relative w-10 h-10">
                        <Image src="/assets/seo/woocommerce/ulanskazagroda-badge.svg" alt="Badge" fill className="object-contain" />
                      </div>
                    </div>

                    <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Skutecznie</h3>
                    <div className="h-1 w-20 bg-[#728B55] mb-12 mx-auto lg:mx-0" />

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                          Budujemy strony, które pracują na Twój sukces 24/7, dostarczając nowych klientów i wzmacniając wizerunek Twojej restauracji.
                        </p>
                        <div className="flex flex-col gap-2">
                          <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                          <div className="text-7xl md:text-9xl font-bold text-[#728B55] tracking-tighter leading-none">1574%</div>
                          <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Więcej zapytań</div>
                        </div>
                      </div>
                      <div className="relative w-full aspect-square flex items-center justify-center">
                        <Image
                          src="/assets/seo/woocommerce/ulanskazagroda-chart.svg"
                          alt="Chart"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="absolute bottom-12 right-4 md:right-12 z-20 flex gap-4">
            <CarouselPrevious className="static translate-y-0 size-14 border border-white/20 bg-neutral-900/50 text-white hover:bg-[#916AFF] hover:border-[#916AFF] transition-all backdrop-blur-md" />
            <CarouselNext className="static translate-y-0 size-14 border border-white/20 bg-neutral-900/50 text-white hover:bg-[#916AFF] hover:border-[#916AFF] transition-all backdrop-blur-md" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
