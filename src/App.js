import React, { Component } from 'react';
import {
  Layout,
  Table,
  Select,
  DatePicker,
} from 'antd';
const { Content, Header } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <Select />
          <DatePicker />
        </Header>
        <Content>
          <Table />
        </Content>
      </Layout>
    );
  }
}

export default App;
