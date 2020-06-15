import React, { useEffect, useState } from "react";
import {
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableNativeFeedback
} from "react-native";
import { withBadge, Avatar, Button, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
// import * as Progress from 'react-native-progress';

import { ViewVertical } from "../../components/viewBox.component";
import Header from "../../components/header";
import ButtonPaper from "../../components/ButtonPaper";

import {
  banner,
  ic_menu,
  ic_notifications_none,
  ic_notifications,
  bg_background_topic_1,
  background,
  bg_background_topic_2,
  ic_arrow_right,
  bg_background_topic_3
} from "../../assets";
import { handleError } from "../../services/socketIO";
import colors from "../../configs/colors";
import Storage from "../../storages";
import styles from "./styles";

const DashBoardScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const onSelectItem = (navigate) => {
    console.log(navigate);

    navigation.navigate("AlphabetScreen");
  };

  const FlatItem = ({ item, onSelect }) => {
    const { id } = item;
    return (
      <ViewVertical style={id === "1" ? styles.boxFirst : styles.boxItem}>
        <ImageBackground
          source={item.background}
          resizeMode="cover"
          style={styles.backgroundItem}
          imageStyle={styles.imageStyle}
        >
          <TouchableOpacity onPress={onSelect} style={styles.boxStyle}>
            {/* <Progress.Circle size={30} indeterminate={true} /> */}
            <Text style={styles.textName}>{item.nameJP}</Text>
            <Text style={styles.textItem}>{item.spell}</Text>
            <Text style={styles.textItem}>{item.nameVI}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ViewVertical>
    );
  };

  // const BadgedIcon = withBadge(1)(<Image source={ic_notifications}/>);
  const listView = [
    {
      id: "1",
      nameJP: "食物",
      nameVI: "Món ăn",
      spell: "Shokumotsu",
      navigate: "Home",
      background: bg_background_topic_2,
    },
    {
      id: "2",
      nameJP: "食物",
      nameVI: "Món ăn",
      spell: "Shokumotsu",
      navigate: "Home",
      background: bg_background_topic_2,
    },
    {
      id: "3",
      nameJP: "食物",
      nameVI: "Món ăn",
      spell: "Shokumotsu",
      navigate: "Home",
      background: bg_background_topic_3,
    },
  ];

  const GAME = [
    {
      id: "1",
      icon: background,
      name: "Bài cào",
      navigate: "AlphabetScreen",
    },
  ];

  useEffect(() => {
    handleError(alert);
  }, []);

  useEffect(() => {
    const user = Storage.getUserInfo();
    setUser(user);
  }, []);

  return (
    <ViewVertical style={styles.container}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: "red",
          fontSize: 15,
          fontWeight: "bold",
        }}
        // mainText={'Home'}
        stylesHeader={styles.header}
        leftComponent={<Image source={ic_menu} style={styles.icon} />}
        leftAction={() => navigation.openDrawer()}
        actionRight={[
          {
            // component: <BadgedIcon type="ionicon" name="md-notifications" color={"#fff"} style={styles.icon}/>,
            component: <Image source={ic_notifications} style={styles.icon} />,
            action: () => navigation.navigate("Notifications"),
            styleTouchable: {
              top: 9,
            },
          },
          {
            component: (
              <Avatar rounded source={{ uri: user?.avatar }} size="small" />
            ),
            action: () => navigation.navigate("Profile"),
            styleTouchable: {
              top: 9,
            },
          },
        ]}
      />

      <ScrollView
        style={styles.viewContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.topicTitle}>トピックで学ぶ</Text>
        <Text style={styles.topicText}>Học theo chủ đề</Text>

        <ViewVertical style={styles.topicContainer}>
          <FlatList
            horizontal
            data={listView}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            // style={styles.topicContainer}
            renderItem={({ item }) => (
              <FlatItem
                item={item}
                onSelect={() => onSelectItem(item.navigate)}
              />
            )}
          />
        </ViewVertical>

        <ViewVertical style={styles.challengeContainer}>
          <ViewVertical style={styles.challengeLeft}>
            <Text style={styles.challengeTitle}>チャレンジラン</Text>
            <Text style={styles.challengeText}>Đường đua tranh tài</Text>

            <Button
              title="開始"
              type="clear"
              buttonStyle={styles.btnChallenge}
              titleStyle={styles.btnTitleStyle}
              onPress={() => navigation.navigate("ChallengeScreen")}
              iconRight
              icon={<Icon name="running" size={15} color={colors.title} />}
            />
          </ViewVertical>
        </ViewVertical>

        <ViewVertical style={styles.gameContainer}>
          <Text style={styles.topicTitle}>知的ゲーム</Text>
          <Text style={styles.gameText}>Trò chơi trí tuệ</Text>

          <ListItem
            containerStyle={styles.containerStyleBox}
            leftAvatar={{ source: background }}
            title={"チャレンジラン"}
            subtitle={"Đường đua tranh tài"}
            rightElement={<Image source={ic_arrow_right} />}
            onPress={() => navigation.navigate('Profile')}
          />

          <ListItem
            containerStyle={styles.containerStyleBox}
            leftAvatar={{ source: background }}
            title={"チャレンジラン"}
            subtitle={"Đường đua tranh tài"}
            rightElement={<Image source={ic_arrow_right} />}
            rightContentContainerStyle={{backgroundColor: 'transparent'}}
          />

          {/* {GAME.map((item, index) => {
            return (

            )
          })} */}
        </ViewVertical>
      </ScrollView>
    </ViewVertical>
  );
};

DashBoardScreen.navigationOptions = {
  header: null,
};

export default DashBoardScreen;
