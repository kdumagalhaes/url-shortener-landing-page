import { Hero } from "./components/Hero/Hero";
import { UrlInput } from "./components/UrlInput/UrlInput";
import { UrlList } from "./components/UrlList/UrlList";

export default function Home() {
  return (
    <div>
      <Hero />
      <UrlInput />
      <UrlList />
    </div>
  );
}
