"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./MenuMobile.module.scss";

export const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.menuMobile}>
      <button onClick={onMenuOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </button>
      <nav
        id="menuMobile"
        className={`
            ${styles.nav}
            ${isMenuOpen ? styles.navOpen : styles.navClose}`}
        {...(!isMenuOpen && {
          tabIndex: -1,
          style: { visibility: "hidden" },
        })}
      >
        <ul
          className={`${styles.navList} ${styles.MenuMobileNavList}`}
          role="menu"
        >
          <li className="main-navigation__list-item">
            <Link
              href="/#works"
              onClick={onLinkClick}
              className={styles.listItem}
            >
              Main Works
            </Link>
          </li>
          <li className="main-navigation__list-item">
            <Link
              href="/#other-works"
              onClick={onLinkClick}
              className={styles.listItem}
            >
              Other Works/Participation&apos;s
            </Link>
          </li>
          <li className="main-navigation__list-item">
            <Link
              href="/#biography"
              onClick={onLinkClick}
              className={styles.listItem}
            >
              Biography
            </Link>
          </li>
          <li className="main-navigation__list-item">
            <Link href="#" onClick={onLinkClick} className={styles.listItem}>
              Teaching
            </Link>
          </li>
          <li className="main-navigation__list-item">
            <Link href="" onClick={onLinkClick} className={styles.listItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
