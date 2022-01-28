import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import ComponentsScreen from "./src/screens/ComponentsScreen.js";
import ListScreen from "./src/screens/ListScreen.js";
import ImageScreen from "./src/screens/ImageScreen.js";
import CounterScreen from "./src/screens/CounterScreen.js";
import ColorScreen from "./src/screens/ColorScreen.js";
import SquareScreen from "./src/screens/SquareScreen.js";
import FlexScreen from "./src/screens/FlexScreen";
import TextScreen from "./src/screens/TextScreen.js";
import BoxScreen from "./src/screens/BoxScreen.js";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    flex: FlexScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
