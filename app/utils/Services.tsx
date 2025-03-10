import { IconAppWindowFilled } from "@tabler/icons-react";
import { IService } from "../interface/serivce";

export const SERVICES: IService[] = [
  {
    id: 1,
    title: "Landing page",
    icon: (
      <IconAppWindowFilled className="w-[24px] h-[24px] md:w-[35px] md:h-[35px] stroke-none" />
    ),
    price: "2,000 MXN",
    duration: "3 - 6 días",
    link: "https://wa.me/8123697420/?text=Hola,%20quiero%20una%20landing%20page",
    services: [
      {
        id: 1,
        title: "Landing page",
      },
      {
        id: 2,
        title: "Diseño personalizado",
      },
      {
        id: 3,
        title: "Diseño enfocado a conversiones",
      },
      {
        id: 4,
        title: "1 año de dominio y hosting",
      },
      {
        id: 5,
        title: "Certificado SSL",
      },
      {
        id: 6,
        title: "Optimizada SEO",
      },
      {
        id: 7,
        title: "Enlaces a redes sociales",
      },
      {
        id: 8,
        title: "Botón de WhatsApp inmediato",
      },
    ],
  },
  {
    id: 2,
    title: "Página web",
    icon: (
      <IconAppWindowFilled className="w-[24px] h-[24px] md:w-[35px] md:h-[35px] stroke-none" />
    ),
    price: "3,000 MXN",
    duration: "4 - 7 días",
    link: "https://wa.me/8123697420/?text=Hola,%20quiero%20una%20multipágina",
    services: [
      {
        id: 1,
        title: "Diseño multipágina",
      },
      {
        id: 2,
        title: "Diseño personalizado",
      },
      {
        id: 3,
        title: "Diseño enfocado a conversiones",
      },
      {
        id: 4,
        title: "1 año de dominio y hosting",
      },
      {
        id: 5,
        title: "Certificado SSL",
      },
      {
        id: 6,
        title: "Optimizada SEO",
      },
      {
        id: 7,
        title: "Enlaces a redes sociales",
      },
      {
        id: 8,
        title: "Botón de WhatsApp inmediato",
      },
    ],
  },
];
