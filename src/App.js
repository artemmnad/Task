import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UserTableContainer from './User/Table/UserTableContainer';
import {
  Layout,
  Select,
  DatePicker
} from 'antd';
import UserAddContainer from "./User/Add/UserAddContainer";
import UserInfoContainer from "./User/Info/UserInfoContainer";
import axios from "./utils/axios";
const { Content, Header } = Layout;

const routes = [
  {
    path: "/",
    exact: true,
    redirect: '/users',
  },
  {
    path: "/users",
    header: 'table',
    component: () => UserTableContainer
  },
  {
    path: "/users/add",
    header: 'add',
    component: () => UserAddContainer
  }
];

const headerLinkStyle = {
  padding: '10px',
};

const routesHeader = routes
  .filter(r => !r.redirect)
  .map((route, index) => (
      <Link
        key={index}
        to={route.path}
        style={headerLinkStyle}
      >
        {route.header}
      </Link>
  ));

class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header style={{padding: '0 10%'}}>
            {routesHeader}
            <span>
              <Select />
              <DatePicker />
            </span>
          </Header>
          <Content style={{width: '80%', margin: 'auto'}}>
            <Route exact path='/' render={() => (<Redirect to='/users'/>)} />
            <Route exact path='/users' component={UserTableContainer} />
            <Route path='/users/:id' component={UserInfoContainer} />
            <Route exact path='/users/add' component={UserAddContainer} />
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
