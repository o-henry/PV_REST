import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import { Card } from "@/components";

const MenuList = ({ value, handleChange }: any) => {
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList
            className="tab"
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Today" value="1" />
            <Tab label="Weeks" value="2" />
            <Tab label="Month" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Card />
        </TabPanel>
        <TabPanel value="2">
          <Card />
        </TabPanel>
        <TabPanel value="3">
          <Card />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default MenuList;
