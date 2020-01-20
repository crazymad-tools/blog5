import React, { useEffect } from "react";
import "./index.scss";
import { RouteChildrenProps } from "react-router-dom";
import useStores from "../../store";
import Earth from "../components/Earth";

interface Props extends RouteChildrenProps {}

const IndexPage: React.FC<Props> = props => {
  const { userStore } = useStores();

  return (
    <div id="indexPage">
      {/* index page
      <button onClick={e => props.history.push("/auth/login")}>Login</button>
      <button onClick={e => props.history.push("/auth/register")}>
        Register
      </button>
      
      {userStore.isLogin ? <span>has login</span> : <span>haven't login</span>} */}
      <div className="earth-container">
        <Earth />
      </div>
      <div className="article-list-container">
        {/* <div className="article-rocket">
          <span>HELLO WORLD</span>
        </div>
        <div className="article-rocket" />
        <div className="article-rocket" />
        <div className="article-rocket" />
        <div className="article-rocket" />
        <div className="article-rocket" /> */}
        <div className="article" />
      </div>
    </div>
  );
};

export default IndexPage;
