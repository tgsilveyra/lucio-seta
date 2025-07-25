/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import styles from "./page.module.scss";

import { createMarkup } from "@/app/utils/createMarkup";
import { Work, WorkCredit, WorkMainImage } from "@/app/types/work";
import { getData } from "@/app/utils/getData";
import { VideoPerformanceTemplate } from "@/app/components/videoPerformanceTemplate/VideoPerformanceTemplate";

export async function generateStaticParams() {
  const data = await getData().then((res) => res.json());

  const allWorks = [
    ...data.works.mainWorks,
    ...data.works.otherWorks,
    ...data.works.extraWorks,
  ];

  return allWorks.map((work: Work) => ({
    slug: work.slug,
  }));
}

async function getPageData(slug: string) {
  const data = await getData().then((res) => res.json());

  const allWorks = [
    ...data.works.mainWorks,
    ...data.works.otherWorks,
    ...data.works.extraWorks,
  ];

  return allWorks.find((work: Work) => work.slug === slug);
}

export default async function WorkPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPageData(params.slug);
  const {
    title,
    description,
    subtitle,
    premiered,
    credits,
    mainImage,
    images,
    trailer,
    trailerThumbnail,
    template,
    video,
  } = data;

  return (
    <div className={styles.page}>
      <main
        className={clsx(
          "grid-container",
          `${
            template === "video-performance" && styles.videoPerformanceTemplate
          }`,
          styles.main
        )}
      >
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          {trailer && (
            <a href={trailer} target="_blank" className={styles.trailerWrapper}>
              <span className={styles.playIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224.075 224.075"
                >
                  <path
                    d="M216.2 99.23 20.5 1.63C18.4.53 15.7.03 13.6.03 5.7.53 0 6.33 0 14.23v195.7c0 10.5 11 17.3 20.5 12.6l195.7-98.1c10.5-5.2 10.5-19.9 0-25.2zm-188.4 88.1V36.73l150.6 75-150.6 75.6z"
                    stroke="currentColor"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {trailerThumbnail && (
                <img
                  className={styles.trailerThumbnail}
                  src={`${process.env.BASE_PATH}/${trailerThumbnail}`}
                  alt="video trailer thumbnail"
                />
              )}
              {/* <p className={styles.trailerCopy}>{watchLabel}</p> */}
            </a>
          )}
          <div className={styles.workInfo}>
            {credits.length > 0 && (
              <ul className={styles.worksList}>
                {credits.map((credit: WorkCredit, index: number) => (
                  <li key={`${credit.name}-${index}`}>
                    <p>
                      {credit.role}: {credit.name}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {premiered && <p className={styles.premiered}>{premiered}</p>}
          </div>
        </div>

        {template === "video-performance" && (
          <VideoPerformanceTemplate
            video={video}
            className={styles.videoPerformanceComponent}
          />
        )}

        {description && (
          <div className={styles.workContent}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={createMarkup(description)}
            ></div>
            <div className={styles.imageWrapper}>
              {mainImage && (
                <img
                  className={styles.mainImage}
                  src={`${process.env.BASE_PATH}/${mainImage.url}`}
                  alt={mainImage.alt}
                />
              )}
            </div>
          </div>
        )}

        {images && images.length > 0 && (
          <ul className={styles.imagesList}>
            {images &&
              images.length > 0 &&
              images.map((image: WorkMainImage, index: number) => (
                <li
                  key={`${image.url}-${index}`}
                  className={styles.imageListItem}
                >
                  <img
                    className={styles.image}
                    src={`${process.env.BASE_PATH}/${image.url}`}
                    alt={image.alt}
                  />
                </li>
              ))}
          </ul>
        )}
      </main>
    </div>
  );
}
