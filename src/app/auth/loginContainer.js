import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../state/auth/login/actions';
import LoginComponent from './loginComponent';
const mapStateToProps = (state) => {
  return {
    loginUserStart: state.login.loginUserStart,
    loginUserSuccess: state.login.loginUserSuccess,
    loginUserFail: state.login.loginUserFail,
    user: state.login.user,
    errors: state.login.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        loginUser
      },
      dispatch
    )
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;
