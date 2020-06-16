import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Settings from './src/components/screens/Settings'; //Tab Nav
import BottomTabNavigator from './bottomTabNavigator';
import Logout from '@screens/logout'
import Drawer from '@screens/drawer'
import ProfileScreen from '@screens/profile';
import LeaderBoardScreen from '@screens/leaderBoard';
import Challenge from '../screens/challenge';
import DashBoardScreen from '../screens/dash-board'
import NotificationList from '../screens/notification-list';
import FriendsScreen from '../screens/friends/friend';
import GetCourse from '../screens/getCourse';
import StudyTopPic from '../screens/studyToTopic';
import MemmoryCard from '../screens/games/memmoryCard'
import CourseTestScreen from '../screens/course-test';
import Lesson from '../screens/lesson';
import AlphabetScreen from '../screens/alphabet'

const DrawerNavigatorConfig = {
  initialRouteName: 'DashBoard',
  drawerPosition: 'left',
  contentComponent:Drawer,
  drawerType:'back'
};
export default createDrawerNavigator(
  {
    // HomeDrawer: {
    //   screen: BottomTabNavigator,
    // },
    Profile: {
      screen: ProfileScreen
    },
    LeaderBoard: {
      screen: LeaderBoardScreen
    },
    Logout: {
      screen: Logout,
    },
    Challenge: {
      screen: Challenge
    },
    DashBoard: {
      screen: DashBoardScreen
    },
    Notifications: {
      screen: NotificationList
    },
    Friends: {
      screen: FriendsScreen
    },
    GetCourse: {
      screen: GetCourse
    },
    MemmoryCard: {
      screen: MemmoryCard
    },
    ListTopic: {
      screen: StudyTopPic
    },
    CourseTest: {
      screen: CourseTestScreen
    },
    Lesson: {
      screen: Lesson
    },
    Alphabet: {
      screen: AlphabetScreen
    }
  },
  DrawerNavigatorConfig,
);
