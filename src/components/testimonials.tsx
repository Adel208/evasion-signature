"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Camille D.",
    text:
      "Un voyage parfaitement organisé, des expériences uniques et une équipe aux petits soins.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    role: "Séjour luxe — Maldives",
    stars: 5,
  },
  {
    name: "Yassine M.",
    text:
      "Safaris incroyables, guides passionnés et logistique impeccable. Inoubliable !",
    avatar: "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?q=80&w=256&auto=format&fit=crop",
    role: "Safari — Tanzanie",
    stars: 5,
  },
  {
    name: "Sophie L.",
    text: "Croisière de rêve, services 5* et escales magiques. Je recommande à 100%.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&auto=format&fit=crop",
    role: "Croisière — Méditerranée",
    stars: 5,
  },
];

export function Testimonials() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="temoignages" className="relative overflow-hidden bg-secondary/50">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            Témoignages clients
          </h2>
          <p className="mt-2 text-muted-foreground">
            Ils ont voyagé avec nous. Voici leurs avis.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-foreground/90">“{t.text}”</div>
              <div className="mt-3 text-amber-500">{"★".repeat(t.stars)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
