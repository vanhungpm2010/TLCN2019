import { createStackNavigator } from "react-navigation-stack";
import Lesson from "./lesson";
import DetailLesson from "../getLesson";


export default createStackNavigator(
  { Lesson,DetailLesson},
  {
    initialRouteName: "Lesson"
  }
);
