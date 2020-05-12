import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";
import Loading from "@components/loading";
import Icon from "react-native-vector-icons/FontAwesome5";
import Api from "@services";
import { CoursesACtion } from "@actions/CoursesAction";
import SildeCourese from "./slideCourse";
import SoundCourse from "./soundCourse";
import PropTypes from "prop-types";
import Service from "@services";
import Styles from "./styles";

export default class GetCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerTitleStyle: { color: "#ffffff", fontSize: 20 },
    headerStyle: { backgroundColor: "#536DFE", color: "white" },
    headerTintColor: "white"
  });
  componentDidMount() {
    const id = { id: this.props.navigation.getParam("idCourese") };
    console.log('id', id)
    Service.getDetailCourses(id)
      .then(data => {
        this.setState({ data: data.contents });
      })
      .catch(err => console.log(err));
  }
  _handleToMemmory=()=>{
    const { data } = this.state;
    this.props.navigation.navigate("MemmoryCard",{ data: data})

  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log("props moi", nextProps);
  }
  render() {
    const { data } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {/* slide */}
        <Text style={Styles.title}>Thẻ</Text>
        <View style={Styles.containerSlider}>
          <View style={Styles.slider}>
            <SildeCourese data={data} />
          </View>
        </View>
        {/* endslide */}
        {/* game */}
        <View style={{ backgroundColor: "#E8EAF6", paddingBottom: 20 }}>
          <Text style={Styles.title}>Game</Text>
          <TouchableOpacity
            style={{
              ...Styles.cardGame,
              height: 100,
              borderBottomColor: "#00E676"
            }}
          >
            <Icon name="clone" size={30} color={"#00E676"}></Icon>
            <Text style={{ ...Styles.titleGame, color: "#00E676" }}>
              Ghép Thẻ
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
            onPress={this._handleToMemmory}
              style={{
                ...Styles.cardGameTwo,
                borderBottomColor: "#7986CB"
              }}
            >
              <Icon name="database" size={30} color={"#7986CB"}></Icon>
              <Text style={{ ...Styles.titleGame, color: "#7986CB" }}>
                Thẻ Ghi Nhớ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...Styles.cardGameTwo, borderBottomColor: "#FFA000" }}
            >
              <Icon name="user-graduate" size={30} color={"#FFA000"}></Icon>
              <Text style={{ ...Styles.titleGame, color: "#FFA000" }}>
                Học Viết
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* endgame */}
        {/* phat am*/}
        <View>
          <Text style={Styles.title}>Phát Âm</Text>
          {data.map((value, index) => {
           return( <SoundCourse key={index} text={value.text} mean={value.mean} language={value.language}/>);
          })}
        </View>
      </ScrollView>
    );
  }
}