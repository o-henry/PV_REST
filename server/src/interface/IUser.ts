export enum Provider {
  GOOGLE = "google",
  KAKAO = "kakao",
  NAVER = "naver",
  LOCAL = "local",
}

export interface IUser {
  // provider: Provider;
  sns: number;
}
