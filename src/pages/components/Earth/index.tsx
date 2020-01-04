import React, { useEffect, useState } from "react";
import "./index.scss";

interface Props {}

const Earth: React.FC<Props> = props => {
  return (
    <a href="http://earth.crazymad.top" target="blank">
      <div className="earth-globe">
        <img src="/earth.jpg" />
        <img src="/earth.jpg" />
        <div className="earth-shadow" />
      </div>
    </a>
  );
};

export default Earth;
