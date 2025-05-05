"use client";

import styles from "./mainNavigation.module.scss";
import { MenuMobile } from "@/app/components/mainNavigation/MenuMobile";
import { MenuDesktop } from "@/app/components/mainNavigation/MenuDesktop";

export const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <h4>Lucio Seta</h4>
      </a>
      <MenuMobile />
      <MenuDesktop />
    </header>
  );
};
