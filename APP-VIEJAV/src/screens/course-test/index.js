import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';

import { ViewVertical } from '../../components/viewBox.component';
import Header from '../../components/header';

import { ic_arrow_back } from '../../assets'; 
import styles from './styles';

const CourseTestScreen = ({ navigation }) => {
  return (
    <ViewVertical style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: "#000",
          fontSize: 15,
          fontWeight: "bold",
        }}
        mainText={'Chủ đề'}
        stylesHeader={styles.header}
        leftComponent={<Image source={ic_arrow_back} style={styles.backarrow} />}
        leftAction={() => navigation.goBack()}
      />

      

      <Text>CourseTestScreen</Text>
    </ViewVertical>
  )
}

export default CourseTestScreen;