import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

const Logo = ({ style }) => (
	<Image source={require("../assets/images/icon.png")} style={[styles.image, style]} />
);

const styles = StyleSheet.create({
	image: {
		width: 96,
		height: 96,
		marginBottom: 12
	}
});

export default memo(Logo);
