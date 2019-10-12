import React, {Component} from 'react';
import {View} from 'react-native'
import StackNavigator from './src/components/navigator/stackNavigator';
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux'
import Store from './src/store'

export default class componentName extends Component {
    render() {
        return (
            <Provider store={Store}>
            <View style={{flex:1}}>
                <StackNavigator />
                <FlashMessage position="top" />
            </View>
            </Provider>
        )
    }
}
