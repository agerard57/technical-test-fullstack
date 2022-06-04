/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  title: string;
};

export const PageTitle: FC<Props> = ({ title }) => (
  <div
    css={css`
      text-align: center;
      margin: 1.3vw;
      padding: 2%;
      &:before,
      &::after {
        content: "";
        flex: 1 1;
        border-bottom: 0.3vw solid #899be3;
        margin: auto;
        display: block;
        width: 80px;
        fill: #1f1a17;
      }
    `}
  >
    <h2
      css={css`
        font-family: "Bebas-Neue-Bold";
        font-size: 4vw;
        margin: 0;
        padding: 11px 0 0 0;
        text-shadow: 2px 3px 0 #899be3;
        list-style: lower-alpha;
        color: #1f1a17;
      `}
    >
      {title}
    </h2>
  </div>
);
