
import React from 'react';
import { notification } from 'antd';
import PropTypes from 'prop-types';
import {
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import './index.less';

const open = (args) => {
  const {
    title = t('Error'),
    type = 'error',
    description = '',
    onClose,
    top = 48,
  } = args;

  let iconColor = '#F5222D';
  let icon = null;

  if (type === 'info') {
    iconColor = '#0068FF';
    icon = <InfoCircleOutlined theme="filled" style={{ color: iconColor }} />;
  } else if (type === 'success') {
    iconColor = '#57E39B';
    icon = <CheckCircleOutlined theme="filled" style={{ color: iconColor }} />;
  } else if (type === 'error') {
    iconColor = '#EB354D';
    icon = <CloseCircleOutlined theme="filled" style={{ color: iconColor }} />;
  } else if (type === 'process') {
    iconColor = '#0068FF';
    icon = <LoadingOutlined style={{ color: iconColor }} />;
  } else if (type === 'warn') {
    iconColor = '#FEDF40';
    icon = <InfoCircleOutlined theme="filled" style={{ color: iconColor }} />;
  }

  const duration = type === 'error' || type === 'warn' ? 0 : 4.5;

  notification.open({
    message: title,
    duration,
    icon,
    description,
    className: "notify",
    onClose,
    top,
    style: {
      whiteSpace: 'pre-line',
    },
  });
};

open.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
};

const success = (title, description) => {
  open({
    title,
    description,
    type: 'success',
  });
};

const info = (title, description) => {
  open({
    title,
    description,
    type: 'info',
  });
};

const error = (title, description) => {
  open({
    title,
    description,
    type: 'error',
  });
};

const warn = (title, description) => {
  open({
    title,
    description,
    type: 'warn',
  });
};

const process = (title, description) => {
  open({
    title,
    description,
    type: 'process',
  });
};


const Notify = {
  open,
  success,
  error,
  warn,
  info,
  process,
};

export default Notify;
