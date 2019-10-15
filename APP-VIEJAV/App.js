import React, { Component } from "react";
import { View } from "react-native";
import StackNavigator from "./src/components/navigator/stackNavigator";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import Store from "./src/store";
import NavigatorService from "./src/components/navigator/Navigator";
import Storages from "./src/storages";
import Loading from './src/components/common/loading'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
    this.updateStorages();
  }

  updateStorages = async () => {
    await Storages.initialize();
    console.log("willmout", Storages.getToken());
  };

  render() {
    const { update } = this.state;
    if (!update)
      return (
        <View> 
        <AppLoading
          startAsync={this.updateStorages}
          onFinish={() => this.setState({ update: true })}
        />
        <Loading/>
        </View>
      );
    else
      return (
        <Provider store={Store}>
          <View style={{ flex: 1 }}>
            {update}
            <StackNavigator
              ref={navigatorRef => {
                this._rootNavigator = navigatorRef;
                NavigatorService.setContainer(navigatorRef);
              }}
            />
            <FlashMessage position="top" />
          </View>
        </Provider>
      );
  }
}
