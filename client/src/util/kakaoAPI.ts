//@ts-nocheck

export function kakaoAPI() {
  function initKakao() {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    console.log("Kakao Test:", window.Kakao.isInitialized());
  }

  function loginKakao() {
    window.Kakao.Auth.login({
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.error(error);
      },
    });
  }

  return {
    initKakao,
    loginKakao,
  };
}
