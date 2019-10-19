import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ToastAndroid,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Tạo Học Phần",
    headerTitleStyle: { color: "#ffffff", fontSize: 20 },
    headerStyle: { backgroundColor: "#536DFE", color: "white" }
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
     
      </View>
    );
  }
}
export default Home;
