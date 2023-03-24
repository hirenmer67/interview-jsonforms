import { Layout, Button } from "antd";
const { Header } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import BreadcrumbCom from "./Breadcrumb";
import React from "react";

const header = ({ collapsed, setCollapsedAside, user }) => {
  return (
    <Header
      style={{
        padding: 0,
        background: "rgb(195 73 73)",
        borderRadius: "10px",
        margin: "10px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsedAside((prev) => !prev),
            }
          )}
          <BreadcrumbCom />
        </div>
        <div>
          <span>
            <Button type="text" style={{color: "white", fontWeight: 700 }}>Set Password</Button>
          </span>
          <span>
            <Button type="text" style={{color: "white", fontWeight: 700 }}>LOUGOT</Button>
          </span>
          <span>
            <b>&nbsp;|&nbsp;&nbsp;</b>
          </span>
          <span>
            Hi, {user.name}&nbsp;&nbsp;
          </span>
          <span>
            <Button type="text" style={{color: "white", fontWeight: 700 }}><SettingOutlined /></Button>
          </span>
        </div>
      </div>
    </Header>
  );
};

export default header;
