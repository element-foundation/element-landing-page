import { Flex } from "components/common/Elements/Container/styles";
import { AbsoluteSVGContainer } from "components/GrowSavings/styles";
import { VaultProps } from "components/OurVaults";
import { VaultsItemContainer } from "components/OurVaults/styles";
import Image from "next/image";

import Rainbow from "public/assets/svg/Currencies/Rainbow.svg";
import Return from "public/assets/png/Currencies/Return.png";

export const VaultsItem = ({ item, darkTheme }: VaultProps) => {
  return (
    <VaultsItemContainer darkTheme={darkTheme}>
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
    </VaultsItemContainer>
  );
};
