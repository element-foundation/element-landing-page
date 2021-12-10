import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { Flex } from "components/common/Elements/Container/styles";
import { NotificationProps } from "lib/types";
import {
  NotificationContainer,
  NotificationContent,
} from "components/common/Elements/Notification/styles";

export const Notification = ({
  content,
  isVisible,
  onClick,
  darkTheme,
}: NotificationProps) => {
  return (
    <>
      {isVisible && content && (
        <NotificationContainer onClick={onClick}>
          <Slide direction="right" duration={1500} triggerOnce>
            <NotificationContent darkTheme={darkTheme}>
              <Flex justify="start">
                <h3>Sucess</h3>
                <div>
                  <Image
                    alt={"Success"}
                    placeholder="blur"
                    blurDataURL="blur"
                    width="20px"
                    height="20px"
                    layout="fixed"
                    src={`/assets/svg/CheckMark.svg`}
                  />
                </div>
              </Flex>
              <p>{content}</p>
            </NotificationContent>
          </Slide>
        </NotificationContainer>
      )}
    </>
  );
};
