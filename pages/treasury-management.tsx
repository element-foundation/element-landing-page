import LeftSection from "components/LeftSection";
import RightSection from "components/RightSection";
import HeroSection from "components/HeroSection";
import { Investors } from "components/Investors";

import VaultAnimationDark from "public/assets/lotties/VaultAnimationDark.json";

const TreasuryManagement = () => (
  <>
    <HeroSection
      title="Element Treasury Management"
      text="Element is the perfect treasury diversification solution allowing Protocols, DAOs, and organizations to earn fixed rate yield on treasury capital while maintaining the ability to exit if needed."
      buttonText="Learn more"
      buttonHref="https://medium.com/element-finance/introducing-elements-treasury-management-initiative-bbebbd99f89"
      hasArrow
      darkLottie={VaultAnimationDark}
      lightLottie={VaultAnimationDark}
    />
    <RightSection
      title="Grow Your Capital"
      text="Element’s capital flexibility enables organizations or DAO treasuries a way to get a fixed or variable rate exposure on their capital depending on their risk profile and allocation strategy."
      buttonText="Learn more about our fixed rates"
      buttonHref="https://medium.com/element-finance/fixed-rate-interest-markets-a-casual-users-journey-through-fixed-rate-interest-using-element-50f420df1859"
      hasArrow
      largeTitle
      // darkLottie={}
      // lightLottie={}
    />
    <LeftSection
      title="Onboarding Support"
      text="We actively speak with you about how best to leverage Element for your treasury management needs. When interested, we walk you through the platform, discuss options, and even support you through the deposit process. If you’re interested in using Element, please reach out to us!"
      buttonText="Contact us"
      buttonHref="https://docs.google.com/forms/d/e/1FAIpQLSd0y1RrxWy5UNZZ3Pfoeb7CWqb2_svgAngqBQKstGaeE1OMGg/viewform?usp=send_form"
      hasArrow
      largeTitle
      // darkLottie={}
      // lightLottie={}
    />
    <Investors title="Our Partners" type="partners" />
  </>
);

export default TreasuryManagement;
