import { UserOutlined } from "@ant-design/icons";
import styles from './index.less'
import { Avatar,Popover,Button  } from "antd";
import rootStore from "@/store/mobx/rootStore";
import { userAdminInfo } from "@/context/admin/AdminInfoContextProvider";
import React from "react";
const App = () => {
  const {userInfo}=userAdminInfo()
  const logout=()=>{
    localStorage.clear()
    rootStore.routing.push("/login");
  }
  const PopoverContent = (
  <Button type="text" className="popover-content" onClick={logout}>
      退出登录
  </Button>
)
 return <div className={styles.wrapper}>
    <Popover  placement="bottomRight" content={PopoverContent}>
    <Avatar
    className={styles.avatar}
      size={40}
      icon={<UserOutlined />}
    />
 <span className={styles.user}>{userInfo.username}</span>
    </Popover>
  </div>
}
export default App;
