import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../../screens/home';
import Friend from '../../screens/friends'
import Lesson from '../../screens/lesson';

const tabHomeBottom = createBottomTabNavigator({
    Home: {
    screen: Home,
    navigationOptions: {
      title: 'Trang Chủ',
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={17} color={tintColor} />
      ),
    },
  },Lesson: {
    screen: Lesson,
    navigationOptions: {
      tabBarLabel: 'Bài Học',
      tabBarIcon: ({tintColor}) => (
        <Icon name="graduation-cap" size={17} color={tintColor} />
      ),
    },
  },
  Friend: {
    screen: Friend,
    navigationOptions: {
      tabBarLabel: 'Bạn Bè',
      tabBarIcon: ({tintColor}) => (
        <Icon name="user-friends" size={17} color={tintColor} />
      ),
    },
  },
});
const BottomTabNavigatorConfig ={
    
}
//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({tabHomeBottom},{headerMode: 'none'} );
