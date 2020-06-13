import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../configs/colors";

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  war: {
    width: 20,
    height: 20,
  },
  infoContainer: {
    paddingTop: 10,
    alignContent: "space-between",
    alignItems: "center",
  },
  info: {
    alignItems: "center",
    flex: 1,
  },
  score: {},
  iconWar: {
    width: 50,
    height: 50,
  },
  textScore: {
    paddingTop: hp("1%"),
    color: colors.white_text,
    fontSize: hp("3%"),
    textAlign: "center",
  },
  timeText: {
    color: colors.black_text,
    fontSize: hp("2.2%"),
    paddingTop: hp("1%"),
  },
  btnCancel: {
    backgroundColor: colors.blue_active_text,
    paddingRight: wp("4%"),
    paddingLeft: wp("4%"),
    borderRadius: 10,
  },
  btnTitleStyle: {
    color: colors.white_text,
  },
  timeContainer: {
    alignItems: "center",
  },
});

export default styles;
