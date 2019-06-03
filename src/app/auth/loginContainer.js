import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../state/auth/login/actions';
import LoginComponent from './loginComponent';
const mapStateToProps = (state) => {
  return {

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
