import { useState } from "react";
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
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    // After then
    setIsLoading(false);
    setInputValue("");
  };

  return (
    <SectionContainer gridColumn="1/13">
      <NewsLetterContainer onSubmit={handleSubmit} autoComplete="off">
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
              onChange={onChange}
            />
            <PrimaryButton
              text="Subscribe"
              variant="secondary"
              isLoading={isLoading}
            />
          </ElementsContainer>
        </FlexWrapper>
      </NewsLetterContainer>
    </SectionContainer>
  );
};
