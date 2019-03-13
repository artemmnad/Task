import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UsersScreen from './screens/UsersScreen';
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
      <Provider store={this.props.store}>
        <Router>
          <Layout>
            <Header>
              <Select />
              <DatePicker />
            </Header>
            <Content>
              <Route exact path="/" render={() => (<Redirect to="/users"/>)} />
              <Route path="/users" component={UsersScreen} />
            </Content>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
