/** @jsxImportSource @emotion/react */
import { FC, ReactNode } from "react";

import { NavBar } from "./Navbar";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="App">
    {children}
    <NavBar />
  </div>
);
