"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Hero() {
  const videoId = "XhCkptbe7Z4"; // from provided URL

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
      playlist: videoId,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      fs: 0,
      iv_load_policy: 3,
      playsinline: 1,
    },
  };

  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        {/* Wrapper avec léger overscan pour supprimer les bandes noires */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%]">
            <YouTube
              videoId={videoId}
              iframeClassName="h-full w-full"
              className="h-full w-full"
              opts={opts}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight drop-shadow-lg"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Explorez le monde avec nous
        </h1>
        <p className="mt-4 max-w-2xl text-white/90 text-base sm:text-lg">
          Des voyages d&apos;exception, des expériences uniques et un service premium,
          conçus sur-mesure pour vous.
        </p>

        <div className="mt-8 w-full max-w-3xl rounded-2xl bg-white/90 p-3 backdrop-blur-md shadow-lg">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            <DestinationSelector />
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
              <Calendar className="h-4 w-4 text-black/60" />
              <Input type="date" className="w-full border-0 shadow-none focus-visible:ring-0" />
            </div>
            <TravelerSelector />
            <Button
              className="block sm:inline-flex rounded-xl bg-black text-white hover:bg-black/80
              col-span-1 sm:col-span-4 md:col-span-1 w-full sm:w-full md:w-auto min-w-0 max-w-full h-auto min-h-[44px]
              px-4 sm:px-6 py-3 text-sm sm:text-base font-medium leading-tight text-center
              whitespace-normal break-words hyphens-auto
              transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              size="lg"
            >
              Commencez votre voyage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationSelector() {
  const groups: { group: string; items: string[] }[] = [
    { group: "Europe", items: ["Paris", "Santorin", "Rome", "Barcelone", "Lisbonne"] },
    { group: "Asie", items: ["Bali", "Tokyo", "Kyoto", "Maldives", "Bangkok"] },
    { group: "Amériques", items: ["New York", "Miami", "Costa Rica", "Rio de Janeiro"] },
    { group: "Afrique", items: ["Marrakech", "Zanzibar", "Le Caire", "Le Cap"] },
    { group: "Océanie", items: ["Sydney", "Auckland", "Bora Bora"] },
  ];

  const all = groups.flatMap((g) => g.items.map((name) => ({ name, group: g.group })));
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [value, setValue] = React.useState<string | null>(null);

  const filtered = query.trim()
    ? all.filter((d) => d.name.toLowerCase().includes(query.trim().toLowerCase()))
    : all;

  const byGroup: Record<string, string[]> = filtered.reduce((acc, d) => {
    acc[d.group] = acc[d.group] || [];
    acc[d.group].push(d.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-black/5 text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          aria-label="Choisir une destination"
        >
          <MapPin className="h-4 w-4 text-black/60" />
          <span className="text-sm text-black/80 truncate">
            {value ?? "Destination"}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[22rem] max-w-[calc(100vw-2rem)] p-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 ring-1 ring-black/10">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une destination..."
              className="h-9 w-full border-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <div className="max-h-64 overflow-auto pr-1">
            {Object.keys(byGroup).length === 0 ? (
              <div className="px-1 py-4 text-sm text-black/60">Aucun résultat</div>
            ) : (
              Object.entries(byGroup).map(([group, items]) => (
                <div key={group} className="mb-3 last:mb-0">
                  <div className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-black/60">
                    {group}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {items.map((name) => (
                      <li key={name}>
                        <button
                          type="button"
                          onClick={() => {
                            setValue(name);
                            setOpen(false);
                          }}
                          className="w-full rounded-md px-2 py-2 text-left text-sm hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                        >
                          {name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function TravelerSelector() {
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [infants, setInfants] = React.useState(0);
  const total = adults + children + infants;

  const inc = (setter: React.Dispatch<React.SetStateAction<number>>) => () => setter((v) => v + 1);
  const dec = (setter: React.Dispatch<React.SetStateAction<number>>, min = 0) => () => setter((v) => Math.max(min, v - 1));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-black/5 text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          aria-label="Sélectionner le nombre de voyageurs"
        >
          <Users className="h-4 w-4 text-black/60" />
          <span className="text-sm text-black/80">
            {total > 0 ? `Voyageurs: ${total}` : "Voyageurs"}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 p-4">
        <div className="space-y-3">
          <Row label="Adultes" hint=">= 12 ans">
            <Counter value={adults} onDec={dec(setAdults, 1)} onInc={inc(setAdults)} />
          </Row>
          <Row label="Enfants" hint="2–11 ans">
            <Counter value={children} onDec={dec(setChildren)} onInc={inc(setChildren)} />
          </Row>
          <Row label="Bébés" hint="< 2 ans">
            <Counter value={infants} onDec={dec(setInfants)} onInc={inc(setInfants)} />
          </Row>
          <div className="flex items-center justify-between pt-1">
            <span className="text-sm text-black/70">Total: <strong className="text-black">{total}</strong></span>
            <Button size="sm" className="rounded-lg bg-black text-white hover:bg-black/80">OK</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <div className="text-sm font-medium text-black">{label}</div>
        {hint ? <div className="text-xs text-black/60">{hint}</div> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Counter({ value, onDec, onInc }: { value: number; onDec: () => void; onInc: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <Button type="button" variant="outline" size="sm" className="h-8 w-8 rounded-full" onClick={onDec} aria-label="Diminuer">−</Button>
      <div className="w-6 text-center text-sm font-medium tabular-nums">{value}</div>
      <Button type="button" variant="outline" size="sm" className="h-8 w-8 rounded-full" onClick={onInc} aria-label="Augmenter">+</Button>
    </div>
  );
}
