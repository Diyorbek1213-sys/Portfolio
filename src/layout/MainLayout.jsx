import React from "react";
import Header from "../components/Header";
import BackgroundAnimation from "../components/BackgroundAnimation";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <BackgroundAnimation />
      <Header />
      <div className="container mx-auto relative z-10">{children}</div>
    </div>
  );
};

export default MainLayout;
