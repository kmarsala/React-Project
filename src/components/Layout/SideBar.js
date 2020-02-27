import React from 'react';
import { Layout } from 'antd';
import './SideBar.less';

const { Sider } = Layout;

function SideBar() {
  return (
    <Sider collapsible className="sidebar">
      Sider
    </Sider>
  );
}

export default SideBar;
