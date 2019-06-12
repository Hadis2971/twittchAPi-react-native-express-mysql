import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { Formik } from 'formik';
import { MyInput, Form } from '../common/userInput';
import Spinner from 'react-native-loading-spinner-overlay';
import AwesomeAlert from 'react-native-awesome-alerts';
import validationSchema from '../../validation/profile';
import spinnerStyles from '../../styles/spinner';
import profileStyles from '../../styles/profile';
import alertStyle from '../../styles/alert';
import { createPorfileUpdateObject, checkObjectForValues } from '../../helpers';

class ProfileComponent extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      showAlert: false,
      success: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        showAlert: true,
        success: false
      });
    }
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  }

  handleUpdateProfileSubmit = async (values, { resetForm }) => {
    const { updateUserProfile } = this.props.actions;
    if (!checkObjectForValues(values)) return;
    const updateValues = createPorfileUpdateObject(values);
    const updateUserProfileSuccess = await updateUserProfile(updateValues);
    if (updateUserProfileSuccess) {
      resetForm();
      this.setState({
        success: true
      });
    }
  };
  
  render () {
    const { showAlert, success } = this.state;
    const { updateUserProfileStart, errors, firstName, lastName, username, userEmail } = this.props;
    console.log(success);
    return (
      <View>
        <Spinner 
          visible={updateUserProfileStart}
          textContent={'Please Wait...'}
          textStyle={spinnerStyles.spinnerTextStyle}
        />
        {showAlert && <View style={alertStyle.container}>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Update Profile Error"
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
        <Formik
            initialValues={{ firstName: firstName, lastName: lastName, email: userEmail, username: username }} 
            validationSchema={validationSchema}
            onSubmit={this.handleUpdateProfileSubmit}
            >
            {(props) => (
            <View style={profileStyles.form}>
                <Text style={profileStyles.hdr} h1>Update Your Profile Information</Text>
                <Form>
                    <MyInput label='New First Name' name='firstName' type='text' />
                    <MyInput label='New Last Name' name='lastName' type='text' />
                    <MyInput label='New Email' name='email' type='email' />
                    <MyInput label='New Username' name='username' type='text' />
                    <Button title='Submit' onPress={props.handleSubmit} />
                </Form>
                {success && <Text style={profileStyles.hdr} h1>Update Success</Text>}
            </View>
            )}
        </Formik>
      </View>
    );
  }
}

export default ProfileComponent;
