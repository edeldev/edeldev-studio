import { JSX } from "react";
import { TSocialMediaTitles } from "../interface/social-media";
import { StaticImageData } from "next/image";

export type TMenuItem = {
  id: number;
  link: string;
  text: string;
  image: string;
};

export type TTestimonialPeople = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export type TProyect = {
  id: number;
  title: string;
  link: string;
  thumbnail: StaticImageData;
};

export type TIconSocialMedia = {
  [key in TSocialMediaTitles]: JSX.Element;
};

export type TQuestion = {
  id: number;
  value: string;
  question: string;
  answer: string;
};
