import React, { useState } from 'react';
import { Menu, Tooltip,Button } from 'antd';

import { toJS } from 'mobx';
import styles from './index.css'
const { SubMenu } = Menu;
import rootStore from '../../store/mobx/rootStore';
import classnames from 'classnames'
export const LayoutMenu = ({ menu ,collapsed}) => {

  const maxTitleLength = 17

  const onClickMenuItem = ({ key }) => {
    console.log(key, 'key');
    // const path = getPath({ key });
    // const { pathname } = this.props;
    // if (pathname !== path) {
    rootStore.routing.push(key);
    // }
  };

  const renderMenuItem = (item) => {
    if (item.level > 1) {
      return null;
    }
    if (!item.children || item.children.length === 0 || item.level) {
      return (
        <Menu.Item
          key={item.path}
          onClick={onClickMenuItem}
        >
          {item.icon}
          <span >
            {item.name.length >= maxTitleLength ? (
              <Tooltip title={item.name} placement="right">
                {item.name}
              </Tooltip>
            ) : (
              item.name
            )}
          </span>
        </Menu.Item>
      );
    }
    const title = (
      <span>
        {item.icon}
        <span>
          {item.name.length >= maxTitleLength ? (
            <Tooltip title={item.name} placement="right">
              {item.name}
            </Tooltip>
          ) : (
            item.name
          )}
        </span>
      </span>
    );
    const subMenuItems = item.children.map((it) => renderMenuItem(it));

    return (
      <SubMenu key={item.key} title={title}>
        {subMenuItems}
      </SubMenu>
    );
  };


  const renderMenu = (selectedKeys = []) => {
    const menuItems = menu
      .map((item) => renderMenuItem(item))
      .filter((it) => it !== null);

    return (
      <Menu
        theme="dark"
        mode="inline"
      // className={collapsed ? styles['menu-collapsed'] : styles.menu}
      // defaultSelectedKeys={newSelectedKeys}
      // selectedKeys={newSelectedKeys}
      // openKeys={openKeys}
      // onOpenChange={this.onOpenChange}
      >
        {menuItems}
      </Menu>
    );
  };

  const onOpenChange = (openKeys) => {
    const { openKeys: stateOpenKeys } = this.state;
    const { openKeys: defaultOpenKeys } = this.rootStore;
    const oldKeys = Array.from(
      new Set(stateOpenKeys.concat(toJS(defaultOpenKeys)))
    );
    const latestOpenKey = openKeys.find((key) => oldKeys.indexOf(key) === -1);
    const newKeys = latestOpenKey ? [latestOpenKey] : [];
    this.updateOpenKeys(newKeys);
  };

 console.log(collapsed,'collapsed');

  return (
    <div
      className={classnames(
        styles['base-layout-sider'],
        collapsed ? styles['base-layout-sider-collapsed'] : '',
      )}
    >
      {renderMenu()}

    </div>
  );
}
