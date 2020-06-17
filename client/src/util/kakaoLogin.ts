//@ts-nocheck

export function kakaoAPI() {
  function initKakao() {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    console.log("Kakao Test:", window.Kakao.isInitialized());
  }
}
