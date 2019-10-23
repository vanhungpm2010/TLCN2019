import { createStackNavigator } from "react-navigation-stack";
import Home from "./home";
import CreateCourse from '../createCourse'
import StudyToTopic from '../studyToTopic'
export default createStackNavigator(
  { Home,CreateCourse,StudyToTopic },
  {
    initialRouteName: "Home"
  }
);
