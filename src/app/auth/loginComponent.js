import React, { PureComponent } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { MyInput, Form } from '../common/userInput';
import AwesomeAlert from 'react-native-awesome-alerts';
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
        {showAlert && 
        <View style={alertStyle.container}>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Login Error"
            message={errors}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="OK"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
        </View>}
        <Spinner 
          visible={loginUserStart}
          textContent={'Please Wait...'}
          textStyle={spinnerStyles.spinnerTextStyle}
        />
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
                <Button onPress={props.handleSubmit} title='Login' />
              </Form>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.goToRegister}>Not Registred?</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default LoginComponent;
