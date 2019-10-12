import React, { Component } from "react";
import Input from "../../common/input";
import {
  View,
  Image,
  Text,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../../common/button";
import styles from "./styles";

export default class componentName extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    user: "",
    pass: ""
  };
  handleOnTextChange = event => {
    this.setState({
      ...event
    });
  };
  handlePress = () => {
    // this.props.navigation.push("SignUp");
  };
  render() {
    return (
      <ImageBackground
        imageStyle={styles.imageBackGround}
        style={styles.container}
        source={require("../../../assets/nhatban.png")}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.title}>Đăng Ký</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 2 }}>
          <View style={styles.viewBackGround}>
            <Input
              placeholderTextColor={"white"}
              label={"Tên Đăng Nhập"}
              leftIcon={
                <Icon
                  name="user"
                  size={24}
                  color="#FF9100"
                  style={{ marginRight: 5 }}
                />
              }
              stateName={"user"}
              placeholder={"user@gmail.com"}
              handleChange={this.handleOnTextChange}
            />
            <Input
              containerStyle={styles.inputStyle}
              label={"Mật Khẩu"}
              leftIcon={
                <Icon
                  name="lock"
                  size={24}
                  color="#FF9100"
                  style={{ marginRight: 5 }}
                />
              }
              stateName={"pass"}
              placeholder={"Mật Khẩu"}
              handleChange={this.handleOnTextChange}
              secureTextEntry={true}
            />
              <Input
              containerStyle={styles.inputStyle}
              label={"Mật Khẩu"}
              leftIcon={
                <Icon
                  name="lock"
                  size={24}
                  color="#FF9100"
                  style={{ marginRight: 5 }}
                />
              }
              stateName={"pass"}
              placeholder={"Nhập lại"}
              handleChange={this.handleOnTextChange}
              secureTextEntry={true}
            />
            <View style={styles.viewInput}>
            <Button containerStyle={styles.button} title="Đăng Ký" />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={{ flex: 1 }}></View>
      </ImageBackground>
    );
  }
}
