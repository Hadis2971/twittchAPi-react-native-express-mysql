import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Formik } from 'formik';
import { MyInput, Form } from '../common/userInput';
import Alert from '../common/alert';
import styles from '../../styles/forgotPass';
import spinnerStyles from '../../styles/spinner';
import validationSchema from '../../validation/forgot';
import alertStyle from '../../styles/alert';
class ForgotPasswordCompoent extends PureComponent {
 
  constructor (props) {
    super(props);
    this.state = {
      showAlert: false
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errors) {
      this.setState({
        showAlert: true
      });
    }
  }


  submitFormHandler = async (email) => {
    const { sendForgotPassEmail } = this.props.actions;
    await sendForgotPassEmail(email);
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render () {
    const { showAlert } = this.state;
    const { sendEmailStart, sendEmailSuccess, sendEmailFail, errors } = this.props;
    
    return (
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={this.submitFormHandler}
      >
        {props => (
          <View>
             {showAlert && 
               <View style={alertStyle.container}>
              <Alert 
                  showMyAlert={showAlert}
                  title='Forgot Password Error'
                  message={errors}
                  confirmText='OK'
                  buttonColor='#DD6B55'
                  hideMyAlert={this.hideAlert}
                />
              </View>}
             <Spinner 
              visible={sendEmailStart}
              textContent={'Please Wait...'}
              textStyle={spinnerStyles.spinnerTextStyle}
            />
            <Text style={styles.hdr}>Please Enter Your Email Address</Text>
            <Form style={styles.form}>
              <MyInput style={styles.input} label='Email' name='email' type='email' />
              <Button
                onPress={props.handleSubmit}
                title='Submit'
              />
            </Form>
          </View>
        )}
      </Formik>
    );
  }
}

export default ForgotPasswordCompoent;
