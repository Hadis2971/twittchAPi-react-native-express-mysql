import { connect } from 'react-redux';
import HomeComponent from './homeComponent';

const mapStateToProps = (state) => {
  return {
    userID: state.login.userID,
    userEmail: state.login.userEmail,
    username: state.login.username,
    firstName: state.login.firstName,
    lastName: state.login.lastName
  };
};

const HomeContainer = connect(mapStateToProps, null)(HomeComponent);
export default HomeContainer;
