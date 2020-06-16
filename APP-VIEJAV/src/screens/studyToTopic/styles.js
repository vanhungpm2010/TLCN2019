import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

export default StyleSheet.create({
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
  iteam: {
    borderBottomWidth:5,
    borderBottomColor:'blue',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    margin: 10,
    padding: 10,

    backgroundColor: "white",
 
  }
});
