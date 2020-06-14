import React, { useEffect } from 'react';
import { Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';

import { ViewVertical } from '../../components/viewBox.component';
import Header from '../../components/header';

import { banner, ic_menu, ic_notifications } from '../../assets'
import { handleError } from '../../services/socketIO';
import Storage from '../../storages'
import styles from "./styles";

const DashBoardScreen = ({ navigation }) => {

  const onSelectItem = navigate => {
    console.log(navigate);

    navigation.navigate('AlphabetScreen')
  }

  const ListItem = ({ item, onSelect }) => {
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

  // const BadgedIcon = withBadge(1)(<Image source={ic_notifications}/>);
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

  useEffect(() => {
    handleError(alert)
  }, [])

  return (
    <ViewVertical style={styles.container}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: 'red',
          fontSize: 15,
          fontWeight: 'bold',
        }}
        // mainText={'Home'}
        stylesHeader={styles.header}
        leftComponent={<Image source={ic_menu} style={styles.icon} />}
        leftAction={() => navigation.openDrawer()}
        actionRight={[
          {
            // component: <BadgedIcon type="ionicon" name="md-notifications" color={"#fff"} style={styles.icon}/>,
            component: <Image source={ic_notifications} style={styles.icon} />,
            action: () => navigation.navigate("NotificationList"),
            styleTouchable: {
              top: 9,
            },
          },
          {
            // component: <BadgedIcon type="ionicon" name="md-notifications" color={"#fff"} style={styles.icon}/>,
            component: <Image source={ic_notifications} style={styles.icon} />,
            action: () => navigation.navigate("Profile"),
            styleTouchable: {
              top: 9,
            },
          },
        ]}
      />
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