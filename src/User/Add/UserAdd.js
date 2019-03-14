import { Component } from 'react';
import { Table, Button } from 'antd';
import React from 'react';
import {genders} from '../../constants';
import { Form, Input, InputNumber } from 'antd';

class UserAdd extends Component {

  handleSumbit = (e) => {
    e.preventDefault();
    console.log(e);
  }; k

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label='name'>
          <Input maxLength={5}/>
        </Form.Item>
        <Form.Item label='age'>
          <InputNumber min={18} max={150} />
        </Form.Item>
        <Form.Item label='gender'>
          <Input />
        </Form.Item>
      </Form>
    );
  }
}

export default UserAdd;