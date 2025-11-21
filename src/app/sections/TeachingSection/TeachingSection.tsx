/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./TeachingSection.module.scss";
import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Class } from "../../components/Class";

gsap.registerPlugin(ScrollTrigger);

export const TeachingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);

  return (
    <section
      id="teaching"
      className={clsx("grid-container", styles.teachingSection)}
      ref={sectionRef}
    >
      <h2 className={clsx(styles.title)} ref={titleRef}>
        TEACHING
      </h2>
      <div className={styles.classDescription}>
        <h4>
          Currently teaching &quot;Floorwork and Contemproary Dance
          Acrobatic&quot; at Ada Studios (Studio 7){" "}
        </h4>
        <h5>Every Wednesday (20:00hs - 21:30hs) Begginer Level</h5>
        <p>
          Next Workshop: Floorwork Lab on the 24th of November at Spreefeld
          (Wilhelmine-Gemberg-Weg 12, 14 und 10, 10179 Berlin) Time: 10:00hs -
          14:00hs Price: Sliding Scale between 20-30 €
        </p>
      </div>
      <Class
        className="FLOORWORK DYNAMICS"
        instructor="with Sofia Seta"
        description={[
          "The class consists in a dynamic exploration of floorwork techniques, blending elements from Flying Low, Capoeira, and Breaking. This class delves into diverse movements to seamlessly transition in and out of the ground, emphasizing body care and proper force application. Exploring various body relationships such as head-to-pelvis and heel-to-sitting bones, we investigate the role of the pelvis and weight distribution. Acrobatic elements will be explored not only for their form but also for the dynamics of execution, suspension, and landing, opening up new spatial possibilities.",
          "This workshop is open to professional dancers interested in expanding their floorwork techniques, as well as individuals with previous experience in any movement discipline.",
        ]}
        videoSrcs={[
          `${process.env.BASE_PATH}/teaching-floorwork-dynamics-01.mp4`,
          `${process.env.BASE_PATH}/teaching-floorwork-dynamics-02.mp4`,
          `${process.env.BASE_PATH}/teaching-floorwork-dynamics-03.mp4`,
        ]}
        imageAlt="image teaching lessons"
      />
      <Class
        className="FLOORWORK LAB"
        description={[
          "This a class with a format of “laboratory”. This is in order for the participants to create a personal research with the guidelines, and then we can listen and share the experience with the information given (opening of new spaces, movement dynamics, new pattern, etc, internal sensations in the body, etc).",
          "We investigate together, supports and transitions, inversions, elasticity and flexibility, lateral arches, footwork, and floorwork in a moderate way with tasks that will be under a frameworkof improvisation. The movement practice is inspired by Klein Technique, Breaking Floor Rock and “The Curve” (Lucia Toker's method).",
        ]}
        imageAlt="image teaching lessons"
        // inverted
      />
      <Class
        className="EXPERIMENTAL DANCE LAB"
        instructor="with Naja Parejas"
        description={[
          "The class consists of an inclusive and playful space where young people aged 13-18 can explore the joy of movement together. Participants from all backgrounds, regardless of movement experience, are welcome to join.",
          "Over four engaging Sunday sessions, we will dive into a variety of movement games, techniques, and collaborative tasks. From elements of Contemporary Dance, Urban Dance and Physical conditioning, we will discover the physical possibilities of our bodies, blending guided training with individual creativity. Each session will challenge participants through improvisation tasks and choreography, fostering a supportive environment for self-expression and teamwork.",
          "Join us to connect, create, and celebrate movement in a fun and collaborative atmosphere!",
        ]}
        videoSrcs={[
          `${process.env.BASE_PATH}/teaching-experimental-dance-lab-3.mp4`,
          `${process.env.BASE_PATH}/teaching-experimental-dance-lab.mp4`,
          `${process.env.BASE_PATH}/teaching-experimental-dance-lab-2.mp4`,
        ]}
        imageAlt="image teaching lessons"
        // inverted
      />
    </section>
  );
};
