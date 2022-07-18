import React from "react";
import Annotations from "./Annotations";
import Content from "./Content";
import Records from "./Records";

const Home = () => {
  return (
    <div className="flex gap-2">
      <Records></Records>
      <Content></Content>
      <Annotations></Annotations>
    </div>
  );
};

export default Home;
