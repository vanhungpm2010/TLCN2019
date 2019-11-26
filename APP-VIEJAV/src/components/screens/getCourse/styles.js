import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    color: "#E65100",
    fontSize: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 70
  },
  containerSlider: { justifyContent: "center", alignItems: "center" },
  slider: {
    overflow: "hidden",
    width: 300,
    height: 250,
    borderBottomWidth: 5,
    borderBottomColor: "blue",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    margin: 10
  },
  cardGame: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#F4511E",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    margin: 10
  },
  cardGameTwo: {
    flex: 1,
    height: 100,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#F4511E",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
  },
  soundIcon: { position: "absolute", top: 2, right: 2 },
  sound: {
    borderBottomWidth: 5,
    height: 80,
    borderBottomColor: "#76FF03",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    margin: 10,
    padding: 10
  },
  titleGame: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
