export type TSocialMediaTitles =
  | "Facebook"
  | "Instagram"
  | "TikTok"
  | "YouTube";

export type TSocialMedia = {
  id: number;
  title: TSocialMediaTitles;
  link: string;
};
