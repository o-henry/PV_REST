//@ts-nocheck
import { createUser } from "@/api/user";

export function kakaoAPI() {
  function initKakao() {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    console.log("Kakao Test:", window.Kakao.isInitialized());
  }

  async function requestKakao() {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (response: any) {
        console.log("request data: ", JSON.stringify(response));
        createUser(response);
      },
      fail: function (error: any) {
        alert(
          "login success, but failed to request user information: " +
            JSON.stringify(error)
        );
      },
    });
  }

  async function loginKakao() {
    await window.Kakao.Auth.login({
      scope: "age_range,gender",
      success: function (response: any) {
        console.log("response: ", response);
        window.localStorage.setItem("token", response.access_token);
        requestKakao();
      },
      fail: function (error: any) {
        console.error("error: ", error);
      },
    });
  }

  return {
    initKakao,
    loginKakao,
  };
}
