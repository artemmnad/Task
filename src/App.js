import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UserTableContainer from "./User/UserTableContainer";
import {
  Layout,
  Select,
  DatePicker
} from 'antd';
const { Content, Header } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <Select />
            <DatePicker />
          </Header>
          <Content>
            <Route exact path="/" render={() => (<Redirect to="/users"/>)} />
            <Route path="/users" component={UserTableContainer} />
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
