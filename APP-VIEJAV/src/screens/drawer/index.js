import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { ListItem, Header, Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome5";
import Navigator from "@navigation/Navigator";
import Storage from '@storages'
import Loading from "@components/loading";
import { UserACtion } from "@actions/userAction";
import { showMessage, hideMessage } from "react-native-flash-message";
import FilterImage from "helpers/filterImage";
import Api from "@services";
import styles from "./styles";
import Logo from "../../components/Logo";

function Drawer(props) {
  const [loading, setLoading] = useState(false);

  const moveScreen = screen => {
    console.log(screen);
    Navigator.navigate(screen);
  };
  // useEffect(() => {
  //   props.dispatch(UserACtion.getUser());
  // });
  const list = [
    {
      id: "1",
      title: "Home",
      onPress: () => {
        console.log("ok");
        moveScreen("Home");
      },
      icon: "home"
    },
    {
      id: "2",
      title: "Profile",
      icon: "user-circle",
      onPress: () => {
        console.log("ok");
        moveScreen("Profile");
      }
    },
    // {
    //   id: "3",
    //   title: "Challenge Run",
    //   icon: "clipboard-list",
    //   onPress: () => {
    //     console.log("ok");
    //     moveScreen("Challenge");
    //   }
    // },
    // {
    //   id: "4",
    //   title: "Bảng xếp hạng",
    //   icon: "clipboard-list",
    //   onPress: () => {
    //     console.log("ok");
    //     moveScreen("LeaderBoard");
    //   }
    // },
    {
      id: "6",
      title: "Đăng Xuất",
      icon: "sign-out-alt",
      onPress: () => {
        console.log("ok");
        moveScreen("Logout");
      }
    },
  ];
  console.log("user",props.user)
  const hanldeEditPress = async () => {
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
    if (!FilterImage(typeFile)) {
      showMessage({
        message: "Chỉ chọn ảnh jpg,png",
        type: "danger"
      });
      return;
    }
    let avatar = new FormData();
    avatar.append("avatar", {
      uri: localUri,
      name: filename,
      type: "image/jpeg"
    });
    console.log("vanviet", avatar);
    setLoading(true);
    Api.putAvartar(avatar)
      .then(async data => {
        await Storage.saveUserInfo({
          username: data.username,
          email: data.email,
          avatar: data.avatar
        });
        props.dispatch(UserACtion.getUser());
        console.log(data);
        setLoading(false);
        showMessage({
          message: "Sửa Avatar Thành Công",
          type: "success"
        });
      })
      .catch(err => {
        console.log("err", err);
        setLoading(false);
        showMessage({
          message: "Chọn ảnh quá lớn!",
          type: "danger"
        });
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo style={styles.logo}/>
        <Text>APP JAV</Text>
      </View>

      <View style={styles.header}>
        <Avatar
          containerStyle={styles.avartar}
          size="large"
          activeOpacity={0.7}
          showEditButton={true}
          rounded
          onEditPress={hanldeEditPress}
          source={{
            uri: props.user.avatar
          }}
        />
        <Text style={{ color: "#000000" }}>Xin Chào: {props.user.username}</Text>
      </View>
      <ScrollView style={styles.scrollVew}>
        {list.map((item, i) => {
          return (
            <TouchableOpacity key={i} onPress={item.onPress}>
              <ListItem
                containerStyle={styles.listItem}
                titleStyle={styles.titleItem}
                title={item.title}
                leftIcon={<Icon name={item.icon} size={17} color={"#707D82"} />}
                bottomDivider
                chevron={<Icon name={"chevron-right"} color={"#707D82"} />}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {loading && <Loading />}
    </View>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.UserReducer.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Drawer);
Drawer.defaultProps = {
  user: {}
};
Drawer.propTypes = {
  user: PropTypes.object
};
