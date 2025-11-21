"use client";

import EmblaCarousel from "@/app/components/EmblaCarousel/EmblaCarousel";
import styles from "./gallerySection.module.scss";

export default function GallerySection() {
  const galleryImages = [
    "/assets/images/gallery-0.jpg",
    "/assets/images/gallery-1.jpg",
    "/assets/images/gallery-2.jpg",
    "/assets/images/gallery-3.jpg",
    "/assets/images/gallery-5.jpg",
  ];

  return (
    <div className={styles.gallerySection}>
      <EmblaCarousel slides={galleryImages} options={{ loop: true }} />
    </div>
  );
}
