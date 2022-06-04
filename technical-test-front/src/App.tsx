/** @jsxImportSource @emotion/react */

/* eslint-disable import/no-internal-modules */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FC, Suspense } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { ToastProvider } from "react-toast-notifications";

import "./App.css";
import { LoadingScreen } from "./loadingScreen";

const RouteManager = React.lazy(() => import("./routeManager"));

export const App: FC = () => (
  <Suspense fallback={<LoadingScreen />}>
    <ToastProvider>
      <RouteManager />
    </ToastProvider>
  </Suspense>
);
