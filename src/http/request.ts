import * as Api from "./api";
import axios from "axios";

interface RequestOptions {
  autoError: boolean;
  autoSuccess: boolean;
  auth: boolean;
}

function success(res: any) {
  console.log(res);
}

function fail({ response }: any) {
  if (response) {
    // TODO
    console.log(response.data);
  } else {
    // TODO 
  }
}

export function request() { }

export function post(
  url: string,
  data: any,
  options: RequestOptions = {
    autoError: true,
    autoSuccess: true,
    auth: true
  }
) {
  return axios.post(url, data).then((res) => {

  }).catch(e => {

  });
}

export function get(
  url: string,
  options: RequestOptions = {
    autoError: true,
    autoSuccess: true,
    auth: true
  }
) {
  return axios.get(url, {
    headers: {

    }
  }).then(() => {

  }).catch(() => {

  })
}
