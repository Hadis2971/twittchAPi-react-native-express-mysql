import React, { PureComponent } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { removeUserDataFromAsyncStorage } from '../../helpers';
class Logout extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Button
          title='Are You Sure?'
          onPress={() => {
            removeUserDataFromAsyncStorage();
            this.props.navigation.navigate('Auth');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Logout;
