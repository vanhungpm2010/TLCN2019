import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Settings from './src/components/screens/Settings'; //Tab Nav
import BottomTabNavigator from './bottomTabNavigator';
import Logout from '../../../screens/logout'
import Drawer from '../../../screens/drawer'

const DrawerNavigatorConfig = {
  initialRouteName: 'HomeDrawer',
  drawerPosition: 'left',
  contentComponent:Drawer,
  drawerType:'back'
};
export default createDrawerNavigator(
  {
    HomeDrawer: {
      screen: BottomTabNavigator,
   
    },
    Logout: {
      screen: Logout,
    },
  },
  DrawerNavigatorConfig,
);
