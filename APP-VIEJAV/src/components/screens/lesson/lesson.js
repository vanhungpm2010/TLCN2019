import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { QuizLesson } from "../../../assets";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome5";
class Lesson extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Bài Học Trắc Nghiệm",
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
      <View style={{ flex: 1, backgroundColor: "#F06292" }}>
        <Animatable.View
          iterationCount={5}
          direction="alternate"
          animation="slideInDown"
        >
          <Image
            resizeMode={"contain"}
            style={{ width: "100%", height: 90 }}
            source={QuizLesson}
          ></Image>
        </Animatable.View>
        <View style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => this.bounce("createCourse")}>
            <Animatable.View
              ref={this.handleViewRefcreateCourse}
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                backgroundColor: "#F57C00",
                borderRadius: 15,
                margin: 2
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Tạo Học Phần</Text>
            </Animatable.View>
          </TouchableWithoutFeedback>
          <Animatable.View
            ref={this.handleCreateCourse}
            animation="bounceInUp"
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#F48FB1",
              borderRadius: 15,
              margin: 2
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Chơi Game</Text>
          </Animatable.View>
          <Animatable.View
            animation="bounceInUp"
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#1A237E",
              borderRadius: 15,
              margin: 2
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Chơi Game</Text>
          </Animatable.View>
        </View>
      </View>
    );
  }
}

export default Lesson;
