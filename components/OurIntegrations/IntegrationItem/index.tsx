import Image from "next/image";
import { Flex } from "components/common/Elements/Container/styles";
import { AbsoluteSVGContainer } from "components/LeftSection/styles";
import { IntegrationItemContainer } from "components/OurIntegrations/styles";
import { IntegrationProps } from "lib/types";

import Rainbow from "public/assets/svg/Currencies/Rainbow.svg";
import Return from "public/assets/png/Currencies/Return.png";

export const IntegrationItem = ({ item, darkTheme }: IntegrationProps) => {
  return (
    <IntegrationItemContainer darkTheme={darkTheme}>
      <AbsoluteSVGContainer top="11px" right="11px">
        <Flex>
          {item.currencyReturn && (
            <div>
              <Image
                src={Return}
                width="26px"
                height="26px"
                alt={`Image of ${item.currencyImage}}`}
              />
            </div>
          )}
          {item.currencyRainbow && (
            <div className="margin-left">
              <Image
                src={Rainbow}
                width="26px"
                height="26px"
                alt={`Image of ${item.currencyImage}}`}
              />
            </div>
          )}
        </Flex>
      </AbsoluteSVGContainer>
      {item.currencyImage && (
        <Image
          src={item.currencyImage}
          alt={`Image of ${item.currencyImage}}`}
        />
      )}
      <p>{item.currencyTitle}</p>
    </IntegrationItemContainer>
  );
};
