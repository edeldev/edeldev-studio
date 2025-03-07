import { MouseEventHandler } from "react";

export interface IHomePage {
  handleMouseEnter: MouseEventHandler<HTMLElement>;
  handleMouseLeave: MouseEventHandler<HTMLElement>;
}
