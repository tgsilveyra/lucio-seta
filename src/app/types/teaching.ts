export type TeachingMedia = {
  url: string;
  alt: string;
};

export type TeachingClass = {
  name: string;
  instructor?: string;
  description: string[];
  video?: string;
  image?: TeachingMedia;
};
