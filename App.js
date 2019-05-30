/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppNavigator from './src/app/appNavigator';
import { Provider } from 'react-redux';
import store from './src/state/store';
import { View, Text } from 'react-native';
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
