import { connect } from 'react-redux'
import UserTable from './UserTable'
import {
  deleteUser,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure
} from '../store/actions';
import {withRouter} from "react-router-dom";

const mapStateToProps = state => {
  return ({...state});
};

const mapDispatchToProps = dispatch => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  fetchUsersBegin: () => dispatch(fetchUsersBegin()),
  fetchUsersSuccess: (users) => dispatch(fetchUsersSuccess(users)),
  fetchUsersFailure: (error) => dispatch(fetchUsersFailure(error))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable));