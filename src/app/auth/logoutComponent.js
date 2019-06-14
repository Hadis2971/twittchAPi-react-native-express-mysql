import React, { PureComponent } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { removeUserDataFromAsyncStorage } from '../../helpers';

const navigateAction = NavigationActions.navigate({
  routeName: 'Auth',

  params: {},

  action: NavigationActions.navigate({ routeName: 'Auth' })
});

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
