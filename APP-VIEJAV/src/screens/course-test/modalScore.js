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
import Storage from '../../storages'
import { rejectGame } from '../../services/socketIO';

const ModalScore = ({ isVisible, onClose, score }) => {
  return (
    <ModalBox isVisible={isVisible}>
      <ViewVertical style={styles.scoreContainer}>
        <PaperText style={styles.scoreText}>
          Điểm của bạn {score}
        </PaperText>
        <Button
          title="Quay lại"
          mode="clear"
          style={styles.btnReturn}
          titleStyle={styles.btnTitleStyle}
          onPress={onClose}
        />
      </ViewVertical>
    </ModalBox>
  );
};

export default ModalScore;
