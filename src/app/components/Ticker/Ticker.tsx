"use client";

import gsap from "gsap";
import { useEffect, useRef, useState, type ReactElement } from "react";
import styles from "./Ticker.module.scss";
import clsx from "clsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Ticker(): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [contentBlocksAmount, setContentBlocksAmount] = useState<number>(1);

  const getBlocksAmount = (): number => {
    const currentBlockWidth = blockRef.current?.offsetWidth || 0;
    const width = containerRef.current?.clientWidth || 0;
    const blocks = Math.ceil((width * 2) / currentBlockWidth) + 1;

    return blocks;
  };

  const createScrollTrigger = (): gsap.MatchMedia | undefined => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;

    if (!wrapper || !container) {
      return;
    }

    const distance = wrapper.clientWidth - document.body.clientWidth;
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(max-width: 767px)", () => {
      const mobileMultiplier = 0.6;
      const scrollDistance = distance * mobileMultiplier;

      gsap.to(wrapper, {
        x: -distance,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container,
          end: `+=${scrollDistance}`,
          scrub: 1,
        },
      });
    });

    matchMedia.add("(min-width: 768px)", () => {
      gsap.to(wrapper, {
        x: -distance,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container,
          end: `+=${distance}`,
          scrub: 1,
        },
      });
    });

    return matchMedia;
  };

  useEffect(() => {
    if (!containerRef.current || !blockRef.current) {
      return;
    }

    const handleResize = (): void => {
      setContentBlocksAmount(getBlocksAmount());
    };

    window.addEventListener("resize", handleResize);

    setContentBlocksAmount(getBlocksAmount());

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollTrigger = createScrollTrigger();

    return (): void => {
      scrollTrigger?.revert();
    };
  }, [contentBlocksAmount]);

  const renderContentBlock = (index: number): ReactElement => (
    <div
      key={index}
      aria-hidden={index === 0 ? "false" : "true"}
      className={styles.contentBlock}
      ref={index === 0 ? blockRef : undefined}
    >
      <h2 className={clsx(styles.text, "heading-3")}>
        <span>Dancer</span>
        <span>|</span>
        <span>Teacher</span>
        <span>|</span>
        <span>Choreographer</span>
        <span>|</span>
      </h2>
    </div>
  );

  return (
    <section className={clsx([styles.ticker])}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.wrapper} ref={wrapperRef}>
          {Array.from({ length: contentBlocksAmount }).map((_, index) =>
            renderContentBlock(index)
          )}
        </div>
      </div>
    </section>
  );
}
