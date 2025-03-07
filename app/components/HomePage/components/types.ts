import { MouseEventHandler } from "react";

export interface IHeader {
  handleMouseEnter: MouseEventHandler<HTMLElement>;
  handleMouseLeave: MouseEventHandler<HTMLElement>;
}

export interface IMenuNavbar {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface IHero {
  handleMouseEnter: MouseEventHandler<HTMLElement>;
  handleMouseLeave: MouseEventHandler<HTMLElement>;
}
