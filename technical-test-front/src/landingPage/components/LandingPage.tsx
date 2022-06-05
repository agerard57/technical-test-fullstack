/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { BlueBorderBackground, Logo } from "../../core";
import { LandingPageGreeting } from "./LandingPageGreeting";

export const LandingPage: FC = () => (
  <section id="landingPage">
    <BlueBorderBackground backgroundColor={"white"}>
      <Logo
        styles={css`
          justify-self: center;
          width: 20%;
          height: auto;
          display: block;
          margin: 1.3vw 0 0 0;
          padding: 3vw 0;
        `}
      />
      <LandingPageGreeting />
    </BlueBorderBackground>
  </section>
);
