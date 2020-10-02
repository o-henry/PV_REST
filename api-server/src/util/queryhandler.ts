export const handler = (query: string) => {
  switch (query) {
    //밥
    case "%EB%B0%A5":
      query = "%ED%96%87%EB%B0%98%20%EC%9D%B4%EC%B2%9C%20%EC%8C%80%EB%B0%A5";
      break;

    //맥심
    case "%EB%A7%A5%EC%8B%AC":
      query = "%EC%BB%A4%ED%94%BC%20%EB%AF%B9%EC%8A%A4";
      break;

    //맥심커피믹스
    case "%EB%A7%A5%EC%8B%AC%20%EC%BB%A4%ED%94%BC%20%EB%AF%B9%EC%8A%A4":
      query = "%EC%BB%A4%ED%94%BC%20%EB%AF%B9%EC%8A%A4";
      break;
  }
  return query;
};
