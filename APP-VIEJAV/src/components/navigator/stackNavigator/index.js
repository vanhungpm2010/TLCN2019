import {createStackNavigator} from 'react-navigation-stack';
import Drawer from './drawerNavigator';
import Login from '../../screens/login';
import SignUp from '../../screens/register';
import LoadingAthu from '../../screens/loadingAthu'
import {createAppContainer} from 'react-navigation';
 const app=createStackNavigator(
  {
    LoadingAthu,
    Login,
    SignUp,
    Drawer,
  },
  {
    initialRouteName: 'LoadingAthu',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(app)