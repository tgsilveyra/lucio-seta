import styles from "./worksSection.module.scss";
import clsx from "clsx";
import { WorkListItemDynamic } from "@/app/components/workListItem/WorkListItemDynamic";
import { Work } from "@/app/types/work";
import { getData } from "@/app/utils/getData";

async function getPageData() {
  const data = await getData().then((res) => res.json());

  return data.works;
}

export const WorksSection = async () => {
  const data = await getPageData();

  return (
    <section className={clsx()}>
      <div
        id="main-works"
        className={clsx(
          "grid-container",
          styles.worksSection,
          styles.mainWorks
        )}
      >
        <div>
          <h2 className={styles.title}>Main Works</h2>
          <ul className={styles.worksList}>
            {data.mainWorks.map((work: Work) => (
              <WorkListItemDynamic
                key={work.title}
                year={work.year}
                title={work.title}
                description={work.shortDescription}
                href={`/works/${work.slug}`}
              />
            ))}
          </ul>
        </div>
      </div>
      <div
        id="other-works"
        className={clsx(
          "grid-container",
          styles.worksSection,
          styles.otherWorks
        )}
      >
        <div>
          <h2 className={styles.title}>Other Works / Participation&apos;s</h2>
          <ul className={styles.worksList}>
            {data.otherWorks.map((work: Work) => (
              <WorkListItemDynamic
                key={work.title}
                year={work.year}
                title={work.title}
                description={work.shortDescription}
                href={`/works/${work.slug}`}
              />
            ))}
          </ul>
        </div>
      </div>
      <div
        id="extras"
        className={clsx("grid-container", styles.worksSection, styles.extras)}
      >
        <div>
          <h2 className={styles.title}>Extras / Video Footage</h2>
          <ul className={styles.worksList}>
            {data.extraWorks.map((work: Work) => (
              <WorkListItemDynamic
                key={work.title}
                year={work.year}
                title={work.title}
                description={work.shortDescription}
                href={`/works/${work.slug}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
