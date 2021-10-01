import ScrollToTop from "components/common/ScrollToTop";
import { ValueProposition } from "components/ValueProposition";
import { Header } from "components/Layout/Header";
import { Footer } from "components/Layout/Footer";
import { StatsSection } from "components/StatsSection";
import { NewsLetter } from "components/NewsLetter";

const Home = () => (
  <>
    <ScrollToTop />
    <Header />
    <ValueProposition />
    <StatsSection />
    <NewsLetter />
    <Footer />
  </>
);

export default Home;
