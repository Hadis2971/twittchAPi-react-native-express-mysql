import React, { useState } from 'react';
import { Formik } from 'formik';
import { MyInput, Form } from '../../common/userInput';
import { View, Text, Button } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Spinner from 'react-native-loading-spinner-overlay';
import homeStyles from '../../../styles/home';
import alertStyle from '../../../styles/alert';
import spinnerStyles from '../../../styles/spinner';
const TabsWrapper = (props) => {
  const {
    errors,
    isVisible,
    alertTitle,
    errorMsg,
    searchTitle,
    submitSearchHandler,
    hideAlert } = props;

  return (
    <View style={homeStyles.container}>
      <Spinner
        visible={isVisible}
        textContent={'Please Wait...'}
        textStyle={spinnerStyles.spinnerTextStyle}
      />
      {errors && <View style={alertStyle.container}>
        <AwesomeAlert
          show={errors}
          showProgress={false}
          title={alertTitle}
          message={errorMsg}
          closeOnTouchOutside
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton
          confirmText='OK'
          confirmButtonColor='#DD6B55'
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
      </View>}
      <View style={homeStyles.searchInfo}>
        <Formik
          initialValues={{ searchTerm: '' }}
          onSubmit={submitSearchHandler}
        >
          {(props) => (
            <Form style={homeStyles.form}>
              <Text style={homeStyles.searchHeader} h1>{searchTitle}</Text>
              <View style={homeStyles.inputContainer}>
                <MyInput type='text' label='Search' name='searchTerm' />
                <Button title='Search' onPress={props.handleSubmit} />
              </View>
            </Form>
          )}
        </Formik>
      </View>
      {props.children}
    </View>
  );
};

export default TabsWrapper;
