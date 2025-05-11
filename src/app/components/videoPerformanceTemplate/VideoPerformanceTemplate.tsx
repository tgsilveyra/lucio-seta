import styles from "./VideoPerformanceTemplate.module.scss";
import clsx from "clsx";

type VideoPerformanceTemplateProps = {
  video: {
    description: string;
    url: string;
  };
  className?: string;
};

export const VideoPerformanceTemplate = ({
  video,
  className,
}: VideoPerformanceTemplateProps) => {
  return (
    <div className={clsx(styles.videoPerformanceTemplate, className)}>
      <iframe
        width="560"
        height="315"
        src={video.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={styles.video}
      ></iframe>
    </div>
  );
};
