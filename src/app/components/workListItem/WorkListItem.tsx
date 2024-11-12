import Link from "next/link";
import styles from "./workListItem.module.scss";
import clsx from "clsx";

type WorkListItemProps = {
  href: string;
  year: string;
  title: string;
  description: string;
};

export const WorkListItem = ({
  href,
  year,
  title,
  description,
}: WorkListItemProps) => {
  return (
    <li className={styles.workListItem}>
      <Link href={href} className={styles.workListLink}>
        <p className={clsx("heading-4", styles.date)}>{year}</p>
        <div className={styles.workListContentWrapper}>
          <h4>{title}</h4>
          <p className="body">{description}</p>
        </div>
      </Link>
    </li>
  );
};
