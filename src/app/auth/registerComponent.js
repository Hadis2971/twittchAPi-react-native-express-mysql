import React, { PureComponent } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { MyInput, Form } from '../common/userInput';
import Spinner from 'react-native-loading-spinner-overlay';
import AwesomeAlert from 'react-native-awesome-alerts';
import Alert from '../common/alert';
import validationSchema from '../../validation/register';
import styles from '../../styles/register';
import spinnerStyles from '../../styles/spinner';
import alertStyle from '../../styles/alert';
import { turnObjectIntoArray } from '../../helpers';

class RegisterComponent extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      showAlert: false
    }
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
  }

  handleRegisterUserSubmit = async (values, { resetForm }) => {
    const { registerUser } = this.props.actions;
    const registerUserSuccess = await registerUser(values);
    if (registerUserSuccess) {
      resetForm();
      this.props.navigation.navigate('Login');
    }
  };

  render () {
    const { showAlert } = this.state;
    const { registerUserStart, errors } = this.props;
    return (
      <View>
        <Spinner 
          visible={registerUserStart}
          textContent={'Please Wait...'}
          textStyle={spinnerStyles.spinnerTextStyle}
        />
        { showAlert && <View style={alertStyle.container}>
          <Alert 
          showMyAlert={showAlert}
          title='Register Error'
          message={turnObjectIntoArray(errors)}
          hideMyAlert={this.hideAlert}
          confirmText='OK'
          buttonColor='#DD6B55'
        />
        </View>}
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', username: '', password: '', password2: '' }}
          validationSchema={validationSchema}
          onSubmit={this.handleRegisterUserSubmit}
        >
          {props => (
            <View>
              <Form style={styles.form}>
                <MyInput label='First Name' name='firstName' type='text' />
                <MyInput label='Last Name' name='lastName' type='text' />
                <MyInput label='Email' name='email' type='email' />
                <MyInput label='Username' name='username' type='text' />
                <MyInput label='Password' name='password' type='password' />
                <MyInput label='Confirm Password' name='password2' type='password' />
                <TouchableOpacity
                  onPress={() => props.handleSubmit()}
                >
                  <Text style={styles.loginBtn}>Register</Text>
                </TouchableOpacity>
              </Form>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.goToLogin}>Already Registred?</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default RegisterComponent;
