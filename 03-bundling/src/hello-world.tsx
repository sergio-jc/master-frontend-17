import React from "react";
import * as classes from "./hello-world.scss";
import lemoncodeImage from "./assets/lemoncode_logo.png";
const HelloWorld = () => {
  return (
    <div className={classes.container}>
      <img src={lemoncodeImage} alt="Lemoncode" className={classes.lemoncodeLogo} />
      <p className={classes.helloWorld}>Hello world !!</p>
    </div>
  );
};

export default HelloWorld;
