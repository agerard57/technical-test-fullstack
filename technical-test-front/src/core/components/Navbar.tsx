/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Link } from "react-router-dom";

import { Arrow } from "./Arrow";

export const NavBar: FC = () => (
  <div
    css={css`
      position: fixed;
      bottom: 0px;
      left: 0;
      right: 0;
      font-size: 1.4vw;
      transform: translateY(55%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      &:hover {
        transform: translateY(0%);
      }
      &:hover > svg {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 0.1s, opacity 0.1s linear;
      }
      svg {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s 0.1s, opacity 0.1s linear;
      }
    `}
  >
    <Arrow />
    <div
      css={css`
        background-color: #eeeeee;
        box-shadow: 0px -3px 5px 0px #656565;
        display: flex;
        font-size: 1.4vw;
        height: 5vw;
        margin-top: 1vw;

        a {
          margin: 0 auto;
          list-style: none;
          line-height: 360%;
          width: fill-available;
          height: fill-available;
          font-family: "Archia-Regular";
          text-decoration: none;
          color: #121314;

          &:hover {
            background-color: #b6b8d440;
          }
        }
      `}
    >
      <Link to="/home">Home</Link>
      <Link to="/users">User list</Link>
    </div>
  </div>
);
