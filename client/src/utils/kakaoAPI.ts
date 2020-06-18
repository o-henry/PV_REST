//@ts-nocheck

export function kakaoAPI() {
  function initKakao() {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    console.log("Kakao Test:", window.Kakao.isInitialized());
  }

  function authKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: "http://developers.kakao.com/kakaoLogin.jsp",
    });
  }

  function loginKakao() {
    window.Kakao.Auth.login({
      success: function (response: any) {
        console.log("response: ", response);
      },
      fail: function (error: any) {
        console.error("error: ", error);
      },
    });
  }

  return {
    initKakao,
    loginKakao,
    authKakao,
  };
}
