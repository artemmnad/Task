import { connect } from 'react-redux'
import UserTable from './UserTable'
import {
  deleteUser,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure
} from '../User/store/actions';

const mapStateToProps = state => {
  console.log('state', state);
  return ({...state
  });
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