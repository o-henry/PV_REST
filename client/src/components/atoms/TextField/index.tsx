import React from "react";
import classNames from "classnames";
import { IText } from "@/interface";

/**
 * @param children => list 뽑아올 명명 / 일일 칼로리
 */

const TextField = ({ children, style }: IText): React.ReactElement => {
  return (
    <>
      <p className={classNames("Text", style)}>{children}</p>
    </>
  );
};

export default TextField;
