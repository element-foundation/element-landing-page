import ScrollToTop from "components/common/ScrollToTop";
import { HeroSection } from "components/HeroSection";
import { Header } from "components/Layout/Header";
import { Footer } from "components/Layout/Footer";
import { StatsSection } from "components/StatsSection";
import { NewsLetter } from "components/NewsLetter";
import { GrowSavings } from "components/GrowSavings";
import { Proposition } from "components/Proposition";

const Home = () => (
  <>
    <ScrollToTop />
    <Header />
    <HeroSection />
    <StatsSection />
    <GrowSavings />
    <Proposition />
    <NewsLetter />
    <Footer />
  </>
);

export default Home;
