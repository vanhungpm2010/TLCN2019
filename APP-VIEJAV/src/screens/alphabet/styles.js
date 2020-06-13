import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#f2f2f2",
    backgroundColor: "#fff",
    elevation: 3,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleStyle: {
    color: "#000",
  },
  buttonSelected: {
    backgroundColor: "#CB5454",
  },
  titleSelected: {
    color: "#fff",
  },
  alphabetContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  alphabetItem: {
    borderWidth: 1,
    borderColor: "#f2f2f2",
    width: 65,
    height: 65,
    marginBottom: 5,
  },
  modalbox: {
    height: 250,
  },
  icContainer: {
    position: 'absolute',
    right: -5,
    top: -5
  },
  icClose: {
    width: 30,
    height: 30,
    tintColor: "#000"
  },
  icSound: {
    width: 30,
    height: 30,
    tintColor: '#ff5f39'
  },
  icSoundContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
});
