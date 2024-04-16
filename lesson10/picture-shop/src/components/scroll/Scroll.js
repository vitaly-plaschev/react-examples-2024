import React, { useRef } from "react";
import Section from "./Section";
import scrollStyle from "./scroll.module.css";

function Scroll() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Section
        refLink={section1Ref}
        style={scrollStyle.section1}
        title="Section 1"
        text="This is section 1 text, please click references below to navigate to specific section."
        links={[
          { text: "Section 2", value: "#section2", ref: section2Ref },
          { text: "Section 3", value: "#section3", ref: section3Ref },
        ]}
        onClickSection={handleScroll}
      />
      <Section
        refLink={section2Ref}
        style={scrollStyle.section2}
        title="Section 2"
        text="This is section 2 text, please click references below to navigate to specific section."
        links={[
          { text: "Section 1", value: "#section1", ref: section1Ref },
          { text: "Section 3", value: "#section3", ref: section3Ref },
        ]}
        onClickSection={handleScroll}
      />
      <Section
        refLink={section3Ref}
        style={scrollStyle.section3}
        title="Section 3"
        text="This is section 3 text, please click references below to navigate to specific section."
        links={[
          { text: "Section 1", value: "#section1", ref: section1Ref },
          { text: "Section 2", value: "#section2", ref: section2Ref },
        ]}
        onClickSection={handleScroll}
      />
    </>
  );
}

export default Scroll;
