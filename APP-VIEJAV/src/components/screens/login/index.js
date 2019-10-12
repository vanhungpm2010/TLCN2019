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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import WebService from "../../../services";
import Storage from "../../../storages";
import Loadding from "../../common/loading";
import CheckValue from "../../../helpers/validate";
import { LoginACtion } from "../../../actions/loginAction";

class Login extends Component {
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
    let user = { email: "", password: "" };
    user.email = this.state.user;
    user.password = this.state.pass;
    const result = this.validateInput(user.email, user.password);
    if (result.success === false) {
      showMessage({
        message: result.message,
        type: "warning"
      });
      return;
    }
    this.props.dispatch(LoginACtion.loginRequest(user));
    // this.setState({
    //   loading: true
    // });
    // WebService.login(user)
    //   .then(data => {
    //     console.log("aaaaaaaaaaaaaaaaaaaaaaa", data);
    //     this.setState({ loading: false });
    //     Storage.saveUser(user);
    //     Storage.saveToken(data.token);
    //     showMessage({
    //       message: "Đăng Nhập Thành công",
    //       type: "success"
    //     });
    //     this.props.navigation.navigate("Drawer");
    //   })
    //   .catch(err => {
    //     console.log("err", err);
    //     this.setState({ loading: false });
    //     console.log(err);
    //     showMessage({
    //       message: "Đăng Nhập Thất Bại",
    //       type: "danger"
    //     });
    //   });
  };
  validateInput = (email, pass) => {
    if (CheckValue.email(email)) return { success: true };
    else return { success: false, message: "Nhập đúng địa chỉ email" };
  };
  render() {
    const { loading } = this.props;
    return (
      <ImageBackground
        imageStyle={styles.imageBackGround}
        style={styles.container}
        source={require("../../../assets/nhatban.png")}
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
            <View style={styles.viewButton}>
              <Button
                type={"clear"}
                title="Đăng Ký"
                containerStyle={{ width: "50%" }}
              />
              <Button
                onPress={this.handlePress}
                type={"clear"}
                title="Đăng Nhập"
                containerStyle={{ width: "50%" }}
              />
            </View>
            <Button
              buttonStyle={styles.backGroudButton}
              containerStyle={styles.button}
              title="Quên Mật Khẩu?"
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{ flex: 1 }}></View>
        {loading && <Loadding />}
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
