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
  RefreshControl
} from "react-native";
import * as Speech from "expo-speech";
import { QuizLesson } from "@assets";
import * as Animatable from "react-native-animatable";
// import Styles from "./styles.js";
import WebService from "../../services";
import Loading from "@components/loading";
import ActionModal from "@components/actionModal";
import Icon from "react-native-vector-icons/FontAwesome";
import { showMessage, hideMessage } from "react-native-flash-message";
import { ListItem, Input } from "react-native-elements";
import { TabView, SceneMap } from "react-native-tab-view";
import SecondRoute from "./request";
import SearchRoute from './search';

const initialLayout = { width: Dimensions.get("window").width };

const Friend = ({ navigation }) => {
  const [friends, setFriends] = useState(null);
  const [text, onChangeText] = useState("");
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Danh sách" },
    // { key: "second", title: "Tìm kiếm" },
    { key: "third", title: "Lời mời" }
  ]);
  const [isRefreshing, setIsRefreshing] = useState(false)

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.username}
      subtitle={item.isOnline ? "Online" : "Offline"}
      leftAvatar={{
        source: item.avatar && { uri: item.avatar },
        // title: item.name[0],
      }}
      subtitleStyle={{ color: "green" }}
      bottomDivider
      chevron
      rightTitle={
        item.type && item.type == "notFriend" ? (
          <TouchableOpacity onPress={() => addFriend(item._id)}>
            <Icon name="user-plus" size={14} color="black" />
          </TouchableOpacity>
        ) : (
          ""
        )
      }
    />
  );

  const getList = () => {
    setIsRefreshing(true);
    WebService.getFriends()
      .then(async (data) => {
        setFriends(data.friends);
        setIsRefreshing(false);
      })
      .catch((err) => {
        console.log("bi loi", err);
        setIsRefreshing(false);
        showMessage({
          message: err,
          type: "danger",
        });
      });
  };

  const FirstRoute = () => (
    <FlatList
      keyExtractor={this.keyExtractor}
      data={friends}
      renderItem={this.renderItem}
      refreshing={isRefreshing}
      onRefresh={() => onRefresh()}
      onEndReachedThreshold={0}
    />
  );

  const onRefresh = () => {
    console.log('bbb');
     getList();
   
  }

  const addFriend = (id) => {
    WebService.addFriend({ friend_id: id })
      .then(async (data) => {
        console.log(data);
        showMessage({
          message: "Add success",
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
    console.log(id);
  };

  useEffect(() => {
    getList();
  }, []);

  const renderScene = SceneMap({
    first: FirstRoute,
    // second: SearchRoute,
    third: SecondRoute
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
    // <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
    //   {/* search */}
    //   <Input
    //     placeholder="Search friend by username"
    //     leftIconContainerStyle={{paddingRight: 10}}
    //     leftIcon={<Icon name="search" size={14} color="black" />}
    //     rightIcon={
    //         <TouchableOpacity onPress={searchFriend}>
    //             <Text>Search</Text>
    //         </TouchableOpacity>
    //     }
    //     onChangeText={text => onChangeText(text)}
    //     value={text}
    //   />
    //   {/* List */}
    //   <FlatList
    //     keyExtractor={this.keyExtractor}
    //     data={friends}
    //     renderItem={this.renderItem}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

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
