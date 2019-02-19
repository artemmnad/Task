import React, { Component } from 'react';
import data from './data';
import {
  Layout,
  Table,
  Select,
  DatePicker
} from 'antd';
const { Content, Header } = Layout;

const columns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'gender',
  dataIndex: 'gender',
  key: 'gender',
}, {
  title: 'registered',
  dataIndex: 'registered',
  key: 'registered',
}];

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <Select />
          <DatePicker />
        </Header>
        <Content>
          <Table dataSource={data} columns={columns} />
        </Content>
      </Layout>
    );
  }
}

export default App;
