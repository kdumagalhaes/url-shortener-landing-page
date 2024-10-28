import { Hero } from "./components/Hero/Hero";
import { UrlShortenerContainer } from "./components/UrlShortenerContainer/UrlShortenerContainer";

export default function Home() {
  return (
    <div>
      <Hero />
      <UrlShortenerContainer />
    </div>
  );
}
