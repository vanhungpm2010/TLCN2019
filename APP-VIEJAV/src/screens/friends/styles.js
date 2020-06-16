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
  backarrow: {
    top: 7,
    width: 25,
    height: 25
  },
  header: {
    backgroundColor: colors.white,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
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
  boxFooter: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  btnAcceptRequest: {
    backgroundColor: '#BBDDEA',
    // width: '45%',
    borderRadius: 10,
    textTransform: "none",
    padding: 10,
    marginRight: 5,
  },
  btnCancelRequest: {
    backgroundColor: colors.white_color,
    borderRadius: 10,
    textTransform: "none",
    padding: 10,
    elevation: 2
  },
  btnTextAccept: {
    color: '#fff'
  },
  btnTextCancel: {
    color: '#BBDDEA'
  }
});

export default styles;
