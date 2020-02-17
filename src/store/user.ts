import { observable, action } from "mobx";
import axios, { AxiosResponse } from "axios";
import { LOGIN, REGISTER } from "../http/api";
import History from "../history";

export default class UserStore {
  @observable
  isLogin: boolean = false;

  @action.bound
  login(payload: { username: string; password: string }) {
    axios.post(LOGIN, payload).then((res: AxiosResponse) => {
      this.isLogin = true;
      if (res.status === 201) {
        History.history && History.history.push("/");
      } else {
        // alert(res.data);
        console.log(res.data);
      }
    }).catch(e => {
      // console.log(e.response);
      // if (e.response.data && e.res.response.message) {
      //   console.log(e.response.data.message);
      // }
      if (e.response && e.response.data && e.response.data.message) {
        console.log(e.response.data.message);
      }
    });
  }

  @action.bound
  register(payload: { username: string; email: string; password: string }) {
    axios.post(REGISTER, payload).then((res: AxiosResponse) => {
      if (res.status === 201) {
        History.history && History.history.push("/auth/login");
      } else {
        // alert(res.statusText);
        alert(res.data);
      }
    }).catch(e => {
      console.log(e);
    });
  }
}
