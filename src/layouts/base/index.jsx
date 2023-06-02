import { Layout, Space, Button } from "antd";
import React, { useState, Suspense } from "react";
import { LayoutMenu } from "./Menu";
import renderMenu from "../menu";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import renderRoutes from "../../utils/RouterConfig";
import { inject } from "mobx-react";
import Avatar from "./avatar";
import PageLoading from 'components/PageLoading';
const { Header, Sider, Content } = Layout;
const headerStyle = {
 zIndex:999,
  paddingLeft: "0",
  lineHeight: "64px",
  backgroundColor: "#FFF",
  boxShadow:"0 2px 20px 0 rgb(0,0,0,9%)"
};
const contentStyle = {
  minHeight: 120,
  backgroundColor: "#fff",
};

const App = (props) => {
  const {
    routes,
    location: { pathname },
  } = props;
  const [collapsed, setCollapsed] = useState(false);
  const renderTrigger = () => {
    return (
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          float: "left",
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    );
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <LayoutMenu
            pathname={pathname}
            menu={renderMenu()}
            collapsed={collapsed}
          />
        </Sider>
        <Layout>
          <Header style={headerStyle}> 
              {renderTrigger() }
              <Avatar/>
          </Header>
          <Content style={contentStyle}>
            <Suspense fallback={<PageLoading/>}>
              {renderRoutes(routes)}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};

//inject 函数组件 使用provider 中提供的store {rootStore:....}
export default inject((store) => {
  return store;
})(App);
