import ScrollToTop from "components/common/ScrollToTop";
import { HeroSection } from "components/HeroSection";
import { StatsSection } from "components/StatsSection";
import { NewsLetter } from "components/NewsLetter";
import { GrowSavings } from "components/GrowSavings";
import { Proposition } from "components/Proposition";
import { OurVaults } from "components/OurVaults";
import { BuildElement } from "components/BuildElement";
import { TreasuryManagement } from "components/TreasuryManagement";
import { Investors } from "components/Investors";

const Home = () => (
  <>
    <ScrollToTop />
    <HeroSection />
    <StatsSection />
    <GrowSavings />
    <Proposition />
    <OurVaults />
    <BuildElement />
    <TreasuryManagement />
    <Investors />
    <NewsLetter />
  </>
);

export default Home;
