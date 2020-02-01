import UserStore from "./user";
import ArticleStore from './article';
import React from "react";

const storeContext = React.createContext({
  userStore: new UserStore(),
  articleStore: new ArticleStore()
});

const useStores = () => React.useContext(storeContext);

export default useStores;
