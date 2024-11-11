"use client";

import styles from "./heroSection.module.scss";
import { Video } from "@/app/components/video/Video";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const secondaryTitleRef = useRef<HTMLHeadingElement>(null);
  const heroContent = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

      timeline.to(titleRef.current, { opacity: 1, y: 0 }, "start");
      timeline.to(secondaryTitleRef.current, { opacity: 1, y: 0 }, "<+=0.2");
      timeline.to(videoRef.current, { opacity: 1, delay: 1, duration: 1 });
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
          <h2 className={styles.secondaryTitle} ref={secondaryTitleRef}>
            Dancer | Teacher | Choreographer
          </h2>
        </div>
        <h3 className={styles.thirdTitle}>
          🚧&nbsp;&nbsp;&nbsp;Page Under Construction&nbsp;&nbsp;🚧
        </h3>
      </div>
      <Video
        src={`${process.env.BASE_PATH}/hero-video.mp4`}
        className={styles.heroVideo}
        ref={videoRef}
      />
    </section>
  );
};
