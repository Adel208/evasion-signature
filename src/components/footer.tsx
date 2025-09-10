"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15 bg-white/5">
                <Image src="/next.svg" alt="logo" fill className="object-contain p-1 invert" />
              </div>
              <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Évasion Signature
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              Voyages d&apos;exception, expériences uniques et service premium sur-mesure.
            </p>
            <div className="mt-5 flex items-center gap-3 text-white/80">
              <Link aria-label="Instagram" href="#" className="rounded-full p-2.5 hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link aria-label="Facebook" href="#" className="rounded-full p-2.5 hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link aria-label="YouTube" href="#" className="rounded-full p-2.5 hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Liens rapides" className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <div className="text-sm font-semibold text-white/90">Découvrir</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li><Link href="#destinations" className="hover:text-white">Destinations</Link></li>
                <li><Link href="#experiences" className="hover:text-white">Expériences</Link></li>
                <li><Link href="#offres" className="hover:text-white">Offres</Link></li>
                <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90">Contact</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <span>+33 1 23 45 67 89</span></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <span>contact@evasion-signature.com</span></li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> <span>Paris, France</span></li>
              </ul>
            </div>
          </nav>

          {/* Newsletter */}
          <div>
            <div className="text-sm font-semibold text-white/90">Newsletter</div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">Recevez nos inspirations et offres exclusives.</p>
            <form className="mt-5 flex gap-3">
              <Input
                type="email"
                placeholder="Votre email"
                className="h-12 bg-white/10 text-white placeholder-white/60 border-white/20 focus-visible:ring-white/50"
              />
              <Button
                className="rounded-xl bg-white text-black hover:bg-white/90 h-12 px-5 text-sm font-medium leading-tight"
                type="submit"
              >
                S&apos;abonner
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-16 lg:h-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} Évasion Signature. Tous droits réservés.
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-white">Mentions légales</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white">Politique de confidentialité</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
