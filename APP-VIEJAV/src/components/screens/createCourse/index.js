import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ToastAndroid,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import Input from "../../common/input";
import DraggableFlatList from "react-native-draggable-flatlist";
import { showMessage, hideMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../../common/loading";
import Icon from "react-native-vector-icons/FontAwesome5";
import Api from "../../../services";
import { SocialIcon } from "react-native-elements";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoFocus:false,
      loading: false,
      titleCourse: "",
      erroTitle: "",
      data: [
        {
          id: "0",
          valueText: "",
          valueDefine: "",
          erroText: "",
          erroDefine: ""
        },
        {
          id: "1",
          valueText: "",
          valueDefine: "",
          erroText: "",
          erroDefine: ""
        }
      ]
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Tạo Học Phần",
    headerTitleStyle: { color: "#ffffff", fontSize: 20 },
    headerStyle: { backgroundColor: "#536DFE", color: "white" },
    headerTintColor: "white",

    headerRight: (
      <TouchableOpacity
        onPress={navigation.getParam("submitCreateCourse")}
        style={{ marginRight: 10 }}
      >
        <Icon name="check-circle" size={25} color={"white"} />
      </TouchableOpacity>
    )
  });
  validate = value => {
    if (value === "") return { status: false, mess: "Không được để chống" };
    return { status: true, mess: "Không được để chống" };
  };
  submitCreateCourse = () => {
    console.log("submit");
    const { titleCourse, data } = this.state;
    const result = this.validate(titleCourse);
    if (!result.status) {
      console.log(result.mess);
      this.setState({ erroTitle: result.mess });
      return;
    } else {
      this.setState({ erroTitle: "" });
    }
    let validate = true;
    let contentSubmit = [];
    data.map((item, index) => {
      const content = {
        text: item.valueText,
        mean: item.valueDefine
      };
      const resultText = this.validate(item.valueText);
      const resultData = this.validate(item.valueDefine);
      if (!resultText.status) {
        console.log("index", index);
        data[index].erroText = resultText.mess;
        this.setState({ data });
        validate = false;
      } else {
        data[index].erroText = "";
        this.setState({ data });
      }
      if (!resultData.status) {
        data[index].erroDefine = resultData.mess;
        this.setState({ data });
        validate = false;
      } else {
        data[index].erroDefine = "";
        this.setState({ data });
      }
      contentSubmit.push(content);
    });
    if (!validate) return;
    const content = { title: titleCourse, content: contentSubmit };
    console.log("content", content);
    this.setState({ loading: true });
    Api.createCourse(content)
      .then(data => {
        this.setState({ loading: false });
        showMessage({
          message: "Tạo Học Phần Thành Công",
          type: "success"
        });
      })
      .catch(err => {
        this.setState({ loading: false });
        showMessage({
          message: "Tạo Học Phần Thất Bại",
          type: "danger"
        });
      });
  };
  componentDidMount() {
    // set handler method with setParams
    this.props.navigation.setParams({
      submitCreateCourse: this.submitCreateCourse
    });
  }

  handleOnTextChange = event => {
    this.setState({
      ...event
    });
  };
  handleOnDefineContent = event => {
    const { data } = this.state;
    data[event.id].valueDefine = event.valueDefine;
    this.setState({ data });
  };
  handleOnTextContent = event => {
    const { data } = this.state;
    data[event.id].valueText = event.valueText;
    this.setState({ data });
  };
  handleAddContent=()=>{
    const {data}=this.state
    data.push({
      id:data.length,
      valueText: "",
      valueDefine: "",
      erroText: "",
      erroDefine: ""
    })
    this.setState({data,autoFocus:true})
  }
  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    console.log("iteam", item.erroText);
    return (
      <TouchableOpacity
        style={{
          shadowOffset: { width: 10, height: 10 },
          shadowColor: "black",
          shadowOpacity: 1,
          elevation: 3,
          backgroundColor: "white",
          margin: 10,
          padding: 10,
          backgroundColor: isActive ? "#E1F5FE" : "white"
        }}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Input
          inputStyle={{ color: "black" }}
          inputContainerStyle={{ marginBottom: 10 }}
          label={"Thuật Ngữ"}
          stateName={{ id: item.id, value: `valueText` }}
          handleChange={this.handleOnTextContent}
          value={item.valueText}
          errorMessage={item.erroText}
          autoFocus={this.state.autoFocus}
        />
        <Input
          inputStyle={{ color: "black" }}
          inputContainerStyle={{}}
          label={"Định Nghĩa"}
          stateName={{ id: item.id, value: `valueDefine` }}
          handleChange={this.handleOnDefineContent}
          value={item.valueDefine}
          errorMessage={item.erroDefine}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { data, erroTitle, loading } = this.state;
    console.log("data", data);
    return (
      <View style={{ flex: 1, backgroundColor: "#FFEBEE" }}>
        <TouchableOpacity
          onPress={this.handleAddContent}
          style={{
            alignItems:'center',
            justifyContent:'center',
            width: 70,
            height: 70,
            borderRadius: 70,
            backgroundColor: "#FF6D00",
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "black",
            shadowOpacity: 1,
            elevation: 3,
            position: 'absolute',right: 0, bottom: 0,
            zIndex: 100
          }}
        >
          <Icon  name="plus" size={35} color={'white'}/>
        </TouchableOpacity>
        <View style={{ paddingBottom: 15 }}>
          <Input
            placeholderTextColor={"#263238"}
            inputStyle={{ color: "black" }}
            placeholder={"Tiêu Đề"}
            stateName={"titleCourse"}
            handleChange={this.handleOnTextChange}
            errorMessage={erroTitle}
          />
        </View>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={{ flex: 1 }}>
            <DraggableFlatList
              extraData={this.state}
              data={data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => `draggable-item-${item.id}`}
              scrollPercent={1}
              onMoveEnd={({ data }) => this.setState({ data })}
            />
          </View>
        </KeyboardAwareScrollView>
        {loading && <Loading />}
      </View>
    );
  }
}
export default Home;
