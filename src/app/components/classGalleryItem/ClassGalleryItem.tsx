"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useRef, useState } from "react";
import styles from "./classGalleryItem.module.scss";
import { Video } from "../video/Video";
import { TeachingClass } from "@/app/types/teaching";

export const ClassGalleryItem = ({
  name,
  instructor,
  event,
  description,
  video,
  image,
}: TeachingClass) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // El preview corre muteado en loop; al tocar "Trailer" arranca de cero con
  // sonido y controles nativos.
  const playTrailer = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.currentTime = 0;
    videoElement.muted = false;
    videoElement.loop = false;
    videoElement.play();
    setIsPlaying(true);
  };

  const media = video ? (
    <>
      <Video
        ref={videoRef}
        className={clsx(styles.media, isPlaying && styles.mediaPlaying)}
        src={`${process.env.BASE_PATH}/${video}`}
        autoPlay
        muted
        loop
        playsInline
        controls={isPlaying}
      />
      {!isPlaying && (
        <button
          type="button"
          className={styles.trailerButton}
          onClick={playTrailer}
          aria-label={`Play ${name} trailer`}
        >
          <span className={styles.playIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 224.075 224.075"
            >
              <path
                d="M216.2 99.23 20.5 1.63C18.4.53 15.7.03 13.6.03 5.7.53 0 6.33 0 14.23v195.7c0 10.5 11 17.3 20.5 12.6l195.7-98.1c10.5-5.2 10.5-19.9 0-25.2zm-188.4 88.1V36.73l150.6 75-150.6 75.6z"
                stroke="currentColor"
                fill="currentColor"
              />
            </svg>
          </span>
          Trailer
        </button>
      )}
    </>
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
        {event && <p className={clsx("body", styles.event)}>{event}</p>}
      </div>
      <div className={styles.description}>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </li>
  );
};
