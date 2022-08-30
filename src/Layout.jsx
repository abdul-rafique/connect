import React from "react";
import Navbar from "./Components/Navbar";

import Container from "./Components/Container";

function Layout({ children, isUser }) {
  return (
    <div>
      <Navbar isUser={isUser} />
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;
