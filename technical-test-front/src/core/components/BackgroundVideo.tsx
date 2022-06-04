/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

export const BackgroundVideo: FC = () => (
  <div
    css={css`
      position: fixed;
      right: 0;
      bottom: 0;
      z-index: -1;
      min-width: 100%;
      min-height: 100%;
    `}
  >
    <video
      autoPlay
      loop
      muted
      css={css`
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        min-height: 100vh;
        min-width: 100vw;
        z-index: -1;
      `}
    >
      <source src={"/assets/bg.mp4"} type="video/mp4" />
    </video>
  </div>
);
