import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';


export const E404=()=>{
  const actions = (
    <Link to="/base/overview">
      <Button type="primary">回到首页</Button>
    </Link>
  );
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面不存在"
      extra={actions}
    />
  );
}

