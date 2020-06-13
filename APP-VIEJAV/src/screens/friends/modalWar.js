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
import { Avatar } from "react-native-elements";

import { war } from "../../assets";
import ModalBox from "../../components/ModalBox";
import {
  ViewVertical,
  ViewHorizontal,
} from "../../components/viewBox.component";
import PaperText from "../../components/PaperText";
import Button from "../../components/Button";

import styles from "./styles";

const ModalWar = ({ isVisible, onClose }) => {
  const [timeWait, setTimeWait] = useState(15);

  useEffect(() => {
    if (!timeWait) {
      setTimeWait(15);
      onClose();
    }
    let interval;

    if(isVisible) {
      interval = setInterval(() => {
        setTimeWait((timeWait) => timeWait - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeWait, isVisible]);

  return (
    <ModalBox isVisible={isVisible}>
      <ViewHorizontal style={styles.infoContainer}>
        <View style={styles.info}>
          <Avatar
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
            size="small"
          />
        </View>

        <View style={styles.score}>
          <Image source={war} style={styles.iconWar} />
        </View>

        <View style={styles.info}>
          <Avatar
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            }}
            size="small"
          />
        </View>
      </ViewHorizontal>
      <ViewVertical style={styles.timeContainer}>
        <PaperText style={styles.timeText}>
          Chờ chấp nhận sau {timeWait} ...
        </PaperText>
        <Button
          title="Huỷ bỏ"
          mode="clear"
          style={styles.btnCancel}
          titleStyle={styles.btnTitleStyle}
          onPress={onClose}
        />
      </ViewVertical>
    </ModalBox>
  );
};

export default ModalWar;
