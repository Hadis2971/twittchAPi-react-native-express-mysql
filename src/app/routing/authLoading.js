import React, { PureComponent } from 'react';
import { View, AsyncStorage, ActivityIndicator, StatusBar,StyleSheet } from 'react-native';
class AuthLoading extends PureComponent {
    constructor (props) {
        super(props);
        this._bootstrapAuth();
    };

    _bootstrapAuth = async () => {
        const token = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(token ? 'App' : 'Auth');
    };

    render () {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle='dark-content' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AuthLoading;
