import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  SearchOutlined,
  FieldTimeOutlined,
  UnorderedListOutlined,
  BarChartOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;


export default function MainSider(props) {
  const [collapsed, setCollapsed] = useState(true);
  return (

    <Sider
      collapsedWidth={"57px"}
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <MainMenu />
    </Sider>
  );
}

export function MainMenu(props) {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
    // defaultOpenKeys={["sub1"]}
    // inlineCollapsed={this.state.collapsed}
    >
      <Menu.Item key="1" icon={<SearchOutlined />}>
        Search dashboards
      </Menu.Item>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Monitoring">
        <Menu.Item key="13">Dashboards</Menu.Item>
      </SubMenu>
      <Menu.Item key="3" icon={<FieldTimeOutlined />}>
        Option 3
      </Menu.Item>
      <SubMenu key="sub2" icon={<UnorderedListOutlined />} title="Option 4">
        <Menu.Item key="5">SubOption 1</Menu.Item>
        <Menu.Item key="6">SubOption 2</Menu.Item>
        <Menu.Item key="7">SubOption 3</Menu.Item>
        <Menu.Item key="8">SubOption 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<BarChartOutlined />} title="Option 5">
        <Menu.Item key="9">SubOption 9</Menu.Item>
        <Menu.Item key="10">SubOption 10</Menu.Item>
        <SubMenu key="sub4" title="Submenu">
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
}