import { observable, action } from "mobx";

export class EventStore {
  @observable isClicked = false;

  @observable isSignUp = false;

  @observable isLogin = false;

  @observable token = "";

  @action
  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.isClicked = !this.isClicked;

    /* isTrue ? */
    console.log("isTrue? :", this.isClicked);
  };

  @action
  changeToken = (accessToken: string) => {
    this.token = accessToken;
    return this.token;
  };
}
