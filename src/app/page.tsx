import styles from "./page.module.scss";
import { WorksSection } from "@/app/sections/WorksSection/WorksSection";
import { HeroSection } from "@/app/sections/HeroSection/HeroSection";
import { AboutSection } from "@/app/sections/AboutSection/AboutSection";
import { ContactSection } from "@/app/sections/ContactSection/ContactSection";
import { Ticker } from "@/app/components/Ticker/Ticker";
import { TeachingSection } from "@/app/sections/TeachingSection/TeachingSection";
import GallerySection from "@/app/sections/GallerySection/GallerySection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <GallerySection />
        <Ticker />
        <WorksSection />
        <AboutSection />
        <TeachingSection />
        <ContactSection />
      </main>
    </div>
  );
}
