"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { AnimateNoise } from "./StaticNoise.animations";
import styles from "./StaticNoise.module.scss";

export function StaticNoise(): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = AnimateNoise(ref);

    return (): void => {
      if (animation) {
        animation.cancel();
      }
    };
  }, []);

  return <div ref={ref} className={styles.staticNoise} aria-hidden="true" />;
}
