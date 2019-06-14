import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendForgotPassEmail } from '../../state/forgotPassword/actions';
import ForgotPasswordCompoent from './forgotPassComponent';

const mapStateToProps = (state) => {
  return {
    sendEmailStart: state.forgotPassword.sendEmailStart,
    sendEmailSuccess: state.forgotPassword.sendEmailSuccess,
    sendEmailFail: state.forgotPassword.sendEmailFail,
    errors: state.forgotPassword.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        sendForgotPassEmail
      },
      dispatch
    )
  };
};

const ForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordCompoent);
export default ForgotPasswordContainer;
