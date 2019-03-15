import {Component} from 'react';
import React from 'react';
import {Link} from "react-router-dom";
import axios from "../../utils/axios";
import UserInfo from "./UserInfo";
const mockUser = {
  "name": "...",
  "about": "...",
  "friends": []
};

class UserInfoLoader extends Component {
  constructor(props) {
    super(props);

    const {history} = props;
    props.user = this.getUser(this.props.userId);
    if (props.user === undefined) {
      history.push('/users');
    }
  }

  fetchUsers = async () => {
    axios.get('/users')
    .then(({data: users}) => {
      this.props.fetchUsersSuccess(users);
    })
    .catch(error => {
      this.props.fetchUsersFailure(error);
    });
  };

  getUser = async (id) => {
    return new Promise((resolve, reject) => {
      const user = this.props.users.find(u => u.id === id);
      if (user === undefined && this.props.users.length === 0) {
        this.fetchUsers();
        return mockUser;
      }

      return user;
    })
  };

  componentDidMount() {

  }

  render() {
    return (
      <UserInfo {...this.props} />
    );
  }
}

export default UserInfoLoader;