import React, { useState, useEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "react-native-elements";

import { ViewVertical } from "../../components/viewBox.component";
import Text from "../../components/text.component";
import ModalBox from '../../components/ModalBox';

import WebService from "../../services";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const AlphabetScreen = ({ navigation }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const onChangeAlphabet = async (type = 'hiragana', isSelect, limit = 20) => {
    try {
      setIsSelect(isSelect);
      const response = await WebService.getAlphabet(type, limit);
      
      setData(response.result);
    } catch (error) {
      console.log(error);
    }
  };

  const goDetail = () => {
    setIsVisible(true)
  }

  useEffect(() => {
    onChangeAlphabet();
  }, []);

  return (
    <ViewVertical style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Hiragana"
            buttonStyle={[
              styles.buttonStyle,
              !isSelect && styles.buttonSelected,
            ]}
            titleStyle={[styles.titleStyle, !isSelect && styles.titleSelected]}
            onPress={() => onChangeAlphabet('hiragana', false)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Katakana"
            buttonStyle={[
              styles.buttonStyle,
              isSelect && styles.buttonSelected,
            ]}
            titleStyle={[styles.titleStyle, isSelect && styles.titleSelected]}
            onPress={() => onChangeAlphabet('katakana', true)}
          />
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.alphabetContainer}>
          {data &&
            data.map((item, index) => {
              return (
                <TouchableOpacity onPress={goDetail} key={index}>
                  <View style={styles.alphabetItem} >
                    <Image source={{ uri: item.img}} style={{ width: 65, height: 65}}/>
                  </View>
                </TouchableOpacity>
                
              );
            })}
        </View>
      </ScrollView>
      <ModalBox isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <ViewVertical >
          <Button onPress={() => setIsVisible(false)} title='Close'/>
        </ViewVertical>
        <Text>Abc</Text>
      </ModalBox>
    </ViewVertical>
  );
};

export default AlphabetScreen;
