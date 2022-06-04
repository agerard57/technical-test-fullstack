/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

export const Arrow: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 454.522 454.522"
    css={css`
      fill: #1f1a17;
      transform: rotate(90deg);
      width: 2%;
    `}
  >
    <path d="M248.299 399.167c12.354 12.354 12.354 32.391 0 44.744-12.354 12.365-32.391 12.365-44.75 0L9.259 249.63C3.085 243.453 0 235.355 0 227.258c0-8.095 3.091-16.192 9.259-22.366l194.29-194.284c12.359-12.359 32.396-12.359 44.75 0 12.354 12.354 12.354 32.388 0 44.748L76.391 227.258l171.908 171.909zm25.05-171.909L445.258 55.355c12.354-12.359 12.354-32.394 0-44.748-12.354-12.359-32.392-12.359-44.751 0L206.218 204.892c-6.174 6.18-9.26 14.271-9.26 22.366a31.57 31.57 0 009.26 22.372l194.289 194.281c12.359 12.365 32.397 12.365 44.751 0 12.354-12.354 12.354-32.391 0-44.744L273.349 227.258z" />
  </svg>
);