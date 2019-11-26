import { createStackNavigator } from "react-navigation-stack";
import Lesson from "./lesson";


export default createStackNavigator(
  { Lesson},
  {
    initialRouteName: "Lesson"
  }
);
