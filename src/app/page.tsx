import styles from "./page.module.scss";
import { WorksSection } from "@/app/sections/WorksSection/WorksSection";
import { HeroSection } from "@/app/sections/HeroSection/HeroSection";
import { BiographySection } from "@/app/sections/BiographySection/BiographySection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <WorksSection />
        <BiographySection />
      </main>
    </div>
  );
}
