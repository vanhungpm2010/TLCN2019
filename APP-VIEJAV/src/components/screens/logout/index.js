import React, { Component } from "react";
import {View} from 'react-native'
import Storage from '../../../storages'

export default class index extends Component {
  constructor(props) {
    super(props);
    Storage.clearAll();
    this.props.navigation.navigate("Login");
  }

  render() {
    return <View></View>;
  }
}
