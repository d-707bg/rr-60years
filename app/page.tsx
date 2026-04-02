import { CountdownStrip } from "@/components/home/countdown-strip";
import { DirectorMessageSection } from "@/components/home/director-message-section";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { PartnersSection } from "@/components/home/partners-section";
import { PodcastSection } from "@/components/home/podcast-section";
import { ProgramAccordion } from "@/components/home/program-accordion";
import PodkrepeteNi from "@/components/ui/podkrepete-ni";

export default function Home() {
	return (
		<main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
			<HeroSection/>
			<DirectorMessageSection/>
			<IntroSection/>
			<CountdownStrip/>
			<ProgramAccordion/>
			<PodkrepeteNi/>
			<PodcastSection/>
			<PartnersSection/>
			<GallerySection/>
		</main>
	);
}