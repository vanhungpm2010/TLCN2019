import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
    <Text>Request friends</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

export default SecondRoute;
