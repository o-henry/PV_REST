import React from "react";
import classNames from "classnames";
import { ICount } from "@/interface";

const Count = ({ children, style }: ICount): React.ReactElement => {
  return (
    <>
      <div className={classNames("Count", style)}>{children}</div>
    </>
  );
};

export default Count;
