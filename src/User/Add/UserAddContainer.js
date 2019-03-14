import { connect } from 'react-redux'
import UserAdd from './UserAdd'
import {
  addUser,
} from '../store/actions';

const mapStateToProps = state => {
  console.log('state', state);
  return ({ ...state });
};

const mapDispatchToProps = dispatch => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  fetchUsersBegin: () => dispatch(fetchUsersBegin()),
  fetchUsersSuccess: (users) => dispatch(fetchUsersSuccess(users)),
  fetchUsersFailure: (error) => dispatch(fetchUsersFailure(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable)