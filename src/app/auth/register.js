import React, { PureComponent } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { MyInput, Form } from '../../common/userInput';
import styles from '../../styles/register';

class Register extends PureComponent {
  render () {
    return (
      <View>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '', password2: '' }}
          onSubmit={values => console.log(values)}
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
                <Button onPress={props.handleSubmit} title='Register' />
              </Form>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.goToLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default Register;
