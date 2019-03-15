import { connect } from 'react-redux'
import UserAdd from './UserAdd'
import {
  addUser,
} from '../store/actions';
import {withRouter} from "react-router-dom";
import {Form} from "antd";

const mapStateToProps = state => {
  console.log('state', state);
  return ({ ...state });
};

const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch(addUser(user)),
});

const wrappedUserAddForm = Form.create()(UserAdd);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(wrappedUserAddForm));