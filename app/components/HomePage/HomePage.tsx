import { Background, Header, Hero } from "./components";
import { IHomePage } from "./types";

export const HomePage = ({ handleMouseEnter, handleMouseLeave }: IHomePage) => {
  return (
    <main id="home" className="min-h-screen relative">
      <Background />
      <Header
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Hero
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </main>
  );
};
