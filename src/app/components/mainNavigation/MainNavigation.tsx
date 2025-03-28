import Link from "next/link";
import styles from "./mainNavigation.module.scss";

export const MainNavigation = () => {
  return (
    <nav className={`${styles.mainNavigation} container`}>
      <div className={styles.logo}>
        Lucio
        <br />
        Seta
      </div>
      <ul className={styles.list}>
        <li className="main-navigation__list-item">
          <Link href="/#works">Works</Link>
        </li>
        <li className="main-navigation__list-item">
          <Link href="/#other-works">Other Works/Participations</Link>
        </li>
        <li className="main-navigation__list-item">
          <Link href="/">Biography</Link>
        </li>
        <li className="main-navigation__list-item">
          <Link href="#">Teaching</Link>
        </li>
        <li className="main-navigation__list-item">
          <Link href="">Contact</Link>
        </li>
      </ul>
      <div className={styles["social-links"]}>Social Links</div>
    </nav>
  );
};
