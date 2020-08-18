import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { menu, pie, radio } from "@/assets";
import { Button } from "@/components";
import { useStores } from "@/hooks";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import BarChart from "@material-ui/icons/BarChart";
import Mic from "@material-ui/icons/Mic";

const actions = [
  { icon: <BarChart />, name: "Chart" },
  { icon: <Mic />, name: "Mic" },
];

export default function OpenIconSpeedDial() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="menu">
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className="menu dial"
        icon={<img src={menu} alt="menu" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={"right"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            className="menu action"
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
