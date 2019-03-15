import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import {withRouter} from 'react-router-dom';
import UserInfoLoader from "./UserInfoLoader";

const mapStateToProps = (state, ownProps) => {
  console.log('state', state);
  console.log('props', ownProps);
  return ({
    ...state,
    history: ownProps.history,
    userId: ownProps.match.params.id
  });
};

export default withRouter(connect(
  mapStateToProps
)(UserInfoLoader));