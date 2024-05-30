import React from "react";
import { Routes, Route } from "react-router-dom";

//routes
import { publicRoutes } from "./allRoutes";
import Layout from "../pages/Layout/Index";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<Layout>{route.component}</Layout>}
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;
