"use client";
import Link from "next/link";
import styles from "./MenuDesktop.module.scss";

export const MenuDesktop = () => {
  return (
    <>
      <nav className={styles.navDesktop}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link className={styles.listItem} href="/#works">
              Works
            </Link>
            <ul className={styles.secondaryNavList}>
              <li className={styles.secondaryNavListItem}>
                <Link className={styles.listItem} href="/#main-works">
                  Main Works
                </Link>
              </li>
              <li
                className={`${styles.secondaryNavListItem} ${styles.listItem}`}
              >
                <Link className={styles.listItem} href="/#other-works">
                  Other Works / Participation&apos;s
                </Link>
              </li>
              <li
                className={`${styles.secondaryNavListItem} ${styles.listItem}`}
              >
                <Link className={styles.listItem} href="/#extras">
                  Extras / Video Footage
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.listItem} href="/#biography">
              Biography
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.listItem} href="/#teaching">
              Teaching
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.listItem} href="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
