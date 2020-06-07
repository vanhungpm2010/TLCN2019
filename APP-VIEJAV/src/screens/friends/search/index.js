import React, { memo, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { ListItem, Input, FlatList } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { showMessage } from "react-native-flash-message";

const SearchRoute = (props) => {
  const [text, onChangeText] = useState("");
  const [friends, setFriends] = useState([]);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => {
    return (
      <ListItem
      keyExtractor={keyExtractor}
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
    )
    
    };

  const search = () => {
    if (text == "") {
      getList();
      return;
    }
    WebService.searchFriend(text)
      .then(async (data) => {
        setFriends(data);
      })
      .catch((err) => {
        console.log("bi loi", err);
        showMessage({
          message: err,
          type: "danger",
        });
      });
  };

  return (
    <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
      <Input
        placeholder="Search friend by username"
        leftIconContainerStyle={{ paddingRight: 10 }}
        leftIcon={<Icon name="search" size={14} color="black" />}
        rightIcon={
          <TouchableOpacity onPress={search}>
            <Text>Search</Text>
          </TouchableOpacity>
        }
        onChangeText={(text) => onChangeText(text)}
        value={text}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={friends}
        renderItem={renderItem}
    />
    </View>
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

export default SearchRoute;
