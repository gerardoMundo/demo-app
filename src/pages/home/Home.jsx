import React from "react";
import Graphics from "../../components/Graphics";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";
import Widget from "../../components/Widgets";
import { HomeContainter, Homediv, WidgetsContainer } from "../../styles/styles";

const Home = () => {
  return (
    <Homediv>
      <Sidebar />

      <HomeContainter>
        <Navbar />

        <WidgetsContainer>
          <Widget />
          <Widget />
          <Widget />
        </WidgetsContainer>
        <WidgetsContainer>
          <Graphics />
          <Graphics />
        </WidgetsContainer>
      </HomeContainter>
    </Homediv>
  );
};

export default Home;
