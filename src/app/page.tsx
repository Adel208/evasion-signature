import { Hero } from "@/components/hero";
import { Destinations } from "@/components/destinations";
import { Experiences } from "@/components/experiences";
import { Offers } from "@/components/offers";
import { Testimonials } from "@/components/testimonials";
import { Blog } from "@/components/blog";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Destinations />
      <Experiences />
      <Offers />
      <Testimonials />
      <Blog />

      {/** Section CTA finale supprimée selon la demande **/}
    </main>
  );
}
