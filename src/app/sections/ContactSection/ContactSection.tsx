"use client";

import { useGSAP } from "@gsap/react";
import styles from "./ContactSection.module.scss";
import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bookingRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const words = [
        titleRef.current,
        subtitleRef.current,
        bookingRef.current,
        contactRef.current,
      ];

      gsap.to(words, {
        x: 0,
        stagger: 0.12,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "start bottom-=100",
          end: "bottom bottom",
          // markers: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      className={clsx("grid-container", styles.contactSection)}
      ref={sectionRef}
    >
      <h2 className={clsx(styles.title, styles.initialState)} ref={titleRef}>
        CONTACT
      </h2>
      <h4
        ref={subtitleRef}
        className={clsx(styles.subtitle, styles.initialState)}
      >
        PRIVATE LESSONS | WORKSHOPS | PERFORMANCE & COLLABORATIONS.
      </h4>
      <a
        className={clsx(styles.phone, styles.initialState)}
        href="tel:+49015563348065"
        ref={bookingRef}
      >
        Booking <span className={styles.links}>+49015563348065</span>
      </a>
      <p className={clsx(styles.text, styles.initialState)} ref={contactRef}>
        or Write me a message directly:{" "}
        <a href="mailto:seta.lucio@gmail.com" className={styles.links}>
          seta.lucio@gmail.com
        </a>
      </p>
    </section>
  );
};
