// import React, { useState, useEffect } from "react";
// import { Text, Image, ScrollView, TouchableOpacity } from "react-native";
// import { RadioButton } from "react-native-paper";

// import {
//   ViewVertical,
//   ViewHorizontal,
// } from "../../components/viewBox.component";
// import Header from "../../components/header";
// import QuestionComponent from "./question";

// import { ic_arrow_back } from "../../assets";
// import styles from "./styles";

// const CourseTestScreen = ({ navigation }) => {
//   const [answer, setAnswer] = useState(['0', 1]);

//   const ListQuestions = [
//     {
//       question: "Có cái nào rẻ hơn không?",
//       answers: [
//         "motto yasui mono ha ari masu ka もっと安いものはありますか？",
//         "puーru ha doko desu ka プールはどこですか？",
//         "puーru ha ari masu ka プールはありますか？",
//         "kuu shitsu ha gozai masu ka 空室はございますか？",
//       ],
//       answer_id: 0,
//     },
//     {
//       question: "Giá bao nhiêu một tuần?",
//       answers: [
//         "puーru ha doko desu ka プールはどこですか？",
//         "puーru ha ari masu ka プールはありますか？",
//         "kakuyasu hoteru de o susume ha ari masu ka 格安ホテルでお勧めはありますか？",
//         "ichi shuukan atari ikura desu ka 1週間あたりいくらですか？",
//       ],
//       answer_id: 3,
//     },
//   ];

//   const chooseAnswer = (value, index) => {
//     console.log(value, index);

//     // const isCorrect = checkIsAnswerCorrect(value, answerCorrect);
//     answer[index] = value;

//     setAnswer(answer);
//   };
//   console.log("answer[0]", navigation);
//   return (
//     <ViewVertical style={{ flex: 1, backgroundColor: "#fff" }}>
//       <Header
//         noShadow={true}
//         stylesHeaderText={{
//           color: "#000",
//           fontSize: 15,
//           fontWeight: "bold",
//         }}
//         mainText={"Kiểm tra từ vựng"}
//         stylesHeader={styles.header}
//         leftComponent={
//           <Image source={ic_arrow_back} style={styles.backarrow} />
//         }
//         leftAction={() => navigation.goBack()}
//       />

//       <ScrollView style={styles.container}>
//         {ListQuestions &&
//           ListQuestions.map((item, index) => (
//             <QuestionComponent
//               key={index}
//               item={item}
//               index={index}
//               chooseAnswer={chooseAnswer}
//               answer={answer[index]}
//             />
//           ))}
//         <ViewVertical style={styles.controlContainer}>
//           <TouchableOpacity onPress={() => {}} style={styles.btnSubmit}>
//             <Text>Kết thúc</Text>
//           </TouchableOpacity>
//         </ViewVertical>
//       </ScrollView>
//     </ViewVertical>
//   );
// };

// export default CourseTestScreen;

import React, { Component } from "react";
import { Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

import {
  ViewVertical,
  ViewHorizontal,
} from "../../components/viewBox.component";
import Header from "../../components/header";
import QuestionComponent from "./question";
import webservice from "../../services";
import Loading from "../loading";
import ModalScore from "./modalScore";

import { ic_arrow_back } from "../../assets";
import styles from "./styles";

class CourseTestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuestions: [],
      answer: [],
      loading: false,
      isVisible: false,
      score: 0,
    };
  }
  chooseAnswer = (value, index, isCorrect) => {
    const { answer } = this.state;

    const correct = parseInt(value) === isCorrect;
    console.log(parseInt(value) === isCorrect);
    console.log(value, isCorrect);

    answer[index] = { value: value, isCorrect: correct };

    this.setState({ answer });
  };

  getData = async (id) => {
    this.setState({ loading: true });
    try {
      const data = await webservice.getLearnByCourse(id);
      this.setState({ listQuestions: data, loading: false });
    } catch (error) {}
  };

  onSubmit = () => {
    const { answer } = this.state;
    const score = answer.filter((item) => item.isCorrect === true).length;
    this.setState({ isVisible: true, score });
  };

  backToCourse = () => {
    this.setState({ isVisible: false });
    this.props.navigation.navigate('GetCourse')
  }

  componentDidMount() {
    const id = this.props.navigation.getParam("idCourse");

    this.getData(id);
  }

  componentWillReceiveProps(nextProps) {
    const idNext = nextProps.navigation.getParam("idCourse");
    const id = this.props.navigation.getParam("idCourse");

    if (idNext !== id) {
      this.getData(idNext);
    }
  }

  render() {
    const { answer, listQuestions, loading, isVisible, score } = this.state;

    return (
      <ViewVertical style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header
          noShadow={true}
          stylesHeaderText={{
            color: "#000",
            fontSize: 15,
            fontWeight: "bold",
          }}
          mainText={"Kiểm tra từ vựng"}
          stylesHeader={styles.header}
          leftComponent={
            <Image source={ic_arrow_back} style={styles.backarrow} />
          }
          leftAction={() => this.props.navigation.navigate('GetCourse')}
        />

        <ScrollView style={styles.container}>
          {listQuestions &&
            listQuestions.map((item, index) => (
              <QuestionComponent
                key={index}
                item={item}
                index={index}
                chooseAnswer={this.chooseAnswer}
                answer={answer[index]?.value}
              />
            ))}
          <ViewVertical style={styles.controlContainer}>
            <TouchableOpacity onPress={this.onSubmit} style={styles.btnSubmit}>
              <Text>Kết thúc</Text>
            </TouchableOpacity>
          </ViewVertical>
        </ScrollView>

        <Loading loading={loading} />
        <ModalScore
          isVisible={isVisible}
          score={score}
          onClose={this.backToCourse}
        />
      </ViewVertical>
    );
  }
}

export default CourseTestScreen;
