import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { Formik } from 'formik';
import { MyInput, Form } from '../common/userInput';
import Spinner from 'react-native-loading-spinner-overlay';
import Alert from '../common/alert';
import ObjectsListBox from '../common/listBox/objecstListBox';
import validationSchema from '../../validation/profile';
import spinnerStyles from '../../styles/spinner';
import profileStyles from '../../styles/profile';
import alertStyle from '../../styles/alert';
import { createPorfileUpdateObject, checkObjectForValues, getUserDataFromStorage } from '../../helpers';

class ProfileComponent extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      showAlert: false,
      success: false,
      userInfo: {}
    }
  }

  async componentDidMount() {
    const userInfoFromStorage = await getUserDataFromStorage();
    this.setState({
      userInfo: {...userInfoFromStorage}
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        showAlert: true,
        success: false
      });
    }
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  handleUpdateProfileSubmit = async (values, { resetForm }) => {
    const { updateUserProfile } = this.props.actions;
    if (!checkObjectForValues(values)) return;
    const updateValues = createPorfileUpdateObject(values);
    const updateUserProfileSuccess = await updateUserProfile(updateValues);
    if (updateUserProfileSuccess) {
      resetForm();
      const userInfoFromStorage = await getUserDataFromStorage();
      this.setState({
        success: true,
        userInfo: {...userInfoFromStorage}
      });
    } else {
      this.setState({
        showAlert: true
      });
    }
  };
  
  render () {
    const { showAlert, success, userInfo } = this.state;
    const { updateUserProfileStart, errors } = this.props;
    
    return (
      <View style={profileStyles.container}>
        <Spinner 
          visible={updateUserProfileStart}
          textContent={'Please Wait...'}
          textStyle={spinnerStyles.spinnerTextStyle}
        />
        {showAlert && <View style={alertStyle.container}>
          <Alert 
            showMyAlert={showAlert}
            title='Update Profile Error'
            message={errors}
            hideMyAlert={this.hideAlert}
            confirmText='OK'
            buttonColor='#DD6B55'
          />
        </View>}
        <View style={profileStyles.userInfoContainer}>
            <Text style={profileStyles.hdr} h1>Your Current Information</Text>
            <ObjectsListBox 
              data={userInfo} 
              itemStyle={{fontSize: 20, marginBottom: '1.7%', color: '#3399ff'}}/>
        </View>
        <View style={profileStyles.formContainer}>
          <Formik
              initialValues={{ firstName: '', lastName: '', email: '', username: '' }} 
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
      </View>
    );
  }
}

export default ProfileComponent;
