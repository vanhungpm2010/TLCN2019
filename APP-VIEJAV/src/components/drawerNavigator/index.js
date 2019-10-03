import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Settings from './src/components/screens/Settings'; //Tab Nav
import BottomTabNavigator from './bottomTabNavigator';
const DrawerNavigatorConfig = {
  drawerPosition: 'left',
};
export default createDrawerNavigator(
  {
    Home: {
      screen: BottomTabNavigator,
      navigationOptions: {
        drawerLabel: 'Trang Chủ',
        drawerIcon: ({tintColor}) => <Icon name="home" size={17} />,
      },
    },
  },
  DrawerNavigatorConfig,
);
