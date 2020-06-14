import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 30,
    // paddingRight: 30,
    // marginTop: 20,
    backgroundColor: '#FFFFFF'
  },
  background: {
    width: "100%",
    height: 200
  },
  viewContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  boxStart: {
    width: '100%',
    // position: 'absolute',
    // top: -80,
    backgroundColor: '#FAF6F5',
    justifyContent: "center",
    elevation: 5,
    borderRadius: 7,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    // paddingRight: 15,
  },
  textStart: {
    fontSize: 17,
    color: '#CB5454',
    fontWeight: 'bold',
    paddingBottom: 15
  },
  header: {
    marginTop: 10,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.0,
    // elevation: 1,
  },
  slogan: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    elevation: 5,
  },
  icon: {
    elevation: 5,
  },
  itemContainer: {
    paddingRight: 15
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 45
  },
  textItem: {
    color: '#333',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 12
  }
})