import React from "react";
import { IButton } from "@/interface";
import classNames from "classnames";

const Button = ({ children, style, onClick }: IButton): React.ReactElement => {
  return (
    <>
      <button className={classNames("Button", style)} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
