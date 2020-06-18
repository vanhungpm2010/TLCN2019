import { StyleSheet } from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  backarrow: {
    top: 7,
    width: 25,
    height: 25,
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
  container: {
    padding: 10
  },
  questionText: {

  },
  answerContainer: {
    alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center'
  },
  answerText: {
    
  }
});

export default styles;
