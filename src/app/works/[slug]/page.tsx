import clsx from "clsx";
import styles from "./page.module.scss";
import { getAbsolutePath } from "@/app/utils/getAbsolutePath";
import { createMarkup } from "@/app/utils/createMarkup";

export async function generateStaticParams() {
  const data = await fetch(getAbsolutePath("/api/data")).then((res) =>
    res.json()
  );

  return data.works.map((work) => ({
    slug: work.slug,
  }));
}

async function getPageData(slug: string) {
  const data = await fetch(getAbsolutePath("/api/data")).then((res) =>
    res.json()
  );

  return data.works.find((work) => work.slug === slug);
}

export default async function WorkPage({ params }) {
  const data = await getPageData(params.slug);
  const { title, description, subtitle, premiered, credits, mainImage } = data;

  return (
    <div className={styles.page}>
      <main className={clsx("grid-container", styles.main)}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.workInfo}>
          {credits.length > 0 && (
            <ul className={styles.worksList}>
              {credits.map((credit, index: number) => (
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
        <div className={styles.workContent}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={createMarkup(description)}
          ></div>
        </div>
        <div className={styles.imageWrapper}>
          {mainImage && (
            <img
              className={styles.mainImage}
              src={`${process.env.BASE_PATH}/${mainImage.url}`}
              alt={mainImage.alt}
            />
          )}
        </div>
      </main>
    </div>
  );
}
