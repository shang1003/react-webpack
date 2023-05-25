import { UserOutlined } from "@ant-design/icons";
import styles from './index.less'
import { Avatar } from "antd";
import React from "react";
const App = () => (
  <div className={styles.wrapper}>
    <Avatar
    className={styles.avatar}
      size={40}
      icon={<UserOutlined />}
    />
 <span>{"zhangsan"}</span>

  </div>
);
export default App;
