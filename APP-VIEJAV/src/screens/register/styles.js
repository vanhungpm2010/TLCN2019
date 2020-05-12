import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // fontFamily: 'Arial',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageBackGround: {
    opacity: 0.7,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  viewBackGround: {
    flex:1,
    borderRadius: 50,
    padding: 10,
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0700e652',
  },
  inputStyle: {},
  button: {marginBottom: 5, marginTop:10,width:'50%'},
  backGroudButton: {
    backgroundColor: '#0700e652',
  },
  viewInput:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
});

// import { StyleSheet } from "react-native";
// import { theme } from "../../core/theme";

// const styles = StyleSheet.create({
//   container: {
//     paddingBottom: 20,
//     flex: 1,
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   formInput: {
//     width: "100%",
//   },
//   containerTerm: {
//     marginTop: 5,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   label: {
//     color: theme.colors.secondary,
//     marginRight: 10,
//   },
//   button: {
//     marginTop: 24,
//   },
//   row: {
//     flexDirection: "row",
//     marginTop: 5,
//   },
//   link: {
//     fontWeight: "bold",
//     color: theme.colors.blue,
//     textTransform: "uppercase",
//   },
//   btnSignUp: {
//     backgroundColor: theme.colors.button,
//     borderRadius: 10,
//     textTransform: "none",
//   },
//   social: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   btnGoogle: {
//     width: "50%",
//     marginRight: 10,
//     alignSelf: "flex-start",
//     backgroundColor: theme.colors.google,
//   },
//   btnFacebook: {
//     width: "50%",
//     marginLeft: 10,
//     alignSelf: "flex-end",
//     backgroundColor: theme.colors.facebook,
//   },
//   socialText: { fontSize: 15, fontWeight: "500", textTransform: "none" },
// });

// export default styles;
