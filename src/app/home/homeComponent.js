import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import homeStyles from '../../styles/home';
class HomeComponent extends PureComponent {
  render () {
    return (
      <View style={homeStyles.container}>
        <Text h1>Hello HomePage</Text>
      </View>
    );
  }
}

export default HomeComponent;
