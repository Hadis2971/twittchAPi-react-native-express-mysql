import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterComponent from './registerComponent';
import { registerUser } from '../../state/auth/register/actions';
const mapStateToProps = (state) => {
  return {
    registerUserStart: state.register.registerUserStart,
    registerUserSuccess: state.register.registerUserSuccess,
    registerUserFail: state.register.registerUserFail,
    errors: state.register.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        registerUser
      },
      dispatch
    )
  };
};

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

export default RegisterContainer;
