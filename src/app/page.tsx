import styles from "./page.module.scss";
import { WorksSection } from "@/app/sections/WorksSection/WorksSection";
import { HeroSection } from "@/app/sections/HeroSection/HeroSection";
import { BiographySection } from "@/app/sections/BiographySection/BiographySection";
import { ContactSection } from "@/app/sections/ContactSection/ContactSection";
import { Ticker } from "@/app/components/Ticker/Ticker";
import { TeachingSection } from "@/app/sections/TeachingSection/TeachingSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <Ticker />
        <WorksSection />
        <BiographySection />
        <TeachingSection />
        <ContactSection />
      </main>
    </div>
  );
}
