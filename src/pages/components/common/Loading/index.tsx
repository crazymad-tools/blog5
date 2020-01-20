import React from "react";
import "./index.scss";

interface Props {}

const Loading: React.FC<Props> = props => {
  return (
    <div className="loading-box">
      {/* < className="iconfont blog-icon-loading" /> */}
      <img src="/loading.png" width="60px" height="60px" />
    </div>
  );
};

export default Loading;
