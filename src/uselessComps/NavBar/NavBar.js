import React, { useState } from "react";
// import { logout } from "../../features/userSlice";
// import { useDispatch, useSelector } from "react-redux";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import "./navbar.css";

export default function NavBar() {
  const [state, setState] = useState(false);
  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="">logo</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={state.visible}
        >
          {/* <LeftMenu /> */}
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
}
