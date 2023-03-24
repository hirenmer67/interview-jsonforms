import React, { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import Header from "../component/Header";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;

const Home = ({ ContentComponent }) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = {
    name: "Mark",
  };

  return (
    <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            boxShadow: "0px 0px 20px 2px #d3cccc",
            background: "#ffffff",
          }}
        >
          <div
            className="logo"
            style={{
              color: "black",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Super
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <Link
                    to={"/user_dashboard/attendance"}
                    style={{ color: "black" }}
                  >
                    <CheckOutlined />
                  </Link>
                ),
                label: "Attendance",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            setCollapsedAside={setCollapsed}
            collapsed={collapsed}
            user={user}
          />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "85vh",
              background: colorBgContainer,
              color: "black",
            }}
          >
            <ContentComponent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
