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
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAdd)