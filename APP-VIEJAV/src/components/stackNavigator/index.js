import {createStackNavigator} from 'react-navigation-stack';
import Drawer from '../drawerNavigator';
import Login from '../screens/login';
import SignUp from '../screens/register';
import Home from '../screens/home';
export default createStackNavigator(
  {
    Login,
    SignUp,
    Drawer,
  },
  {
    initialRouteName: 'Drawer',
    mode: 'modal',
    headerMode: 'none',
  },
);
