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
        <li className="main-navigation__list-item">Works</li>
        <li className="main-navigation__list-item">Biography</li>
        <li className="main-navigation__list-item">Teching</li>
        <li className="main-navigation__list-item">Contact</li>
      </ul>
      <div className={styles["social-links"]}>Social Links</div>
    </nav>
  );
};
