import { createStackNavigator } from "react-navigation-stack";
import Drawer from "./drawerNavigator";
import Login from "../../screens/login";
import SignUp from "../../screens/register";
import LoadingAthu from "../../screens/loadingAthu";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
const config = {
  mode: "modal",
  headerMode: "none"
};
const Main = createStackNavigator({ Drawer }, config);
const Auth = createStackNavigator({ Login, SignUp });
const app = createSwitchNavigator(
  {
    LoadingAthu,
    Main,
    Auth
  },
  {
    initialRouteName: "LoadingAthu",
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(app);
