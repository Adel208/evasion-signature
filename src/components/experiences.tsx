"use client";

import { motion } from "framer-motion";
import { Ship, Trees, Crown, Footprints } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Safaris",
    desc: "Rencontres sauvages et paysages intenses",
    icon: Trees,
  },
  {
    title: "Croisières",
    desc: "Vivez la mer avec élégance et confort",
    icon: Ship,
  },
  {
    title: "Séjours luxe",
    desc: "Palaces, villas privées et services 5*",
    icon: Crown,
  },
  {
    title: "Aventures",
    desc: "Trekking, surf, plongée et adrénaline",
    icon: Footprints,
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            Expériences uniques
          </h2>
          <p className="mt-2 text-muted-foreground">
            Safaris, croisières, séjours luxe et aventures — vivez l&apos;exception.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{it.title}</h3>
                      <p className="text-sm text-muted-foreground">{it.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
