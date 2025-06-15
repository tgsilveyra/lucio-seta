"use client";

import styles from "./heroSection.module.scss";
import { Video } from "@/app/components/video/Video";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

export const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const secondaryTitleRef = useRef<HTMLHeadingElement>(null);
  const heroContent = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 0.5 },
      });

      timeline.to(titleRef.current, { opacity: 1, y: 0 }, "start");
      timeline.to(secondaryTitleRef.current, { opacity: 1, y: 0 }, "<+=0.2");

      timeline.to(
        videoWrapperRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.75,
        },
        "<+=0.8"
      );

      timeline.to(
        videoRef.current,
        {
          scale: 1,
          duration: 0.75,
        },
        "<"
      );

      timeline.then(() => {
        videoRef.current?.play();
      });
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
      <div ref={videoWrapperRef} className={styles.heroVideoWrapper}>
        <Video
          src={`${process.env.BASE_PATH}/videoplayback.mp4`}
          className={styles.heroVideo}
          ref={videoRef}
        />
      </div>
    </section>
  );
};
