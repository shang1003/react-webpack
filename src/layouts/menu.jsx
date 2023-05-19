import React from 'react';
import {
  DesktopOutlined,
  DatabaseOutlined,
  HomeOutlined,
  DatabaseFilled,
  AppstoreOutlined,
  SwitcherOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

const renderMenu = () => {

  const menu = [
    {
      path: '/base/overview',
      name: "首页",
      key: 'overview',
      icon: <HomeOutlined />,
      level: 0,
      hasBreadcrumb: false,
      hasChildren: false,
    },
    {
      path: '/test',
      name: "菜单1",
      key: 'test',
      icon: <DesktopOutlined />,
      children: [
        {
          path: '/test/content',
          name: "子菜单",
          key: 'instance',
          level: 1,
        },
      ],
    },
  ];
  return menu;
};

export default renderMenu;
