import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
const Alert = (props) => {
  const { showMyAlert, title, message, hideMyAlert, confirmText, buttonColor } = props;
  return (
    <AwesomeAlert
      show={showMyAlert}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton
      confirmText={confirmText}
      confirmButtonColor={buttonColor}
      onConfirmPressed={() => {
        hideMyAlert();
      }}
    />
  );
};

export default Alert;
