import React from "react";
import { Menu, Grid } from "antd";
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item style={{ paddingRight: "5px", paddingLeft: "5px" }}>
        <a href="">Home</a>
      </Menu.Item>
      <Menu.Item style={{ paddingRight: "5px", paddingLeft: "5px" }}>
        <a href="">Categories</a>
      </Menu.Item>
      <Menu.Item style={{ paddingRight: "5px", paddingLeft: "5px" }}>
        <a href="">Products</a>
      </Menu.Item>
      <Menu.Item style={{ paddingRight: "5px", paddingLeft: "5px" }}>
        <a href="">About Us</a>
      </Menu.Item>
      <Menu.Item style={{ paddingRight: "5px", paddingLeft: "5px" }}>
        <a href="">About Us</a>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
