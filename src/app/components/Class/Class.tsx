/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./Class.module.scss";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Video } from "../video/Video";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

interface ClassProps {
  className: string;
  instructor?: string;
  description: string[];
  // Image props
  imageSrc?: string;
  imageAlt?: string;
  // Video props
  videoSrcs?: string[];
  inverted?: boolean;
}

export const Class = ({
  className,
  instructor,
  description,
  imageSrc,
  imageAlt,
  videoSrcs,
  inverted = false,
}: ClassProps) => {
  const classInfoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const subtitle2Ref = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    const words = [
      subtitleRef.current,
      subtitle2Ref.current,
      descriptionRef.current,
    ];

    gsap.to(words, {
      x: 0,
      stagger: 0.08,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: classInfoRef.current,
        start: inverted ? "start-=100 bottom" : "start+=100 bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, [inverted]);

  // Determine what media to render - prioritize video over image if both are provided
  const hasVideo = videoSrcs && videoSrcs.length > 0;
  const hasImage = imageSrc && !hasVideo;

  return (
    <div
      className={clsx(styles.classInfo, {
        [styles.inverted]: inverted,
      })}
      ref={classInfoRef}
    >
      <div
        className={clsx(styles.classInfoLeft, {
          [styles.classInfoLeftInverted]: inverted,
        })}
      >
        <h3
          className={clsx(styles.subtitle, styles.initialState)}
          ref={subtitleRef}
        >
          &quot;{className}&quot;
        </h3>
        {instructor && (
          <h4
            className={clsx(styles.subtitle2, styles.initialState)}
            ref={subtitle2Ref}
          >
            {instructor}
          </h4>
        )}
        <div
          className={clsx(styles.description, styles.initialState)}
          ref={descriptionRef}
        >
          {description.map((paragraph, index) => (
            <p key={index} className={styles.description}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div
        className={clsx(styles.sticky, styles.classInfoRight, {
          [styles.classInfoRightInverted]: inverted,
        })}
      >
        {hasVideo && (
          <div className={styles.videoContainer}>
            {videoSrcs?.map((src, index) => (
              <Video key={index} src={src} autoPlay muted loop playsInline />
            ))}
          </div>
        )}
        {hasImage && <img src={imageSrc} alt={imageAlt} />}
      </div>
    </div>
  );
};
