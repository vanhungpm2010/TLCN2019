import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

export default StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingLeft: 15
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
  headerContainer: {
    justifyContent: 'space-between',
    paddingBottom: 20
  },  
  iteam: {
    borderBottomWidth: 5,
    borderBottomColor: 'blue',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    margin: 10,
    padding: 10,

    backgroundColor: "white",

  },
  titleHeader: {
    color: "#234958",
    fontSize: 22,
    // textAlign: 'center',
    fontWeight: 'bold'
  },
  textHeader: {
    color: "#234958",
    fontSize: 15,
    // textAlign: 'center',
    paddingBottom: 5
  },
  containerStyle: {
    paddingRight: 0,
    paddingLeft: 0,
    marginBottom: 20,
    padding: 0,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#EBF6FF',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 0
  },
  inputStyle: {
    fontSize: 14,
    color: '#2C6694'
  },
  rightIconContainerStyle: {
    color: '#2C6694'

  },
  imageItem: {
    width: 80,
    height: 80,
    borderRadius: 15
  },
  titleStyleItem: {
    color: '#16334A',
    fontSize: 15,
    fontWeight: 'bold'
  },
  subtitleStyle: {
    fontSize: 14,
    color: '#234958'
  },
  buttonStyle: {
    backgroundColor: '#EBF6FF',
    borderRadius: 15,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5
  },
  btnStyle: {
    backgroundColor: '#EBF6FF',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonTitleStyle: {
    fontSize: 12,
    color: '#16334A',
    paddingRight: 3
  },
  labelStyle: {
    color: '#16334A',
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 10,
    paddingBottom: 5
  },
  selectImg: {
    height: 78,
    width: '100%',
    backgroundColor: '#EBF6FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageSelect: {
    width: '100%',
    height: 78,
    borderRadius: 15
  },
  iconSelect: {
    width: 28,
    height: 28
  }
});
