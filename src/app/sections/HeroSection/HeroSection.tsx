"use client";

import styles from "./heroSection.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

export const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const secondaryTitleRef = useRef<HTMLHeadingElement>(null);
  const heroContent = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 0.5 },
      });

      timeline.to(titleRef.current, { opacity: 1, y: 0 }, "start");
      timeline.to(secondaryTitleRef.current, { opacity: 1, y: 0 }, "<+=0.2");

      timeline.to(
        imageWrapperRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.75,
        },
        "<+=0.8"
      );

      timeline.to(
        imageRef.current,
        {
          scale: 1,
          duration: 0.75,
        },
        "<"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent} ref={heroContent}>
        <div className="overflow-hidden">
          <h1 className={styles.mainTitle} ref={titleRef}>
            Lucio Seta
          </h1>
        </div>
        <div className="overflow-hidden">
          <h2
            className={clsx(styles.secondaryTitle, "heading-3")}
            ref={secondaryTitleRef}
          >
            Dancer | Teacher | Choreographer
          </h2>
        </div>
      </div>
      <div ref={imageWrapperRef} className={styles.heroVideoWrapper}>
        <img
          ref={imageRef}
          src={`${process.env.BASE_PATH}/assets/images/hero-01.png`}
          alt="Lucio Seta"
          className={styles.heroVideo}
        />
      </div>
    </section>
  );
};
