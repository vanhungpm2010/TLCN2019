import React from 'react';
import { Text, Image, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements';

import { ViewVertical } from '../../components/viewBox.component'
import Header from '../../components/header'

import styles from './styles';
import { ic_arrow_back } from '../../assets'

const HistoryScreen = ({ navigation }) => {
  return (
    <ViewVertical style={styles.container}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: '#000',
          fontSize: 15,
          fontWeight: 'bold',
        }}
        stylesHeader={styles.header}
        leftComponent={
          <Image source={ic_arrow_back} style={styles.backarrow} />
        }
        leftAction={() => navigation.goBack()}
      >
        <ViewVertical style={{ paddingTop: 50 }}>
          <Text style={styles.titleHeader}>まとめ知識</Text>
          <Text style={styles.textHeader}>Tổng quan kiến thức</Text>
        </ViewVertical>
      </Header>



      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 50
        }}
      >
        {/* slide */}


        <Text style={styles.titleItem}>習得した言葉</Text>
        <Text style={styles.subtitleItem}>Các từ nắm vững</Text>

        <ListItem
          title='フラッシュカード'
          titleStyle={styles.titleStyle}
          rightTitleStyle={styles.rightTitleStyle}
          rightTitle='Thẻ ghi nhớ'
          containerStyle={styles.listItem}
        />
      </ScrollView>
    </ViewVertical>
  )
}

export default HistoryScreen;