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
import { backGround } from "../../../assets";

export default class componentName extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    user: "",
    gmail: "",
    pass: "",
    rePass:""
  };
  handleOnTextChange = event => {
    this.setState({
      ...event
    });
  };
  handlePress = () => {
    // this.props.navigation.push("SignUp");
  };
  validateInput = (email, pass) => {
    if (!CheckValue.notNull(email))
      return {
        success: false,
        message: "Tên tài khoản không được chứa khoảng trắng"
      };
    if (!CheckValue.passWord(pass))
      return { success: false, message: "Mật khẩu phải có ít nhất 8 ký tự" };
    return { success: true };
  };
  render() {
    return (
      <ImageBackground
        imageStyle={styles.imageBackGround}
        style={styles.container}
        source={backGround}
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
              label={""}
              leftIcon={
                <Icon
                  name="user"
                  size={24}
                  color="#FF9100"
                  style={{ marginRight: 5 }}
                />
              }
              stateName={"user"}
              placeholder={"Tên Đăng Nhập"}
              handleChange={this.handleOnTextChange}
            />
            <Input
              placeholderTextColor={"white"}
              label={""}
              leftIcon={
                <Icon
                  name="envelope"
                  size={20}
                  color="#FF9100"
                  style={{ marginRight: 5 }}
                />
              }
              stateName={"gmail"}
              placeholder={"Gmail"}
              handleChange={this.handleOnTextChange}
            />
            <Input
              containerStyle={styles.inputStyle}
              label={""}
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
              label={""}
              leftIcon={
                <Icon
                  name="lock"
                  size={24}
                  color="#FF9100"
                  style={{ marginRight: 5 }}
                />
              }
              stateName={"rePass"}
              placeholder={"Nhập Lại Mật Khẩu"}
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
