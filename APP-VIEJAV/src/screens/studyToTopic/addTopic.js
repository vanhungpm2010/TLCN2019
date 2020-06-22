import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";
import FilterImage from "helpers/filterImage";
import { Input } from 'react-native-elements';

import Header from '../../components/header';
import { ViewVertical } from '../../components/viewBox.component';

import styles from './styles';
import { ic_arrow_back, ic_picture } from '../../assets'

import WebService from "../../services";

const AddTopicScreen = ({ navigation }) => {
  const [localUri, setLocalUri] = useState('');

  const chooseImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.2
    });

    if (result.cancelled) {
      showMessage({
        message: "Bạn chưa chọn ảnh xong",
        type: "danger"
      });
      return;
    }

    

    let localUri = result.uri;
    let filename = localUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let typeFile = match ? `image/${match[1]}` : `image`;

    console.log(typeFile);

    if (!FilterImage(typeFile)) {
      showMessage({
        message: "Chỉ chọn ảnh jpg,png",
        type: "danger"
      });
      return;
    }

    setLocalUri(localUri);
    
    let avatar = new FormData();
    avatar.append("avatar", {
      uri: localUri,
      name: filename,
      type: "image/jpeg"
    });

    avatar.append('title', 'title1s');
    
    try {
      console.log('aaaa');
      
      // setIsLoading(true);

      const data = await WebService.createCourse(avatar);
      console.log(data);
      
      
      showMessage({
        message: "Sửa Avatar Thành Công",
        type: "success"
      });
    } catch(error) {
      console.log(error);
      
      showMessage({
        message: getErrorMessage(error),
        type: "danger"
      });
    }
    // setIsLoading(false);
  }

  return (
    <ViewVertical style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: "#000",
          fontSize: 15,
          fontWeight: "bold",
        }}
        // mainText={'Học theo chủ đề'}
        stylesHeader={styles.header}
        leftComponent={<Image source={ic_arrow_back} style={styles.backarrow} />}
        leftAction={() => navigation.goBack()}
      />
      <ViewVertical style={styles.container}>
        <Input 
          label='Tên chủ đề:'
          labelStyle={styles.labelStyle}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <Text style={styles.labelStyle}>Ảnh chủ đề:</Text>
        <TouchableOpacity 
          style={styles.selectImg}
          onPress={chooseImg}
        >
          <Image 
            source={localUri ? { uri: localUri } : ic_picture} 
            style={localUri ? styles.imageSelect : styles.iconSelect}
            resizeMode='cover'
          />
        </TouchableOpacity>

      </ViewVertical>

    </ViewVertical>
  )
}

export default AddTopicScreen;