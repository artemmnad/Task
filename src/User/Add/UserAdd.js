import { Component } from 'react';
import React from 'react';
import {genders} from '../../constants';
import { Form, Input, InputNumber, Select, Button } from 'antd';
const {Item: FormItem} = Form;
const {Option} = Select;

class UserAdd extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.addUser(values);
      }
    });
  };

  validateName = (rule, value, callback) => {
    if (value && value.length < 5) {
      callback('Name length must be more than 5 symbols');
      return;
    }

    callback();
  };

  validateAge = (rule, value, callback) => {
    if (!value) {
      callback();
      return;
    }

    if (value < 18) {
      callback('Age should be more than 18');
      return;
    }

    if (value > 150) {
      callback('Age should be less than 150');
      return;
    }

    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} style={{width: '30%'}}>
        <FormItem label='Name'>
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Name is required',
            }, {
              validator: this.validateName,
            }],
          })(
            <Input
              autoCorrect='off'
              autoCapitalize='none'
              autoComplete='off'
              spellCheck={false}
              autoFocus={true} />
          )}
        </FormItem>
        <FormItem label='Age'>
          {getFieldDecorator('age', {
            rules: [{
              required: true, message: 'Age is required',
            }, {
              validator: this.validateAge
            }],
          })(
            <InputNumber min={1} precision={0} style={{width: '100%'}} />
          )}
        </FormItem>
        <FormItem label='Gender'>
          {getFieldDecorator('gender', {
            rules: [{
              required: true, message: 'Gender is required',
            }],
          })(
            <Select>
              {(Object.entries(genders).map(([key, value]) => (
                <Option key={key} value={key}>{value}</Option>
              )))}
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit'>Add</Button>
        </FormItem>
      </Form>
    )
  }
}

export default UserAdd;