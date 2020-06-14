import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  StatusBar,
  RefreshControl,
} from "react-native";
import * as Speech from "expo-speech";
import { QuizLesson } from "@assets";
import * as Animatable from "react-native-animatable";
// import Styles from "./styles.js";
import WebService from "../../services";
// import Loading from "@components/loading";
import ActionModal from "@components/actionModal";
import Icon from "react-native-vector-icons/FontAwesome";
import { showMessage } from "react-native-flash-message";
import { ListItem, Input, Avatar } from "react-native-elements";
import { TabView, SceneMap } from "react-native-tab-view";
import SecondRoute from "./request";
import { onStartGame } from "../../services/socketIO";
import { war } from "../../assets";
import LoadingPage from "../loading";
import { getErrorMessage } from "../../untils/helper";
import ModalBox from "../../components/ModalBox";
import {
  ViewVertical,
  ViewHorizontal,
} from "../../components/viewBox.component";
import PaperText from "../../components/PaperText";
import Button from "../../components/Button";
import ModalWar from './modalWar';

import styles from "./styles";

const initialLayout = { width: Dimensions.get("window").width };

const Friend = ({ navigation }) => {
  const [friends, setFriends] = useState([]);
  const [searchFriends, setSearchFriends] = useState([]);
  const [text, setText] = useState("");
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [receiver, setReceiver] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const [routes] = React.useState([
    { key: "first", title: "Danh sách" },
    { key: "second", title: "Tìm kiếm" },
    { key: "third", title: "Lời mời" },
  ]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      title={item.username}
      subtitle={item.isOnline ? "Online" : "Offline"}
      leftAvatar={{
        source: item.avatar && { uri: item.avatar },
        // title: item.name[0],
      }}
      subtitleStyle={{ color: "green" }}
      bottomDivider
      // chevron
      rightTitle={
        <TouchableOpacity onPress={() => inviteWar(item._id)}>
          <Image source={war} style={styles.war} resizeMode="contain" />
        </TouchableOpacity>
      }
    />
  );

  const inviteWar = async (id) => {
    setLoading(true);
    try {
      const response = await WebService.inviteFriend({ friend_id: id });
      if(response) {
        setRoomId(response);
        setIsVisible(true);
        const receiver = friends.filter(item => item._id === id);
        setReceiver(receiver[0])
      }

    } catch (error) {
      showMessage({
        message: getErrorMessage(error),
        type: "danger",
      });
    }
    setLoading(false);
  };

  const getList = async () => {
    setLoading(true);
    setIsRefreshing(true);
    try {
      const data = await WebService.getFriends();
      setFriends(data.friends);
    } catch (error) {
      showMessage({
        message: getErrorMessage(error),
        type: "danger",
      });
    }

    setIsRefreshing(false);
    setLoading(false);
  };

  const FirstRoute = () => (
    <FlatList
      keyExtractor={keyExtractor}
      data={friends}
      renderItem={renderItem}
      refreshing={isRefreshing}
      onRefresh={() => onRefresh()}
      onEndReachedThreshold={0}
    />
  );

  const renderItemSearch = ({ item }) => {
    return (
      <ListItem
        keyExtractor={keyExtractor}
        title={item.username}
        subtitle={
          item.isOnline ? (
            "Online"
          ) : (
            <Text style={{ color: "gray" }}>Offline</Text>
          )
        }
        leftAvatar={{
          source: item.avatar && { uri: item.avatar },
          // title: item.name[0],
        }}
        subtitleStyle={{ color: "green" }}
        bottomDivider
        chevron
        rightTitle={
          item?.type == "notFriend" ? (
            <TouchableOpacity onPress={() => addFriend(item._id)}>
              <Icon name="user-plus" size={14} color="black" />
            </TouchableOpacity>
          ) : (
            ""
          )
        }
      />
    );
  };

  const search = () => {
    if (text == "") {
      return;
    }

    WebService.searchFriend(text)
      .then(async (data) => {
        setSearchFriends(data);
      })
      .catch((err) => {
        console.log("bi loi", err);
        showMessage({
          message: err,
          type: "danger",
        });
      });
  };

  const SearchRoute = () => (
    <View style={[styles.scene]}>
      <Input
        placeholder="Search friend by username"
        leftIconContainerStyle={{ paddingRight: 10 }}
        leftIcon={<Icon name="search" size={14} color="black" />}
        rightIcon={
          <TouchableOpacity onPress={search}>
            <Text>Search</Text>
          </TouchableOpacity>
        }
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={searchFriends}
        renderItem={renderItemSearch}
      />
    </View>
  );

  const onRefresh = () => {
    getList();
  };

  const addFriend = (id) => {
    WebService.addFriend({ friend_id: id, is_request: true })
      .then(async (data) => {
        search(text);
        showMessage({
          message: "Kết bạn thành công",
          type: "success",
        });
      })
      .catch((err) => {
        console.log("bi loi", err);
        showMessage({
          message: err,
          type: "danger",
        });
      });
  };

  const handleStart = (response) => {
    console.log('responseresponse', response);
    
    if (response) {
      setIsVisible(false);
      navigation.navigate("QuestionScreen");
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    onStartGame(handleStart);
  });

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SearchRoute,
    third: SecondRoute,
  });

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
      <LoadingPage loading={loading} />
      <ModalWar isVisible={isVisible} onClose={() => setIsVisible(false)} receiver={receiver} roomId={roomId}/>
    </>
  );
};

Friend.navigationOptions = ({ navigation }) => ({
  title: "Bạn bè",
  headerLeft: (
    <TouchableOpacity
      style={{ paddingLeft: 10 }}
      onPress={() => navigation.openDrawer()}
    >
      <Icon name="bars" size={25} color={"black"} />
    </TouchableOpacity>
  ),
});

export default Friend;
