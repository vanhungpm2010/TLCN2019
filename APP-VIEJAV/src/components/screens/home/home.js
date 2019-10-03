import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ToastAndroid
} from "react-native";
import Voice from "react-native-voice";
import Icon from "react-native-vector-icons/FontAwesome5";
import FunctionHome from "../../common/functionHome";

class Home extends Component {
  constructor(props) {
    super(props);
    Voice.onSpeechResults = res => {
      alert(Json.stringify(res));
    };
    Voice.onSpeechStart = res => {
      alert(Json.stringify(res));
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Trang Chủ",
    headerLeft: (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="bars" size={25} color={"white"} />
      </TouchableOpacity>
    ),
    headerTitleStyle: { color: "#ffffff", fontSize: 20 },
    headerStyle: { backgroundColor: "#536DFE", color: "white" }
  });
  handlePress = async () => {
    await Voice.start("en-US");
  };
  handlePressEnd = () => {
    Voice.stop();
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#E0E0E0", paddingBottom: 10 }}>
        <Button title="Bat dau" onPress={this.handlePress}></Button>
        <Button title="Ket thuc" onPress={this.handlePressEnd}></Button>

        <FunctionHome
          title={"Tra Từ Điển"}
          nameIcon={"pen"}
          colorIcon={"white"}
        />
        <FunctionHome
          title={"Tra Từ Điển Bằng Giọng Nói"}
          nameIcon={"microphone"}
          colorIcon={"#64DD17"}
        />
        <FunctionHome
          title={"Tra Từ Điển Bằng Hình Ảnh"}
          nameIcon={"camera"}
          colorIcon={"#D50000"}
        />
        <FunctionHome
          title={"Tra Từ Điển Bằng Cách Vẽ"}
          colorBackGround={"white"}
          nameIcon={"pen-fancy"}
          colorIcon={"#F57C00"}
        />
      </View>
    );
  }
}

export default Home;
