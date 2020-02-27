import React from 'react';
import { Layout } from 'antd';
import MyHeader from './components/Layout/Header';
import SideBar from './components/Layout/SideBar';
import './App.less';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <MyHeader />
        <Layout>
          <SideBar />
          <Content>Content</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
