import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { Avatar, Input } from 'react-native-elements'
import * as Progress from 'react-native-progress';


import { ViewVertical } from '../../../components/viewBox.component';
import Header from '../../../components/header'
import styles from './styles';
import { ic_arrow_back, ic_notifications } from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WritingTestScreen = ({ navigation }) => {
  const onNext = () => {

  };

  const [user, setUser] = useState(null)
  return (
    <ViewVertical style={{
      flex: 1,
      backgroundColor: '#fff'
    }}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: '#000',
          fontSize: 15,
          fontWeight: 'bold',
        }}
        // mainText={'Học theo chủ đề'}
        stylesHeader={styles.header}
        leftComponent={
          <Image source={ic_arrow_back} style={styles.backarrow} />
        }
        leftAction={() => navigation.navigate('GetCourse')}
      />

      <ViewVertical style={styles.container}>
        <ViewVertical style={styles.headerContainer}>
          <Text style={styles.headerTitle}>語彙テスト</Text>
          <Text style={styles.headerText}>Kiểm tra từ vựng</Text>
        </ViewVertical>

        <ViewVertical style={styles.bodyContainer}>
          <ViewVertical style={styles.boxContainer}>
            <Text style={styles.boxText}>フラッシュカード</Text>
            <Progress.Bar progress={0.75} width={300} style={styles.progress} color={'#2C6694'}/>
          </ViewVertical>
          <Input 
            placeholder='Từ này nghĩa là'
            inputContainerStyle={styles.inputText}
            // containerStyle={styles.inputText} 
            inputStyle={styles.inputStyle} 
          />
          <TouchableOpacity onPress={onNext}>
            <Text style={styles.cancelText}>Tôi không biết câu trả lời</Text>
          </TouchableOpacity>
        </ViewVertical>

      </ViewVertical>

    </ViewVertical>
  )
};

export default WritingTestScreen