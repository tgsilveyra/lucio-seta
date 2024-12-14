import styles from "./worksSection.module.scss";
import clsx from "clsx";
import { WorkListItem } from "@/app/components/workListItem/WorkListItem";
import { getAbsolutePath } from "@/app/utils/getAbsolutePath";
import { Work } from "@/app/types/work";

async function getPageData() {
  const data = await fetch(getAbsolutePath("/api/data")).then((res) =>
    res.json()
  );

  return data.works;
}

export const WorksSection = async () => {
  const data = await getPageData();

  return (
    <section className={clsx("grid-container", styles.worksSection)} id="works">
      <h2 className={styles.title}>Works</h2>
      <ul className={styles.worksList}>
        {data.map((work: Work) => (
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
