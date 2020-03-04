import React from 'react';
import { Layout } from 'antd';
import MyHeader from './components/Layout/Header';
import SideBar from './components/Layout/SideBar';
import MainContent from './components/Layout/MainContent';
import './App.less';

function App() {
  return (
    <div className="App">
      <Layout>
        <MyHeader />
        <Layout>
          <SideBar />
          <MainContent />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
