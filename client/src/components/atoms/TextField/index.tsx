import React from "react";
import classNames from "classnames";
import { IText } from "@/interface";

const TextField = ({ children, style }: IText) => {
  return (
    <>
      <p className={classNames("Text", style)}>{children}</p>
    </>
  );
};

export default TextField;
