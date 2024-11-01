import styles from "./page.module.css";
import { HeroSection } from "@/app/sections/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
