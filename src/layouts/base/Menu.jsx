import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import styles from "./index.less";
const { SubMenu } = Menu;
import rootStore from "../../store/mobx/rootStore";
import classnames from "classnames";
export const LayoutMenu = ({ menu, collapsed, pathname }) => {
  const [openKeys, setOpenKeys] = useState("");
  useEffect(() => {
    updateOpenKeysByRoute();
  }, [pathname, collapsed]);

  const onClickMenuItem = ({ key }) => {
    rootStore.routing.push(key);
  };

  //根据路由是否展开菜单
  const updateOpenKeysByRoute = () => {
    const currentOpenKeys = getOpenKeysByRoute();
    setOpenKeys(currentOpenKeys);
  };

  const getOpenKeysByRoute = () => {
    const currentOpenKeys = getCurrentOpenKeys(pathname);
    return currentOpenKeys;
  };

  const getCurrentOpenKeys = (pathname) => {
    return getFirstLevelKeys(pathname);
  };

  const getFirstLevelKeys = (pathname) => {
    const fathers = menu.filter((it) => {
      const { children = [] } = it;
      if (!children.length) {
        return pathname.includes(it.path);
      }
      let hasFather = children.find((c) => pathname.includes(c.path));
      if (hasFather) {
        return true;
      }
      children.forEach((c) => {
        const { children: cc = [] } = c;
        const child = cc.find((ccc) => pathname.includes(ccc.path));
        if (child) {
          hasFather = true;
        }
      });
      return hasFather;
    });
    return fathers.map((f) => f.path);
  };

  const renderMenuItem = (item) => {
    if (item.level > 1) {
      return null;
    }
    if (!item.children || item.children.length === 0 || item.level) {
      return (
        <Menu.Item key={item.path} onClick={onClickMenuItem}>
          {item.icon}
          <span>{item.name}</span>
        </Menu.Item>
      );
    }
    const title = (
      <span>
        {item.icon}
        <span>{item.name}</span>
      </span>
    );
    const subMenuItems = item.children.map((it) => renderMenuItem(it));

    return (
      <SubMenu key={item.path} title={title}>
        {subMenuItems}
      </SubMenu>
    );
  };

  const renderMenu = (pathname) => {
    const menuItems = menu
      .map((item) => renderMenuItem(item))
      .filter((it) => it !== null);

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        {menuItems}
      </Menu>
    );
  };

  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys);
  };
  return (
    <div
      className={classnames(
        styles["base-layout-sider"],
        collapsed ? styles["base-layout-sider-collapsed"] : ""
      )}
    >
      {renderMenu(pathname)}
    </div>
  );
};
