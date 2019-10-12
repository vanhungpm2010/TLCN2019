import {createStackNavigator} from 'react-navigation-stack';
import Drawer from './drawerNavigator';
import Login from '../../screens/login';
import SignUp from '../../screens/register';
import {createAppContainer} from 'react-navigation';
 const app=createStackNavigator(
  {
    Login,
    SignUp,
    Drawer,
  },
  {
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(app)