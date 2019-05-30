import { compose } from 'recompose';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from 'react-native-formik';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

export const Form = withNextInputAutoFocusForm(View);
