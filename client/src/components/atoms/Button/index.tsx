import React from "react";
import { IButton } from "@/interface";
import { useStores } from "@/hooks";
import { observer } from "mobx-react";
import classNames from "classnames";

const Button = observer(
  ({ children, style }: IButton): React.ReactElement => {
    const { event } = useStores();

    return (
      <>
        <button className={classNames("Button", style)} onClick={event.onClick}>
          {children}
        </button>
      </>
    );
  }
);

export default Button;
