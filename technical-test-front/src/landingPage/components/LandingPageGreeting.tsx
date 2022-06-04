/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import ReactTyped from "react-typed";

export const LandingPageGreeting: FC = () => {
  const array = [
    "Hi SESAMm!",
    "Welcome to this user app!",
    "Hope you like it :)",
  ];

  return (
    <div
      css={css`
        padding: 0px 1.3vw;
        p {
          margin: 0;
          font-size: 140%;
          font-family: "MonoLisa-Regular";
          color: #1f1a17;
          display: inline-block;
        }
      `}
    >
      <p>&gt;&nbsp;</p>
      <ReactTyped
        css={css`
          font-size: 140%;
          font-family: "MonoLisa-Regular";
          color: #1f1a17;
        `}
        typeSpeed={15}
        backDelay={1500}
        backSpeed={15}
        startDelay={700}
        strings={array}
        smartBackspace
        showCursor
        loop
        cursorChar="_"
      />
    </div>
  );
};
