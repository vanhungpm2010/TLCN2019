import React, { Component } from "react";
import { connect } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";
import {
  View,
  Image,
  Text,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import Input from "../../common/input";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../../common/button";
import styles from "./styles";
import Loadding from "../../common/loading";
import CheckValue from "../../../helpers/validate";
import {backGround} from '../../../assets'
import { LoginACtion } from "../../../actions/loginAction";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };
  state = {
    user: "",
    pass: "",
    error: false,
    loading: false
  };
  handleOnTextChange = event => {
    this.setState({
      ...event
    });
  };
  handlePress = () => {
    let user = { username: "", password: "" };
    user.username = this.state.user;
    user.password = this.state.pass;
    const result = this.validateInput(user.username, user.password);
    if (result.success === false) {
      showMessage({
        message: result.message,
        type: "danger"
      });
      return;
    }
    this.props.dispatch(LoginACtion.loginRequest(user));
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
    const { loading } = this.props;
    return (
      <ImageBackground
        imageStyle={styles.imageBackGround}
        style={styles.container}
        source={backGround}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.title}>Đăng Nhập</Text>
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
            <View style={{ padding: 10 }}>
              <Button
                loading={loading}
                onPress={this.handlePress}
                type={"clear"}
                title="Đăng Nhập"
              />
              <Button
                buttonStyle={styles.backGroudButton}
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
                type={"clear"}
                title="Đăng Ký"
              />
            </View>
            <View>
              <Text style={{ color: "white", textAlign: "center" }}>
                Quên mật khẩu?
              </Text>
            </View>
            {/* <Button
              buttonStyle={styles.backGroudButton}
              containerStyle={styles.button}
              title="Quên Mật Khẩu?"
            /> */}
          </View>
        </KeyboardAvoidingView>
        <View style={{ flex: 1 }}></View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.login.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Login);
