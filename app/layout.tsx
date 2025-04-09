import type { Metadata } from "next";
import { Alumni_Sans_Pinstripe, Changa_One } from "next/font/google";
import "./globals.css";

const changaOne = Changa_One({
  variable: "--font-changa-one",
  subsets: ["latin"],
  weight: "400",
});

const alumniSansPinstripe = Alumni_Sans_Pinstripe({
  subsets: ["latin"],
  variable: "--font-alumni-sans-pinstripe",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Edeldev Studio",
  description:
    "Apasionados por crear experiencias digitales que marcan la diferencia. En un mundo donde la presencia online es clave, diseñamos y desarrollamos páginas web impactantes que ofrecen experiencias de usuario únicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${changaOne.variable} ${alumniSansPinstripe.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
