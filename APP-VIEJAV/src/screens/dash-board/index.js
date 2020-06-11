import React from 'react';
import { Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';

import { ViewVertical } from '../../components/viewBox.component';
import Header from '../../components/header';

import { banner } from '../../assets'
import styles from "./styles";

const DashBoardScreen = ({ navigation }) => {

  const onSelectItem = navigate => {
    console.log(navigate);
    
    navigation.navigate('AlphabetScreen')
  }

  const ListItem = ({ item, onSelect }) => {
    console.log(item);
    
    return (
      
      <TouchableOpacity
        onPress={onSelect}
      >
        <ViewVertical style={styles.itemContainer}>
          <Image
            source={item.image}
            style={styles.imageContainer}
          />
          <Text style={styles.textItem}>{item.name}</Text>
        </ViewVertical>
      </TouchableOpacity>
    )
  }

  const BadgedIcon = withBadge(1)(Icon);
  const listView = [
    {
      id: '1',
      name: 'Alphabet',
      navigate: 'Home',
      image: banner
    },
    {
      id: '2',
      name: 'Alphabet',
      navigate: 'AlphabetScreen',
      image: banner
    },
    {
      id: '3',
      name: 'Alphabet',
      navigate: 'Home',
      image: banner
    },
    {
      id: '4',
      name: 'Course',
      navigate: 'Home',
      image: banner
    },
    {
      id: '5',
      name: 'Alphabet',
      navigate: 'Home',
      image: banner
    }
  ]

  return (
    <ViewVertical style={styles.container}>
      <ImageBackground
		    source={banner}
		    resizeMode="cover"
		    style={styles.background}
	    >
            <Header 
                noShadow={true}
                stylesHeaderText={{
                  color: 'red',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
                // mainText={'Home'}
                stylesHeader={styles.header}
                leftComponent={<Icon type='ionicon' name="md-reorder" size={30} color={"#fff"} style={styles.icon} />}
                leftAction={() => navigation.openDrawer()}
                actionRight={[
                    {
                      component: <BadgedIcon type="ionicon" name="md-notifications" color={"#fff"} style={styles.icon}/>,
                      action: () => navigation.navigate("NotificationList"),
                      styleTouchable: {
                        top: 9,
                      },
                    },
                  ]}
            />
            {/* <Text style={styles.slogan}>Study Japanese</Text> */}
          </ImageBackground>
          <ViewVertical style={styles.viewContainer}>
            <ViewVertical style={styles.boxStart}>
              <Text style={styles.textStart}>Ready? Let's start</Text>

              <FlatList
                horizontal
                data={listView}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                // style={styles.sliderProduct}
                renderItem={({ item }) => (
                  <ListItem
                    item={item}
                    onSelect={() => onSelectItem(item.navigate)}
                  />
                )}
              />
            </ViewVertical>
          </ViewVertical>
        </ViewVertical>
    )
}

DashBoardScreen.navigationOptions = {
    header: null,
};

export default DashBoardScreen;