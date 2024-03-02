import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useArrayRef from "../hooks/useArrayRef";

const QualitySection = () => {
  const [titleWordsRef, setTitleWordsRef] = useArrayRef();
  const [paragraphWordsRef, setParagraphWordsRef] = useArrayRef();
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.refresh();

    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center+=100",
        toggleActions: "play none none none",
      },
    });

    titleWordsRef.current.forEach((word, index) => {
      titleTimeline.fromTo(
        word.children,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power1.out",
          duration: 0.8,
          stagger: 0.03,
          delay: index * 0.5,
        }
      );
    });

    const paragraphTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center+=100",
        toggleActions: "play none none none",
      },
    });

    paragraphWordsRef.current.forEach((word, index) => {
      paragraphTimeline.fromTo(
        word.children,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power1.out",
          duration: 0.1,
          stagger: 0,
          delay: index * 0.005,
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [titleWordsRef, paragraphWordsRef]);

  const title = "Quality Products";
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const splitTextIntoWords = (text, setRef) =>
    text.split(" ").map((word, index) => (
      <span key={index} ref={setRef} style={{ whiteSpace: "wrap" }}>
        {word.split("").map((letter, letterIndex) => (
          <span
            key={letterIndex}
            style={{ display: "inline-block", opacity: 0 }}
          >
            {letter}
          </span>
        ))}
        &nbsp;
      </span>
    ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        width: "100%",
        top: "153px",
      }}
      ref={triggerRef}
    >
      <div style={{ maxWidth: "52%", width: "100%" }}>
        <h2 style={{ fontSize: "56px" }}>
          {splitTextIntoWords(title, setTitleWordsRef)}
        </h2>
        <p style={{ color: "#7A7777", fontSize: "24px" }}>
          {splitTextIntoWords(paragraph, setParagraphWordsRef)}
        </p>
      </div>
    </div>
  );
};

export default QualitySection;
