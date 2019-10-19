import { createStackNavigator } from "react-navigation-stack";
import Home from "./home";
import CreateCourse from '../createCourse'
export default createStackNavigator(
  { Home,CreateCourse },
  {
    initialRouteName: "Home"
  }
);
