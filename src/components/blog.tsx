"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    title: "Bali en 7 jours : itinéraire d'exception",
    excerpt:
      "Temples, rizières et plages secrètes : découvrez notre itinéraire premium pour un séjour inoubliable.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Safari luxe en Tanzanie : nos conseils",
    excerpt:
      "Parcs à privilégier, meilleures saisons et lodges 5* : préparez votre safari avec nos experts.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Croisière en Méditerranée : escales incontournables",
    excerpt:
      "Découvrez nos escales favorites et nos astuces pour une croisière élégante et sereine.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop",
    href: "#",
  },
];

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
          Inspirations de voyage
        </h2>
        <p className="mt-2 text-muted-foreground">
          Idées, conseils et récits pour inspirer vos prochaines aventures.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {posts.map((p) => (
          <Card key={p.title} className="overflow-hidden rounded-2xl">
            <div className="relative h-48 w-full">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link href={p.href} className="mt-3 inline-block text-sm font-medium hover:underline">
                Lire plus →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
