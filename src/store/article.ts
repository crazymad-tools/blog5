
import { observable, action } from "mobx";
import axios, { AxiosResponse } from "axios";
import { BACKSTAGE_ARTICLE } from "../http/api";
import { post } from '../http/request';
import History from "../history";

export default class ArticleStore {
  @observable
  articleList: any[] = [];

  @action.bound
  publish(payload: { title: string, content: string, tags: string[], abstract: string }) {
    post(BACKSTAGE_ARTICLE, {
      title: payload.title,
      markdown: payload.content,
      tags: payload.tags,
      abstract: payload.abstract
    }).then((res: any) => {
      console.log(res);
    })
  }

}