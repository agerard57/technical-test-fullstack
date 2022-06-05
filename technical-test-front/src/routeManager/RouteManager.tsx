import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Layout } from "../core";
import { LandingPage } from "../landingPage";
import { UserList } from "../userList";
import { UserProfile } from "../userProfile";

const RouteManager: FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Layout>
  </Router>
);

export default RouteManager;
