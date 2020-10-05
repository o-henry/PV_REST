"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = (query) => {
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
        //김치
        case "%EA%B9%80%EC%B9%98":
            query = "%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98";
            break;
    }
    return query;
};
//# sourceMappingURL=queryhandler.js.map