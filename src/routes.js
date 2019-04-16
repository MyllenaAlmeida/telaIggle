import { createAppContainer, createStackNavigator } from "react-navigation";
import Signup from "./pages/signup";

const AppNavigator = createStackNavigator(
  {Signup}, {
      navigationOptions: {
      headerStyle: { backgroundColor: "#3CB371" },
      headerTintColor: "#FFF"
    },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;