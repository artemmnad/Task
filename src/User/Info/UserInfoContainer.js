import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log('state', state);
  console.log('props', ownProps);
  return ({
    ...state,
    hihstory: ownProps.history,
    userId: ownProps.match.params.id
  });
};

export default withRouter(connect(
  mapStateToProps
)(UserInfo));