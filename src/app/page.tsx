import styles from "./page.module.scss";
import { HeroSection } from "@/app/sections/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
      </main>
    </div>
  );
}
