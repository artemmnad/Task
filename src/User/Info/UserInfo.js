import { Component } from 'react';
import React from "react";
import {Link} from "react-router-dom";

class UserInfo extends Component {

  render() {
    const user = this.props.user;

    this.friendsRows = user.friends.map(friendId => {
      const friend = this.getUser(friendId);
      return (
        <tr>
          <td>
            <Link to={`/users/${friend.id}`}>{friend.name}</Link>
          </td>
          <td>
            {friend.age}
          </td>
        </tr>
      )
    });

    return (
      <div>
        <span>{user.name}</span>
        <span>{user.about}</span>
        <tbody>
          {this.friendsRows}
        </tbody>
      </div>
    )
  }
}

export default UserInfo;