import styles from "./worksSection.module.scss";
import clsx from "clsx";
import { WorkListItem } from "@/app/components/workListItem/WorkListItem";
import { Work } from "@/app/types/work";
import { getData } from "@/app/utils/getData";

async function getPageData() {
  const data = await getData().then((res) => res.json());

  return data.works;
}

export const WorksSection = async () => {
  const data = await getPageData();

  return (
    <section className={clsx("grid-container", styles.worksSection)} id="works">
      <h2 className={styles.title}>Works</h2>
      <ul className={styles.worksList}>
        {data.mainWorks.map((work: Work) => (
          <WorkListItem
            key={work.title}
            year={work.year}
            title={work.title}
            description={work.shortDescription}
            href={`/works/${work.slug}`}
          />
        ))}
      </ul>
    </section>
  );
};
