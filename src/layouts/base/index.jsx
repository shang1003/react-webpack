import { Layout, Space, Button } from 'antd';
import React, { useState ,Suspense} from 'react'
import { LayoutMenu } from './Menu'
import renderMenu from '../menu'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';;
import renderRoutes from '../../utils/RouterConfig'
const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#FFF',
};
const contentStyle = {
  minHeight: 120,
  backgroundColor:"#fff"
}

const App = ({ routes }) => {
  const [collapsed, setCollapsed] = useState(false)
  const renderTrigger = () => {
    return <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        float: "left",
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />

  }
  return <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <LayoutMenu menu={renderMenu()} collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          {renderTrigger()}
        </Header>
        <Content style={contentStyle}>
        <Suspense fallback={"加载中。。。。。"}>
        {renderRoutes(routes)}
        </Suspense>
      


        </Content>
      </Layout>
    </Layout>
  </Space>
}
export default App;