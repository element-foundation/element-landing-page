import { Flex } from "components/common/Elements/Container/styles";
import { AbsoluteSVGContainer } from "components/GrowSavings/styles";
import { VaultProps } from "components/OurVaults";
import { VaultsItemContainer } from "components/OurVaults/styles";
import Image from "next/image";

import Rainbow from "public/assets/png/Rainbow.png";
import Return from "public/assets/png/Return.png";

export const VaultsItem = ({ item }: VaultProps) => {
  return (
    <VaultsItemContainer>
      <AbsoluteSVGContainer top="11px" right="11px">
        <Flex>
          {item.currencyReturn && (
            <div>
              <Image
                src={Return}
                width="22px"
                height="22px"
                alt={`Image of ${item.currencyImage}}`}
              />
            </div>
          )}
          {item.currencyRainbow && (
            <div className="margin-left">
              <Image
                src={Rainbow}
                width="22px"
                height="22px"
                alt={`Image of ${item.currencyImage}}`}
              />
            </div>
          )}
        </Flex>
      </AbsoluteSVGContainer>
      <Image src={item.currencyImage} alt={`Image of ${item.currencyImage}}`} />
      <p>{item.currencyTitle}</p>
    </VaultsItemContainer>
  );
};
