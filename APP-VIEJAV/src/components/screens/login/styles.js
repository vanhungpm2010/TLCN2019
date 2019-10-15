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
  inputStyle: {marginBottom: 20},
  button: {marginBottom: 5},
  viewButton: {
    flexDirection: 'row',
  },
  backGroudButton: {
    marginTop:10,
    backgroundColor: '#0700e652',
  },
});
