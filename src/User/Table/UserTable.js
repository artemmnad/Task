import { Component } from 'react';
import { Table, Button } from 'antd';
import React from 'react';
import axios from '../../utils/axios';
import {genders} from '../../constants';
import { DatePicker } from 'antd';
import {Link} from "react-router-dom";

const { RangePicker } = DatePicker;

class UserTable extends Component {

  componentDidMount() {
    const users = this.props.users;
    if (users && users.length) {
      return;
    }

    this.props.fetchUsersBegin();

    axios.get('/users')
    .then(({data: users}) => this.props.fetchUsersSuccess(users))
    .catch(error => this.props.fetchUsersFailure(error))
  }

  // DD.MM.YYYY
  formatDate = (date) => {
    return date.toLocaleDateString('ru-RU');
  };

  genderFilter = Object.entries(genders).map(([key, val]) => ({text: val, value: key}));

  columns = [{
    title: 'Id',
    dataIndex: 'id',
    render: id => (
      <Link to={`/users/${id}`}>{id}</Link>
    )
  }, {
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a - b,
    defaultSortOrder: 'descend'
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: this.genderFilter,
    onFilter: (value, record) => record.gender === value,
  }, {
    title: 'Registered',
    dataIndex: 'registered',
    key: 'registered',
    render: (registered) => (
      <span>{this.formatDate(registered)}</span>
    ),
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
      return (
        <span>
          <RangePicker onChange={datePair => {
            const filterKey = datePair[0] ? [{left: datePair[0]._d, right: datePair[1]._d}] : [];
            setSelectedKeys(filterKey);
            confirm();
          }}/>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon="search"
            size="small"
            style={{width: 90, marginRight: 8}}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{width: 90}}
          >
            Reset
          </Button>
        </span>);
    },
    onFilter: (value, record) =>
      (value.left <= record.registered && record.registered <= value.right),
  }, {
    title: 'Delete',
    key: 'action',
    render: (value, record) => (
      <Button onClick={() => this.props.deleteUser(record.id)}>Delete</Button>
    )
  }];

  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={this.props.users}
        loading={this.props.loading}
        rowKey='id'
      />
    );
  }
}

export default UserTable