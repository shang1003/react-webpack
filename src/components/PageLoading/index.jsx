import React from 'react';
import { Spin } from 'antd';

const PageLoading = (props) => {
  const { className } = props;
  return (
    <div
      style={{
        textAlign: 'center',
      }}
      className={className}
    >
      <Spin size="large" />
    </div>
  );
};

export default PageLoading;
