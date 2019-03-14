import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UserTableContainer from './User/Table/UserTableContainer';
import {
  Layout,
  Select,
  DatePicker
} from 'antd';
import UserAddContainer from "./User/Add/UserAddContainer";
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

const routesHeader = routes
  .filter(r => !r.redirect)
  .map((route, index) => (
      <Link key={index}
            to={route.path}
      >
        {route.header}
      </Link>
  ));

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <Select />
            <DatePicker />
            {/*{routesHeader}*/}
          </Header>
          <Content>
            <Route exact path='/' render={() => (<Redirect to='/users'/>)} />
            <Route path='/users' component={UserTableContainer} />
            <Route path='/users/add' component={UserAddContainer} />
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
