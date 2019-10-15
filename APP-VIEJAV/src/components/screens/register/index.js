import React, { Component } from "react";
import Input from "../../common/input";
import { connect } from "react-redux";
import {
  View,
  Image,
  Text,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../../common/button";
import styles from "./styles";
import { backGround } from "../../../assets";
import CheckValue from "../../../helpers/validate";
import { RegisterACtion } from "../../../actions/registerAction";

class Register extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    user: "",
    gmail: "",
    pass: "",
    rePass: ""
  };
  handleOnTextChange = event => {
    this.setState({
      ...event
    });
  };
  validateInput = (user, email, pass, rePass) => {
    if (!CheckValue.notNull(user))
      return {
        success: false,
        message: "Tên tài khoản không được chứa khoảng trắng"
      };
    if (!CheckValue.email(email))
      return { success: false, message: "Phải nhập đúng gmail" };
    if (!CheckValue.passWord(pass))
      return { success: false, message: "Mật khẩu phải có ít nhất 8 ký tự" };
    if (pass !== rePass)
      return { success: false, message: "Nhập lại mật khẩu không khớp" };
    return { success: true };
  };
  handlePress = () => {
    const { gmail, user, pass, rePass } = this.state;
    const result = this.validateInput(user, gmail, pass, rePass);
    if (result.success === false) {
      showMessage({
        message: result.message,
        type: "danger"
      });
      return;
    }
    let userRegister = { email: "", password: "", username: "" };
    userRegister.email = gmail;
    userRegister.password = pass;
    userRegister.username = user;
    console.log(userRegister,'sadasd')
    this.props.dispatch(RegisterACtion.registerRequest(userRegister))
  };

  render() {
    const { loading } = this.props;
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
      >
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
          <View style={{ flex: 2 }}>
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
                <Button
                  loading={loading}
                  onPress={this.handlePress}
                  containerStyle={styles.button}
                  title="Đăng Ký"
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.register.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Register);
