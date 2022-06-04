/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, ReactNode } from "react";

type Props = {
  backgroundColor: string;
  children: ReactNode;
};

export const BlueBorderBackground: FC<Props> = ({
  backgroundColor,
  children,
}) => (
  <div
    css={css`
      background-color: ${backgroundColor};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 0px 1.3vw #364ca1 inset;
      align-items: center;
      padding-top: 1wh;
    `}
  >
    {children}
  </div>
);
