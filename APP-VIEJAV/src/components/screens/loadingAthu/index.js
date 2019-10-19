import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Storage from "../../../storages";
import api from "../../../services/base";
import Navigator from "../../navigator/Navigator";
import { UserACtion } from "../../../actions/userAction";
import { connect } from "react-redux";

class Athu extends Component {
  constructor(props) {
    super(props);
    this.checkAthu();
    console.log("authhh ne");
  }
  checkAthu = async () => {
    const token = await Storage.getToken();
    console.log("token sas", token);
    if (token) {
      api.init({ token });
      this.props.dispatch(UserACtion.getUser());
      console.log("token", token);
      Navigator.navigate("Main");
    } else {
      Navigator.navigate("Auth");
    }
  };
  render() {
    return <View></View>;
  }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//       user: state.UserReducer.user
//     };
//   };

export default connect(
  null,
  null
)(Athu);
