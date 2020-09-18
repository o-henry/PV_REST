import { xhrAPI } from "@util/axios";

import { AxiosInstance } from "axios";

export abstract class BaseProvider {
  protected instance: AxiosInstance | null;

  constructor() {
    this.instance = null;
  }

  setInstance(url: string, headers: any) {
    this.instance = xhrAPI(url, headers);
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }

  getInstance() {
    return this.instance;
  }
}
