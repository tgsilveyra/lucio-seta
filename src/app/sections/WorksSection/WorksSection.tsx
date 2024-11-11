"use client";

import styles from "./worksSection.module.scss";
import { useEffect } from "react";
import gsap from "gsap";
import clsx from "clsx";
import Link from "next/link";
import { WorkListItem } from "@/app/components/workListItem/WorkListItem";

const works = [
  {
    year: "2024",
    title: "Unlocked",
    description: "Dance Solo",
    href: "/works/unlocked",
  },
  {
    year: "2024",
    title: "En Nombre del Viaje",
    description: "Short Film",
    href: "/works/en-nombre-del-viaje",
  },
  {
    year: "2023",
    title: "Sensing Volumes",
    description: "Dance & Sound Workshop and Performance",
    href: "/works/sensing-volumes",
  },
  {
    year: "2023",
    title: "Berlin Moves",
    description: "(BACH) Inventionen | 2023 - Die Kleine Philarmonie",
    href: "/works/berlin-moves",
  },
  {
    year: "2023",
    title: "CLEO",
    description: "Digital Dance Opera",
    href: "/works/cleo",
  },
  {
    year: "2022 - 2023",
    title: "STATE OF JOINT",
    description: "Duett Dance Performance",
    href: "/works/state-of-joint",
  },
  {
    year: "2022",
    title: "UPSTAIRS DOWNTOWN",
    description: "Dance Performance - Film - Live Music",
    href: "/works/upstairs-downtown",
  },
  {
    year: "2019",
    title: "SCHAF IM WOLFSPELZ",
    description: "Dance Performance",
    href: "/works/schaf-im-wolfspelz",
  },
];

export const WorksSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={clsx("grid-container", styles.worksSection)}>
      <h2 className={styles.title}>Works</h2>
      <ul>
        {works.map((work) => (
          <WorkListItem
            key={work.title}
            year={work.year}
            title={work.title}
            description={work.description}
            href={work.href}
          />
        ))}
      </ul>
    </section>
  );
};
