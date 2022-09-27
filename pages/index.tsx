import HeroSection from "components/HeroSection";
import { StatsSection } from "components/StatsSection";
import LeftSection from "components/LeftSection";
import { Proposition } from "components/Proposition";
import { OurVaults } from "components/OurVaults";
import RightSection from "components/RightSection";
import { TreasuryManagement } from "components/TreasuryManagement";
import { Investors } from "components/Investors";

import HeroAnimationDark from "public/assets/lotties/HeroAnimationDark.json";
import HeroAnimationLight from "public/assets/lotties/HeroAnimationLight.json";
import GrowSavingAnimationDark from "public/assets/lotties/GrowSavingAnimationDark.json";
import BuildAnimationDark from "public/assets/lotties/BuildAnimationDark.json";

const Home = () => (
  <>
    <HeroSection
      title="The fixed rate protocol"
      text="Element is an open source protocol for fixed and variable yield markets."
      buttonText="Start earning"
      buttonHref="https://app.element.fi/"
      hasArrow
      darkLottie={HeroAnimationDark}
      lightLottie={HeroAnimationLight}
    />
    <StatsSection />
    <LeftSection
      title="Grow your savings"
      text="When you purchase Element Principal Tokens, you receive a fixed
      rate token that you buy and hold until the day of the term end
      date. Once this term has ended, you have the ability to redeem
      your token and earned APR. Our Principal Tokens have no minimums
      and no penalties. You can trade your Principal Token back for it’s base asset at any time."
      buttonText="Start earning"
      buttonHref="https://app.element.fi/fixedrates/"
      darkLottie={GrowSavingAnimationDark}
      lightLottie={GrowSavingAnimationDark}
    />
    <Proposition />
    <OurVaults />
    <RightSection
      title="Build on Element"
      text="Develop new defi products with the Element SDK. Whether it’s a
      new feature that you want to build on top of Element or a
      completely new product, we love to see our community utilizing
      our SDK."
      buttonText="Start building"
      buttonHref="https://github.com/element-fi/elf-sdk"
      darkLottie={BuildAnimationDark}
      lightLottie={BuildAnimationDark}
    />
    <TreasuryManagement />
  </>
);

export default Home;
