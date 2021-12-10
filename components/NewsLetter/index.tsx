import { Slide } from "react-awesome-reveal";
import { useState, useCallback, useEffect, memo } from "react";
import { useTheme } from "next-themes";
import { postData } from "lib/fetcher";
import { StringProps } from "lib/types";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { Notification } from "components/common/Elements/Notification";
import { PrimaryInput } from "components/common/Elements/Input";
import {
  NewsLetterContainer,
  MainContent,
  ElementsContainer,
  FlexWrapper,
  Break,
} from "components/NewsLetter/styles";

const NewsLetter = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notifState, setNotifState] = useState<StringProps>({
    isVisible: false,
    content: "",
  });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTimeout(() => {
      setNotifState({ isVisible: !notifState.isVisible });
    }, 5000);
  }, [notifState.isVisible]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);
      postData(
        `https://emailoctopus.com/lists/bec30112-0e12-11eb-a3d0-06b4694bee2a/members/embedded/1.3/add`,
        {
          field_0: emailValue,
        }
      ).then(() => {
        setNotifState({
          content: "Contgratulations! You've subscribed",
          isVisible: true,
        });
        setIsLoading(false);
        event.target.reset();
      });
    },
    [emailValue]
  );

  if (!mounted) return null;

  return (
    <>
      <SectionContainer>
        <Slide direction="up" duration={1500}>
          <NewsLetterContainer
            autoComplete="off"
            onSubmit={handleSubmit}
            darkTheme={resolvedTheme === "dark"}
          >
            <FlexWrapper>
              <MainContent>
                <h4>Subscribe to our newsletter</h4>
                <p>
                  Get bi-weekly updates about everything <Break /> Element.
                </p>
              </MainContent>
              <ElementsContainer>
                <PrimaryInput
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  onChange={onChange}
                />
                <PrimaryButton
                  text={"Subscribe"}
                  variant="secondary"
                  isLoading={isLoading}
                  darkTheme={resolvedTheme === "dark"}
                />
              </ElementsContainer>
            </FlexWrapper>
          </NewsLetterContainer>
        </Slide>
      </SectionContainer>
      <Notification
        content={notifState.content}
        isVisible={notifState.isVisible}
        darkTheme={resolvedTheme === "dark"}
        onClick={() => setNotifState({ isVisible: false })}
      />
    </>
  );
};

export default memo(NewsLetter);
