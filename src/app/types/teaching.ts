export type TeachingMedia = {
  url: string;
  alt: string;
};

export type TeachingClass = {
  name: string;
  instructor?: string;
  event?: string;
  description: string[];
  video?: string;
  image?: TeachingMedia;
};
