import React, { PureComponent } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { MyInput, Form } from '../common/userInput';
import Alert from '../common/alert';
import Spinner from 'react-native-loading-spinner-overlay';
import validationSchema from '../../validation/login';
import styles from '../../styles/login';
import spinnerStyles from '../../styles/spinner';
import alertStyle from '../../styles/alert';

class LoginComponent extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      showAlert: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        showAlert: true
      });
    }
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  handleLoginSubmit = async (values, { resetForm }) => {
    const { loginUser } = this.props.actions;
    const loginUserSuccess = await loginUser(values);
    if (loginUserSuccess) {
      resetForm();
      this.props.navigation.navigate('App');
    }
  };

  render () {
    const { showAlert } = this.state;
    const { loginUserStart, errors } = this.props;
    return (
      <View>
        <Spinner 
          visible={loginUserStart}
          textContent={'Please Wait...'}
          textStyle={spinnerStyles.spinnerTextStyle}
        />
        { showAlert && <View style={alertStyle.container}>
          <Alert 
          showMyAlert={showAlert}
          title='Login Error'
          message={errors}
          hideMyAlert={this.hideAlert}
          confirmText='OK'
          buttonColor='#DD6B55'
        />
        </View>}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={this.handleLoginSubmit}
        >
          {props => (
            <View>
              <Form style={styles.form}>
                <MyInput label='Email' name='email' type='email' />
                <MyInput label='Password' name='password' type='password' />
                <TouchableOpacity
                  onPress={() => props.handleSubmit()}
                >
                  <Text style={styles.loginBtn}>Login</Text>
                </TouchableOpacity>
              </Form>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.link}>Not Registred?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForgotPassword')}
              >
              <Text style={styles.link}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default LoginComponent;
