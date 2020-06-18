import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

import {
  ViewVertical,
  ViewHorizontal,
} from '../../components/viewBox.component';
import Header from '../../components/header';

import { ic_arrow_back } from '../../assets';
import styles from './styles';

const CourseTestScreen = ({ navigation }) => {
  const [answer, setAnswer] = useState('');

  const ListQuestions = [
    {
      question: 'Có cái nào rẻ hơn không?',
      answers: [
        'motto yasui mono ha ari masu ka もっと安いものはありますか？',
        'puーru ha doko desu ka プールはどこですか？',
        'puーru ha ari masu ka プールはありますか？',
        'kuu shitsu ha gozai masu ka 空室はございますか？',
      ],
      answer_id: 0,
    },
    {
      question: 'Giá bao nhiêu một tuần?',
      answers: [
        'puーru ha doko desu ka プールはどこですか？',
        'puーru ha ari masu ka プールはありますか？',
        'kakuyasu hoteru de o susume ha ari masu ka 格安ホテルでお勧めはありますか？',
        'ichi shuukan atari ikura desu ka 1週間あたりいくらですか？',
      ],
      answer_id: 3,
    },
  ];

  return (
    <ViewVertical style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: '#000',
          fontSize: 15,
          fontWeight: 'bold',
        }}
        mainText={'Kiểm tra từ vựng'}
        stylesHeader={styles.header}
        leftComponent={
          <Image source={ic_arrow_back} style={styles.backarrow} />
        }
        leftAction={() => navigation.goBack()}
      />

      <ViewVertical style={styles.container}>
        {ListQuestions &&
          ListQuestions.map((item, index) => {
            const { answer } = item;
            return (
              <ViewVertical>
                <Text style={styles.questionText}>
                  Câu hỏi 1: {item.question}
                </Text>
                <ViewVertical>
                  <RadioButton.Group
                    onValueChange={(value) => setAnswer(value)}
                    value={answer}
                  >
                    {answer &&
                      answer.map((value, key) => {
                        <ViewHorizontal style={styles.answerContainer} key={key}>
                          <RadioButton value={index} />
                          <Text style={styles.answerText}>{answer}</Text>
                        </ViewHorizontal>;
                      })}
                  </RadioButton.Group>
                </ViewVertical>
              </ViewVertical>
            );
          })}
      </ViewVertical>
    </ViewVertical>
  );
};

export default CourseTestScreen;
