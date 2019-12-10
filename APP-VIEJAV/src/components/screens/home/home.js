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
import { Banner, Dethi, Chude, TaoKhoaHoc } from "../../../assets";
import * as Animatable from "react-native-animatable";
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
  handleViewRefTest = ref => (this.test = ref);
  handleViewRefcreateCourse = ref => (this.createCourse = ref);
  handleViewRefStudyToTopic= ref => (this.studyToTopic = ref);
  bounce = name => {
    switch (name) {
      case "createCourse":
        this.createCourse.bounce(800).then(endState => {
          console.log("CreateCourse");
          this.props.navigation.navigate("CreateCourse");
        });
        break;
      case "test":
        this.test.bounce(800).then(endState => {
          this.props.navigation.navigate("GetChallenge");
        });
        break;
        case "studyToTopic":
          this.studyToTopic.bounce(800).then(endState => {
            this.props.navigation.navigate("StudyToTopic");
          });
        break;
      default:
        break;
    }
  };
  render() {
    console.log("home");
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F3E5F5"
          }}
        >
          <Image
            resizeMode={"contain"}
            style={{ flex: 1 }}
            source={Banner}
          ></Image>
        </View>
        <View style={{ flex: 4, backgroundColor: "#E0F2F1" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableWithoutFeedback onPress={() => this.bounce("test")}>
              <Animatable.View
                animation="zoomInUp"
                ref={this.handleViewRefTest}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 2,
                  backgroundColor: "red",
                  borderRadius: 15,
                  margin: 2
                }}
              >
                <Image
                  style={{ width: "50%", height: "50%" }}
                  source={Dethi}
                ></Image>
                <Text style={{ color: "white", fontSize: 20 }}>Thử Thách</Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.bounce("studyToTopic")}>
              <Animatable.View
                ref={this.handleViewRefStudyToTopic}
                animation="fadeIn"
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 4,
                  backgroundColor: "#64DD17",
                  borderRadius: 15,
                  margin: 2
                }}
              >
                <Image
                  style={{ width: "30%", height: "50%" }}
                  source={Chude}
                ></Image>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Học Theo Chủ Đề
                </Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableWithoutFeedback
              onPress={() => this.bounce("createCourse")}
            >
              <Animatable.View
                ref={this.handleViewRefcreateCourse}
                animation="bounceInUp"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  backgroundColor: "#F57C00",
                  borderRadius: 15,
                  margin: 2
                }}
              >
                <Image
                  style={{ width: "50%", height: "50%" }}
                  source={TaoKhoaHoc}
                ></Image>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Tạo Học Phần
                </Text>
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
              <Image
                style={{ width: "50%", height: "50%" }}
                source={Chude}
              ></Image>
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
              <Image
                style={{ width: "50%", height: "50%" }}
                source={Chude}
              ></Image>
              <Text style={{ color: "white", fontSize: 20 }}>Chơi Game</Text>
            </Animatable.View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableWithoutFeedback onPress={() => this.bounce("")}>
              <Animatable.View
                animation="fadeIn"
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 4,
                  backgroundColor: "#D500F9",
                  borderRadius: 15,
                  margin: 2
                }}
              >
                <Image
                  style={{ width: "30%", height: "50%" }}
                  source={Chude}
                ></Image>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Học Theo Chủ Đề
                </Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Animatable.View
                animation="zoomInUp"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 2,
                  backgroundColor: "#90CAF9",
                  borderRadius: 15,
                  margin: 2
                }}
              >
                <Image
                  style={{ width: "50%", height: "50%" }}
                  source={Dethi}
                ></Image>
                <Text style={{ color: "white", fontSize: 20 }}>Đề Thi</Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
