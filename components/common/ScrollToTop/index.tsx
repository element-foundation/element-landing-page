import { useEffect, useState } from "react";
import { getScroll } from "lib/getScroll";
import { ScrollUpContainer } from "./styles";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const checkScrollTop = (event: MouseEvent | any) => {
      const offsetFromTop = getScroll(event.target);

      if (!showScroll && offsetFromTop > 350) {
        setShowScroll(true);
      } else if (offsetFromTop <= 350) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop as EventListener);
    return () => {
      window.removeEventListener("scroll", checkScrollTop as EventListener);
    };
  }, [showScroll]);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollUpContainer onClick={scrollUp} show={showScroll}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.887 5.943">
        <path
          id="Path_157"
          data-name="Path 157"
          d="M6502.544,2805l3.529,3.53-3.529,3.529"
          transform="translate(-2803.586 6507.073) rotate(-90)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
