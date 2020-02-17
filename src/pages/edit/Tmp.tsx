import React from "react";
import { Loading } from "../components/common";

interface Props {}

const Tmp: React.FC<Props> = props => {
  return <div className="markdown-review">
    <Loading />
  </div>;
};
  
export default Tmp;
