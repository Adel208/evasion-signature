"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const offers = [
  {
    title: "Bora Bora — Villa sur pilotis",
    desc: "7 nuits en demi-pension",
    price: "-25%",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Safari en Tanzanie",
    desc: "Circuit 10 jours / 9 nuits",
    price: "-15%",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Croisière Méditerranée",
    desc: "Cabine balcon — 8 jours",
    price: "-20%",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop",
  },
];

export function Offers() {
  return (
    <section id="offres" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
          Offres spéciales
        </h2>
        <p className="mt-2 text-muted-foreground">Ne manquez pas nos promotions exclusives.</p>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!overflow-visible"
      >
        {offers.map((o) => (
          <SwiperSlide key={o.title}>
            <div className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm">
              <Image
                src={o.image}
                alt={o.title}
                width={900}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-3 top-3">
                <Badge className="rounded-full bg-emerald-500 text-white hover:bg-emerald-500/90">{o.price}</Badge>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-lg font-medium">{o.title}</h3>
                <p className="text-sm opacity-90">{o.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
