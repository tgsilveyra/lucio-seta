export type WorkCredit = {
  role: string;
  name: string;
};

export type WorkMainImage = {
  url: string;
  alt: string;
};

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  shortDescription: string;
  description: string;
  premiered: string;
  credits: WorkCredit[];
  mainImage: WorkMainImage;
  images: WorkMainImage[];
  trailer: string;
};
