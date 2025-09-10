"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, Search, Calendar, Users } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const megaItems = {
  Destinations: [
    {
      title: "Europe",
      href: "#destinations",
      image:
        "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop",
      desc: "Paris, Rome, Santorin, et plus",
    },
    {
      title: "Asie",
      href: "#destinations",
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1200&auto=format&fit=crop",
      desc: "Bali, Tokyo, Kyoto, Maldives",
    },
    {
      title: "Amériques",
      href: "#destinations",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
      desc: "New York, Miami, Costa Rica",
    },
    {
      title: "Afrique",
      href: "#destinations",
      image:
        "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop",
      desc: "Marrakech, Safari, Zanzibar",
    },
  ],
  Expériences: [
    {
      title: "Safaris",
      href: "#experiences",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      desc: "Rencontres sauvages inoubliables",
    },
    {
      title: "Croisières",
      href: "#experiences",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
      desc: "Voyages en mer d'exception",
    },
    {
      title: "Séjours luxe",
      href: "#experiences",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      desc: "Hôtels 5* et villas privées",
    },
    {
      title: "Aventures",
      href: "#experiences",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
      desc: "Trekking, surf, plongée",
    },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-black/10">
                <Image src="/next.svg" alt="logo" fill className="object-contain p-1" />
              </div>
              <span className="font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Évasion Signature
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(megaItems).map(([label, items]) => (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuTrigger className="bg-transparent">
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-[80vw] max-w-4xl">
                        {(items as any[]).map((it) => (
                          <NavigationMenuLink asChild key={it.title} className="block">
                            <Link href={it.href} className="block">
                              <div className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm">
                                <Image
                                  src={it.image}
                                  alt={it.title}
                                  width={400}
                                  height={260}
                                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 p-3 text-white">
                                  <div className="font-medium">{it.title}</div>
                                  <p className="text-xs opacity-90">{it.desc}</p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="px-3 py-2 rounded-md hover:bg-black/5">
                    <Link href="#offres">Offres</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="px-3 py-2 rounded-md hover:bg-black/5">
                    <Link href="#blog">Blog</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="px-3 py-2 rounded-md hover:bg-black/5">
                    <Link href="#contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="lg"
              className="hidden md:inline-flex rounded-xl bg-black text-white hover:bg-black/80
              min-w-0 max-w-full h-auto min-h-[40px] px-4 text-sm font-medium leading-tight text-center
              whitespace-normal break-words transition-colors"
            >
              Réserver
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 grid gap-3">
                  {[
                    ["Destinations", "#destinations"],
                    ["Expériences", "#experiences"],
                    ["Offres", "#offres"],
                    ["Blog", "#blog"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} className="rounded-md px-3 py-2 hover:bg-black/5">
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
