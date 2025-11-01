import HomeHero from "../[locale]/components/HomeHero";
import HomeFeatures from "../[locale]/components/HomeFeatures";
import HomeWhyUs from "../[locale]/components/HomeWhyUs";
import SuccessStories from "./components/JobAds";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeWhyUs />
      <SuccessStories />
    </>
  );
}
