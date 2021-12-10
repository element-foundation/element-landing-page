import LeftSection from "components/LeftSection";
import RightSection from "components/RightSection";
import HeroSection from "components/HeroSection";
import { Investors } from "components/Investors";

import VaultAnimationDark from "public/assets/lotties/VaultAnimationDark.json";

const TreasuryManagement = () => (
  <>
    <HeroSection
      title="Introducing Element Treasury Management"
      text="Element is the perfect treasury diversification solution allowing Protocols, DAOs, and organizations to earn fixed rate yield on treasury capital while maintaining the ability to exit if needed."
      buttonText="Learn more"
      buttonHref="https://app.element.fi/"
      hasArrow
      darkLottie={VaultAnimationDark}
      lightLottie={VaultAnimationDark}
    />
    <RightSection
      title="Grow Your Capital"
      text="Element’s capital flexibility enables organizations or DAO treasuries a way to get a fixed or variable rate exposure on their capital depending on their risk profile and allocation strategy."
      buttonText="Learn more about our fixed rates"
      buttonHref="https://github.com/element-fi/elf-sdk"
      hasArrow
      largeTitle
      // darkLottie={}
      // lightLottie={}
    />
    <LeftSection
      title="Onboarding Support"
      text="We actively speak with you about how best to leverage Element for your treasury management needs. When interested, we walk you through the platform, discuss options, and even support you through the deposit process. If you’re interested in using Element, please reach out to us!"
      buttonText="Contact us"
      buttonHref="https://app.element.fi/fixedrates/"
      hasArrow
      largeTitle
      // darkLottie={}
      // lightLottie={}
    />
    <Investors title="Our Partners" type="partners" />
  </>
);

export default TreasuryManagement;
