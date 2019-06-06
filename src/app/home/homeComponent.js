import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { MyInput, Form } from '../common/userInput';
import { View, Text, Button, Picker } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { createRequestUrl } from '../../helpers';
import spinnerStyles from '../../styles/spinner';
import homeStyles from '../../styles/home';

class HomeComponent extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      type: 'streams',
      streams: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const { streams } = this.state;
    this.setState({
      streams: [...nextProps.streams]
    });
  }


  submitSearchHandler = (value) => {
    const { getStreams } = this.props.actions;
    const { type } = this.state;
    if (!value) return;
    const path = createRequestUrl(type, value.searchTerm);
    getStreams(path);
  }

  render () {
    const { type, streams } = this.state;
    const { getStreamsStart } = this.props;
    console.log(getStreamsStart);
    return (
      <View style={homeStyles.container}>
        <Spinner 
          visible={getStreamsStart}
          textContent={'Please Wait...'}
          textStyle={spinnerStyles.spinnerTextStyle}
        />
        <View style={homeStyles.searchInfo}>
          <Formik
            initialValues={{ searchTerm: '' }}
            onSubmit={this.submitSearchHandler}
          >
            {(props) => (
              
              <Form style={homeStyles.form}>
                <Text h1>Find Top Streams By Game Or User</Text>
                <Picker
                  style={homeStyles.picker}
                  selectedValue={type}
                  onValueChange={(itemValue, itemIndex) => this.setState({
                    type: itemValue
                  })}
                  >
                  <Picker.Item label="streams" value="streams" />
                  <Picker.Item label="User" value="user" />
                </Picker>
                <View style={homeStyles.inputContainer}>
                  <MyInput type='text' label='Search' name='searchTerm' />
                  <Button title='Search' onPress={props.handleSubmit} />
                </View>
              </Form>
            )}
          </Formik>
        </View>
        <View style={homeStyles.searchResults}></View>
      </View>
    );
  }
}

export default HomeComponent;
