import React from "react";
import { observer } from "mobx-react";
import classNames from "classnames";

import { IButton } from "@/interface";
import { useStores } from "@/hooks";

const Button = observer(
  ({ prop, children, style }: IButton): React.ReactElement => {
    const { event } = useStores();

    return (
      <>
        <button
          className={classNames("Button", style)}
          onClick={prop ? prop && event.onClick : event.onClick}
        >
          {children}
        </button>
      </>
    );
  }
);

export default Button;
