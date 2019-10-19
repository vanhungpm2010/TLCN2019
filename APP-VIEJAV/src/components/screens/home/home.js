import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ToastAndroid,
  Image
} from "react-native";
import { Banner } from "../../../assets";
import Icon from "react-native-vector-icons/FontAwesome5";

class Home extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            resizeMode={"contain"}
            style={{ flex: 1 }}
            source={Banner}
          ></Image>
        </View>
        <View style={{ flex: 4, backgroundColor: "green" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 2, backgroundColor: "red",borderRadius:15,margin:2 }}></View>
            <View style={{ flex: 4, backgroundColor: "black",borderRadius:15,margin:2  }}></View>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
    );
  }
}
{
  /* <FunctionHome
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
/> */
}
export default Home;
