
import React, { useRef, useState } from 'react';
import './index.less'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import rootStore from 'src/store/mobx/rootStore';
export const Login = () => {
  const onsubmit = () => {
    rootStore.routing.push('/overview/base')
  }
  return <>
    <div className="wrapper">
      <div className="login">
        <p className='login-title'>欢迎你</p>
        <Form
          wrapperCol={{ span: 24 }}
        // ref={formRef}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="用户名" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item

            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
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

}
