import { Slide } from "react-awesome-reveal";
import { useState, useCallback } from "react";
import { postData } from "lib/fetcher";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { PrimaryInput } from "components/common/Elements/Input";
import {
  NewsLetterContainer,
  MainContent,
  ElementsContainer,
  FlexWrapper,
  Break,
} from "components/NewsLetter/styles";

export const NewsLetter = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!submitted) {
        setIsLoading(true);
        postData(
          `https://emailoctopus.com/lists/bec30112-0e12-11eb-a3d0-06b4694bee2a/members/embedded/1.3/add`,
          {
            field_0: emailValue,
          }
        ).then(() => {
          setEmailValue("");
          setIsLoading(false);
          setSubmitted(true);
        });
      }
    },
    [emailValue, submitted]
  );

  return (
    <SectionContainer gridColumn="1/13">
      <Slide direction="up" duration={1500}>
        <NewsLetterContainer autoComplete="off" onSubmit={handleSubmit}>
          <FlexWrapper>
            <MainContent>
              <h4>
                {submitted
                  ? "Contgratulations! You've subscribed"
                  : "Subscribe to our newsletter text"}
              </h4>
              {!submitted && (
                <p>
                  Get bi-weekly updates about everything <Break /> Element.
                </p>
              )}
            </MainContent>
            <ElementsContainer>
              {!submitted && (
                <PrimaryInput
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  onChange={onChange}
                />
              )}
              <PrimaryButton
                text={submitted ? "Thank you" : "Subscribe"}
                variant="secondary"
                isLoading={isLoading}
              />
            </ElementsContainer>
          </FlexWrapper>
        </NewsLetterContainer>
      </Slide>
    </SectionContainer>
  );
};
