import React from "react";
import FirstHeader from "../pages/firstHeader";
import Navigation from '../pages/navigation-bar'

function Index({ children }) {
  return (
    <>
      <FirstHeader />
      <Navigation/>
      {children}
    </>
  );
}

export default Index;
