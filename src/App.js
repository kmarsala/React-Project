import React from 'react';
import { Layout } from 'antd';
import './App.less';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>My Application</Header>
        <Layout>
          <Sider collapsible>Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
