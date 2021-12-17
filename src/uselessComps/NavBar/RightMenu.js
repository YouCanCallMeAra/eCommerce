import React from "react";
import { Menu, Grid } from "antd";

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item>
        <a href="">Signin</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">Signup</a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
