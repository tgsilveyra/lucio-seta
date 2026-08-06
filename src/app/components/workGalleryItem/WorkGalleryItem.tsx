/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import clsx from "clsx";
import styles from "./workGalleryItem.module.scss";
import { WorkMainImage } from "@/app/types/work";

type WorkGalleryItemProps = {
  href: string;
  year: string;
  title: string;
  image?: WorkMainImage;
};

export const WorkGalleryItem = ({
  href,
  year,
  title,
  image,
}: WorkGalleryItemProps) => {
  return (
    <li className={styles.workGalleryItem}>
      <Link href={href} className={styles.workGalleryLink}>
        <div className={styles.workGalleryHeader}>
          <h4 className={styles.title}>{title}</h4>
          <p className={clsx("body", styles.year)}>{year}</p>
        </div>
        <div className={styles.imageWrapper}>
          {image && (
            <img
              className={styles.image}
              src={`${process.env.BASE_PATH}/${image.url}`}
              alt={image.alt}
              loading="lazy"
            />
          )}
        </div>
      </Link>
    </li>
  );
};
