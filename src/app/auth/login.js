import React, { PureComponent } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { MyInput, Form } from '../../common/userInput';

import styles from '../../styles/login';

class Login extends PureComponent {
  render () {
    return (
      <View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
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
                <Text style={styles.goToRegister}>Register</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default Login;
