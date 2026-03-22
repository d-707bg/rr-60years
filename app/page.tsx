import { CountdownStrip } from "@/components/home/countdown-strip";
import { DirectorMessageSection } from "@/components/home/director-message-section";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { PartnersSection } from "@/components/home/partners-section";
import { ProgramAccordion } from "@/components/home/program-accordion";

export default function Home() {
  return (
	<main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
	  <HeroSection />
	  <DirectorMessageSection />
	  <IntroSection />
	  <CountdownStrip />
	  <ProgramAccordion />
	  <PartnersSection />
	  <GallerySection />
	</main>
  );
}