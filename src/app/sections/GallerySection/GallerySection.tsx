"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./gallerySection.module.scss";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Type definition for image format classes
 */
type ImageFormat = "format1" | "format2" | "format3" | "format4" | "format5";

/**
 * Configuration for different image format sizes
 */
const IMAGE_FORMATS: Record<ImageFormat, string> = {
  format1: "img-format1",
  format2: "img-format2",
  format3: "img-format3",
  format4: "img-format4",
  format5: "img-format5",
};

/**
 * Number of gallery images
 */
const TOTAL_IMAGES = 4;

/**
 * Configuration for each image's position, rotation, and size
 * xPercent: horizontal offset from center (-50 to 50 recommended)
 * yPercent: vertical offset from center (-50 to 50 recommended)
 * rotation: rotation angle in degrees
 * format: size format (format1 to format5)
 */
const IMAGE_POSITIONS = [
  {
    xPercent: 0,
    yPercent: 0,
    rotation: -5,
    format: "format1" as ImageFormat,
  }, // Image 0
  {
    xPercent: 20,
    yPercent: 0,
    rotation: 8,
    format: "format3" as ImageFormat,
  }, // Image 1
  {
    xPercent: -20,
    yPercent: 15,
    rotation: -3,
    format: "format2" as ImageFormat,
  }, // Image 2
  {
    xPercent: 25,
    yPercent: -15,
    rotation: 12,
    format: "format4" as ImageFormat,
  }, // Image 3
] as const;

/**
 * Interface for image configuration
 */
interface ImageConfig {
  element: HTMLImageElement;
  xPercent: number;
  yPercent: number;
  rotation: number;
}

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<ImageConfig[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  /**
   * Create all images at once with predefined positioning values
   */
  const createAllImages = (): ImageConfig[] => {
    if (!containerRef.current) return [];

    const images: ImageConfig[] = [];

    for (let i = 0; i < TOTAL_IMAGES; i++) {
      // Get predefined position and format for this image
      const position = IMAGE_POSITIONS[i];

      // Create image element
      const img = document.createElement("img");
      img.src = `/assets/images/gallery-${i}.jpg`;
      img.alt = "";
      img.className = `${styles["mwg-image"]} ${
        styles[IMAGE_FORMATS[position.format]]
      }`;

      // Set initial state (first image visible, others hidden)
      const isFirstImage = i === 0;
      gsap.set(img, {
        xPercent: position.xPercent,
        yPercent: position.yPercent,
        rotation: position.rotation,
        scaleX: isFirstImage ? 1 : 1.05,
        scaleY: isFirstImage ? 1 : 1.2,
        autoAlpha: isFirstImage ? 1 : 0,
      });

      // Add to DOM
      containerRef.current.appendChild(img);

      images.push({
        element: img,
        xPercent: position.xPercent,
        yPercent: position.yPercent,
        rotation: position.rotation,
      });
    }

    return images;
  };

  /**
   * Initialize GSAP timeline with ScrollTrigger scrubbing
   */
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Create all images
    const images = createAllImages();
    imagesRef.current = images;

    // Create master timeline with duration = TOTAL_IMAGES * 2
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${TOTAL_IMAGES * 100}%`, // Scroll distance
        pin: true,
        scrub: 1,
      },
    });

    // Add entrance animations for each image to the timeline
    // Images will pile on top of each other without exiting
    images.forEach((imgConfig, index) => {
      const { element } = imgConfig;
      const startTime = index * 2; // Each image starts 2 seconds apart

      // Entrance animation (0 to 0.4 seconds)
      masterTimeline.to(
        element,
        {
          scaleX: 1,
          scaleY: 1,
          autoAlpha: 1,
          ease: "power4.out",
          duration: 0.4,
        },
        startTime
      );
    });

    masterTimeline.add(
      gsap.to(container, {
        duration: 5, // Add 2 seconds of empty space at the end
        onComplete: () => {}, // Empty callback
      })
    );

    timelineRef.current = masterTimeline;

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      // Clean up all images
      imagesRef.current.forEach(({ element }) => {
        gsap.killTweensOf(element);
        if (container.contains(element)) {
          container.removeChild(element);
        }
      });
      imagesRef.current = [];
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.gallerySection}></section>
  );
}
