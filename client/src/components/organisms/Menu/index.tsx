import React, { useState } from "react";
import { Link } from "react-router-dom";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import BarChart from "@material-ui/icons/BarChart";
import Mic from "@material-ui/icons/Mic";

import { menu } from "@/assets";

const withLink = (
  to:
    | string
    | import("history").LocationDescriptorObject<{}>
    | ((
        location: import("history").Location<{}>
      ) => import("history").History.LocationDescriptor<{}>),
  children: {}
) => <Link to={to}>{children}</Link>;

const actions = [
  {
    icon: withLink("/main", <Mic />),
    name: "Mic",
  },
  {
    icon: withLink("/statistics", <BarChart />),
    name: "Chart",
  },
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
