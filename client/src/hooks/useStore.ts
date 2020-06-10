import React, { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

/**
 * @useContext 해당 API는 파라미터로 전달된 Context의 현재값을 반환한다.
 * @MobXProviderContext mobx-react의 Provider가 제공하는 store 객체를 가져올 수 있다.
 */

function useStores() {
  return useContext(MobXProviderContext);
}

export default useStores;
