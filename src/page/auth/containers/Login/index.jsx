import React, { useRef } from "react";
import styles from "./index.less";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import rootStore from "src/store/mobx/rootStore";
import { login } from "src/client/login";
import Notify from "../../../../component/notify";
export const Login = () => {
  const formRef = useRef();
  const onsubmit = () => {
    formRef.current
      .validateFields()
      .then((values) => {
        login(values)
          .then(() => {
           Notify.success("成功",'登录成功')
            rootStore.routing.push("/overview/base");
          })
          .catch((res) => {
            formRef.current.resetFields()
         Notify.error("错误",'用户名或密码错误')
         console.log(res);
          });
      })
      .catch((errorInfo) => {
        console.log(errorInfo, "errorInfo");
      });
  };
  return (
    <>
      <div className={styles.wrapper}>
   
        <div className="login">
          <p className="login-title">欢迎你</p>
          <Form wrapperCol={{ span: 24 }} ref={formRef}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="用户名" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={onsubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
