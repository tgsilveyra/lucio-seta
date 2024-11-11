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
          <a href="#">Works</a>
        </li>
        <li className="main-navigation__list-item">
          <a href="#">Biography</a>
        </li>
        <li className="main-navigation__list-item">
          <a href="#">Teaching</a>
        </li>
        <li className="main-navigation__list-item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className={styles["social-links"]}>Social Links</div>
    </nav>
  );
};
