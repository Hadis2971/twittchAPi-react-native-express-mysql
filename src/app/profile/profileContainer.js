import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserProfile } from '../../state/profile/actions';
import ProfileComponent from './profileComponent';

const mapStateToProps = (state) => {
  return {
    firstName: state.login.firstName,
    lastName: state.login.lastName,
    username: state.login.username,
    userEmail: state.login.userEmail,
    updateUserProfileStart: state.profile.updateUserProfileStart,
    updateUserProfileSuccess: state.profile.updateUserProfileSuccess,
    updateUserProfileFail: state.profile.updateUserProfileFail,
    data: state.profile.data,
    errors: state.profile.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        updateUserProfile
      },
      dispatch
    )
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
export default ProfileContainer;
