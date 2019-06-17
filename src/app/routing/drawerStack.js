import { createStackNavigator } from 'react-navigation';
import DrawerNavigator from './homeDrawer';
import React from 'react';
import { Text } from 'react-native';
const drawerStackNavigator = createStackNavigator({
  drawer: { screen: DrawerNavigator }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#0059b3'
    },
    headerTintColor: '#FFF',
    headerLeft: <Text style={{ color: '#FFF', fontSize: 20 }} onPress={() =>
      navigation.toggleDrawer()}>Menu</Text>
  })
}
);

export default drawerStackNavigator;
