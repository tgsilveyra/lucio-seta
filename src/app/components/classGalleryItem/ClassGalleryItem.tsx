/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import styles from "./classGalleryItem.module.scss";
import { Video } from "../video/Video";
import { TeachingClass } from "@/app/types/teaching";

export const ClassGalleryItem = ({
  name,
  instructor,
  description,
  video,
  image,
}: TeachingClass) => {
  const media = video ? (
    <Video
      className={styles.media}
      src={`${process.env.BASE_PATH}/${video}`}
      autoPlay
      muted
      loop
      playsInline
    />
  ) : image ? (
    <img
      className={styles.media}
      src={`${process.env.BASE_PATH}/${image.url}`}
      alt={image.alt}
      loading="lazy"
    />
  ) : null;

  return (
    <li className={styles.classGalleryItem}>
      {media && <div className={styles.mediaWrapper}>{media}</div>}
      <div className={styles.classGalleryHeader}>
        <h3 className={styles.title}>&quot;{name}&quot;</h3>
        {instructor && (
          <p className={clsx("body", styles.instructor)}>{instructor}</p>
        )}
      </div>
      <div className={styles.description}>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </li>
  );
};
