import React from "react";
import {
	ImageBackground,
	StyleSheet,
	KeyboardAvoidingView
} from "react-native";

import { background } from "../assets";
const Background = ({ children, source }) => (
	<ImageBackground
		source={source || background}
		resizeMode="cover"
		style={styles.background}
	>
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			{children}
		</KeyboardAvoidingView>
	</ImageBackground>
);

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: "100%"
	},
	container: {
		flex: 1,
		padding: 15,
		paddingTop: 20,
		width: "100%",
		maxWidth: 380,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "flex-end"
	}
});

export default Background;
