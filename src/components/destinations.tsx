"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    title: "Bali",
    desc: "Temples, rizières et plages",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Santorin",
    desc: "Couchers de soleil iconiques",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "New York",
    desc: "La ville qui ne dort jamais",
    image:
      "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Tokyo",
    desc: "Traditions et futurisme",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Marrakech",
    desc: "Couleurs et senteurs",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Bora Bora",
    desc: "Lagons d'azur et luxe",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
          Destinations phares
        </h2>
        <p className="mt-2 text-muted-foreground">
          Explorez nos lieux les plus demandés, soigneusement sélectionnés.
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm"
          >
            <Image
              src={it.image}
              alt={it.title}
              width={800}
              height={600}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">{it.title}</h3>
                <Badge className="rounded-full bg-white/90 text-black hover:bg-white">En savoir plus</Badge>
              </div>
              <p className="text-sm opacity-90">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
