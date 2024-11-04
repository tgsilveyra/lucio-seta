"use client";
import { forwardRef } from "react";
import styles from "./video.module.scss";
import clsx from "clsx";

type VideoProps = {
  src: string;
} & React.VideoHTMLAttributes<HTMLVideoElement>;

const Video = forwardRef<HTMLVideoElement, VideoProps>(function Video(
  { src, ...props },
  ref
) {
  return (
    <video
      ref={ref}
      className={clsx(props.className, styles.video)}
      src={src}
      muted
      loop
    ></video>
  );
});

export { Video };
