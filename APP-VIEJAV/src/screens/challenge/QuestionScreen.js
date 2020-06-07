import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  Animated,
  TouchableOpacity,
  Text
} from "react-native";
import { Audio } from "expo-av";

import { Title } from "react-native-paper";
import { backgroundLv1 } from "../../assets";
import Paragraph from "../../components/Paragraph";
import Background from "../../components/Background";
import PaperText from "../../components/PaperText";
import ButtonPaper from "../../components/ButtonPaper";
import ModalBox from "../../components/ModalBox";
import Answer from "./components/answer";
import styles from "./styles";
import Navigator from "@navigation/Navigator";
import WebService from '../../services';
import Host from '../../services/host'

const QuestionScreen = ({ navigation }) => {
  // const [quiz, setQuiz] = useState(initialValue);
  const [current, setCurrent] = useState({});
  const [time, setTime] = useState(15);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [data, setData] = useState([]);

  const onChoose = choice => {
    if (choice !== current.answer) {
      Navigator.navigate("ScoreScreen", {score: score});
      return;
    }
    let point = score + 5;
    setScore(point);
    setTime(15);
    nextQuestion();
  };

  const nextQuestion = () => {
    setCurrent(data[questionNumber + 1]);
    setQuestionNumber(questionNumber + 1);
    if(questionNumber + 1 === 10) {
      setQuestionNumber(1);
      getChallenge(current.level + 1)
    }
  };

  const openAudio = async url => {
    try {
      const playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
      await playbackObject.playAsync();
    } catch (error) {
      Alert.alert("Lỗi khi phát audio");
    }
  };

  const onBack = () => {
    Alert.alert("Thông báo", "Bạn chắc chắn muốn thoát", [
      { text: "OK", onPress: () => Navigator.navigate("ChallengeScreen") },
      {
        text: "Cancel",
        
        style: "cancel",
        onPress: () => {
          return;
        }
      }
    ]);
  };

  const startGame = () => {
    // setVisible(true);
    // setTimeout(() => {
    //   setVisible(false);
    // }, 2000);
    setInterval(
      () => setTime(prevState => ({ time: prevState.time + 1 })),
      1000
    )
  };

  const getChallenge = level => {
    setLoading(true)
    WebService.getChallengeByLevel(level)
    .then(response => {
      setData(response);
      setCurrent(response[0])
      setLoading(false)
    },
      error => {
        console.log(error);
        setLoading(false)
      }
    )
  }

  useEffect(() => {
    // if (time == initialValue.time && !visible) {
    //   startGame();
    // }
    if (!time) {
      // props.navigation.navigate("ScoreScreen", { score: 1});
      navigation.navigate("ScoreScreen", { score: score});
    }

    let interval = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, visible]);

  useEffect(() => {
    getChallenge(1);
  }, [])

  return (
    <Background source={require("../../assets/backgroundLv1.png")}>
      <View style={styles.container}>
        <View style={styles.header}>
          <PaperText text={`Level ${current?.level}`} style={styles.textWhite} />
          <View style={styles.time}>
            <PaperText text={time} style={styles.textWhite} />
          </View>
          <View style={styles.coin}>
            <Image width={10} source={require("../../assets/coin.png")} />
            <PaperText text={score} style={styles.textWhite} />
          </View>
        </View>
        <View style={styles.question}>
          <View style={styles.title}>
            <Title style={styles.titleText}>
              Question {questionNumber}/
              <PaperText text="10" style={styles.textWhite} />
            </Title>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.change}
            >
              <Image width={10} source={require("../../assets/change.png")} />
              <PaperText text="Change" style={styles.textChange} />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.image}
            source={{uri: `${Host}/assets/challenge/photo/${current.image}`}}
          />
          <PaperText
            text={
              current?.question ? current.question.replace(/&quot;/g, '"') : null
            }
            style={styles.questionText}
          />
        </View>

        <Answer
          value={current?.choice_1}
          openAudio={() => openAudio(current?.choice_1_voice)}
          choose={() => onChoose(1)}
        />

        <Answer
          value={current?.choice_2}
          openAudio={() => openAudio(current?.choice_2_voice)}
          choose={() => onChoose(2)}
        />

        <View style={styles.footer}>
          <ButtonPaper
            icon={({ size }) => (
              <Image
                source={require("../../assets/back.png")}
                style={{ width: size, height: size, tintColor: "#fff" }}
              />
            )}
            mode="text"
            onPress={onBack}
            style={styles.btnBack}
          >
            <Paragraph children={"Back"} style={styles.textButton} />
          </ButtonPaper>
        </View>
      </View>
      <ModalBox isVisible={visible} onClose={() => setVisible(false)}>
        <View style={{ flex: 1 }}>
          <Title style={styles.titleModal}>Level {current?.level}</Title>
        </View>
        <View style={styles.trick}>
          <Text style={styles.trickText}>.</Text>
        </View>
        <View style={styles.trick2}></View>
      </ModalBox>
    </Background>
  );
};

QuestionScreen.navigationOptions = {
  header: null
};

export default QuestionScreen;
