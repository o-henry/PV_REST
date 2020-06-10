import React from "react";
import classNames from "classnames";
import { IButton } from "@/interface";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

/* material-ui */
const SelectButton = ({ style, children }: IButton): React.ReactElement => {
  return (
    <>
      <div className={classNames("Button", style)}>
        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button className={classNames(style)}>1D</Button>
          <Button className={classNames(style)}>1W</Button>
          <Button className={classNames(style)}>1M</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default SelectButton;
