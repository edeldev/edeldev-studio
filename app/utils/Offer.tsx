import {
  ExternalLinkIcon,
  FocusIcon,
  TimerIcon,
  VerifiedIcon,
} from "lucide-react";
import { GridItemProps } from "../components/Offer/Offer";

export const OFFER: GridItemProps[] = [
  {
    id: 1,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <FocusIcon className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Enfoque",
    description:
      "Nos enfocamos en lo que realmente importa: las conversiones y la imagen de tu marca/negocio.",
  },
  {
    id: 2,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <VerifiedIcon className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "99%",
    description:
      "de las veces, superamos las expectativas de nuestros clientes.",
  },
  {
    id: 3,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: (
      <ExternalLinkIcon className="h-4 w-4 text-black dark:text-neutral-400" />
    ),
    title: "¡Vamos a crear juntos!",
    description: "Cuentanos tu proyecto.",
    link: "https://wa.me/8123697420/?text=Hola,%20quiero%una%página%web",
  },
  {
    id: 4,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <TimerIcon className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Sin contratiempos",
    description:
      "Desde el inicio del proyecto, establecemos claramente los plazos de entrega.",
  },
  {
    id: 5,
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: (
      <ExternalLinkIcon className="h-4 w-4 text-black dark:text-neutral-400" />
    ),
    title: "¿Comenzamos?",
    description: "Creando experiencias únicas.",
    link: "https://wa.me/8123697420/?text=Hola,%20quiero%una%página%web",
  },
];
